import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Clock, Mail, MapPin, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PlaX Limited. Visit us in Wuse 2, Abuja, email support@plax.ng or call 0818 916 6345.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        title="Let's talk"
        description="Questions about our services, a project you'd like to discuss, or support with a transaction — we're here to help."
      />
      <div className="container contact-layout">
        <div className="contact-info">
          <div className="info-card">
            <span className="icon-box"><MapPin /></span>
            <div>
              <h3>Office address</h3>
              <p>{site.address}</p>
            </div>
          </div>
          <div className="info-card">
            <span className="icon-box"><Mail /></span>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div className="info-card">
            <span className="icon-box"><Phone /></span>
            <div>
              <h3>Phone</h3>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
          <div className="info-card">
            <span className="icon-box"><Clock /></span>
            <div>
              <h3>Business hours</h3>
              <p>{site.hours}</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
