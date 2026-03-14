'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, ReactNode } from 'react';

export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  return <>{children}</>;
}