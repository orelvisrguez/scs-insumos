import LandingHeader from '@/components/LandingHeader';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';
import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHeader />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image1.avif"
            alt="Fondo SCS Insumos"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6 border border-white/30">
                <span className="text-2xl">🚚</span>
                <span className="font-medium">Envíos a todo el país</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                SCS Insumos
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-light">
                Todo en insumos escolares y de oficina
              </p>
              
              <p className="text-lg text-blue-200 mb-10 max-w-xl leading-relaxed">
                Encontrá papelería, artículos escolares y de oficina para el día a día. 
                Comprá fácil desde nuestra tienda online y recibí tu pedido con envíos personalizados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/tienda" 
                  className="bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-xl text-center"
                >
                  Comprar ahora
                </Link>
                <Link 
                  href="#contacto" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Consultar
                </Link>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">📚</div>
                    <h3 className="font-bold text-xl text-white mb-2">Artículos Escolares</h3>
                    <p className="text-blue-200 text-sm">Todo para el cole</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">📎</div>
                    <h3 className="font-bold text-xl text-white mb-2">Oficina</h3>
                    <p className="text-blue-200 text-sm">Organización total</p>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">✏️</div>
                    <h3 className="font-bold text-xl text-white mb-2">Escritura</h3>
                    <p className="text-blue-200 text-sm">Bolígrafos y más</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div className="text-5xl mb-4">📄</div>
                    <h3 className="font-bold text-xl text-white mb-2">Papelería</h3>
                    <p className="text-blue-200 text-sm">Papers y blocks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">anned our commitment to quality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Envíos a todo el país</h3>
              <p className="text-gray-600 leading-relaxed">
                Envíos personalizados y tarifa plana en Capital Federal. 
                Recibí tus insumos en la puerta de tu casa.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🎒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kits Escolares</h3>
              <p className="text-gray-600 leading-relaxed">
                Simplificá el inicio de clases con nuestros kits armados. 
                Prácticos, completos y pensados para ahorrar tiempo.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Búsqueda a pedido</h3>
              <p className="text-gray-600 leading-relaxed">
                ¿Necesitás algo en particular? Nos encargamos de buscarlo y cotizarlo 
                para vos con atención personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra Tienda
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontrá los mejores productos para tu escritorio, oficina o escuela
            </p>
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

          <div className="text-center mt-12">
            <Link 
              href="/tienda" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Conoce nuestro compromiso
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Somos Silvia y Claudio, una pareja de emprendedores apasionados 
                por los artículos de librería.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                SCS Insumos nació a partir de las ganas de crear un proyecto propio, 
                cercano y confiable, donde cada cliente se sienta acompañado en su compra.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Empezamos este camino con una idea clara: ofrecer insumos escolares 
                y de oficina de calidad, con una atención personalizada y soluciones 
                reales para cada necesidad.
              </p>
              <Link 
                href="/tienda" 
                className="inline-block bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Ver productos
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="font-bold text-xl">Amplia variedad</h3>
                <p className="text-sm text-gray-400 mt-2">Miles de productos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-bold text-xl">Precios justos</h3>
                <p className="text-sm text-gray-400 mt-2">Sin sorpresas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="font-bold text-xl">Delivery</h3>
                <p className="text-sm text-gray-400 mt-2">A todo el país</p>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="font-bold text-xl">Atención</h3>
                <p className="text-sm text-gray-400 mt-2">Personalizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Request Section - Sorprendente */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image3.avif"
            alt="Búsqueda de productos"
            fill
            className="object-cover"
            priority
          />
          {/* Multiple gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-900/85 to-purple-950/90"></div>
          
          {/* Animated particles/dots */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating elements decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-medium text-sm">Servicio exclusivo</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                ¿Necesitás algo
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">en particular?</span>
              </h2>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Nosotros lo conseguimos
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Si no ves el producto que estás buscando, escribinos. 
                Nos encargamos de buscarlo y cotizarlo para vos, con la 
                misma atención personalizada que nos caracteriza.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5491135833609" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <span className="text-2xl">💬</span>
                  Consultar ahora
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">Éxito en búsquedas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24h</div>
                  <div className="text-sm text-gray-400">Tiempo promedio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">∞</div>
                  <div className="text-sm text-gray-400">Variedad</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block relative">
              <div className="relative w-full aspect-square">
                {/* Main card */}
                <div className="absolute inset-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="h-full flex flex-col justify-center items-center text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-2xl">
                      <span className="text-6xl">🔍</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Búsqueda Personalizada</h4>
                    <p className="text-gray-300">Te cotizamos en menos de 24hs</p>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">¡Lo encontramos!</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-xl">📦</span>
                    </div>
                    <span className="text-white font-medium">Lo importamos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section - Mejorado */}
      <section id="contacto" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image2.avif"
            alt="Contacto SCS Insumos"
            fill
            className="object-cover"
            priority
          />
          {/* Multiple gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-blue-900/85 to-indigo-950/90"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-green-400/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/3 left-20 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-sm text-white">Comunicación directa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactános
            </h2>
            <p className="text-xl text-gray-300">
              Estamos listos para ayudarte con tu próxima compra
            </p>
          </div>

          {/* Main Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/5491135833609" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-green-500/30 transition-shadow">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-4">+54 11 3583 3609</p>
                <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-xl font-bold text-sm group-hover:bg-green-400 transition-colors">
                  Escribinos
                </span>
              </div>
            </a>
            
            {/* Email Card */}
            <a 
              href="mailto:scsinsumos@gmail.com"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Email</h3>
                <p className="text-gray-300 mb-4">scsinsumos@gmail.com</p>
                <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm group-hover:bg-blue-500 transition-colors">
                  Enviar email
                </span>
              </div>
            </a>
            
            {/* Horarios Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">Horarios</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">Lunes a Viernes</p>
                  <p className="text-white font-semibold">9:00 - 18:00</p>
                  <p className="text-gray-300 mt-3">Sábados</p>
                  <p className="text-white font-semibold">9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            {/* Instagram Card */}
            <a 
              href="https://instagram.com/scsinsumos"
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-pink-500/30 transition-shadow flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Instagram</h3>
                <p className="text-gray-400 text-sm">@scsinsumos</p>
              </div>
            </a>
            
            {/* Facebook Card */}
            <a 
              href="https://facebook.com/scsinsumos"
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow flex-shrink-0">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Facebook</h3>
                <p className="text-gray-400 text-sm">SCS Insumos</p>
              </div>
            </a>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"></div>
              <p className="text-gray-300 text-lg">¿No encontraste lo que buscas?</p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-20"></div>
            </div>
            <a 
              href="https://wa.me/5491135833609" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-indigo-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <span className="text-2xl">💬</span>
              Consultar por productos
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold">SCS Insumos</span>
              </div>
              <p className="text-gray-400">
                Tu tienda de confianza para insumos escolares y de oficina.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Enlaces rápidos</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/tienda" className="hover:text-white transition-colors">Tienda</Link></li>
                <li><Link href="#nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Categorías</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/tienda?category=Escritura" className="hover:text-white transition-colors">Escritura</Link></li>
                <li><Link href="/tienda?category=Oficina" className="hover:text-white transition-colors">Oficina</Link></li>
                <li><Link href="/tienda?category=Papel" className="hover:text-white transition-colors">Papelería</Link></li>
                <li><Link href="/tienda?category=Arte" className="hover:text-white transition-colors">Arte</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📱</span> +54 11 3583 3609
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span> scsinsumos@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span> Buenos Aires, Argentina
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-10 text-center text-gray-400">
            <p>&copy; 2026 SCS Insumos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}