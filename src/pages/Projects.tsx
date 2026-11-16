import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'victory-garden-city',
    name: 'Victory Garden City - Kano',
    location: 'Zangon Yola, beside NEPZA Kano',
    description: 'A landmark gated community development offering modern residential serviced plots, dual-carriage access roads, and world-class estate infrastructure.',
    image: '/src/assets/images/prop_serviced_residential_plots_1794487470221.jpg',
    status: 'Ongoing Development'
  },
  {
    id: 'nita-foam-factory',
    name: 'NITA FOAM Industrial Expansion Phase II',
    location: 'Kano Industrial Area',
    description: 'Strategic expansion of our foam manufacturing capacity with new state-of-the-art polyurethane continuous foaming and automated mattress contouring lines.',
    image: '/src/assets/images/hero_nita_foam_1793890997238.jpg',
    status: 'Completed'
  },
  {
    id: 'agro-processing-hub',
    name: 'Jerisverich Grain Processing & Silo Complex',
    location: 'Northern Agricultural Belt, Kano',
    description: 'Modern agricultural commodity aggregation, mechanized grain cleaning, parboiled rice milling lines, and automated bulk packaging silos.',
    image: '/src/assets/images/agro_yellow_maize_1794487446818.jpg',
    status: 'Operational'
  },
  {
    id: 'metro-logistics-park',
    name: 'Metro Cargo & Industrial Logistics Park',
    location: 'Aviation Quarters / NEPZA Corridor, Kano',
    description: 'Integrated multi-tenant logistics park equipped with container handling cranes, hydraulic docking bays, and mineral transit hubs.',
    image: '/src/assets/images/prop_industrial_logistics_park_1794487471704.jpg',
    status: 'Phase I Delivered'
  }
];

export default function Projects() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Our Projects</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            GEMKOL FZE takes pride in executing high-impact projects that drive industrial growth and redefine urban living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  to={project.id === 'victory-garden-city' ? '/projects/victory-garden-city' : '#'}
                  className="inline-flex items-center gap-3 text-slate-900 font-bold hover:gap-5 transition-all"
                >
                  VIEW DETAILS
                  <ArrowRight size={20} className="text-blue-600" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
