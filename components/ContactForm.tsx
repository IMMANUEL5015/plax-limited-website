"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Send } from "./Icons";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!emailPattern.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.subject.trim()) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
  return e;
}

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    // No backend yet — show confirmation only.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-card">
        <div className="success" role="status">
          <div className="success-icon"><CheckCircle /></div>
          <h2>Message sent</h2>
          <p>
            Thank you, {fields.name.split(" ")[0]}. We&apos;ve received your message and will
            get back to you at <strong>{fields.email}</strong> shortly.
          </p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setFields(empty);
              setSent(false);
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2>Send us a message</h2>
      <p>Fill in the form and our team will respond within one business day.</p>
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <Field id="name" label="Full name" value={fields.name} onChange={update("name")}
            error={errors.name} placeholder="Jane Doe" autoComplete="name" />
          <Field id="email" label="Email address" type="email" value={fields.email}
            onChange={update("email")} error={errors.email} placeholder="you@example.com"
            autoComplete="email" />
        </div>
        <Field id="subject" label="Subject" value={fields.subject} onChange={update("subject")}
          error={errors.subject} placeholder="How can we help?" />
        <Field id="message" label="Message" value={fields.message} onChange={update("message")}
          error={errors.message} placeholder="Tell us a little about your project or enquiry…"
          multiline />
        <button type="submit" className="btn btn-primary btn-block">
          Send message <Send />
        </button>
        <p className="form-note">
          By submitting this form you agree to our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({ id, label, value, onChange, error, type = "text", placeholder, autoComplete, multiline }: FieldProps) {
  const common = {
    id,
    name: id,
    value,
    placeholder,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
  return (
    <div className={`field${error ? " invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {multiline ? (
        <textarea {...common} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...common} type={type} autoComplete={autoComplete} onChange={(e) => onChange(e.target.value)} />
      )}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  );
}
