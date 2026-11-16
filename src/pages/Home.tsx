import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Globe, TrendingUp, CreditCard, Users, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANIES } from '@/src/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Counter({ from, to, duration = 3 }: { from: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <>{displayValue.toLocaleString()}</>;
}

const TESTIMONIALS = [
  { name: 'Chief Emeka Okeke', location: 'Onitsha, Nigeria', text: 'Investing in Victory Garden City was one of the best decisions for my family estate. The transparency and professionalism from GEMKOL is unmatched.' },
  { name: 'Alhaji Musa Danjuma', location: 'Kano, Nigeria', text: 'Gemkol has provided excellent support for my logistics business through Golden Bull. Their tricycles are durable and perfect for our climate.' },
  { name: 'Mrs. Ngozi Uzoh', location: 'Enugu, Nigeria', text: 'I bought two plots in VGC and the development speed is impressive. The security features give me peace of mind for my future home.' },
  { name: 'Mallam Ibrahim Bello', location: 'Kaduna, Nigeria', text: 'Jerisverich Agro has been our reliable partner for commodity supplies. The quality of their rice and corn is always top-grade.' },
  { name: 'Dr. Chidi Anene', location: 'Abuja, Nigeria', text: 'The Nita Foam orthopedic mattresses are a life-saver for my back. I highly recommend their bedding products for hospital use as well.' },
  { name: 'Sani Abdullahi', location: 'Katsina, Nigeria', text: 'I am impressed by the group\'s diversification. From minerals to real estate, Dr. Jerome\'s vision is clearly building a huge legacy.' },
  { name: 'Okey Nwosu', location: 'Lagos, Nigeria', text: 'The Buy 10 Get 1 Free offer at Victory Garden City is incredible. I secured a block of plots for my commercial development with ease.' },
  { name: 'Fatima Zubairu', location: 'Zaria, Nigeria', text: 'Service delivery is prompt. I love how unified the contact system is; one WhatsApp message gets me help from any division.' },
  { name: 'Uchechukwu Mmadu', location: 'Owerri, Nigeria', text: 'Reliability is the word I use for Gemkol. Their construction projects are finished to the highest international standards.' },
  { name: 'Garba Mohammed', location: 'Bauchi, Nigeria', text: 'As a mineral trader, I value the expertise Gemkol Resources brings to the table. They understand the Nigerian geological landscape perfectly.' },
  { name: 'Chinelo Ezenwa', location: 'Asaba, Nigeria', text: 'The instalment plan for the plots made it possible for me to start my land ownership journey without financial stress.' },
  { name: 'Abubakar Sadiq', location: 'Sokoto, Nigeria', text: 'A truly diversified African business group. Dr. Jerome has built an institution that we can all be proud of.' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/hero_gemkol_group_1793890997264.jpg" 
            alt="Gemkol Headquarters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-2 text-xs font-extrabold tracking-widest text-amber-300 uppercase mb-4"
            >
              <span>PAN-AFRICAN CONGLOMERATE</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>STRATEGIC MULTI-SECTOR INDUSTRIAL GROUP</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>ESTABLISHED EXCELLENCE</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-3 uppercase tracking-tight"
            >
              GEMKOL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-amber-200">FZE</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl font-bold text-amber-300 uppercase tracking-[0.25em] mb-6"
            >
              A Diversified Multi-Sector Business Group
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-slate-950/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl mb-8"
            >
              <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-4">
                Headquartered at 45 Aviation Quarters in Kano, Nigeria, <strong>GEMKOL FZE</strong> is the sovereign corporate umbrella orchestrating a premier, market-leading conglomerate across industrial foam manufacturing, precious mineral resources and green mobility, agro-allied food commodity processing, and master-planned real estate development.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal opacity-95">
                Guided by the visionary stewardship of Group Chief Executive Officer <strong>Dr. Uche Godwin Jerome</strong>, GEMKOL FZE unites four strategic operating entities—<em>NITA FOAM CHEMICAL COMPANY</em>, <em>GEMKOL RESOURCES LTD</em>, <em>JERISVERICH AGRO ALLIED RESOURCES</em>, and <em>GEMKOL RESOURCES INVESTMENTS AND PROPERTIES LTD</em>—deploying rigorous institutional capital, sustainable engineering, and over 30 years of corporate leadership to benchmark international standards and power commercial growth across West Africa.
              </p>
            </motion.div>

            {/* Subsidiary quick indicators */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 mb-8 border-y border-white/10"
            >
              <div className="text-white">
                <span className="block text-[10px] font-extrabold text-amber-300 uppercase tracking-widest mb-1">01. Manufacturing</span>
                <span className="text-sm font-bold text-slate-100">NITA FOAM Chemical</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Orthopedic Mattresses & Foam</span>
              </div>
              <div className="text-white">
                <span className="block text-[10px] font-extrabold text-amber-300 uppercase tracking-widest mb-1">02. Minerals & Mobility</span>
                <span className="text-sm font-bold text-slate-100">GEMKOL Resources</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Gold & Golden Bull Tricycles</span>
              </div>
              <div className="text-white">
                <span className="block text-[10px] font-extrabold text-amber-300 uppercase tracking-widest mb-1">03. Agro Commodities</span>
                <span className="text-sm font-bold text-slate-100">Jerisverich Agro</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Rice Milling & Food Supplies</span>
              </div>
              <div className="text-white">
                <span className="block text-[10px] font-extrabold text-amber-300 uppercase tracking-widest mb-1">04. Real Estate</span>
                <span className="text-sm font-bold text-slate-100">GEMKOL Properties</span>
                <span className="block text-[11px] text-slate-400 mt-0.5">Victory Garden City Kano</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link 
                to="/companies" 
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-3 group shadow-xl"
              >
                EXPLORE OUR COMPANIES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/projects" 
                className="px-8 py-4 bg-amber-500/20 text-amber-200 backdrop-blur-md border border-amber-400/40 rounded-full font-bold hover:bg-amber-500/30 transition-all"
              >
                FLAGSHIP PROJECTS
              </Link>
              <a 
                href="https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20the%20group%20operations%20and%20business%20partnerships."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                WHATSAPP DESK
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll Down</span>
          <ChevronRight className="rotate-90 w-4 h-4 text-white" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              {...fadeInUp}
            >
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Corporate Profile</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Global Standards, <br />Local Excellence.
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  GEMKOL FZE is a premiere diversified business conglomerate headquartered in Nigeria, with a robust portfolio spanning critical economic sectors. We operate as an umbrella organization for multiple industry-leading subsidiaries.
                </p>
                <p>
                  Our commitment to excellence and sustainable business practices has established us as a pillar of reliability in Manufacturing, Mining, Agriculture, and Real Estate development.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { icon: Shield, title: 'Trust', desc: 'Established reputation' },
                  { icon: Globe, title: 'Scope', desc: 'International standards' },
                  { icon: TrendingUp, title: 'Growth', desc: 'Strategic investments' },
                  { icon: CheckCircle2, title: 'Quality', desc: 'Excellence in delivery' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/src/assets/images/hero_gemkol_group_1793890997264.jpg" 
                alt="Corporate Excellence" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Our Business Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Diversified Portfolio</h2>
            <p className="text-slate-600 text-lg">
              GEMKOL FZE operates through specialized divisions, each a leader in its respective market, unified by our corporate values of quality and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANIES.map((company, idx) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img 
                  src={company.heroImage} 
                  alt={company.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-4">
                    {company.sector}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-slate-300 mb-8 line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {company.description}
                  </p>
                  <Link 
                    to={`/companies/${company.id}`}
                    className="flex items-center gap-2 text-white font-bold group/btn"
                  >
                    EXPLORE COMPANY
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-900 transition-all">
                      <ChevronRight size={20} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Impact Section (Trusted By) */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Building a Legacy of <span className="text-blue-500 text-nowrap">Global Trust</span></h2>
              <p className="text-slate-400 text-lg">
                Across Nigeria and beyond, GEMKOL FZE is recognized for industrial competence and unwavering professional standards.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] text-center min-w-[320px]"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/20">
                  <Users size={40} className="text-white" />
                </div>
                <div>
                  <span className="block text-5xl md:text-7xl font-bold mb-3 tracking-tighter tabular-nums">
                    <Counter from={0} to={10482590} duration={4} />+
                  </span>
                  <span className="text-sm md:text-lg uppercase font-bold tracking-[0.4em] text-blue-400">Trusted By Customers</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill="#3b82f6" className="text-blue-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project - Victory Garden City */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-6 block">Featured Project</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Victory Garden City <br /><span className="text-blue-500">Kano</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                A premium gated community development beside NEPZA Kano. Victory Garden City offers modern living from ₦6,000,000 per plot with world-class infrastructure.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  'Gated & Secured',
                  'Flexible Instalment Plans',
                  'Buy 10 Get 1 Free',
                  'Stable Electricity'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-blue-500" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects/victory-garden-city"
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-3 w-fit"
                >
                  VIEW PROJECT DETAILS
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/payment"
                  className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all inline-flex items-center gap-3 w-fit"
                >
                  BUY A PLOT
                  <CreditCard size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
              <img 
                src="/src/assets/images/project_victory_garden_city_1793890998963.jpg" 
                alt="Victory Garden City Kano" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Client Feedback</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Voices of Excellence</h2>
            <p className="text-slate-600 text-lg">
              Hear from our valued partners and clients who have experienced the GEMKOL standard first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="mb-6 text-blue-600">
                  <Quote size={32} fill="currentColor" className="opacity-10" />
                </div>
                <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                  "{t.text}"
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to do business <br />with GEMKOL?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Connect with our corporate team to explore partnership opportunities across our diversified business sectors.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact"
              className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              GET IN TOUCH
            </Link>
            <a 
              href="https://wa.me/2348036091778"
              className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
