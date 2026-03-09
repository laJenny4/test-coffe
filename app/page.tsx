"use client";
import Image from "next/image";

declare global {
  interface Window {
    growi: {
      pay: (opts: {
        wallet: string;
        amount: number;
        token?: string;
        onSuccess?: (txHash: string) => void;
      }) => void;
    };
  }
}

export default function Home() {
  const productos = [
    {
      nombre: "Espresso Clásico",
      descripcion: "Intenso y aromático, preparado con granos 100% arábica",
      precio: "$3.50",
      amount: 0.001,
      imagen: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop",
    },
    {
      nombre: "Cappuccino",
      descripcion: "Espresso con leche vaporizada y espuma cremosa",
      precio: "$4.50",
      amount: 0.002,
      imagen: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=400&fit=crop",
    },
    {
      nombre: "Latte Vainilla",
      descripcion: "Suave espresso con leche y jarabe de vainilla natural",
      precio: "$5.00",
      amount: 0.003,
      imagen: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=400&fit=crop",
    },
    {
      nombre: "Croissant",
      descripcion: "Horneado fresco cada mañana, mantequilla francesa",
      precio: "$3.00",
      amount: 0.001,
      imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    },
    {
      nombre: "Cheesecake",
      descripcion: "Cremoso pastel de queso con base de galleta",
      precio: "$4.50",
      amount: 0.002,
      imagen: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=400&fit=crop",
    },
    {
      nombre: "Americano",
      descripcion: "Espresso alargado con agua caliente",
      precio: "$3.00",
      amount: 0.001,
      imagen: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop",
    },
  ];

  const WALLET = "0xFD6bc81ca5e5b7bAFCE77D5F742AeAe9CE19b689";

  function handleOrdenar(producto: (typeof productos)[0]) {
    if (typeof window !== "undefined" && window.growi?.pay) {
      window.growi.pay({
        wallet: WALLET,
        amount: producto.amount,
        token: "AVAX",
        onSuccess: (txHash) => {
          console.log(`✅ Pedido de ${producto.nombre} pagado. TX: ${txHash}`);
          alert(`¡Pedido confirmado! TX: ${txHash}`);
        },
      });
    } else {
      alert("El sistema de pago no está disponible aún.");
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header/Nav */}
      <header className="bg-amber-900 text-amber-50 sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <h1 className="text-2xl font-playfair font-bold">Café Aroma</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#inicio" className="hover:text-amber-200 transition">Inicio</a>
              <a href="#menu" className="hover:text-amber-200 transition">Menú</a>
              <a href="#nosotros" className="hover:text-amber-200 transition">Nosotros</a>
              <a href="#contacto" className="hover:text-amber-200 transition">Contacto</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-6xl font-playfair font-bold mb-6">
            El Arte del Café Perfecto
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
            Disfruta de nuestros cafés artesanales preparados con pasión.
            Cada taza cuenta una historia.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Ver Menú
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-playfair font-bold text-amber-900 mb-6">
                Nuestra Historia
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4 font-inter">
                Desde 2015, Café Aroma ha sido el punto de encuentro favorito para los amantes del café en nuestra ciudad.
                Seleccionamos cuidadosamente granos de las mejores fincas de Colombia y Etiopía.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-inter">
                Nuestros baristas expertos preparan cada bebida con dedicación,
                asegurando que cada visita sea una experiencia memorable.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-amber-600">9</div>
                  <div className="text-gray-600 mt-2">Años</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-600">50k+</div>
                  <div className="text-gray-600 mt-2">Clientes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-amber-600">15</div>
                  <div className="text-gray-600 mt-2">Variedades</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=800&fit=crop"
                alt="Interior del café"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-playfair font-bold text-amber-900 mb-4">
              Nuestro Menú
            </h3>
            <p className="text-gray-600 text-lg font-inter">
              Descubre nuestras especialidades preparadas con amor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-2xl font-playfair font-bold text-amber-900">
                      {producto.nombre}
                    </h4>
                    <span className="text-2xl font-bold text-amber-600">
                      {producto.precio}
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter">
                    {producto.descripcion}
                  </p>
                  <button
                    onClick={() => handleOrdenar(producto)}
                    className="mt-4 w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-3 rounded-lg font-semibold transition"
                  >
                    Ordenar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-playfair font-bold text-center text-amber-900 mb-12">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: "María González",
                comentario: "El mejor café de la ciudad. El ambiente es acogedor y el personal siempre amable.",
                estrellas: 5,
              },
              {
                nombre: "Carlos Ramírez",
                comentario: "Sus pasteles son increíbles. Vengo cada mañana antes del trabajo.",
                estrellas: 5,
              },
              {
                nombre: "Ana Martínez",
                comentario: "Perfecto para trabajar o reunirse con amigos. WiFi rápido y excelente café.",
                estrellas: 5,
              },
            ].map((testimonio, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.estrellas)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic font-inter">
                  {testimonio.comentario}
                </p>
                <p className="font-semibold text-amber-900">
                  - {testimonio.nombre}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-amber-900 text-amber-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-playfair font-bold mb-6">
                Visítanos
              </h3>
              <div className="space-y-4 font-inter">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-amber-200">Av. Principal 123, Centro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-semibold">Horario</p>
                    <p className="text-amber-200">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                    <p className="text-amber-200">Sábado y Domingo: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-amber-200">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-amber-200">hola@cafearoma.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-playfair font-bold mb-6">
                Newsletter
              </h3>
              <p className="text-amber-200 mb-6 font-inter">
                Suscríbete para recibir ofertas especiales y novedades
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded-lg font-semibold transition">
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-8">
        <div className="container mx-auto px-6 text-center font-inter">
          <p>&copy; 2024 Café Aroma. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Hecho con ❤️ y mucho café</p>
        </div>
      </footer>
    </div>
  );
}