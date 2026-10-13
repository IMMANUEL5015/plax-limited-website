import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { ContactBlock, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PlaX Limited collects, uses, shares and protects your personal data.",
};

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    content: (
      <p>
        PlaX Limited (&quot;PlaX&quot;, &quot;we&quot;, &quot;us&quot;) is the data
        controller responsible for personal data collected through this website and our
        products. We are committed to protecting your privacy in line with the{" "}
        <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and the regulations and
        guidance issued by the Nigeria Data Protection Commission (NDPC).
      </p>
    ),
  },
  {
    id: "data-we-collect",
    title: "Information we collect",
    content: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li><strong>Identity and contact data</strong> — name, email address, phone number, organisation and job title.</li>
          <li><strong>Account data</strong> — username, password (stored in encrypted form) and preferences.</li>
          <li><strong>Transaction data</strong> — details of products or services purchased, amounts, dates and transaction references.</li>
          <li><strong>Communications</strong> — messages you send us through our contact form, email or phone.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Device and technical data such as IP address, browser type, operating system and time zone.</li>
          <li>Usage data such as pages visited, links clicked and time spent on our website.</li>
          <li>Cookies and similar technologies (see section 7).</li>
        </ul>
        <h3>Payment information</h3>
        <p>
          Payments are processed by our payment service provider, <strong>Monnify</strong> (a
          product of Moniepoint). Your card number, CVV, PIN and bank credentials are entered
          directly on the provider&apos;s secure, PCI-DSS compliant platform. <strong>We do not
          collect or store your full card details.</strong> We receive only limited information
          such as the transaction reference, amount, status and masked card or account details
          needed to confirm and reconcile your payment.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    content: (
      <>
        <p>We use your personal data to:</p>
        <ul>
          <li>Provide, operate and maintain our products and services;</li>
          <li>Process payments, issue receipts and handle refunds or disputes;</li>
          <li>Verify your identity and prevent fraud, money laundering and other unlawful activity;</li>
          <li>Respond to enquiries and provide customer support;</li>
          <li>Send service notices, updates and, with your consent, marketing communications;</li>
          <li>Improve our website, products and user experience;</li>
          <li>Comply with legal, regulatory and tax obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal basis for processing",
    content: (
      <>
        <p>Under the NDPA, we process your personal data on one or more of these grounds:</p>
        <ul>
          <li><strong>Contract</strong> — where processing is necessary to provide services you have requested;</li>
          <li><strong>Consent</strong> — where you have given clear consent, which you may withdraw at any time;</li>
          <li><strong>Legal obligation</strong> — where we must comply with the law or a regulator;</li>
          <li><strong>Legitimate interests</strong> — such as securing our systems and improving our services, where these are not overridden by your rights.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share your information",
    content: (
      <>
        <p>We do not sell your personal data. We may share it only with:</p>
        <ul>
          <li><strong>Payment processors</strong> such as Monnify, to process and verify transactions;</li>
          <li><strong>Service providers</strong> who host, maintain or support our systems, under strict confidentiality and data protection agreements;</li>
          <li><strong>Professional advisers</strong> such as auditors, lawyers and insurers;</li>
          <li><strong>Regulators, law enforcement and government authorities</strong> where required by law or to protect our rights;</li>
          <li><strong>Successors</strong> in the event of a merger, acquisition or sale of assets, subject to equivalent protections.</li>
        </ul>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International transfers",
    content: (
      <p>
        Some of our service providers may process data outside Nigeria. Where this happens, we
        ensure that the recipient country or organisation provides an adequate level of
        protection, or that appropriate safeguards are in place, as required by the NDPA.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        We use cookies and similar technologies to keep our website working, remember your
        preferences and understand how visitors use our site. You can control or disable
        cookies through your browser settings; however, some parts of the website may not
        function properly without them.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    content: (
      <p>
        We keep personal data only for as long as necessary for the purposes described in this
        policy. Transaction and financial records are retained for the period required by
        applicable law (generally up to six years) for tax, audit and anti-money-laundering
        purposes. When data is no longer needed, we securely delete or anonymise it.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect your data",
    content: (
      <p>
        We apply appropriate technical and organisational measures to protect your data,
        including encryption in transit (TLS/SSL), access controls, secure hosting, regular
        security reviews and staff confidentiality obligations. While no system is completely
        secure, we work continuously to safeguard your information and will notify you and the
        NDPC of any personal data breach where required by law.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    content: (
      <>
        <p>Subject to the NDPA, you have the right to:</p>
        <ul>
          <li>Be informed about how your data is processed;</li>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction of inaccurate or incomplete data;</li>
          <li>Request deletion of your data;</li>
          <li>Restrict or object to certain processing;</li>
          <li>Receive your data in a portable format;</li>
          <li>Withdraw consent at any time, without affecting prior lawful processing;</li>
          <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
        </ul>
        <div className="callout">
          To request deletion of your data, use our{" "}
          <Link href="/delete-data">Delete My Data</Link> page. For any other request, email{" "}
          <a href="mailto:support@plax.ng">support@plax.ng</a>. We respond to verified requests
          within 30 days.
        </div>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    content: (
      <p>
        Our services are not directed at children under 18, and we do not knowingly collect
        their personal data. If you believe a child has provided us with personal data, please
        contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes take effect when posted
        on this page, and we will notify you of material changes where appropriate.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>For privacy questions or to exercise your rights, contact our data protection team:</p>
        <ContactBlock />
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use, share and protect your personal data."
      intro={
        <p>
          Your privacy matters to us. This policy explains what personal data we collect when
          you use our website and services, why we collect it, and the choices and rights you
          have.
        </p>
      }
      sections={sections}
    />
  );
}
