"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    growi: {
      pay: (opts: {
        wallet: string;
        amount: number;
        token?: string;
        influencerId?: string;
        campaignId?: string;
        onSuccess?: (txHash: string) => void;
      }) => void;
    };
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      imagen: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop",
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
        influencerId: "cmmnpcl9a0001qg0z43ojv7hj",
        campaignId: "cmlcg2vle000094id2ejtoagk",
        onSuccess: (txHash) => {
          console.log(`Pedido de ${producto.nombre} pagado. TX: ${txHash}`);
        },
      });
    } else {
      console.error("El sistema de pago no está disponible aún.");
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fdf8f0" }}>

      {/* ── HEADER ─────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.35s ease",
          padding: scrolled ? "0.75rem 0" : "1.5rem 0",
          background: scrolled
            ? "rgba(39, 15, 4, 0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 42, height: 42, background: "#d97706", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(217,119,6,0.5)", fontSize: "1.25rem" }}>☕</div>
            <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "white", letterSpacing: "0.02em", margin: 0 }}>Café Aroma</h1>
          </div>
          <nav style={{ display: "flex", gap: "2.5rem" }}>
            {[["#inicio", "Inicio"], ["#menu", "Menú"], ["#nosotros", "Nosotros"], ["#contacto", "Contacto"]].map(([href, label]) => (
              <a key={href} href={href} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fbbf24")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────── */}
      <section id="inicio" style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(39,15,4,0.9) 100%)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1.5rem", maxWidth: 860, marginTop: "5rem" }}>
          <span style={{ display: "block", color: "#fbbf24", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Experiencia Artesanal
          </span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, color: "white", marginBottom: "1.75rem", lineHeight: 1.15, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            El Arte del{" "}
            <em style={{ color: "#fbbf24", fontStyle: "italic" }}>Café Perfecto</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.125rem", marginBottom: "2.75rem", maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.8, fontWeight: 300 }}>
            Disfruta de nuestros cafés artesanales preparados con pasión. Cada taza cuenta una historia elaborada desde los mejores granos seleccionados a mano.
          </p>
          <a
            href="#menu"
            style={{ display: "inline-block", background: "#d97706", color: "white", padding: "1rem 2.5rem", borderRadius: 9999, fontSize: "1rem", fontWeight: 600, textDecoration: "none", transition: "all 0.3s", boxShadow: "0 0 30px rgba(217,119,6,0.5)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#b45309"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#d97706"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Descubrir el Menú
          </a>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────── */}
      <section id="nosotros" style={{ padding: "6rem 0", background: "#fffbeb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div style={{ position: "relative", height: 560, borderRadius: "2.5rem", overflow: "hidden", boxShadow: "0 30px 60px rgba(39,15,4,0.18)" }}>
              <Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=1200&fit=crop" alt="Interior del café" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span style={{ display: "block", color: "#d97706", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Nuestra Historia</span>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#451a03", marginBottom: "1.25rem", lineHeight: 1.2 }}>
                Tradición y pasión en cada gota
              </h3>
              <div style={{ width: "5rem", height: 4, background: "#f59e0b", borderRadius: 9999, marginBottom: "2rem" }} />
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Desde 2015, Café Aroma ha sido el punto de encuentro favorito para los amantes del café en nuestra ciudad. Seleccionamos cuidadosamente granos de las mejores fincas de Colombia y Etiopía.
              </p>
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                Nuestros baristas expertos preparan cada bebida con dedicación, asegurando que cada visita sea una experiencia memorable.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
                {[["9+", "Años de exp."], ["50k", "Clientes"], ["15", "Orígenes"]].map(([num, label]) => (
                  <div key={label} style={{ borderLeft: "4px solid #fcd34d", paddingLeft: "1.25rem" }}>
                    <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "2.25rem", fontWeight: 800, color: "#451a03", lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, color: "#6b7280", marginTop: "0.5rem" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENU ───────────────────────────────────── */}
      <section id="menu" style={{ padding: "6rem 0", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 5rem" }}>
            <span style={{ display: "block", color: "#d97706", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Selección Especial</span>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#451a03", marginBottom: "1.25rem" }}>
              Menú Artesanal
            </h3>
            <div style={{ width: "5rem", height: 4, background: "#f59e0b", borderRadius: 9999, margin: "0 auto 1.5rem" }} />
            <p style={{ color: "#6b7280", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Descubre nuestras especialidades preparadas con amor y servidas con excelencia para deleitar tus sentidos.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {productos.map((producto, index) => (
              <div
                key={index}
                style={{ background: "white", borderRadius: "1.75rem", overflow: "hidden", border: "1px solid rgba(217,119,6,0.12)", boxShadow: "0 8px 30px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", transition: "all 0.4s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 25px 50px rgba(217,119,6,0.14)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)"; }}
              >
                <div style={{ position: "relative", height: 264, overflow: "hidden" }}>
                  <Image src={producto.imagen} alt={producto.nombre} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", color: "#78350f", fontWeight: 700, fontSize: "0.95rem", padding: "0.4rem 1rem", borderRadius: 9999, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    {producto.precio}
                  </div>
                </div>
                <div style={{ padding: "1.5rem 1.75rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#451a03", marginBottom: "0.6rem" }}>
                    {producto.nombre}
                  </h4>
                  <p style={{ color: "#6b7280", fontSize: "0.9rem", lineHeight: 1.65, flex: 1, marginBottom: "1.5rem" }}>
                    {producto.descripcion}
                  </p>
                  <button
                    onClick={() => handleOrdenar(producto)}
                    style={{ width: "100%", padding: "0.875rem", borderRadius: "0.875rem", background: "#fffbeb", color: "#78350f", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, border: "2px solid #fde68a", cursor: "pointer", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#d97706"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#d97706"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#fffbeb"; e.currentTarget.style.color = "#78350f"; e.currentTarget.style.borderColor = "#fde68a"; }}
                  >
                    Ordenar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <section style={{ padding: "6rem 0", background: "#451a03", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -150, right: -150, width: 500, height: 500, background: "rgba(120,53,15,0.5)", borderRadius: "50%", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: -150, left: -150, width: 500, height: 500, background: "rgba(39,15,4,0.6)", borderRadius: "50%", filter: "blur(100px)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ display: "block", color: "#f59e0b", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Testimonios</span>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "1.5rem" }}>
              Lo que dicen nuestros clientes
            </h3>
            <div style={{ width: "5rem", height: 4, background: "#d97706", borderRadius: 9999, margin: "0 auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { nombre: "María González", comentario: "El mejor café de la ciudad. El ambiente es acogedor y el personal siempre amable y atento con los detalles.", rol: "Cliente Frecuente", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
              { nombre: "Carlos Ramírez", comentario: "Sus pasteles son increíbles y su espresso tiene un balance perfecto. Vengo cada mañana antes del trabajo.", rol: "Amante del Café", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
              { nombre: "Ana Martínez", comentario: "Perfecto para trabajar o reunirse con amigos. WiFi rápido, diseño hermoso y excelente café. ¡Lo recomiendo!", rol: "Freelancer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
            ].map((t, i) => (
              <div key={i} style={{ background: "rgba(120,53,15,0.28)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2rem", padding: "2.25rem 2rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.5rem" }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#fbbf24", fontSize: "1.1rem" }}>★</span>)}
                </div>
                <p style={{ color: "rgba(255,251,235,0.87)", fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem" }}>
                  `{t.comentario}`
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Image src={t.avatar} alt={t.nombre} width={52} height={52} style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(217,119,6,0.4)", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontWeight: 700, color: "white", fontSize: "0.95rem" }}>{t.nombre}</p>
                    <p style={{ color: "#f59e0b", fontSize: "0.8rem", marginTop: "0.2rem" }}>{t.rol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────── */}
      <section id="contacto" style={{ padding: "6rem 0", background: "#fffbeb" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ background: "white", borderRadius: "3rem", overflow: "hidden", boxShadow: "0 25px 60px rgba(217,119,6,0.08)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Info */}
            <div style={{ padding: "3.5rem 4rem" }}>
              <span style={{ display: "block", color: "#d97706", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Contacto</span>
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#451a03", marginBottom: "1rem" }}>
                ¿Listo para un buen café?
              </h3>
              <p style={{ color: "#6b7280", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Visítanos en nuestra ubicación o contáctanos para eventos y reservas especiales.
              </p>
              {[
                { icon: "📍", label: "Dirección", value: "Av. Principal 123, Barrio El Centro" },
                { icon: "⏰", label: "Horario", value: "Lun–Vie: 7:00 AM – 9:00 PM\nSáb–Dom: 8:00 AM – 10:00 PM" },
                { icon: "📞", label: "Teléfono", value: "+1 (555) 123-4567" },
                { icon: "✉️", label: "Email", value: "hola@cafearoma.com" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "1.75rem" }}>
                  <div style={{ width: 52, height: 52, background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: "#451a03", fontSize: "1rem", marginBottom: "0.35rem" }}>{label}</p>
                    <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 1.65, whiteSpace: "pre-line" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Newsletter */}
            <div style={{ background: "#78350f", padding: "3.5rem 4rem", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, background: "rgba(120,53,15,0.5)", borderRadius: "50%", filter: "blur(70px)" }} />
              <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", fontWeight: 800, color: "white", marginBottom: "1rem", position: "relative", zIndex: 2 }}>
                Únete al Club Aroma
              </h3>
              <p style={{ color: "rgba(254,243,199,0.8)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", position: "relative", zIndex: 2 }}>
                Suscríbete para recibir un 15% de descuento en tu próxima visita y enterarte primero de nuestras novedades.
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative", zIndex: 2 }}
                onSubmit={(e) => { e.preventDefault(); alert("¡Gracias por suscribirte!"); }}>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                  style={{ width: "100%", padding: "1.1rem 1.5rem", borderRadius: "1rem", border: "none", background: "white", color: "#451a03", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "1rem", outline: "none" }}
                />
                <button
                  type="submit"
                  style={{ width: "100%", padding: "1.1rem", borderRadius: "1rem", background: "#f59e0b", color: "#451a03", fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "1rem", fontWeight: 700, border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#fbbf24"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#f59e0b"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer style={{ background: "#1c0a00", padding: "4rem 0 2rem", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: 48, height: 48, background: "#451a03", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>☕</div>
              <span style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "1.75rem", fontWeight: 700, color: "white" }}>Café Aroma</span>
            </div>
            <div style={{ display: "flex", gap: "2.5rem" }}>
              {[["#inicio", "Inicio"], ["#nosotros", "Nosotros"], ["#menu", "Menú"], ["#contacto", "Contacto"]].map(([href, label]) => (
                <a key={href} href={href} style={{ color: "rgba(217,119,6,0.6)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f59e0b")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(217,119,6,0.6)")}
                >{label}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.85rem", color: "rgba(217,119,6,0.45)" }}>© {new Date().getFullYear()} Café Aroma. Todos los derechos reservados.</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(217,119,6,0.45)", display: "flex", alignItems: "center", gap: "0.4rem" }}>Hecho con <span style={{ color: "#ef4444" }}>❤</span> y mucho café</p>
          </div>
        </div>
      </footer>
    </div>
  );
}