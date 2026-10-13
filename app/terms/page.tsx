import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { ContactBlock, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing your use of PlaX Limited's website, products and services.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    content: (
      <>
        <p>
          By accessing or using this website, our applications, or any product or service
          offered by PlaX Limited (&quot;PlaX&quot;, &quot;we&quot;, &quot;us&quot; or
          &quot;our&quot;), you agree to be bound by these Terms of Use and our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/refund-policy">Refund Policy</Link>, which are incorporated by reference.
        </p>
        <p>
          If you do not agree with any part of these terms, you must not use our website or
          services. If you are using our services on behalf of an organisation, you confirm
          that you are authorised to accept these terms on its behalf.
        </p>
      </>
    ),
  },
  {
    id: "about",
    title: "About us",
    content: (
      <p>
        PlaX Limited is a company registered in the Federal Republic of Nigeria, with its office
        at 29A N&apos;Djamena Crescent, Wuse 2, Abuja. We design and build software products
        and provide related technology services to businesses and public-sector organisations.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <p>
        You must be at least 18 years old and capable of entering into a legally binding
        agreement to use our services or make payments through our platforms. By using our
        services you represent that the information you provide is accurate, current and
        complete.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "User accounts",
    content: (
      <>
        <p>Where a service requires you to create an account, you agree to:</p>
        <ul>
          <li>Provide accurate and complete registration information and keep it up to date;</li>
          <li>Keep your login credentials confidential and not share them with anyone;</li>
          <li>Notify us immediately at <a href="mailto:support@plax.ng">support@plax.ng</a> of any unauthorised use of your account;</li>
          <li>Accept responsibility for all activities that occur under your account.</li>
        </ul>
        <p>
          We may suspend or terminate accounts that contain false information or are used in
          breach of these terms.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Products and services",
    content: (
      <>
        <p>
          We provide software development, digital platforms, subscriptions and related
          services as described on our website or in a separate agreement with you. Where a
          separate written agreement (such as a service agreement or statement of work) exists
          between you and PlaX, that agreement will prevail over these terms to the extent of
          any conflict.
        </p>
        <p>
          We make reasonable efforts to describe our products and services accurately, but we
          do not warrant that descriptions, pricing or other content are error-free. We reserve
          the right to correct errors and to modify or discontinue any service at any time.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "Pricing and payments",
    content: (
      <>
        <p>
          All prices are stated in Nigerian Naira (₦) unless otherwise indicated and are
          inclusive of applicable taxes (including VAT) unless stated otherwise.
        </p>
        <p>
          Payments on our platforms are processed securely by our licensed third-party payment
          service provider, <strong>Monnify</strong> (a product of Moniepoint), and may be made
          by debit card, bank transfer, USSD or any other method made available at checkout.
          By making a payment, you also agree to the terms and policies of the payment provider.
        </p>
        <ul>
          <li>We do not collect or store your full card details on our servers. Card information is handled directly by the payment provider in line with PCI-DSS standards.</li>
          <li>You authorise us and our payment provider to charge the payment method you select for the total amount of your order, including any applicable fees.</li>
          <li>A transaction is complete only when payment has been confirmed by the payment provider. You will receive a confirmation and transaction reference by email or on screen.</li>
          <li>Recurring or subscription charges, where applicable, will be clearly disclosed before you are billed.</li>
        </ul>
        <p>
          We reserve the right to decline or cancel any transaction we reasonably suspect to be
          fraudulent, unauthorised or in breach of these terms.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Service delivery",
    content: (
      <p>
        Digital products and services are delivered electronically. Access is typically
        provided immediately upon confirmation of payment, or within the timeline stated in
        your order or agreement. If you do not receive access within the stated period, please
        contact us at <a href="mailto:support@plax.ng">support@plax.ng</a>.
      </p>
    ),
  },
  {
    id: "refunds",
    title: "Cancellations and refunds",
    content: (
      <p>
        Cancellations, refunds, failed transactions and chargebacks are governed by our{" "}
        <Link href="/refund-policy">Refund Policy</Link>. Please review it before making a
        payment.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to use our website or services to:</p>
        <ul>
          <li>Violate any applicable law or regulation of the Federal Republic of Nigeria or any other jurisdiction;</li>
          <li>Engage in fraud, money laundering, terrorist financing or any other financial crime;</li>
          <li>Use a payment method you are not authorised to use;</li>
          <li>Upload or transmit viruses, malware or other harmful code;</li>
          <li>Attempt to gain unauthorised access to our systems, accounts or data;</li>
          <li>Interfere with or disrupt the integrity or performance of our services;</li>
          <li>Infringe the intellectual property or privacy rights of others.</li>
        </ul>
        <p>
          We may report suspected unlawful activity to the relevant authorities and cooperate
          with law enforcement agencies and our payment partners.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <p>
        All content on this website — including text, graphics, logos, software, designs and
        trademarks — is owned by or licensed to PlaX Limited and is protected by applicable
        intellectual property laws. You may not copy, reproduce, modify, distribute or create
        derivative works without our prior written consent. Ownership of software developed
        for clients is governed by the relevant client agreement.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    content: (
      <p>
        Our services may integrate with or link to third-party websites and services,
        including payment processors. We are not responsible for the content, policies or
        practices of third parties, and your use of them is at your own risk and subject to
        their terms.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of warranties",
    content: (
      <p>
        Our website and services are provided on an &quot;as is&quot; and &quot;as
        available&quot; basis. To the fullest extent permitted by law, we disclaim all
        warranties, express or implied, including warranties of merchantability, fitness for a
        particular purpose and non-infringement. We do not guarantee that our services will be
        uninterrupted, error-free or free from harmful components.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <p>
        To the maximum extent permitted by law, PlaX Limited, its directors, employees and
        partners shall not be liable for any indirect, incidental, special, consequential or
        punitive damages, or any loss of profits, data or goodwill arising from your use of our
        website or services. Our total liability for any claim shall not exceed the amount you
        paid to us for the specific service giving rise to the claim in the three (3) months
        preceding the claim.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless PlaX Limited and its officers, employees and
        agents from any claims, liabilities, damages, losses and expenses (including reasonable
        legal fees) arising from your breach of these terms or your misuse of our services.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    content: (
      <p>
        We may suspend or terminate your access to our services at any time, without prior
        notice, if we reasonably believe you have breached these terms, engaged in fraudulent
        activity, or where required by law or a regulatory authority. Provisions which by their
        nature should survive termination will continue to apply.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    content: (
      <>
        <p>
          These terms are governed by the laws of the Federal Republic of Nigeria. We encourage
          you to contact us first so we can try to resolve any complaint amicably.
        </p>
        <p>
          If a dispute cannot be resolved within thirty (30) days of written notice, it shall be
          referred to mediation and, failing that, to arbitration in Abuja under the Arbitration
          and Mediation Act 2023. Nothing in this clause prevents either party from seeking
          urgent relief from a court of competent jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <p>
        We may update these Terms of Use from time to time. The &quot;Last updated&quot; date
        at the top of this page shows when they were last revised. Continued use of our
        website or services after changes are posted constitutes your acceptance of the
        revised terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>If you have any questions about these Terms of Use, please contact us:</p>
        <ContactBlock />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="The rules and conditions that apply when you use our website, products and services."
      intro={
        <p>
          Please read these Terms of Use carefully. They explain your rights and obligations
          when you browse our website, use our products, or make payments to PlaX Limited.
        </p>
      }
      sections={sections}
    />
  );
}
