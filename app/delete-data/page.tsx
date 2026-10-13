import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DeleteDataForm from "@/components/DeleteDataForm";
import { Check } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete My Data",
  description: "Request the deletion of your personal data held by PlaX Limited.",
};

export default function DeleteDataPage() {
  return (
    <>
      <PageHero
        crumb="Delete My Data"
        title="Delete your data"
        description="You have the right to ask us to erase the personal data we hold about you. Verify your email below and we'll take care of the rest."
      />
      <div className="container delete-layout">
        <DeleteDataForm />
        <aside>
          <div className="side-card">
            <h3>What will be deleted</h3>
            <ul className="check-list">
              <li><Check /> Your account and profile information</li>
              <li><Check /> Contact details and communication preferences</li>
              <li><Check /> Messages and enquiries you&apos;ve sent us</li>
              <li><Check /> Usage data linked to your email address</li>
            </ul>
          </div>
          <div className="side-card">
            <h3>Good to know</h3>
            <p>
              Some records — such as payment and transaction records — may be retained where
              we are required to do so by law (for example, tax, anti-money-laundering or
              regulatory obligations). These are kept securely and deleted once the retention
              period ends.
            </p>
            <p>
              Requests are completed within 30 days. Learn more in our{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
