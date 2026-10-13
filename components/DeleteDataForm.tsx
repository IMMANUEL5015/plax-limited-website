"use client";

import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import { ArrowRight, CheckCircle, Mail } from "./Icons";

type Step = "email" | "code" | "done";

const CODE_LENGTH = 6;
const RESEND_SECONDS = 60;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function DeleteDataForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [codeError, setCodeError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  useEffect(() => {
    if (step === "code") inputs.current[0]?.focus();
  }, [step]);

  const submitEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    // No backend yet — in production this would send a verification code.
    setCode(Array(CODE_LENGTH).fill(""));
    setCountdown(RESEND_SECONDS);
    setStep("code");
  };

  const setDigit = (i: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    setCode((c) => {
      const next = [...c];
      next[i] = digit;
      return next;
    });
    setCodeError("");
    if (digit && i < CODE_LENGTH - 1) inputs.current[i + 1]?.focus();
  };

  const onKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[i] && i > 0) inputs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) inputs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < CODE_LENGTH - 1) inputs.current[i + 1]?.focus();
  };

  const onPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, CODE_LENGTH);
    if (!pasted) return;
    e.preventDefault();
    const next = Array(CODE_LENGTH).fill("").map((_, i) => pasted[i] ?? "");
    setCode(next);
    inputs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus();
  };

  const submitCode = (e: FormEvent) => {
    e.preventDefault();
    if (code.join("").length !== CODE_LENGTH) {
      setCodeError(`Please enter the ${CODE_LENGTH}-digit code sent to your email.`);
      return;
    }
    // No backend yet — in production this would verify the code and log the request.
    setStep("done");
  };

  const restart = () => {
    setStep("email");
    setEmail("");
    setCode(Array(CODE_LENGTH).fill(""));
    setCountdown(0);
  };

  const stepIndex = step === "email" ? 0 : step === "code" ? 1 : 2;

  return (
    <div className="form-card">
      <div className="stepper" aria-label={`Step ${stepIndex + 1} of 3`}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: "contents" }}>
            <span className={`dot${i === stepIndex ? " active" : i < stepIndex ? " done" : ""}`}>
              {i + 1}
            </span>
            {i < 2 && <span className={`bar${i < stepIndex ? " done" : ""}`} />}
          </span>
        ))}
      </div>

      {step === "email" && (
        <>
          <h2>Request data deletion</h2>
          <p>Enter the email address associated with your data. We&apos;ll send you a verification code to confirm it&apos;s you.</p>
          <form className="form" onSubmit={submitEmail} noValidate>
            <div className={`field${emailError ? " invalid" : ""}`}>
              <label htmlFor="del-email">Email address</label>
              <input
                id="del-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                aria-invalid={!!emailError}
                aria-describedby={emailError ? "del-email-error" : undefined}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && <p className="field-error" id="del-email-error">{emailError}</p>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Send verification code <ArrowRight />
            </button>
          </form>
        </>
      )}

      {step === "code" && (
        <>
          <h2>Verify your email</h2>
          <p>Enter the {CODE_LENGTH}-digit code we sent to confirm this request.</p>
          <form className="form" onSubmit={submitCode} noValidate>
            <div className="sent-to">
              <Mail style={{ display: "inline", width: 16, height: 16, verticalAlign: "-3px", marginRight: 6 }} />
              Code sent to <strong>{email.trim()}</strong>
            </div>
            <div className="field">
              <label htmlFor="otp-0">Verification code</label>
              <div className="otp" role="group" aria-label="Verification code">
                {code.map((d, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    ref={(el) => {
                      inputs.current[i] = el;
                    }}
                    inputMode="numeric"
                    autoComplete={i === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    value={d}
                    aria-label={`Digit ${i + 1}`}
                    onChange={(e) => setDigit(i, e.target.value)}
                    onKeyDown={(e) => onKeyDown(i, e)}
                    onPaste={onPaste}
                  />
                ))}
              </div>
              {codeError && <p className="field-error">{codeError}</p>}
            </div>
            <div className="otp-foot">
              <span>Didn&apos;t get it? Check your spam folder.</span>
              <button
                type="button"
                className="link-btn"
                disabled={countdown > 0}
                onClick={() => setCountdown(RESEND_SECONDS)}
              >
                {countdown > 0 ? `Resend in ${countdown}s` : "Resend code"}
              </button>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Verify &amp; submit request
            </button>
            <button type="button" className="link-btn" onClick={() => setStep("email")}>
              ← Use a different email
            </button>
          </form>
        </>
      )}

      {step === "done" && (
        <div className="success" role="status">
          <div className="success-icon"><CheckCircle /></div>
          <h2>Request received</h2>
          <p>
            Your data deletion request for <strong>{email.trim()}</strong> has been verified.
            We&apos;ll process it within 30 days and email you once it&apos;s complete.
          </p>
          <button type="button" className="btn btn-secondary" onClick={restart}>
            Submit another request
          </button>
        </div>
      )}
    </div>
  );
}
