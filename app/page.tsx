import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Card,
  Chart,
  Check,
  CheckCircle,
  Cloud,
  Code,
  Landmark,
  Lock,
  Pen,
  Shield,
  Spark,
  Users,
} from "@/components/Icons";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    text: "Web, mobile and enterprise applications engineered around your workflows — built to scale, simple to use.",
    tags: ["Web apps", "Mobile", "APIs"],
  },
  {
    icon: Landmark,
    title: "E-Government Platforms",
    text: "Digital services for ministries, agencies and parastatals: citizen portals, registries, licensing and case management.",
    tags: ["Portals", "Registries", "Workflows"],
  },
  {
    icon: Card,
    title: "Payments & Revenue Systems",
    text: "Secure collection, disbursement and reconciliation platforms with integrations to leading Nigerian payment gateways.",
    tags: ["Collections", "Disbursements", "Reconciliation"],
  },
  {
    icon: Chart,
    title: "Data & Analytics",
    text: "Dashboards, reporting and data pipelines that turn operational records into clear, timely decisions.",
    tags: ["Dashboards", "Reporting", "Data pipelines"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Reliable hosting, DevOps and monitoring so your systems stay available, observable and secure.",
    tags: ["DevOps", "Hosting", "Monitoring"],
  },
  {
    icon: Pen,
    title: "Product Strategy & Design",
    text: "Research-led product discovery and interface design that make complex services feel effortless.",
    tags: ["UX research", "UI design", "Prototyping"],
  },
];

const steps = [
  { title: "Discover", text: "We listen first — mapping goals, users, regulations and constraints before writing a line of code." },
  { title: "Design", text: "We shape the solution with clear architecture, prototypes and a delivery plan you can track." },
  { title: "Build", text: "We ship in short, transparent iterations with rigorous testing and security at every stage." },
  { title: "Support", text: "We deploy, train your teams and stay on hand with maintenance, monitoring and improvements." },
];

const clients = [
  { initials: "BOI", name: "Bank of Industry", type: "Development finance" },
  { initials: "NRS", name: "Nigeria Revenue Service", type: "Federal agency" },
  { initials: "CC", name: "CREDICORP", type: "Consumer Credit Corporation" },
  { initials: "WB", name: "World Bank", type: "International partner" },
  { initials: "FMHA", name: "Federal Ministry of Humanitarian Affairs", type: "Federal ministry" },
  { initials: "OY", name: "Oyo State Government", type: "State government" },
  { initials: "KW", name: "Kwara State Government", type: "State government" },
  { initials: "NBS", name: "National Bureau of Statistics", type: "Federal agency" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">
              <b>Abuja, Nigeria</b> Software for business &amp; government
            </span>
            <h1>
              Building software that powers <span className="accent">institutions</span> and
              businesses.
            </h1>
            <p className="hero-lead">
              PlaX Limited designs and builds secure, dependable digital products for
              businesses and the public sector — government institutions, parastatals,
              agencies and ministries.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a project <ArrowRight />
              </Link>
              <Link href="/#services" className="btn btn-secondary">
                Explore our services
              </Link>
            </div>
            <ul className="hero-points">
              <li><CheckCircle /> Public-sector experience</li>
              <li><CheckCircle /> Secure by design</li>
              <li><CheckCircle /> End-to-end delivery</li>
            </ul>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="panel">
              <div className="panel-top">
                <div className="dots"><i /><i /><i /></div>
                <span className="panel-title">Service Dashboard</span>
              </div>
              <div className="panel-stats">
                <div className="stat">
                  <small>Applications</small>
                  <strong>12,480</strong>
                  <span className="up">▲ 18%</span>
                </div>
                <div className="stat">
                  <small>Processed</small>
                  <strong>96.4%</strong>
                  <span className="up">▲ 4.2%</span>
                </div>
                <div className="stat">
                  <small>Uptime</small>
                  <strong>99.9%</strong>
                  <span className="up">Stable</span>
                </div>
              </div>
              <div className="chart">
                <div className="chart-head">
                  Monthly activity <span>Last 12 months</span>
                </div>
                <div className="bars">
                  {[38, 52, 44, 60, 56, 70, 64, 78, 72, 88, 82, 96].map((h, i) => (
                    <i key={i} className={i >= 9 ? "hi" : undefined} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="float-card float-a">
              <span className="ico"><Lock /></span>
              <div>
                <strong>Secure payments</strong>
                <small>Verified & reconciled</small>
              </div>
            </div>
            <div className="float-card float-b">
              <span className="ico"><Check /></span>
              <div>
                <strong>Deployment live</strong>
                <small>All checks passed</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-soft" id="about">
        <div className="container about-grid">
          <div className="section-head">
            <span className="eyebrow">Who we are</span>
            <h2>A technology partner for the organisations that serve Nigeria.</h2>
            <p>
              PlaX Limited is a technology company that specialises in designing and building
              software products. We bring together product thinking, solid engineering and a
              deep understanding of how public institutions and businesses operate — so the
              systems we deliver work in the real world, at scale.
            </p>
            <p>
              From revenue collection to citizen-facing services and internal operations, we
              help our clients modernise with technology that is reliable, accountable and
              built to last.
            </p>
          </div>
          <div className="pillars">
            <div className="pillar">
              <span className="icon-box"><Shield /></span>
              <div>
                <h3>Security &amp; compliance first</h3>
                <p>Data protection, access control and audit trails are built in from day one, aligned with Nigerian regulations.</p>
              </div>
            </div>
            <div className="pillar">
              <span className="icon-box"><Users /></span>
              <div>
                <h3>Designed for people</h3>
                <p>We design for citizens, customers and civil servants alike — clear, accessible and easy to adopt.</p>
              </div>
            </div>
            <div className="pillar">
              <span className="icon-box"><Spark /></span>
              <div>
                <h3>Built to scale</h3>
                <p>Modern, resilient architecture that grows with your programmes, users and transaction volumes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">What we do</span>
            <h2>Services built around your mission</h2>
            <p>
              Whether you are a growing business or a government institution, we deliver the
              full lifecycle — from strategy and design to engineering and support.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, text, tags }) => (
              <article className="service-card" key={title}>
                <span className="icon-box"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who we serve</span>
            <h2>Two sectors, one standard of excellence</h2>
          </div>
          <div className="sectors">
            <div className="sector featured">
              <span className="icon-box"><Landmark /></span>
              <h3>Public sector</h3>
              <p>
                We partner with government to digitise services, strengthen accountability and
                improve how citizens interact with the state.
              </p>
              <ul>
                <li><Check /> Federal and state ministries</li>
                <li><Check /> Government agencies and parastatals</li>
                <li><Check /> Revenue and statistics institutions</li>
                <li><Check /> Development and international partners</li>
              </ul>
            </div>
            <div className="sector">
              <span className="icon-box"><Briefcase /></span>
              <h3>Businesses</h3>
              <p>
                We help companies launch new products, automate operations and serve their
                customers better with dependable software.
              </p>
              <ul>
                <li><Check /> Financial services and lending</li>
                <li><Check /> Startups and growing enterprises</li>
                <li><Check /> Payments and commerce</li>
                <li><Check /> Operations and internal tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How we work</span>
            <h2>A clear, collaborative process</h2>
            <p>Transparent from first conversation to long-term support.</p>
          </div>
          <div className="process">
            {steps.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="step-num">STEP {String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section section-soft" id="clients">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Clients &amp; partners</span>
            <h2>Trusted by leading institutions</h2>
            <p>
              We are proud to have worked alongside organisations shaping Nigeria&apos;s
              economic and social development.
            </p>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <div className="client" key={c.name}>
                <span className="monogram">{c.initials}</span>
                <div>
                  <strong>{c.name}</strong>
                  <small>{c.type}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Have a project in mind?</h2>
              <p>
                Tell us what you are building. We&apos;ll help you plan it, build it and run it
                with confidence.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-white">
                Contact us <ArrowRight />
              </Link>
              <a href="mailto:support@plax.ng" className="btn btn-ghost-white">
                support@plax.ng
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
