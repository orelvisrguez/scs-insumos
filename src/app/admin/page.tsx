import AdminLayout from '@/components/AdminLayout';
import { prisma } from '@/lib/prisma';
import { Order, User } from '@prisma/client';

async function getStats() {
  const [productCount, orderCount, userCount, pendingOrders] = await Promise.all([
    prisma.product.count(),
    prisma.order.count(),
    prisma.user.count(),
    prisma.order.count({ where: { status: 'PENDING' } }),
  ]);
  return { productCount, orderCount, userCount, pendingOrders };
}

async function getRecentOrders(): Promise<(Order & { user: Pick<User, 'name' | 'email'> | null })[]> {
  const orders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: {
      user: { select: { name: true, email: true } },
    },
  });
  return orders;
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentOrders = await getRecentOrders();

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Resumen de tu tienda</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/25">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium">Productos</p>
                <p className="text-3xl font-bold mt-1">{stats.productCount}</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-lg shadow-emerald-500/25">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-200 text-sm font-medium">Pedidos Totales</p>
                <p className="text-3xl font-bold mt-1">{stats.orderCount}</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 text-white shadow-lg shadow-amber-500/25">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-200 text-sm font-medium">Pendientes</p>
                <p className="text-3xl font-bold mt-1">{stats.pendingOrders}</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl p-6 text-white shadow-lg shadow-violet-500/25">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-violet-200 text-sm font-medium">Usuarios</p>
                <p className="text-3xl font-bold mt-1">{stats.userCount}</p>
              </div>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Acciones rápidas</h2>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="/admin/products/new"
                className="flex flex-col items-center justify-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Nuevo producto</span>
              </a>
              <a
                href="/admin/orders"
                className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Ver pedidos</span>
              </a>
              <a
                href="/admin/products"
                className="flex flex-col items-center justify-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Editar productos</span>
              </a>
              <a
                href="/"
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Ver tienda</span>
              </a>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Pedidos recientes</h2>
              <a href="/admin/orders" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Ver todos →
              </a>
            </div>
            
            {recentOrders.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-500">No hay pedidos aún</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-medium text-gray-900">
                        {order.user?.name || 'Cliente'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString('es-AR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        ${order.total.toLocaleString('es-AR')}
                      </p>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'PAID' ? 'bg-green-100 text-green-800' :
                        order.status === 'SHIPPED' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status === 'PENDING' && 'Pendiente'}
                        {order.status === 'PAID' && 'Pagado'}
                        {order.status === 'SHIPPED' && 'Enviado'}
                        {order.status === 'DELIVERED' && 'Entregado'}
                        {order.status === 'CANCELLED' && 'Cancelado'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}