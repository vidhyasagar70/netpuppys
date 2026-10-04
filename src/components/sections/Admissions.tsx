import React, { useState } from 'react';
import { ADMISSION_STEPS, CONTACT_INFO } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { Reveal } from '../../animations/Reveal';
import { Phone, Mail, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Admissions: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Class IV',
    state: 'Uttarakhand',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="admissions" className="py-24 lg:py-36 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dominant Headline Block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal variant="fadeIn">
            <span className="text-xs font-mono uppercase tracking-ultra text-neutral-400 border border-neutral-800 px-4 py-2 bg-neutral-950 inline-block mb-6">
              ADMISSIONS OPEN FOR SESSION 2025–2026
            </span>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.05}>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight mb-6">
              Your Child’s Next Chapter Starts Here
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <p className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Join a distinguished community committed to academic distinction, physical vigor, and holistic boarding education in Dehradun.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Admission Journey Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ADMISSION_STEPS.map((step, idx) => (
            <Reveal
              key={step.step}
              variant="fadeUp"
              delay={idx * 0.1}
              className="border border-neutral-800/80 bg-neutral-950 p-8 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">
                  STEP {step.step}
                </span>
                <h3 className="text-xl font-serif text-white font-medium mb-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm font-light text-neutral-400 leading-relaxed pt-4 border-t border-neutral-900">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* High Conversion Split Block: Form & Direct Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border border-neutral-800 bg-neutral-950 p-8 sm:p-12 lg:p-16">
          {/* Left Side: Contact Information & Direct Helpline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-ultra text-neutral-500">
                DIRECT ADMISSIONS DESK
              </span>
              <h3 className="text-3xl font-serif text-white font-light">
                Connect directly with our Admissions Office
              </h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed">
                Our admissions counselors are available Monday through Saturday to guide you through campus visits, fee structure, and hostel allocation.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-900">
              <div className="flex items-center gap-4 text-sm text-neutral-300">
                <div className="w-10 h-10 border border-neutral-800 bg-black flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-neutral-500">Helpline / WhatsApp</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-mono font-medium hover:text-white transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-neutral-300">
                <div className="w-10 h-10 border border-neutral-800 bg-black flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-neutral-500">Email Admissions</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-mono font-medium hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-neutral-300">
                <div className="w-10 h-10 border border-neutral-800 bg-black flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-neutral-500">Visiting Hours</p>
                  <p className="font-mono text-xs">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-neutral-800 bg-black flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-neutral-400 shrink-0" />
              <span className="text-xs font-mono text-neutral-400">
                CBSE Affiliation Code: 3530397 • School Code: 81622
              </span>
            </div>
          </div>

          {/* Right Side: Interactive Quick Enquiry Form */}
          <div className="lg:col-span-7 bg-black p-8 sm:p-10 border border-neutral-800">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-serif text-white">Enquiry Received</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-md mx-auto">
                  Thank you for your interest in Tulas International School. Our admissions counselor will contact you at <strong className="text-white">{formData.phone}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-widest text-white underline pt-4"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-neutral-900 pb-4 mb-6">
                  <h4 className="text-2xl font-serif text-white font-medium">Quick Admission Enquiry</h4>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1">
                    Fill in your details for an immediate response
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98379 00000"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Applying for Grade *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="Class IV">Class IV (Grade 4)</option>
                      <option value="Class V">Class V (Grade 5)</option>
                      <option value="Class VI">Class VI (Grade 6)</option>
                      <option value="Class VII">Class VII (Grade 7)</option>
                      <option value="Class VIII">Class VIII (Grade 8)</option>
                      <option value="Class IX">Class IX (Grade 9)</option>
                      <option value="Class X">Class X (Grade 10)</option>
                      <option value="Class XI">Class XI (Grade 11)</option>
                      <option value="Class XII">Class XII (Grade 12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    State of Residence
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Delhi / Uttarakhand / Maharashtra"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Admission Enquiry
                  </Button>
                </div>

                <p className="text-[11px] font-mono text-neutral-500 text-center">
                  By submitting, you agree to receive official admission communications from Tulas International School.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
