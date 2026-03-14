'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode } from 'react';

export function SearchParamsProvider({ children }: { children: ReactNode }) {
  useSearchParams();
  return <>{children}</>;
}