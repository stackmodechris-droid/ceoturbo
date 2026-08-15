"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SITE, SERVICES, type ServiceKey } from "@/lib/site";

const serviceOptions = Object.values(SERVICES).map((service) => ({
  key: service.key,
  label: service.navLabel,
  note: service.summary,
}));

const geographies = ["A local service area", "Several cities or a region", "Across the United States"];
const assetOptions = [
  "A logo and brand colors",
  "A current website",
  "Photos, reviews, or results",
  "Assets that need organizing",
  "Starting from scratch",
];

export function Qualifier() {
  const qualifierRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [services, setServices] = useState<ServiceKey[]>([]);
  const [geography, setGeography] = useState("");
  const [assets, setAssets] = useState<string[]>([]);
  const complete = step === 3;
  const selectedOffers = useMemo(() => services.map((key) => SERVICES[key]), [services]);
  const canContinue = step === 0 ? services.length > 0 : step === 1 ? Boolean(geography) : assets.length > 0;

  useEffect(() => {
    if (step === 0) return;
    const timer = window.setTimeout(() => {
      qualifierRef.current?.querySelector<HTMLElement>(complete ? ".qualifier-result" : ".qualifier-question")?.focus({ preventScroll: true });
    }, reduced ? 0 : 210);
    return () => window.clearTimeout(timer);
  }, [complete, reduced, step]);

  const toggleService = (service: ServiceKey) => {
    setServices((current) => current.includes(service) ? current.filter((item) => item !== service) : [...current, service]);
  };

  const toggleAsset = (asset: string) => {
    setAssets((current) => current.includes(asset) ? current.filter((item) => item !== asset) : [...current, asset]);
  };

  const reset = () => {
    setStep(0);
    setServices([]);
    setGeography("");
    setAssets([]);
  };

  return (
    <div className="qualifier" id="qualifier" ref={qualifierRef}>
      <div className="qualifier-progress" role="progressbar" aria-label="Package finder progress" aria-valuemin={1} aria-valuemax={3} aria-valuenow={Math.min(step + 1, 3)}>
        {[0, 1, 2].map((index) => <span key={index} className={index <= step ? "is-complete" : ""} />)}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!complete ? (
          <motion.div
            className="qualifier-question"
            key={step}
            tabIndex={-1}
            initial={reduced ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, x: -16 }}
            transition={{ duration: reduced ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="qualifier-question-head">
              <span>Step {step + 1} of 3</span>
              <strong>{step === 1 ? "Choose the closest answer" : "Choose all that apply"}</strong>
            </div>

            {step === 0 && (
              <fieldset>
                <legend>What should CEOTurbo help you build?</legend>
                <p>Select every service that matters. We will discuss the right order on the call.</p>
                <div className="qualifier-options">
                  {serviceOptions.map((option) => {
                    const checked = services.includes(option.key);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option.key}>
                        <input type="checkbox" checked={checked} onChange={() => toggleService(option.key)} />
                        <span className="qualifier-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option.label}</strong><small>{option.note}</small></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend>Where do customers come from?</legend>
                <p>One answer helps us make the visibility conversation specific.</p>
                <div className="qualifier-options qualifier-options--single">
                  {geographies.map((option) => (
                    <label className={geography === option ? "is-selected" : ""} key={option}>
                      <input type="radio" name="geography" value={option} checked={geography === option} onChange={() => setGeography(option)} />
                      <span className="qualifier-radio" aria-hidden="true"><i /></span>
                      <span><strong>{option}</strong></span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend>What is already in place?</legend>
                <p>Select every asset or starting point that describes your business.</p>
                <div className="qualifier-options">
                  {assetOptions.map((option) => {
                    const checked = assets.includes(option);
                    return (
                      <label className={checked ? "is-selected" : ""} key={option}>
                        <input type="checkbox" checked={checked} onChange={() => toggleAsset(option)} />
                        <span className="qualifier-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                        <span><strong>{option}</strong></span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            <div className="qualifier-actions qualifier-actions--footer">
              {step > 0 ? <button type="button" className="qualifier-back" onClick={() => setStep((current) => current - 1)}>Back</button> : <span />}
              <button type="button" className="qualifier-next" disabled={!canContinue} onClick={() => canContinue && setStep((current) => current + 1)}>
                {step === 2 ? "See selected packages" : "Continue"}<span aria-hidden="true">→</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="qualifier-result"
            key="result"
            tabIndex={-1}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <small>Your selected packages</small>
            <h3>Here is your starting mix.</h3>
            <p>You selected {services.length} {services.length === 1 ? "service" : "services"} for {geography.toLowerCase()}. We will use the call to confirm the order, scope, and strongest first move.</p>
            <div className="qualifier-summary" aria-label="Selected CEOTurbo packages">
              {selectedOffers.map((offer) => (
                <div key={offer.key}>
                  <span><strong>{offer.name}</strong><small>{offer.summary}</small></span>
                  <b>{offer.price}<small>{offer.cadence}</small></b>
                </div>
              ))}
            </div>
            <div className="qualifier-result-actions">
              <a className="button button--coral" href={SITE.calendly} target="_blank" rel="noreferrer">Book my visibility call</a>
              <a href={SITE.phoneHref}>Call {SITE.phoneDisplay}</a>
            </div>
            <p className="microcopy">Your answers stay in this browser and are not submitted or stored.</p>
            <button type="button" className="qualifier-reset" onClick={reset}>Change my answers</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
