import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Calculator,
  CalendarCheck,
  Clock,
  Gauge,
  GraduationCap,
  Languages,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'
import '../App.css'
import heroEstudiantes from '../assets/hero-estudiantes.png'
import padresProgreso from '../assets/padres-progreso.png'

const site = {
  name: 'Academia de Alto Rendimiento',
  shortName: 'Alto Rendimiento',
  legalName: 'Academia de Alto Rendimiento Académico',
  city: 'Chaupimarca · Cerro de Pasco',
  address: 'Chaupimarca, Cerro de Pasco',
  // Reemplaza este número por el WhatsApp oficial de la academia.
  whatsappNumber: '51999999999',
  email: 'admision@academiaaltorendimiento.pe',
}

const navItems = [
  { label: 'Método', href: '#metodo' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Admisión', href: '#admision' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
]

const pillars = [
  {
    title: '📖 Lectura veloz con comprensión',
    copy: 'Entrenamiento guiado por voz, repetición y textos cronometrados. La velocidad sube solo si la comprensión se mantiene alta.',
    tags: ['1 hora al día', 'Comprensión ≥80%', 'Registro por sesión'],
    icon: BookOpen,
  },
  {
    title: '🫮 Agilidad matemática',
    copy: 'Entrenamiento diario por áreas: aritmética, álgebra, geometría, trigonometría y física, con niveles progresivos, cronómetro y exactitud medida.',
    tags: ['2 horas al día', 'Exactitud ≥90%', 'Niveles progresivos'],
    icon: Calculator,
  },
  {
    title: '🌍 Inglés gamificado',
    copy: 'Unidades cortas, rachas diarias, ligas entre aulas y premios mensuales para sostener la práctica fuera del aula.',
    tags: ['30 minutos al día', 'Rachas', 'Panel de maestro'],
    icon: Languages,
  },
  {
    title: '🤖 Programación y robótica',
    copy: 'Scratch, micro:bit, Python y Arduino según edad, con proyectos por trimestre y portafolio antes de la etapa pre.',
    tags: ['1 hora al día', 'Proyectos', 'Portafolio'],
    icon: Bot,
  },
  {
    title: '🎯 Ciclo preuniversitario',
    copy: 'Ciclo pre con clases, resolución guiada, simulacros cronometrados y análisis de errores por tema.',
    tags: ['San Marcos', 'UNI', 'Becas'],
    icon: GraduationCap,
  },
]

const process = [
  {
    title: 'Examen de admisión clasificatorio',
    copy: 'Mide lectura, repetición oral, aritmética, inglés y lógica. No excluye: ubica al estudiante en el nivel correcto.',
  },
  {
    title: 'Reporte en 24 horas',
    copy: 'Los padres reciben un diagnóstico con gráficos y plan inicial. Es la primera prueba visible del sistema.',
  },
  {
    title: 'Entrenamiento diario medido',
    copy: 'El docente enseña y el sistema registra ppm, exactitud, ejercicios por minuto, asistencia y comprensión.',
  },
  {
    title: 'Avance por dominio',
    copy: 'Cuando el estudiante domina un nivel, sube dificultad; si se estanca, el sistema alerta y el docente refuerza.',
  },
  {
    title: 'Reubicación trimestral',
    copy: 'Cada trimestre se reevalúa para cambiar de aula o nivel y mantener la progresión.',
  },
]

const levels = [
  {
    title: 'Fundamentos · 7–9',
    price: 'S/ 250',
    copy: 'Lectura veloz inicial, aritmética base, lógica y Scratch.',
    items: ['Meta: 150 ppm', 'S1–S4', 'Inglés inicial'],
    dark: false,
  },
  {
    title: 'Consolidación · 10–12',
    price: 'S/ 280',
    copy: 'Velocidad aplicada a textos informativos, 4 operaciones, inglés A1→A2 y micro:bit.',
    items: ['Meta: 280 ppm', 'S5–S7', 'Primer robot'],
    dark: true,
  },
  {
    title: 'Pre-pre · 13–15',
    price: 'S/ 300',
    copy: 'Matemática de secundaria con velocidad, inglés A2→B1, Python y Arduino.',
    items: ['300+ ppm', 'B1 en camino', '3 proyectos'],
    dark: false,
  },
  {
    title: 'Preuniversitario · 15–17',
    price: 'S/ 350',
    copy: 'Ciclo pre completo, simulacros quincenales y preparación para UNMSM, UNI y becas.',
    items: ['Simulacros', 'Ranking interno', 'Análisis de errores'],
    dark: false,
  },
]

const proofCards = [
  {
    title: 'Reporte de admisión',
    copy: 'El examen clasificatorio entrega a los padres un diagnóstico visual: ppm, comprensión, exactitud y nivel recomendado.',
    dark: false,
  },
  {
    title: 'Panel de progreso',
    copy: 'Cada semana se registra la curva de lectura y aritmética. La mejora se ve, no solo se promete.',
    dark: true,
  },
]

const faqs = [
  {
    q: '¿La academia es solo reforzamiento escolar?',
    a: 'No. El enfoque es entrenamiento de habilidades base —lectura veloz, agilidad aritmética, inglés, lógica y tecnología— con medición objetiva del progreso.',
  },
  {
    q: '¿El examen de admisión elimina estudiantes?',
    a: 'No. Sirve para ubicar al estudiante en el aula y nivel correctos, y para entregar a los padres un diagnóstico inicial.',
  },
  {
    q: '¿Cómo se demuestra el progreso?',
    a: 'Con datos: palabras por minuto, comprensión, ejercicios resueltos por minuto, exactitud, asistencia y reportes periódicos.',
  },
  {
    q: '¿Dónde quedan ubicados?',
    a: 'En Chaupimarca, Cerro de Pasco, y atendemos a familias de Yanacancha y zonas aledañas. Escríbenos por WhatsApp y te enviamos la ubicación exacta con indicaciones de cómo llegar.',
  },
]

function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function Home() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="hw-page">
      <header className="hw-topbar">
        <div className="hw-topbar__inner">
          <a className="hw-brand" href="#inicio" aria-label="Ir al inicio">
            <span className="hw-brand__mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L9 6l4 7 3-4 4 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h4l2-3 2 6 2-3h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="hw-brand__text">
              <strong>Alto Rendimiento</strong>
              <span>Academia · Cerro de Pasco</span>
            </span>
          </a>

          <nav className="hw-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <a className="hw-nav__cta" href={whatsappLink('Hola, quiero reservar el examen de admisión de mi hijo/a.')}>
            Examen de admisión <ArrowUpRight size={16} />
          </a>

          <button className="hw-mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="hw-mobile-panel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href={whatsappLink('Hola, quiero reservar el examen de admisión de mi hijo/a.')} onClick={() => setOpen(false)}>Examen de admisión</a>
        </div>
      )}

      <section id="inicio" className="hw-hero">
        <div className="hw-hero__inner">
          <div data-reveal>
            <p className="hw-eyebrow">Academia de alto rendimiento académico</p>
            <p className="hw-hero__pill">🔥 Cupo limitado: 15 estudiantes por aula</p>
            <h1>
              <span>Tu hijo</span>
              <span>puede ser</span>
              <span><em>el número 1</em></span>
              <span>de su aula.</span>
            </h1>
            <p className="hw-hero__copy">
              Entrenamiento medible en lectura veloz, agilidad matemática, inglés, programación y robótica para estudiantes de 7 a 17 años en Chaupimarca y Yanacancha, Cerro de Pasco.
            </p>
            <div className="hw-hero__actions">
              <a className="hw-button hw-button--accent" href={whatsappLink('Hola, quiero reservar el examen de admisión clasificatorio.')}>
                Reservar examen <CalendarCheck size={17} />
              </a>
              <a className="hw-button hw-button--ghost" href="#metodo" style={{ color: 'var(--cream)', borderColor: 'rgba(255,253,241,.28)' }}>
                Ver método <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="hw-hero__visual" data-reveal aria-label="Estudiantes de Cerro de Pasco entrenando en la academia">
            <img className="hw-hero__img" src={heroEstudiantes} alt="Niños de Chaupimarca y Yanacancha entrenando lectura veloz, matemáticas, inglés y tecnología" />
            <div className="hw-hero__chip">
              <strong>94%</strong>
              <span>de exactitud antes de subir de nivel</span>
            </div>
          </div>
        </div>
      </section>

      <div className="hw-marquee" aria-hidden="true">
        <div className="hw-marquee__track">
          {[0, 1].map((copy) => (
            <span key={copy}>Examen de admisión clasificatorio · Lectura veloz · Agilidad matemática · Inglés gamificado · Programación y robótica · Ruta UNMSM/UNI · Becas ·</span>
          ))}
        </div>
      </div>

      <section id="metodo" className="hw-section">
        <div className="hw-shell">
          <div className="hw-section__head" data-reveal>
            <div>
              <p className="hw-kicker">🎯 Método</p>
              <h2 className="hw-title">El maestro enseña. El sistema mide. El estudiante acelera.</h2>
            </div>
            <p className="hw-lead">
              La propuesta no es “reforzar”: es entrenar habilidades base con práctica deliberada, retroalimentación inmediata y dificultad progresiva.
            </p>
          </div>

          <div className="hw-services">
            {pillars.map((service, index) => {
              const Icon = service.icon
              return (
                <article className="hw-service" key={service.title} data-reveal>
                  <div className="hw-service__index">{String(index + 1).padStart(2, '0')}.</div>
                  <div>
                    <Icon size={22} aria-hidden="true" />
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                  <div className="hw-service__tags">
                    {service.tags.map((tag) => <span className="hw-tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="admision" className="hw-section hw-section--dark">
        <div className="hw-shell hw-split">
          <div className="hw-editorial" data-reveal>
            <p className="hw-kicker">📝 Admisión</p>
            <div className="hw-editorial__panel">
              <div>
                <strong>Cada estudiante entra con su nivel medido y sale con su plan.</strong>
                <span>El examen clasificatorio es pedagógico y comercial: ubica al alumno y muestra a los padres un diagnóstico claro desde el primer día.</span>
              </div>
            </div>
          </div>

          <div className="hw-steps">
            {process.map((step, index) => (
              <article className="hw-step" key={step.title} data-reveal>
                <div className="hw-step__num">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="niveles" className="hw-section hw-section--paper">
        <div className="hw-shell">
          <div className="hw-section__head" data-reveal>
            <div>
              <p className="hw-kicker">🚀 Niveles</p>
              <h2 className="hw-title">Ruta completa de 7 a 17 años.</h2>
            </div>
            <p className="hw-lead">Precios referenciales del plan maestro; ajustar según estudio local y promociones de lanzamiento.</p>
          </div>

          <div className="hw-cards">
            {levels.map((level) => (
              <article className={level.dark ? 'hw-card hw-card--dark' : 'hw-card'} key={level.title} data-reveal>
                <div>
                  <p className="hw-kicker" style={{ marginBottom: 10 }}>{level.price} / mes</p>
                  <h3>{level.title}</h3>
                  <p>{level.copy}</p>
                  <ul>
                    {level.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <a className={level.dark ? 'hw-button hw-button--light' : 'hw-button hw-button--accent'} href={whatsappLink(`Hola, quiero información del nivel ${level.title}.`)}>
                  Consultar <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resultados" className="hw-section">
        <div className="hw-shell">
          <div className="hw-section__head" data-reveal>
            <div>
              <p className="hw-kicker">📈 Resultados</p>
              <h2 className="hw-title">La mejora se muestra con datos.</h2>
            </div>
            <p className="hw-lead">Cada estudiante comienza con un diagnóstico inicial que revela su punto de partida. Sobre esa base se traza un plan de acción personalizado y una curva de progreso que se renueva con un diagnóstico cada fin de mes. Los resultados no quedan en nuestras aulas: usted los verá reflejados en el rendimiento de su hijo en su colegio y en los exámenes de su institución.</p>
          </div>

          <div className="hw-proof">
            {proofCards.map((card) => (
              <article className={card.dark ? 'hw-proof__card hw-proof__card--dark' : 'hw-proof__card'} key={card.title} data-reveal>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
                {card.dark ? (
                  <div className="hw-mini-report">
                    <div><b>Lectura</b><span className="bar"><i style={{ width: '82%' }} /></span><span>246 ppm</span></div>
                    <div><b>Exactitud</b><span className="bar"><i style={{ width: '94%' }} /></span><span>94%</span></div>
                    <div><b>Racha</b><span className="bar"><i style={{ width: '68%' }} /></span><span>21 días</span></div>
                  </div>
                ) : (
                  <a className="hw-button hw-button--dark" href={whatsappLink('Hola, quiero agendar el examen de admisión con reporte diagnóstico.')}>
                    Agendar diagnóstico <Gauge size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="hw-stats" data-reveal style={{ marginTop: 22 }}>
            <div className="hw-stat">
              <strong>15</strong>
              <span>Estudiantes máximo por aula.</span>
            </div>
            <div className="hw-stat">
              <strong>24 h</strong>
              <span>Para entregar el reporte del examen de admisión.</span>
            </div>
            <div className="hw-stat">
              <strong>3</strong>
              <span>Nuestros casos de éxito nos dan la autoridad de hacerlo.</span>
            </div>
            <div className="hw-stat">
              <strong>10 años</strong>
              <span>Años de ruta posible por estudiante: de fundamentos a preuniversitario.</span>
            </div>
          </div>

          <div className="hw-proof-visual" data-reveal>
            <img src={padresProgreso} alt="Padres de familia de Cerro de Pasco viendo el progreso semanal de su hijo en el celular" />
            <p>Así de claro lo verás tú: el progreso de tu hijo, semana a semana, en tu propio celular. 📲</p>
          </div>
        </div>
      </section>

      <section id="faq" className="hw-section hw-section--paper">
        <div className="hw-shell">
          <div className="hw-section__head" data-reveal>
            <div>
              <p className="hw-kicker">💬 FAQ</p>
              <h2 className="hw-title">Lo que un padre necesita saber antes de escribir.</h2>
            </div>
          </div>

          <div className="hw-faq">
            {faqs.map((faq) => (
              <details key={faq.q} data-reveal>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="hw-section">
        <div className="hw-shell hw-contact">
          <div className="hw-contact__panel" data-reveal>
            <p className="hw-kicker" style={{ color: 'var(--sage)' }}>📲 Admisión abierta</p>
            <h2>Reserva el examen y recibe el diagnóstico inicial.</h2>
            <p>
              Escríbenos por WhatsApp o correo para reservar el examen de admisión de tu hijo o hija. Te respondemos en horario de atención.
            </p>
            <div className="hw-hero__actions">
              <a className="hw-button hw-button--accent" href={whatsappLink('Hola, quiero reservar el examen de admisión clasificatorio para mi hijo/a.')}>
                Reservar por WhatsApp <MessageCircle size={17} />
              </a>
              <a className="hw-button hw-button--ghost" href={`mailto:${site.email}`} style={{ color: 'var(--cream)', borderColor: 'rgba(255,253,241,.28)' }}>
                Enviar correo <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="hw-contact__list" data-reveal>
            <div className="hw-contact__item">
              <span>Ubicación</span>
              <strong><MapPin size={16} style={{ verticalAlign: '-2px' }} /> {site.address}</strong>
            </div>
            <div className="hw-contact__item">
              <span>Cómo llegar</span>
              <a href="https://maps.google.com/?q=Chaupimarca,+Cerro+de+Pasco" target="_blank" rel="noreferrer">Ver en Google Maps <ArrowUpRight size={14} style={{ verticalAlign: '-2px' }} /></a>
            </div>
            <div className="hw-contact__item">
              <span>Horario sugerido</span>
              <strong><Clock size={16} style={{ verticalAlign: '-2px' }} /> Lun–Vie 3:00–7:00 p. m. · Sáb 9:00 a. m.–1:00 p. m.</strong>
            </div>
            <div className="hw-contact__item">
              <span>Correo</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="hw-contact__item">
              <span>Enfoque SEO</span>
              <strong>Academia en Cerro de Pasco · lectura veloz · matemática · inglés · tecnología · preuniversitario</strong>
            </div>
          </div>
        </div>
      </section>

      <a
        className="hw-whatsapp-fab"
        href={whatsappLink('Hola, vi la página de la academia y quiero información para mi hijo/a.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.12-.27-.2-.57-.35M12.04 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.5 3.49A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.05 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.54 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.16-3.42-8.42" />
        </svg>
      </a>

      <footer className="hw-footer">
        <div className="hw-footer__inner">
          <a className="hw-brand" href="#inicio">
            <span className="hw-brand__mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L9 6l4 7 3-4 4 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h4l2-3 2 6 2-3h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="hw-brand__text">
              <strong>Alto Rendimiento</strong>
              <span>Chaupimarca · Pasco</span>
            </span>
          </a>
          <p>© {new Date().getFullYear()} {site.legalName}. Página base lista para revisión y publicación.</p>
        </div>
      </footer>
    </main>
  )
}
