import React, { useState } from 'react';
import { Search, Filter, MessageSquare, ShoppingCart, ArrowRight } from 'lucide-react';
import { COMPANIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const MOCK_PRODUCTS = [
  { id: '1', companyId: 'nita-foam', name: 'NITA FOAM Prestige Orthopedic Mattress', description: 'Premium high-density orthopedic mattress for superior spinal alignment and back support.', category: 'Mattresses', image: 'https://i.ibb.co/CpmvrTJh/IMG-20261107-WA0107.jpg' },
  { id: '2', companyId: 'nita-foam', name: 'Super NITA Mattress', description: 'Luxury comfort mattress engineered with resilient high-density foam for everyday excellence.', category: 'Mattresses', image: 'https://i.ibb.co/RpyrvVyz/IMG-20261107-WA0088.jpg' },
  { id: '7', companyId: 'nita-foam', name: 'Hospital & Healthcare Mattress', description: 'Specialized medical-grade sanitized mattress tailored for clinics, hospitals, and care institutions.', category: 'Institutional', image: 'https://i.ibb.co/Hfzq8Qvh/IMG-20261107-WA0092.jpg' },
  { id: '8', companyId: 'nita-foam', name: 'High-Density Foam Blocks & Sheets', description: 'Industrial-grade polyurethane foam blocks for upholstery, furniture, and custom fabrication.', category: 'Industrial Foam', image: 'https://i.ibb.co/v645LcDR/IMG-20261107-WA0102.jpg' },
  { id: '9', companyId: 'nita-foam', name: 'NITA FOAM Pillows & Bedding Accessories', description: 'Ergonomic fiber and foam pillows, bedsheets, and household bedding essentials.', category: 'Bedding', image: 'https://i.ibb.co/xSL3cTHb/IMG-20261107-WA0073.jpg' },
  { id: '3', companyId: 'gemkol-resources', name: 'Golden Bull Heavy-Duty Cargo Tricycle', description: 'Heavy-duty cargo tricycle designed for commercial logistics, agricultural haulage, and urban distribution.', category: 'Mobility', image: 'https://i.ibb.co/MD15GCZk/IMG-20261107-WA0108.jpg' },
  { id: '4', companyId: 'gemkol-resources', name: 'Golden Bull Electric Bike & Green Mobility', description: 'Sustainable urban mobility solution with resilient high-capacity battery technology.', category: 'Mobility', image: 'https://i.ibb.co/kgbt2k64/IMG-20261107-WA0106.jpg' },
  { id: '10', companyId: 'gemkol-resources', name: 'High-Purity Assayed Gold Bullion', description: 'Certified commercial gold bullion refined to international standards with certified metallurgical assaying.', category: 'Gold & Minerals', image: 'https://i.ibb.co/cXKGpL6N/IMG-20261107-WA0114.jpg' },
  { id: '11', companyId: 'gemkol-resources', name: 'Golden Bull Urban Commuter Tricycle', description: 'Passenger transportation tricycles engineered for high fuel economy, passenger comfort, and durability.', category: 'Mobility', image: 'https://i.ibb.co/d47679CN/IMG-20261107-WA0053.jpg' },
  { id: '5', companyId: 'jerisverich-agro', name: 'Premium Parboiled Long-Grain Jasmine Rice', description: 'Precision-milled, stone-free 50kg parboiled long-grain rice processed for wholesale supply.', category: 'Food & Grains', image: '/src/assets/images/agro_jasmine_rice_1794487443240.jpg' },
  { id: '6', companyId: 'jerisverich-agro', name: 'Aromatic Curry & Savory Seasoning Cubes', description: 'Chef-formulated blended bouillon seasoning cubes and curry powder condiments.', category: 'Food & Condiments', image: '/src/assets/images/agro_curry_seasoning_1794487448323.jpg' },
  { id: '12', companyId: 'jerisverich-agro', name: 'Cold-Pressed Native Groundnut Vegetable Oil', description: 'Triple-filtered pure organic golden groundnut peanut cooking oil in retail and bulk drums.', category: 'Cooking Oils', image: '/src/assets/images/agro_groundnut_oil_1794487446899.jpg' },
  { id: '13', companyId: 'jerisverich-agro', name: 'Pure Organic Virgin Palm Cooking Oil', description: 'Rich nutrient-dense unadulterated red palm oil for domestic cooking and food manufacturing.', category: 'Cooking Oils', image: '/src/assets/images/agro_palm_oil_1794487450111.jpg' },
  { id: '14', companyId: 'jerisverich-agro', name: 'Clean Golden Yellow Corn & Maize Grains', description: 'Top-grade dried yellow maize packaged in 50kg bags for wholesale food processing.', category: 'Food & Grains', image: '/src/assets/images/agro_yellow_maize_1794487446818.jpg' },
  { id: '15', companyId: 'jerisverich-agro', name: 'High-Purity Natural White Sesame Seeds', description: 'Export-certified clean organic white sesame seeds curated for global trading.', category: 'Oilseeds & Export', image: '/src/assets/images/agro_sesame_seeds_1794487446237.jpg' },
  { id: '16', companyId: 'gemkol-properties', name: 'Serviced Residential Plots (Victory Garden City)', description: 'Master-planned serviced residential land plots beside NEPZA Kano with verified C of O and beacons.', category: 'Real Estate', image: '/src/assets/images/prop_serviced_residential_plots_1794487470221.jpg' },
  { id: '17', companyId: 'gemkol-properties', name: 'Contemporary 5-Bedroom Executive Villa', description: 'Turnkey luxury duplex villa within a gated estate featuring smart home integration and private lawns.', category: 'Real Estate', image: '/src/assets/images/prop_luxury_duplex_villa_1794487467574.jpg' },
  { id: '18', companyId: 'gemkol-properties', name: 'Willowbrook Luxury 4-Bedroom Terrace Townhouse', description: 'Premium modern terrace townhouse with dedicated parking, paved estate roads, and 24/7 security.', category: 'Real Estate', image: '/src/assets/images/prop_residential_terrace_homes_1794487469508.jpg' },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCompany, setActiveCompany] = useState('all');

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCompany = activeCompany === 'all' || p.companyId === activeCompany;
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Product Catalogue</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Explore our diverse range of high-quality products across manufacturing, mobility, and agro-allied sectors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCompany('all')}
              className={cn(
                "px-6 py-4 rounded-2xl text-sm font-bold transition-all",
                activeCompany === 'all' ? "bg-slate-900 text-white shadow-lg" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              )}
            >
              All Companies
            </button>
            {COMPANIES.map(company => (
              <button 
                key={company.id}
                onClick={() => setActiveCompany(company.id)}
                className={cn(
                  "px-6 py-4 rounded-2xl text-sm font-bold transition-all",
                  activeCompany === company.id ? "bg-slate-900 text-white shadow-lg" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                )}
              >
                {company.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const company = COMPANIES.find(c => c.id === product.companyId);
            return (
              <div key={product.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">
                    <span>{company?.name}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                    <span className="text-slate-400 text-xs font-medium italic">Enquire for pricing</span>
                    <a 
                      href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline"
                    >
                      ENQUIRE NOW
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg italic">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
