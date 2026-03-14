'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function LandingHeader() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/image4.avif"
                  alt="SCS Insumos Logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">SCS Insumos</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/tienda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Tienda
            </Link>
            <Link href="#nosotros" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {status === 'loading' ? (
              <span className="text-gray-500">Cargando...</span>
            ) : session ? (
              <div className="flex items-center gap-4">
                <Link 
                  href="/admin" 
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Panel Admin
                </Link>
                <button 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-gray-600 hover:text-red-600 text-sm"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <>
                <Link 
                  href="/auth/signin" 
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Iniciar sesión
                </Link>
                <Link 
                  href="/tienda" 
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Ver Tienda
                </Link>
              </>
            )}
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-700 font-medium py-2">Inicio</Link>
              <Link href="/tienda" className="text-gray-700 font-medium py-2">Tienda</Link>
              <Link href="#nosotros" className="text-gray-700 font-medium py-2">Nosotros</Link>
              <Link href="#contacto" className="text-gray-700 font-medium py-2">Contacto</Link>
              <hr className="my-2" />
              {session ? (
                <>
                  <Link href="/admin" className="text-blue-600 font-medium py-2">Panel Admin</Link>
                  <button onClick={() => signOut({ callbackUrl: '/' })} className="text-left text-gray-600 py-2">
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link href="/auth/signin" className="text-blue-600 font-medium py-2">
                  Iniciar sesión
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}