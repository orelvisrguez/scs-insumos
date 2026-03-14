import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '' 
});

const preference = new Preference(client);

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { items } = await request.json();
    console.log('Items:', items);

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      );
    }

    const total = items.reduce((sum: number, item: { price: number; quantity: number }) => {
      return sum + item.price * item.quantity;
    }, 0);

    console.log('Creating preference...');
    const result = await preference.create({
      body: {
        items: items.map((item: { id: string; title: string; price: number; quantity: number }) => ({
          id: item.id,
          title: item.title,
          unit_price: Number(item.price),
          quantity: Number(item.quantity),
          currency_id: 'ARS',
        })),
        external_reference: session.user.id,
        back_urls: {
          success: `${process.env.NEXTAUTH_URL}/checkout/success`,
          failure: `${process.env.NEXTAUTH_URL}/checkout/failure`,
          pending: `${process.env.NEXTAUTH_URL}/checkout/pending`,
        },
      },
    });
    console.log('Preference created:', result.id);

    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        total,
        preferenceId: result.id,
        status: 'PENDING',
      },
    });
    console.log('Order created:', order.id);

    for (const item of items) {
      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: null,
          productName: item.title,
          quantity: item.quantity,
          price: item.price,
        },
      });
    }

    return NextResponse.json({ preferenceId: result.id, initPoint: result.init_point });
  } catch (error) {
    console.error('Error completo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create payment preference', details: errorMessage },
      { status: 500 }
    );
  }
}