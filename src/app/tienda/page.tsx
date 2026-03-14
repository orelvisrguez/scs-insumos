import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import LandingHeader from '@/components/LandingHeader';

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LandingHeader />

      <main className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Catálogo de Productos</h1>
          <p className="mt-2 text-gray-600">Encontrá los mejores insumos de oficina y escolar</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProductList />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Cart />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 SCS Insumos. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}