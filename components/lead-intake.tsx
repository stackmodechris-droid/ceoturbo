"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SERVICES, SITE, type ServiceKey } from "@/lib/site";

const SERVICE_OPTIONS: { key: ServiceKey; label: string; note: string }[] = [
  { key: "seo-websites", label: "SEO, AEO & GEO website", note: "Get found in Google, Bing, and AI-assisted search." },
  { key: "meta-ads", label: "Facebook & Instagram ads", note: "Reach more of the right people with Meta campaigns." },
  { key: "shirts", label: "Company shirts", note: "Make the team recognizable in person and in photos." },
  { key: "business-cards", label: "QR business cards", note: "Give busy prospects a fast path back to your website." },
  { key: "review-cards", label: "Google review cards", note: "Make honest post-service feedback easier to leave." },
  { key: "yard-signs", label: "QR yard signs", note: "Turn job sites and local visibility into website visits." },
];

const TIMELINES = ["Within 30 days", "Within 1–3 months", "I am planning ahead"];
const ASSETS = [
  "I have a logo and brand colors",
  "I have a current website",
  "I have photos, reviews, or results",
  "I need help organizing what I have",
  "I am starting from scratch",
];

export function LeadIntake() {
  const intakeRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<ServiceKey[]>([]);
  const [timeline, setTimeline] = useState("");
  const [assets, setAssets] = useState<string[]>([]);

  const complete = step === 3;
  const canContinue = step === 0 ? services.length > 0 : step === 1 ? Boolean(timeline) : assets.length > 0;
  const selectedOffers = useMemo(() => services.map((key) => SERVICES[key]), [services]);

  useEffect(() => {
    if (step === 0) return;
    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      intakeRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      intakeRef.current?.querySelector<HTMLElement>(step === 3 ? ".lead-result" : ".lead-question")?.focus({ preventScroll: true });
    }, 260);
    return () => window.clearTimeout(timer);
  }, [step]);

  const toggleService = (key: ServiceKey) => {
    setServices((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  };

  const toggleAsset = (asset: string) => {
    setAssets((current) => current.includes(asset) ? current.filter((item) => item !== asset) : [...current, asset]);
  };

  const reset = () => {
    setStep(0);
    setServices([]);
    setTimeline("");
    setAssets([]);
  };

  return (
    <div className="lead-intake" ref={intakeRef}>
      <div className="lead-progress" role="progressbar" aria-label="Intake progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={Math.min(step + 1, 3)}>
        {[0, 1, 2].map((index) => (
          <span key={index} className={index <= step ? "is-complete" : ""} />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!complete ? (
          <motion.form
            key={step}
            className="lead-question"
            tabIndex={-1}
            initial={{ x: 22 }}
            animate={{ x: 0 }}
            exit={{ x: -22 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(event) => {
              event.preventDefault();
              if (canContinue) setStep((current) => current + 1);
            }}
          >
            <div className="lead-question-head">
              <span>Question {step + 1} of 3</span>
              <strong>{step === 0 ? "Choose all that apply" : "Choose the closest answer"}</strong>
            </div>

            {step === 0 && (
              <fieldset>
                <legend>What does your business need help with?</legend>
                <p>Select more than one if you want the pieces to work together.</p>
                <div className="lead-options">
                  {SERVICE_OPTIONS.map((option) => {
                    const checked = services.includes(option.key);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option.key}>
                        <input type="checkbox" checked={checked} onChange={() => toggleService(option.key)} suppressHydrationWarning />
                        <span className="lead-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option.label}</strong><small>{option.note}</small></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend>When would you like to get started?</legend>
                <p>This helps us make the first call useful and realistic.</p>
                <div className="lead-options lead-options--single">
                  {TIMELINES.map((option) => (
                    <label className={timeline === option ? "is-selected" : ""} key={option}>
                      <input type="radio" name="timeline" value={option} checked={timeline === option} onChange={() => setTimeline(option)} suppressHydrationWarning />
                      <span className="lead-radio" aria-hidden="true"><i /></span>
                      <span><strong>{option}</strong></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend>What do you already have?</legend>
                <p>Select every asset or starting point that describes your business.</p>
                <div className="lead-options">
                  {ASSETS.map((option) => {
                    const checked = assets.includes(option);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option}>
                        <input type="checkbox" checked={checked} onChange={() => toggleAsset(option)} suppressHydrationWarning />
                        <span className="lead-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option}</strong></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="lead-form-footer">
              {step > 0 ? <button className="lead-back" type="button" onClick={() => setStep((current) => current - 1)}>Back</button> : <span />}
              <button className="lead-next" type="submit" disabled={!canContinue}>
                {step === 2 ? "See my next step" : "Continue"}<span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div className="lead-result" key="result" tabIndex={-1} initial={{ y: 22 }} animate={{ y: 0 }}>
            <span className="lead-result-mark" aria-hidden="true">✓</span>
            <p className="lead-result-label">Your intake is ready</p>
            <h2>Ready to confirm your next visibility move?</h2>
            <p>You selected {services.length} {services.length === 1 ? "service" : "services"} and want to begin {timeline.toLowerCase()}. We will use the call to confirm fit, scope, priorities, and the strongest place to start.</p>

            <div className="lead-summary" aria-label="Selected CEOTurbo services">
              {selectedOffers.map((offer) => (
                <div key={offer.key}>
                  <span><strong>{offer.name}</strong><small>{offer.summary}</small></span>
                  <b>{offer.price}<small>{offer.cadence}</small></b>
                </div>
              ))}
            </div>

            <div className="lead-result-actions">
              <a href={SITE.calendly} target="_blank" rel="noreferrer">Book my visibility call <span aria-hidden="true">→</span></a>
              <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
            </div>
            <p className="lead-privacy">Your selections stay in this browser and are not submitted or stored. Share them during your call.</p>
            <button className="lead-reset" type="button" onClick={reset}>Change my answers</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
