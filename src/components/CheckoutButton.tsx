'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface CheckoutButtonProps {
  items: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
  }>;
}

export default function CheckoutButton({ items }: CheckoutButtonProps) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleCheckout = async () => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/mercadopago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      if (response.status === 401) {
        router.push('/auth/signin');
        return;
      }

      const data = await response.json();
      console.log('Response:', data);

      if (!response.ok) {
        setError(data.error + (data.details ? ` (${data.details})` : ''));
        return;
      }

      if (data.initPoint) {
        window.location.href = data.initPoint;
      }
    } catch {
      setError('Failed to initiate checkout');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <button disabled className="bg-blue-400 text-white px-6 py-3 rounded-lg">
        Loading...
      </button>
    );
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? 'Processing...' : session ? 'Pay with Mercado Pago' : 'Login to Pay'}
    </button>
  );
}