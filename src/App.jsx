import { useState } from "react";

const asset = (name) => `/assets/${name}`;

const navItems = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const pillars = [
  "Inspiración",
  "Experiencia profesional",
  "Coaching",
  "Mentorías",
];

const audienceCards = [
  { title: "Emprendedores", icon: "fas fa-user-friends" },
  { title: "Líderes", icon: "fas fa-child" },
  { title: "Empresarios", icon: "fas fa-child" },
  { title: "Inmobiliarios", icon: "fas fa-home" },
];

const team = [
  {
    name: "Laura Bocardo, MC, CDMX",
    role: "Neurosemantics Master Coach & Trainer",
    image: "coach-laura.png",
  },
  {
    name: "Miriam Chepillo, Santiago de Chile",
    role: "Coach Ontológico",
    image: "coach-miriam.png",
  },
];

const courses = [
  {
    title: "Curso Planeado mi 2026",
    text: "Estrategias para mejorar, ordenar tus prioridades y alcanzar tus metas en este 2026.",
    image: "course-2026.jpeg",
    href: "https://learning.becomehigherhuman.com/products/courses/BHH",
    alineacionIImg: "Derecha",
    background: "",
  },
  {
    title: "Humilde y Comprometid@ pero También Atrevid@",
    text: "El equilibrio entre humildad y compromiso como atrevimiento para dejar huella.",
    image: "course-atrevido.jpeg",
    href: "https://wa.me/524492810359",
    alineacionIImg: "Derecha",
    background: "color-white",
  },
  {
    title: "Curso No Limits. Para Líderes y emprendedores",
    text: "",
    image: "course-nolimits.webp",
    href: "https://learning.becomehigherhuman.com/products/courses/BHH",
    alineacionIImg: "Izquierda",
    background: "",
  },
  {
    title: "Curso Xq si y xq No",
    text: "Una masterclass para decidir qué acercar, qué soltar y cómo alinear acciones con objetivos.",
    image: "course-xq.png",
    href: "https://learning.becomehigherhuman.com/products/courses/BHH",
    alineacionIImg: "Izquierda",
    background: "",
  },
];

const noLimitsModules = [
  {
    id: 1,
    title: "Módulo 1",
    subtitle: "ConoSIENDOme",
    text: "Es un módulo donde nos enfocaremos en nosotros mismos para generar un profundo autoconocimiento, deteniéndonos a hacer una revisión profunda de quiénes somos, qué anhelamos y hacia dónde queremos ir.",
  },
  {
    id: 2,
    title: "Módulo 2",
    subtitle: "Confianza",
    text: "La confianza es la esperanza firme que una persona tiene de que algo suceda, por ello buscaremos en qué punto es donde tenemos que estar para adquirir esa esperanza con firmeza y por ende, con mucha fuerza para lograr nuestros objetivos.",
  },
  {
    id: 3,
    title: "Módulo 3",
    subtitle: "Claridad",
    text: "Al ir en búsqueda de fuerza es importante tener la claridad del camino que deseamos recorrer, comenzando desde la definición de nuestro punto de partida hasta la definición del punto donde queremos estar. De ahí, comenzar el diseño de nuestro mapa individual y lograr entrar en acción con la mayor convicción y fuerza posible.",
  },
  {
    id: 4,
    title: "Módulo 4",
    subtitle: "Responsabilidad",
    text: "Debemos aprender a responder ante lo que buscamos lograr, tomar las riendas de nuestra vida y comenzar a avanzar desde lo que somos capaces de lograr, aprendiendo a medir nuestros propios resultados y continuar a la mejora constante.",
  },
  {
    id: 5,
    title: "Módulo 5",
    subtitle: "Estructura",
    text: "Una vez teniendo las herramientas mencionadas anteriormente, es necesario crear nuestro mapa de crecimiento. Este proceso implica la construcción de una estructura que nos llevará a lograr nuestros objetivos, al tiempo que nos guíe hacia la realización de nuestro propósito de vida...",
  },
  {
    id: 6,
    title: "Módulo 6",
    subtitle: "¡Hazlo Ya!",
    text: "Si sólo analizamos y nos capacitamos, difícilmente lograremos llegar a nuestra situación deseada. Por ello la importancia de TOMAR ACCIÓN, de atrevernos y de lograr lo que se pueda, paso a paso, pero siempre hacia adelante.",
  },
  {
    id: 7,
    title: "Módulo 7",
    subtitle: "Comparte tu fuego interior",
    text: "Para que los resultados tengan impacto y nos lleven al mayor crecimiento, sí o sí es necesario ponerlos al servicio de los demás. Una tienda sin clientes no es tienda y viceversa...",
  },
  {
    id: 8,
    title: "Módulo 8",
    subtitle: "Cree - Sé",
    text: "Cuando descubrimos nuestro propósito, descubrimos la autenticidad de nuestro ser, ahí justamente donde crecemos, desde esa conexión con nuestro ser. En este módulo afianzaremos esa conexión para que nada nos frene...",
  },
];

const modules = [
  [
    "ConoSIENDOme",
    "Autoconocimiento profundo para revisar quiénes somos, qué anhelamos y hacia dónde queremos ir.",
  ],
  [
    "Confianza",
    "Esperanza firme y fuerza interna para avanzar hacia objetivos importantes.",
  ],
  [
    "Claridad",
    "Definición del punto de partida, del destino y del mapa individual de acción.",
  ],
  [
    "Responsabilidad",
    "Tomar las riendas, medir resultados propios y sostener una mejora constante.",
  ],
  [
    "Estructura",
    "Herramientas e indicadores para construir el mapa de crecimiento personal.",
  ],
  [
    "¡Hazlo Ya!",
    "Pasar del análisis a la acción con pasos concretos y sostenidos.",
  ],
  [
    "Comparte tu fuego interior",
    "Poner los resultados al servicio de los demás y hacer visible tu propuesta.",
  ],
  [
    "Cree - Sé",
    "Afianzar la conexión con el propósito para crecer desde la autenticidad.",
  ],
];

const testimonials = [
  "Lo que más me movió fue el enfoque con el que se abordaron los temas y la posibilidad de tener a 3 coaches junto a ti acompañándote en el proceso.",
  "Que independientemente del estado en que te encuentres, este taller te impulsa a crecer exponencialmente personal y profesionalmente.",
  "La profundidad y sencillez con que se abordan los temas lo cual permite un trabajo con enfoque claro.",
  "Una experiencia increíble que me ayudó a conocerme más a fondo y a darme cuenta de que es lo que realmente quiero lograr.",
  "Este taller ha sido una experiencia verdaderamente impactante en mi viaje de crecimiento personal y motivación para la acción.",
  "Sin duda todo 'es justo y perfecto' BHH llegó a mi en el momento que tenía que llegar.",
  "Es un excelente taller que te permite explorar, analizar y cuestionar de manera positiva el por qué de tus acciones.",
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="BHH Home">
        <img src={asset("logo-mark.png")} alt="BHH" />
      </a>
      <nav aria-label="Principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button className="menu-toggle" type="button" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img
          className="hero-logo"
          src={asset("logo-wide.png")}
          alt="Become Higher Human"
        />
        <p>Conecta con tu inspiración y descubre el poder de tu potencial.</p>
        <div className="actions">
          <a
            className="button primary"
            href="https://wa.me/524492810359"
            target="_blank"
            rel="noreferrer"
          >
            Contacto
          </a>
          <a className="button ghost" href="#modulos">
            Ver más
          </a>
        </div>
        <ul className="pill-list">
          {pillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      </div>
      <div className="hero-person">
        <img src={asset("brenda-howard.png")} alt="Brenda Howard" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="nosotros">
      <div className="section-heading centered">
        <span>Conócenos</span>
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos un equipo de personas apasionadas por el crecimiento humano que
          busca el desarrollo de talentos, llevándolos a niveles no imaginados a
          través de dinámicas, reflexiones y ejercicios que impulsan a la acción
          para lograr que las cosas sucedan.
        </p>
      </div>

      <div className="split">
        <img
          className="image-card"
          src={asset("about-team.jpg")}
          alt="Equipo Become Higher Human"
        />
        <div>
          <h3>Misión</h3>
          <p>
            Proporcionar herramientas y experiencias profundas que inspiren a
            las personas a explorar su ser, descubrir nuevas posibilidades y
            liberar su máximo potencial a través de talleres, pláticas, retiros
            y sesiones de coaching.
          </p>
        </div>
      </div>

      <div className="split reverse">
        <div>
          <h3>Visión</h3>
          <p>
            Crear un movimiento de liderazgo transformacional que impacte a 1000
            líderes, emprendedores, inmobiliarios y empresarios que buscan
            transformar a otros a través de su propia transformación.
          </p>
        </div>
        <img
          className="image-card"
          src={asset("about-brenda.jpg")}
          alt="Sesión de coaching BHH"
        />
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section">
      <div className="section-heading centered">
        <h2>A Quién Vamos</h2>
        <p>
          Nuestro cliente principal es toda persona que sienta un fuego interno
          sabiendo que tiene todo el potencial para crecer, que sabe que puede,
          pero que el miedo a lo desconocido o el no saber cómo continuar lo ha
          frenado a atreverse e ir por más.
        </p>
      </div>
      <div className="audience-grid">
        {audienceCards.map((card) => (
          <article className="audience-card" key={card.title}>
            <div className="icon-dot" aria-hidden="true">
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

const founderCredentials = [
  "Mujer, apasionada de la vida, madre de 4 hijos.",
  "Broker y directora de la franquicia inmobiliaria REMAX 100 en Ags, México durante 10 años.",
  "Master coach integral, ontologica, ejecutiva, humanista y organizacional.",
  "Actualmente estudiando Licenciatura en Desarrollo Humano en Admon de empresas.",
  "Dirección de capacitación en AMEXME.",
  "Creadora del programa de alto rendimiento para Líderes, emprendedores y empresarios.",
  "Creadora de Become a Higher Human.",
  "Miembro de John Maxwell Team.",
  "Autora del libro: Divórciate de tus juicios.",
  "Fundadora y CEO de HOWARD corporativo inmobiliario, espacio de servicio y capacitación para profesionales inmobiliarios.",
];

function Founder() {
  return (
    <>
      <section className="section founder-section">
        <img
          src={asset("brenda-ceo.png")}
          alt="Brenda Howard, coach fundadora"
        />
        <div className="founder-copy">
          <span>Coach fundadora</span>
          <h2>Brenda Howard</h2>
          <p className="founder-title">CEO BHH</p>
          <ul className="founder-credentials">
            {founderCredentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-ceo">
        <p>
          Sin duda me considero una mujer puente: entre lo humano y lo
          profesional, entre lo espiritual y lo tangible, entre la vida real y
          el propósito profundo que todos buscamos.
        </p>
        <p>
          Crecí literal entre la tierra y las vacas, ese contacto con lo natural
          sembró en mí una sensibilidad única para acompañar procesos de
          transformación. Hoy, esa raíz se mezcla con años de experiencia en el
          mundo inmobiliario, la formación de líderes y el desarrollo de
          programas de crecimiento personal.
        </p>
        <p>
          Creo espacios donde las personas pueden reconectarse con lo esencial,
          despertar su autenticidad y atreverse a vivir con propósito. Desde mi
          programa Become a Higher Human, hasta cada evento o sesión que
          facilito, busco siempre lo mismo: que quien me escuche se sienta
          visto, retado y, sobre todo, acompañado.
        </p>
        <p>
          Soy una mujer que cree en el poder infinito que se logra desde volver
          a casa, sanar desde adentro y de construir realidades que estén
          alineadas con lo que somos en esencia. Si tú estás en ese camino, es
          muy probable que tengamos algo que compartir.
        </p>
      </section>
    </>
  );
}

function Team() {
  return (
    <section className="section compact" id="equipo">
      <div className="section-heading centered">
        <h2>Equipo</h2>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <article className="team-member" key={member.name}>
            <img src={asset(member.image)} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Courses() {
  const [activeModuleId, setActiveModuleId] = useState(null);
  const handleToggle = (id, e) => {
    e.preventDefault();
    setActiveModuleId(activeModuleId === id ? null : id);
  };

  return (
    <>
      {courses.map((course) => (
        <section
          className={`section courses-section ${course.background}`}
          id={"servicios" + course.title.replace(/\s+/g, "")}
          key={course.title}
        >
          <div className="section-heading centered"></div>
          <div className="courses-grid">
            {/* ALINEACIÓN IZQUIERDA */}
            {course.alineacionIImg === "Izquierda" ? (
              <article>
                {course.title === "Curso No Limits. Para Líderes y emprendedores" || course.title === "Curso Xq si y xq No" ? (<h3>{course.title}</h3>) : ""}
                <div className="course-card">
                  <div className="course-image-content">
                    <img src={asset(course.image)} alt={course.title} />
                    {course.title === "Curso No Limits. Para Líderes y emprendedores" ? 
                    <a
                      className="button primary small"
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inscríbete Hoy Mismo
                    </a>
                     : 
                    ""}
                  </div>
                  <div>
                    <p>{course.text}</p>

                    {/* INYECTAR ACORDEÓN SOLO SI ES CURSO NO LIMITS */}
                    {course.title ===
                      "Curso No Limits. Para Líderes y emprendedores" && (
                      <div className="course-accordion-container">
                        {noLimitsModules.map((modulo) => (
                          <details
                            key={modulo.id}
                            className="course-accordion-item"
                            open={activeModuleId === modulo.id}
                          >
                            <summary
                              className="course-accordion-header"
                              onClick={(e) => handleToggle(modulo.id, e)}
                            >
                              <span className="icon-arrow">▼</span>
                              <span>{modulo.title}</span>
                            </summary>
                            <div className="course-accordion-content">
                              <strong>{modulo.subtitle}</strong>
                              <p>{modulo.text}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    )}
                    {course.title === "Curso No Limits. Para Líderes y emprendedores" ? "" : <a
                      className="button primary small"
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inscríbete Hoy Mismo
                    </a>}
                  </div>
                </div>
              </article>
            ) : (
              /* ALINEACIÓN DERECHA */
              <article>
                {course.title === "Curso No Limits. Para Líderes y emprendedores" || course.title === "Curso Xq si y xq No" ? (<h3>{course.title}</h3>) : ""}
                <div className="course-card-derecha">
                  <div>
                    {course.title === "Curso No Limits. Para Líderes y emprendedores" || course.title === "Curso Xq si y xq No" ? "" : (<h3>{course.title}</h3>)}
                    <p>{course.text}</p>

                    {/* INYECTAR ACORDEÓN SOLO SI ES CURSO NO LIMITS */}
                    {course.title ===
                      "Curso No Limits. Para Líderes y emprendedores" && (
                      <div className="course-accordion-container">
                        {noLimitsModules.map((modulo) => (
                          <details
                            key={modulo.id}
                            className="course-accordion-item"
                            open={activeModuleId === modulo.id}
                          >
                            <summary
                              className="course-accordion-header"
                              onClick={(e) => handleToggle(modulo.id, e)}
                            >
                              <span className="icon-arrow">▼</span>
                              <span>{modulo.title}</span>
                            </summary>
                            <div className="course-accordion-content">
                              <strong>{modulo.subtitle}</strong>
                              <p>{modulo.text}</p>
                            </div>
                          </details>
                        ))}
                      </div>
                    )}

                    <a
                      className="button primary small"
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inscríbete Hoy Mismo
                    </a>
                  </div>
                  <div className="course-image-content">
                    <img src={asset(course.image)} alt={course.title} />
                  </div>
                </div>
              </article>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

function Modules() {
  return (
    <section className="section module-section" id="modulos">
      <div className="section-heading centered">
        <h2>Módulos BHH</h2>
      </div>
      <div className="module-grid">
        {modules.map(([title, text]) => (
          <article className="module-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = testimonials.length - 1;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? lastIndex : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === lastIndex ? 0 : current + 1));
  };

  return (
    <section className="section testimonials" id="testimonios">
      <div className="section-heading centered">
        <h2>Testimonios</h2>
      </div>

      <div className="testimonial-slider">
        <button
          className="testimonial-nav"
          type="button"
          aria-label="Testimonio anterior"
          onClick={goToPrevious}
        >
          ‹
        </button>

        <blockquote className="testimonial-slide">
          {testimonials[activeIndex]}
        </blockquote>

        <button
          className="testimonial-nav"
          type="button"
          aria-label="Siguiente testimonio"
          onClick={goToNext}
        >
          ›
        </button>
      </div>

      <div className="testimonial-dots" aria-label="Selector de testimonios">
        {testimonials.map((quote, index) => (
          <button
            key={quote}
            className={`testimonial-dot ${index === activeIndex ? "is-active" : ""}`}
            type="button"
            aria-label={`Ir al testimonio ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hola, quiero recibir información de los cursos BHH.",
      `Nombre: ${formData.get("name")}`,
      `Correo: ${formData.get("email")}`,
      `Teléfono: ${formData.get("phone")}`,
    ].join("\n");

    window.open(
      `https://wa.me/524492810359?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="contact-section" id="contacto">
      <img src={asset("brenda-howard.png")} alt="Brenda Howard" />
      <div className="contact-panel">
        <h2>Recibe información de los cursos</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
          />
          <input type="tel" name="phone" placeholder="Teléfono" required />
          <button type="submit">Recibir información</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={asset("logo-wide.png")} alt="Become Higher Human" />
      </div>
      <div>
        <h3>Contacto</h3>
        <a href="mailto:avivir@brendahoward.mx">avivir@brendahoward.mx</a>
        <a href="https://wa.me/524492810359" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
      <div>
        <h3>Cursos</h3>
        <a
          href="https://learning.becomehigherhuman.com/products/courses/BHH"
          target="_blank"
          rel="noreferrer"
        >
          BHH
        </a>
        <a
          href="https://learning.becomehigherhuman.com/products/courses/BHH"
          target="_blank"
          rel="noreferrer"
        >
          Planeando mi 2025
        </a>
        <a href="https://wa.me/524492810359" target="_blank" rel="noreferrer">
          ¿Porqué sí y porqué no?
        </a>
        <a href="https://wa.me/524492810359" target="_blank" rel="noreferrer">
          Vende sin vender
        </a>
        <a href="https://wa.me/524492810359" target="_blank" rel="noreferrer">
          Humilde y Comprometid@ pero también atrevid@
        </a>
      </div>
      <div>
        <h3>Síguenos</h3>
        <a
          href="https://www.instagram.com/becomehigherhuman/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/becomehigherhuman"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://t.me/becomehigherhuman"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </div>
      <p className="copyright">Copyright © 2026 BHH · Powered by BHH</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <Founder />
        <Team />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
