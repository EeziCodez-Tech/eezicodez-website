'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Link from 'next/link';
import { Icon, IconBox } from './ui/Icon';

interface ScopingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FOCUS_OPTIONS = [
  { id: 'scalable-systems', label: 'Scalable Systems', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', desc: 'Distributed architectures & microservices' },
  { id: 'product-dev', label: 'Product Engineering', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', desc: 'SaaS, mobile apps & platform builds' },
  { id: 'cloud-infra', label: 'Cloud & DevOps', icon: 'M17.5 19L22 12L17.5 5M6.5 5L2 12L6.5 19', desc: 'AWS, GCP, CI/CD pipelines' },
  { id: 'security', label: 'Security & Compliance', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', desc: 'NDPR, GDPR & vulnerability audits' },
  { id: 'data', label: 'Data & Automation', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', desc: 'Pipelines, analytics & integration' },
  {
    id: 'consulting',
    label: 'Technical Consulting',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l.7 2.148a1 1 0 0 0 .95.69h2.26c.969 0 1.371 1.24.588 1.81l-1.83 1.33a1 1 0 0 0-.364 1.118l.699 2.148c.3.921-.755 1.688-1.54 1.118l-1.83-1.33a1 1 0 0 0-1.176 0l-1.83 1.33c-.784.57-1.838-.197-1.539-1.118l.699-2.148a1 1 0 0 0-.364-1.118l-1.83-1.33c-.783-.57-.38-1.81.588-1.81h2.26a1 1 0 0 0 .95-.69l.7-2.148z',
    desc: 'Architecture reviews & audits'
  }
];

const STAGE_OPTIONS = [
  { id: 'idea', label: 'Idea / Concept', desc: 'I have a concept but need technical guidance' },
  { id: 'mvp', label: 'MVP Build', desc: 'Ready to build the first functional version' },
  { id: 'scaling', label: 'Scaling Up', desc: 'Existing product that needs to handle more load' },
  { id: 'migration', label: 'Migration / Refactor', desc: 'Modernising legacy systems or moving to cloud' },
  { id: 'audit', label: 'Technical Audit', desc: 'Need an independent review of existing systems' },
];

const TIMELINE_OPTIONS = [
  { id: 'urgent', label: 'ASAP', desc: '< 2 weeks' },
  { id: '1-month', label: '1 Month', desc: '2–4 weeks' },
  { id: '3-months', label: '1–3 Months', desc: 'Standard timeline' },
  { id: 'flexible', label: 'Flexible', desc: 'No fixed deadline' },
];

export default function ScopingModal({ isOpen, onClose }: ScopingModalProps) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const [consentGiven, setConsentGiven] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  const [formData, setFormData] = useState({
    focus: '',
    stage: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      // Delay reset so the exit animation can play
      const timer = setTimeout(() => {
        setStep(1);
        setSubmitting(false);
        setSubmitted(false);
        setError('');
        setHcaptchaToken(null);
        setConsentGiven(false);
        setFormData({ focus: '', stage: '', timeline: '', name: '', email: '', company: '', message: '' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const canProceed = () => {
    switch (step) {
      case 1: return !!formData.focus;
      case 2: return !!formData.stage;
      case 3: return !!formData.name && !!formData.email && !!hcaptchaToken && consentGiven;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, hcaptchaToken }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly at info@eezicodeztech.com');
      captchaRef.current?.resetCaptcha();
      setHcaptchaToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = () => {
    if (canProceed() && step < 3) setStep(step + 1);
    else if (step === 3) handleSubmit();
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  const totalSteps = 3;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="scoping-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="scoping-modal"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className="scoping-close" onClick={onClose} aria-label="Close modal">
              <Icon size="sm">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </Icon>
            </button>

            {/* Success State */}
            {submitted ? (
              <motion.div
                className="scoping-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="scoping-success-icon">
                  <Icon size="xl" strokeWidth={2}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </Icon>
                </div>
                <h3 className="scoping-success-title">Brief Received</h3>
                <p className="scoping-success-desc">
                  Our lead architect is reviewing your project scope for <strong>{formData.focus}</strong>. We&apos;ll be in touch within 24 hours.
                </p>
                <p className="scoping-success-check">Check your email at <strong>{formData.email}</strong> for a confirmation.</p>
                <button className="scoping-btn scoping-btn-primary" onClick={onClose}>
                  Done
                </button>
              </motion.div>
            ) : (
              <>
                {/* Progress indicator */}
                <div className="scoping-progress">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`scoping-progress-step ${s === step ? 'active' : ''} ${s < step ? 'completed' : ''}`}>
                      <div className="scoping-progress-dot">
                        {s < step ? (
                          <Icon size="xs" strokeWidth={3}>
                            <polyline points="20 6 9 17 4 12" />
                          </Icon>
                        ) : s}
                      </div>
                      <span className="scoping-progress-label">
                        {s === 1 ? 'Focus' : s === 2 ? 'Scope' : 'Contact'}
                      </span>
                    </div>
                  ))}
                  <div className="scoping-progress-line">
                    <div className="scoping-progress-fill" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }} />
                  </div>
                </div>

                {/* Step Content */}
                <div className="scoping-body">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                        <h3 className="scoping-step-title">What do you need help with?</h3>
                        <p className="scoping-step-desc">Select the primary focus area for your project.</p>
                        <div className="scoping-options-grid">
                          {FOCUS_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              className={`scoping-option-card ${formData.focus === opt.label ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, focus: opt.label })}
                            >
                              <div className="scoping-option-icon">
                                <Icon path={opt.icon} size="sm" />
                              </div>
                              <div className="scoping-option-text">
                                <span className="scoping-option-label">{opt.label}</span>
                                <span className="scoping-option-desc">{opt.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                        <h3 className="scoping-step-title">What stage is your project?</h3>
                        <p className="scoping-step-desc">This helps us prepare the right expertise for our call.</p>
                        <div className="scoping-options-list">
                          {STAGE_OPTIONS.map((opt) => (
                            <button
                              key={opt.id}
                              className={`scoping-option-row ${formData.stage === opt.label ? 'selected' : ''}`}
                              onClick={() => setFormData({ ...formData, stage: opt.label })}
                            >
                              <div className="scoping-option-radio">
                                {formData.stage === opt.label && <div className="scoping-option-radio-fill" />}
                              </div>
                              <div className="scoping-option-text">
                                <span className="scoping-option-label">{opt.label}</span>
                                <span className="scoping-option-desc">{opt.desc}</span>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="scoping-timeline-section">
                          <p className="scoping-timeline-label">Expected timeline</p>
                          <div className="scoping-timeline-pills">
                            {TIMELINE_OPTIONS.map((opt) => (
                              <button
                                key={opt.id}
                                className={`scoping-pill ${formData.timeline === opt.label ? 'selected' : ''}`}
                                onClick={() => setFormData({ ...formData, timeline: opt.label })}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                        <h3 className="scoping-step-title">How can we reach you?</h3>
                        <p className="scoping-step-desc">We&apos;ll respond within 24 hours with a tailored assessment.</p>
                        <div className="scoping-form-fields">
                          <div className="scoping-field">
                            <label htmlFor="scoping-name">Full Name <span className="scoping-required">*</span></label>
                            <input
                              id="scoping-name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              autoComplete="name"
                            />
                          </div>
                          <div className="scoping-field">
                            <label htmlFor="scoping-email">Work Email <span className="scoping-required">*</span></label>
                            <input
                              id="scoping-email"
                              type="email"
                              placeholder="john@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              autoComplete="email"
                            />
                          </div>
                          <div className="scoping-field">
                            <label htmlFor="scoping-company">Company / Organisation</label>
                            <input
                              id="scoping-company"
                              type="text"
                              placeholder="Acme Corp"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              autoComplete="organization"
                            />
                          </div>
                          <div className="scoping-field">
                            <label htmlFor="scoping-message">Anything else we should know?</label>
                            <textarea
                              id="scoping-message"
                              rows={3}
                              placeholder="Brief project description, specific requirements, etc."
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                          </div>
                          
                          <div className="scoping-consent">
                            <label className="scoping-consent-label">
                              <input 
                                type="checkbox" 
                                checked={consentGiven}
                                onChange={(e) => setConsentGiven(e.target.checked)}
                                className="scoping-consent-checkbox"
                              />
                              <span className="scoping-consent-text">
                                I agree to the processing of my data as outlined in the <Link href="/privacy-policy" onClick={onClose} target="_blank" rel="noopener noreferrer" className="scoping-link">Privacy Policy</Link>.
                              </span>
                            </label>
                          </div>
                          <div className="scoping-field" style={{ marginTop: '8px' }}>
                            <HCaptcha
                              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY || ''}
                              onVerify={(token) => setHcaptchaToken(token)}
                              ref={captchaRef}
                              theme="dark"
                            />
                          </div>
                        </div>
                        {error && <p className="scoping-error">{error}</p>}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="scoping-footer">
                  {step > 1 ? (
                    <button className="scoping-btn scoping-btn-ghost" onClick={prevStep}>
                      <Icon size="sm" path="M19 12H5M12 19l-7-7 7-7" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    className={`scoping-btn scoping-btn-primary ${!canProceed() ? 'disabled' : ''}`}
                    onClick={nextStep}
                    disabled={!canProceed() || submitting}
                  >
                    {submitting ? (
                      <span className="scoping-spinner" />
                    ) : step === 3 ? (
                      'Submit Brief'
                    ) : (
                      <>
                        Continue
                        <Icon size="sm" path="M5 12h14M12 5l7 7-7 7" />
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
