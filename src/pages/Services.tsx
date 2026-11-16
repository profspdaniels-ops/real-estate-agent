import React from 'react';
import { Settings, Droplets, Leaf, Home, Shield, Truck, Globe, Briefcase } from 'lucide-react';

const MASTER_SERVICES = [
  { 
    title: 'Manufacturing', 
    icon: Settings, 
    desc: 'High-quality production of foam, mattresses, and allied chemical products through NITA FOAM.',
    items: ['Orthopedic Mattresses', 'Hospital Grade Bedding', 'Industrial Foam Solutions', 'Allied Chemicals']
  },
  { 
    title: 'Resources & Minerals', 
    icon: Droplets, 
    desc: 'Strategic exploration and processing of mineral resources and precious metals.',
    items: ['Mineral Exploration', 'Gold Processing', 'Resource Consulting', 'Industrial Minerals']
  },
  { 
    title: 'Agro-Allied', 
    icon: Leaf, 
    desc: 'Large-scale processing and distribution of essential food commodities.',
    items: ['Rice & Grain Processing', 'Food Commodity Distribution', 'Agro-Contracting', 'Household Condiments']
  },
  { 
    title: 'Real Estate', 
    icon: Home, 
    desc: 'Premium property investment and estate development including Victory Garden City.',
    items: ['Estate Development', 'Land Acquisition', 'Property Management', 'Real Estate Investment']
  },
  { 
    title: 'Logistics', 
    icon: Truck, 
    desc: 'Efficient transportation and distribution networks for our diverse product range.',
    items: ['Supply Chain Management', 'Industrial Transportation', 'Wholesale Distribution', 'Fleet Management']
  },
  { 
    title: 'Consultancy', 
    icon: Briefcase, 
    desc: 'Expert business and technical consultancy across our core operational sectors.',
    items: ['Industrial Consulting', 'Resource Management', 'Real Estate Advisory', 'Business Development']
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            GEMKOL FZE provides a comprehensive suite of professional services through its specialized subsidiaries, ensuring quality and reliability across every touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MASTER_SERVICES.map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
