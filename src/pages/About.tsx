import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/src/assets/images/hero_gemkol_group_1793890997264.jpg" 
            alt="About Gemkol" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Our Corporate Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Building a legacy of excellence and diversification across strategic business sectors in Africa.
          </motion.p>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Corporate Background</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">A Journey of Industrial Excellence</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  GEMKOL RESOURCES LIMITED was incorporated on 21 July 2009. From its inception, the company was built on the pillars of professionalism and visionary business development.
                </p>
                <p>
                  Over the years, the group has evolved into GEMKOL FZE, a diversified business conglomerate. Our journey is characterized by strategic growth, moving from mineral resources into manufacturing, agriculture, and real estate.
                </p>
                <p>
                  Today, GEMKOL FZE stands as a symbol of corporate integrity and industrial competence, managing multiple subsidiaries that contribute significantly to the economic landscape of Nigeria and beyond.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-center text-center">
                <span className="text-4xl font-bold text-blue-600 mb-2">2009</span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Year Founded</span>
              </div>
              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-center text-center">
                <span className="text-4xl font-bold text-white mb-2">Multi</span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Sectoral Focus</span>
              </div>
              <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white flex flex-col justify-center text-center md:col-span-2">
                <span className="text-4xl font-bold text-blue-500 mb-2">Kano</span>
                <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Regional Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Framework */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Business Philosophy</h2>
            <p className="text-slate-600">The core principles that guide every decision and operation across the GEMKOL business ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: 'Family', desc: 'We foster a corporate culture rooted in mutual respect, shared values, and long-term relationships with all stakeholders.' },
              { icon: Award, title: 'Profession', desc: 'We maintain the highest standards of professional competence, ensuring every product and service meets international quality benchmarks.' },
              { icon: Target, title: 'Business', desc: 'Our focus remains on strategic value creation, operational efficiency, and sustainable growth across all sectors.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="lg:w-2/5 relative h-[500px] lg:h-auto">
              <img 
                src="https://i.ibb.co/4g5vpHd0/IMG-20261106-WA0004.jpg" 
                alt="Dr. Uche Godwin Jerome" 
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 block">Our Visionary Leader</span>
              <h2 className="text-4xl font-bold text-white mb-6">Dr. Uche Godwin Jerome</h2>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-8">Group Chief Executive Officer / Managing Director</p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 line-clamp-3">
                Dr. Uche Godwin Jerome is a distinguished Nigerian entrepreneur and corporate leader with over 30 years of experience in strategic leadership and multi-sector investment.
              </p>
              <Link 
                to="/leadership"
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-3 w-fit"
              >
                VIEW FULL EXECUTIVE PROFILE
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview (Other Members) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Leadership</h2>
              <p className="text-slate-600 text-lg">
                GEMKOL FZE is led by a team of experienced professionals dedicated to the group's vision of industrial excellence and value creation.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-2/5 aspect-[4/5] bg-slate-200">
                <div className="w-full h-full flex items-center justify-center text-slate-400 italic text-sm p-8 text-center bg-slate-100">
                  Management Profile
                </div>
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Executive Leadership</h4>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-6">Strategic Management</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Highly qualified professionals with decades of experience across Nigerian and international markets, driving the group's diversified operations.
                </p>
              </div>
            </div>
            
            <div className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-2/5 aspect-[4/5] bg-slate-200">
                 <div className="w-full h-full flex items-center justify-center text-slate-400 italic text-sm p-8 text-center bg-slate-100">
                  Operational Leadership
                </div>
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Division Heads</h4>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-6">Expert Operations</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Specialized leaders heading our manufacturing, resources, and real estate divisions to ensure operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
