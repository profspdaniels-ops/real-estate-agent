import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { COMPANIES } from '@/src/constants';

export default function Companies() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Subsidiary Companies</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            GEMKOL FZE operates as a diversified business group with a strong presence in various sectors. Each subsidiary is committed to delivering excellence and building long-term value.
          </p>
        </div>

        <div className="space-y-24">
          {COMPANIES.map((company, idx) => (
            <motion.div 
              key={company.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="lg:w-1/2 aspect-video lg:aspect-square relative overflow-hidden rounded-[3rem] shadow-2xl">
                <img 
                  src={company.heroImage} 
                  alt={company.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">{company.sector}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{company.name}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {company.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to={`/companies/${company.id}`}
                    className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-3 group"
                  >
                    VIEW COMPANY PROFILE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
