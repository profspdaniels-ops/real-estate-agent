import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageSquare, Globe } from 'lucide-react';
import { COMPANIES, GEMKOL_LOGO_URL } from '@/src/constants';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={GEMKOL_LOGO_URL} 
                alt="GEMKOL FZE Official Logo" 
                className="h-14 w-auto object-contain rounded-lg bg-white/5 p-1 border border-white/10"
              />
              <div className="flex flex-col items-start">
                <span className="text-xl font-extrabold tracking-tight">GEMKOL FZE</span>
                <p className="text-[9px] uppercase tracking-widest text-amber-300 font-semibold">A Diversified Business Group</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building value across resources, manufacturing, agro-allied products, real estate, and other strategic business sectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Globe size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Companies Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Our Companies</h4>
            <ul className="space-y-4">
              {COMPANIES.map((company) => (
                <li key={company.id}>
                  <Link to={`/companies/${company.id}`} className="text-slate-400 hover:text-white text-sm transition-colors block">
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Gemkol</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white text-sm transition-colors">Product Catalogue</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-white text-sm transition-colors">Major Projects</Link></li>
              <li><Link to="/media" className="text-slate-400 hover:text-white text-sm transition-colors">Media Centre</Link></li>
              <li><Link to="/supabase" className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors flex items-center gap-1.5">Supabase SQL & Database Hub</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-white">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-400 mb-1">Phone / WhatsApp</p>
                  <p className="font-semibold">08036091778</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <div className="text-sm">
                  <p className="text-slate-400 mb-1">Email Address</p>
                  <p className="font-semibold">gemkolfze@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <div className="text-sm text-slate-400 leading-relaxed">
                  45 Aviation Quarters, Opp. NCAA Quarters, Off Airport Road, Kano, Nigeria
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GEMKOL FZE — All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
