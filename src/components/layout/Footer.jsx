import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { footerLinks } from '../../data/content';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer id="contact" className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <GraduationCap className="w-8 h-8 text-gold-400" />
              <div className="leading-tight">
                <span className="block text-lg font-heading font-bold">TIS</span>
                <span className="block text-[10px] tracking-wider uppercase text-brand-300">Tulas International School</span>
              </div>
            </a>
            <p className="text-sm text-brand-200 leading-relaxed max-w-xs">
              Shaping future leaders through holistic education, values, and excellence since establishment in Dehradun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Academics</h3>
            <ul className="space-y-2.5">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-brand-200">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold-400" />
                <span>{footerLinks.contact.address}</span>
              </li>
              <li>
                <a href={`tel:${footerLinks.contact.phone}`} className="flex items-center gap-3 text-sm text-brand-200 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-gold-400" />
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footerLinks.contact.email}`} className="flex items-center gap-3 text-sm text-brand-200 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-gold-400" />
                  {footerLinks.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-300">
            © {CURRENT_YEAR} Tulas International School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-brand-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-brand-300 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
