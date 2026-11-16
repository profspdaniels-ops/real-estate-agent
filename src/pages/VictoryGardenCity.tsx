import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Zap, Droplet, Trees, School, Building2, Car, HeartPulse, ShieldCheck, MessageSquare } from 'lucide-react';

const FEATURES = [
  { icon: ShieldCheck, title: 'Estate Gate & Fencing', desc: 'Secure perimeter with controlled access.' },
  { icon: Trees, title: 'Recreation Spaces', desc: 'Planned parks and green areas.' },
  { icon: Car, title: 'Dual Carriage Access', desc: 'Modern road networks for smooth transit.' },
  { icon: School, title: 'Educational Facilities', desc: 'Nursery, Primary, and Secondary schools.' },
  { icon: HeartPulse, title: 'Healthcare', desc: 'Dedicated hospital within the estate.' },
  { icon: Building2, title: 'Social Facilities', desc: 'Events centre and shopping facilities.' },
  { icon: Zap, title: 'Electricity', desc: 'Reliable connection and Biogas plant.' },
  { icon: Droplet, title: 'Water & Waste', desc: 'Centralized water and waste management.' },
];

export default function VictoryGardenCity() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/hero_real_estate_1793890998706.jpg" 
            alt="Victory Garden City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest mb-6 rounded">
              Flagship Project
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">Victory Garden City <br /><span className="text-blue-400">Kano</span></h1>
            <div className="flex items-center gap-2 text-slate-200 mb-6">
              <MapPin size={20} className="text-blue-400" />
              <span className="text-lg font-medium">Zangon Yola Village, beside NEPZA Kano</span>
            </div>
            <p className="text-2xl font-bold text-white mb-12">Plots from ₦6,000,000 <span className="text-sm font-normal text-slate-300 block mt-2 tracking-widest uppercase">Instalment Plans · Buy 10 Get 1 FREE</span></p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/payment"
                className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl shadow-black/20"
              >
                BUY A PLOT
              </Link>
              <a 
                href="https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20interested%20in%20Victory%20Garden%20City%20Kano.%20Please%20provide%20more%20information."
                className="px-10 py-5 bg-blue-600/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all shadow-xl shadow-black/20"
              >
                ENQUIRE NOW
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Redefining Urban Living in Kano</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-blue-100">From ₦6M per Plot</span>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-emerald-100">Instalment Plans</span>
                <span className="px-4 py-2 bg-amber-50 text-amber-600 rounded-xl text-xs font-bold uppercase tracking-widest border border-amber-100">Buy 10 Get 1 FREE</span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Victory Garden City is a meticulously planned gated community situated along Panisau-Ungogo Road, beside the Kano Free Trade Zone (NEPZA). This development represents the pinnacle of modern estate design, combining safety, luxury, and functionality.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                Under the expert development of GEMKOL RESOURCES INVESTMENTS AND PROPERTIES LTD, the estate is designed to be self-sufficient, offering everything from education and healthcare to premium recreation and shopping.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 text-blue-600 font-bold mb-4">
                  <Shield size={24} />
                  <span>Secure Investment</span>
                </div>
                <p className="text-slate-500 text-sm italic">
                  "Strategically located beside NEPZA Kano / Kano Free Trade Zone, offering high appreciation potential and a secure living environment."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/src/assets/images/project_victory_garden_city_1793890998963.jpg" 
                alt="VGC Entrance" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl hidden md:block border border-slate-100">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-blue-600 mb-1">Modern</span>
                  <span className="block text-xs uppercase tracking-widest font-bold text-slate-400">Amenities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Estate Infrastructure</h2>
            <p className="text-slate-600">Victory Garden City is equipped with comprehensive facilities to ensure a comfortable and prestigious lifestyle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 blur-[120px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Plot Today</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            Plots from ₦6,000,000. Take advantage of our flexible instalment plans and bulk purchase offers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20interested%20in%20Victory%20Garden%20City%20Kano.%20Please%20provide%20more%20information."
              className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-2xl"
            >
              <MessageSquare size={20} />
              WHATSAPP ENQUIRY
            </a>
            <Link 
              to="/contact"
              className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all"
            >
              CONTACT OFFICE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
