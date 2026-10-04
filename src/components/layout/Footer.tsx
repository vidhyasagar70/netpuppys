import React from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../../data/schoolData';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-20 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Huge Wordmark */}
        <div className="border-b border-neutral-900 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-ultra text-neutral-500 block mb-2">
                TULAS INTERNATIONAL SCHOOL • DEHRADUN
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-white uppercase">
                TULAS <span className="italic font-extralight text-neutral-400">TIS</span>
              </h2>
            </div>
            <div className="text-right text-xs font-mono uppercase text-neutral-500 tracking-widest">
              CBSE Affiliation No: 3530397 <br />
              Co-Ed Boarding & Day School
            </div>
          </div>
        </div>

        {/* Footer Navigation & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Address & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-ultra text-neutral-400">
              Campus Address
            </h3>

            <div className="space-y-4 text-sm font-light text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {CONTACT_INFO.phone} / {CONTACT_INFO.landline}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors font-mono">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-ultra text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-serif">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic & Admissions Links */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-ultra text-neutral-400">
              Information & Governance
            </h3>
            <ul className="space-y-3 text-sm font-light text-neutral-400">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  CBSE Curriculum & Syllabus
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Boarding Hostels & Pastoral Care
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Fee Structure & Prospectus
                </a>
              </li>
              <li>
                <a href="https://tis.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Official CBSE Mandatory Disclosure</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {currentYear} Tulas International School. All rights reserved. Managed by Rishabh Educational Trust.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
