import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, CheckCircle2, Award, Target, Briefcase, Zap, HeartPulse, Construction, ShoppingCart, Leaf } from 'lucide-react';

const EXPERTISE = [
  { icon: Briefcase, title: 'Manufacturing & Industrial', desc: 'Foam products, mattresses, pillows, paints, and plastics.' },
  { icon: Globe, title: 'International Trade', desc: 'Import/export of agro-allied products, clothing, and household goods.' },
  { icon: Construction, title: 'Real Estate & Construction', desc: 'Property investment, estate development, and civil engineering projects.' },
  { icon: Leaf, title: 'Agro-Allied Investments', desc: 'Agricultural produce distribution, fertilizers, seeds, and animal centres.' },
  { icon: Zap, title: 'Energy & Tech', desc: 'Solar energy installations and renewable infrastructure.' },
  { icon: HeartPulse, title: 'Healthcare Supplies', desc: 'Hospital equipment, medical disposables, and specialised bedding.' },
];

export default function Leadership() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl mb-8 border-4 border-slate-50">
              <img 
                src="https://i.ibb.co/4g5vpHd0/IMG-20261106-WA0004.jpg" 
                alt="Dr. Uche Godwin Jerome" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-slate-900">Dr. Uche Godwin Jerome</h1>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest leading-relaxed">
                Group Chief Executive Officer / Managing Director
              </p>
              <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span>Entrepreneur</span>
                <span className="text-blue-200">|</span>
                <span>Strategist</span>
                <span className="text-blue-200">|</span>
                <span>Investor</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="prose prose-slate prose-lg max-w-none">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Executive Profile</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Dr. Uche Godwin Jerome is a distinguished Nigerian entrepreneur, business executive and corporate leader with over 30 years of experience in business development, enterprise management, strategic leadership and multi-sector investment.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Born on 5 May 1975, hailing from Akpo Town, Anambra State, Dr. Jerome has built an impressive entrepreneurial portfolio through strategic vision, resilience, and an unwavering commitment to sustainable development.
              </p>
              
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 italic text-slate-700 text-xl leading-relaxed mb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
                "True entrepreneurship is not merely about establishing businesses; it is about building sustainable institutions, creating opportunities, empowering people and developing structures that continue to generate value for generations."
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Corporate Leadership</h3>
              <p className="text-slate-600 mb-8">
                Dr. Jerome provides executive leadership and strategic oversight across the GEMKOL Group:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 list-none p-0">
                {[
                  'GEMKOL RESOURCES LTD',
                  'NITAFOAM CHEMICAL COMPANY',
                  'GEMKOL RESOURCES INVESTMENTS AND PROPERTIES LTD',
                  'GEMKOL AGRO-ALLIED RESOURCES',
                  'GEMKOL RESOURCES FZE'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm font-bold text-slate-700 text-sm">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {EXPERTISE.map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-6">Leadership Philosophy</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Dr. Jerome believes that sustainable business success is built on vision, discipline, and the ability to create value beyond profit. He is recognized for his supportive leadership approach and commitment to empowering others through employment and mentorship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
