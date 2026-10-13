import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { ContactBlock, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "PlaX Limited's policy on cancellations, refunds, failed transactions and chargebacks.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p>
        This Refund Policy applies to all payments made to PlaX Limited through our website,
        applications and invoices, including payments processed by our payment partner,{" "}
        <strong>Monnify</strong> (a product of Moniepoint). It should be read together with
        our <Link href="/terms">Terms of Use</Link>.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility for a refund",
    content: (
      <>
        <p>You may be eligible for a full or partial refund where:</p>
        <ul>
          <li>You were charged but the product or service was not delivered;</li>
          <li>You were charged more than once for the same transaction (duplicate payment);</li>
          <li>You were charged an incorrect amount;</li>
          <li>The service delivered is materially different from what was described and we are unable to remedy it;</li>
          <li>You cancel a service in line with section 4 before work has commenced or access has been used.</li>
        </ul>
        <p>Refund requests must be made within <strong>14 days</strong> of the transaction date.</p>
      </>
    ),
  },
  {
    id: "non-refundable",
    title: "Non-refundable items",
    content: (
      <>
        <p>Unless required by law, the following are not eligible for refund:</p>
        <ul>
          <li>Digital services or subscriptions that have been fully delivered, accessed or used;</li>
          <li>Custom software development, design or consulting work already completed or delivered according to an agreed scope;</li>
          <li>Transaction, convenience or processing fees charged by third parties;</li>
          <li>Payments for which a refund request is made after the 14-day window.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations",
    content: (
      <>
        <p>
          You may cancel an order or subscription by contacting us at{" "}
          <a href="mailto:support@plax.ng">support@plax.ng</a>.
        </p>
        <ul>
          <li><strong>Before delivery or commencement</strong> — you will receive a full refund.</li>
          <li><strong>Subscriptions</strong> — cancellation stops future billing; you keep access until the end of the current billing period, and the current period is not refunded.</li>
          <li><strong>Project-based work</strong> — refunds for partially completed work are calculated pro-rata based on work completed, in line with your service agreement.</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-to-request",
    title: "How to request a refund",
    content: (
      <>
        <p>Send an email to <a href="mailto:support@plax.ng">support@plax.ng</a> with the subject &quot;Refund Request&quot; and include:</p>
        <ol>
          <li>Your full name and the email address or phone number used for the payment;</li>
          <li>The transaction reference and date of payment;</li>
          <li>The amount paid;</li>
          <li>The reason for your refund request and any supporting evidence (e.g. debit alert, receipt or screenshot).</li>
        </ol>
        <p>We will acknowledge your request within <strong>2 business days</strong>.</p>
      </>
    ),
  },
  {
    id: "processing",
    title: "Refund processing and timelines",
    content: (
      <>
        <ul>
          <li>We review all requests and communicate a decision within <strong>5 business days</strong> of receiving complete information.</li>
          <li>Approved refunds are processed to the <strong>original payment method</strong> (card or bank account) used for the transaction.</li>
          <li>Once processed, refunds typically reflect within <strong>7–14 business days</strong>, depending on your bank or card issuer.</li>
          <li>Refunds are made in Nigerian Naira (₦) for the amount actually received by us.</li>
        </ul>
        <div className="callout">
          If you have not received an approved refund after 14 business days, please contact your
          bank first, then reach out to us with your transaction reference so we can follow up
          with our payment partner.
        </div>
      </>
    ),
  },
  {
    id: "failed",
    title: "Failed or pending transactions",
    content: (
      <p>
        If your account was debited but the transaction failed or no value was delivered, the
        amount is usually reversed automatically by your bank or our payment partner within{" "}
        <strong>24–72 hours</strong>. If the reversal has not occurred after 72 hours, please
        contact us with your transaction reference and we will investigate and resolve it
        promptly.
      </p>
    ),
  },
  {
    id: "chargebacks",
    title: "Chargebacks and disputes",
    content: (
      <p>
        We encourage you to contact us before raising a dispute or chargeback with your bank,
        as we can usually resolve issues faster directly. Where a chargeback is raised, we will
        cooperate with our payment partner and your bank and provide evidence of the
        transaction. Fraudulent or abusive chargebacks may result in suspension of your account
        and recovery of associated costs.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this Refund Policy from time to time. The version in effect at the time
        of your transaction will apply to that transaction.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    content: (
      <>
        <p>For refund questions or requests, please reach out:</p>
        <ContactBlock />
      </>
    ),
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      description="How cancellations, refunds, failed transactions and chargebacks are handled."
      intro={
        <p>
          We want you to be completely satisfied with every transaction. This policy explains
          when you can get a refund, how to request one, and how long it takes.
        </p>
      }
      sections={sections}
    />
  );
}
