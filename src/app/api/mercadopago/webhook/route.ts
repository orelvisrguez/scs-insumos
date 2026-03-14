import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const topic = body.topic || body.type;

    if (topic === 'payment') {
      const paymentId = body.id;
      
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      });
      
      const payment = await response.json();
      
      if (payment.status === 'approved') {
        await prisma.order.updateMany({
          where: { preferenceId: payment.external_reference },
          data: { status: 'PAID', mercadopagoId: String(paymentId) },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}