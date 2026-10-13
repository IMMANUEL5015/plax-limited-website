import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, Phone } from "./Icons";
import { legalLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-about">
              We design and build dependable software products for businesses, government
              institutions, parastatals, agencies and ministries.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#clients">Clients</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer-contact">
              <li>
                <MapPin />
                <span>{site.address}</span>
              </li>
              <li>
                <Mail />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Phone />
                <a href={site.phoneHref}>{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Abuja, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
