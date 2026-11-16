import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, Phone, Mail, ChevronRight, ChevronLeft, Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { COMPANIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { getCompanyGallery, GalleryImage } from '@/src/data/companyGalleries';

export default function CompanyDetail() {
  const { id } = useParams();
  const company = COMPANIES.find(c => c.id === id);

  if (!company) {
    return <Navigate to="/companies" replace />;
  }

  const isNitaFoam = company.id === 'nita-foam';
  const isResources = company.id === 'gemkol-resources';
  const isAgro = company.id === 'jerisverich-agro';
  const isProperties = company.id === 'gemkol-properties';

  const galleryImages = getCompanyGallery(company.id);
  const galleryCategories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = galleryImages.filter(img => 
    selectedCategory === 'All' || img.category === selectedCategory
  );

  const currentLightboxItem: GalleryImage | undefined = lightboxIndex !== null ? filteredGallery[lightboxIndex] : undefined;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && filteredGallery.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && filteredGallery.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={company.heroImage} 
            alt={company.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            {company.sector}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {company.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-2xl mx-auto italic"
          >
            "{company.tagline}"
          </motion.p>
        </div>
      </section>

      {/* Overview & Philosophy */}
      <section className="py-24 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">About {company.name}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                {company.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                      <ChevronRight size={18} />
                    </div>
                    Our Vision
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {company.vision}
                  </p>
                </div>
                <div className="bg-slate-950 p-10 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                      <ChevronRight size={18} />
                    </div>
                    Our Mission
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {company.mission}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-3xl p-10 sticky top-32 border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-8">Core Values</h4>
                <ul className="space-y-6">
                  {company.values.map((value, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-bold text-slate-700">{value}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 pt-12 border-t border-slate-200">
                  <h5 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Contact Division</h5>
                  <div className="space-y-4">
                    <a href="https://wa.me/2348036091778" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      <MessageSquare size={18} />
                      WhatsApp Enquiries
                    </a>
                    <a href="tel:08036091778" className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors font-medium">
                      <Phone size={18} />
                      08036091778
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600">Specialized solutions delivered with precision and corporate excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isNitaFoam && [
              { title: 'Foam Manufacturing', desc: 'State-of-the-art production of high-density foam for various industrial and household uses.' },
              { title: 'Mattress Production', desc: 'Crafting orthopedic, hospital, and luxury mattresses using premium materials.' },
              { title: 'Bedding Solutions', desc: 'Complete range of pillows, bedsheets, and blankets for home and institutional use.' }
            ].map((s, i) => <ServiceCard key={i} {...s} />)}

            {isResources && [
              { title: 'Mineral Exploration', desc: 'Expert geological surveys and resource identification across Nigeria.' },
              { title: 'Gold Mining & Processing', desc: 'Sustainable mining operations and high-purity processing of gold resources.' },
              { title: 'Mobility Solutions', desc: 'Manufacturing and distribution of Golden Bull tricycles and electric bikes.' }
            ].map((s, i) => <ServiceCard key={i} {...s} />)}

            {isAgro && [
              { title: 'Crop Processing', desc: 'Modern processing of rice and corn commodities for wholesale and retail markets.' },
              { title: 'Distribution', desc: 'Robust supply chain for essential food items and cooking condiments.' },
              { title: 'General Contracting', desc: 'Large-scale supply of agro-allied products to institutions and government agencies.' }
            ].map((s, i) => <ServiceCard key={i} {...s} />)}

            {isProperties && [
              { title: 'Estate Development', desc: 'Conceptualizing and building premium residential and commercial estates.' },
              { title: 'Property Investment', desc: 'Strategic advisory and management for high-yield real estate portfolios.' },
              { title: 'Facility Management', desc: 'Maintenance and management of modern living communities like Victory Garden City.' }
            ].map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Company Photo Gallery Section */}
      {galleryImages.length > 0 && (
        <section id="gallery" className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">
                  Visual Showcase
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                  {company.name} Gallery
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl">
                  {isNitaFoam 
                    ? 'Explore authentic photographs from our factory floor, mattress production lines, foam curing facilities, and finished bedding collections.'
                    : isResources
                    ? 'Explore photographs from our mineral exploration sites, gold processing, Golden Bull mobility fleet, industrial machinery, and home interior solutions.'
                    : isAgro
                    ? 'Explore our premium agricultural commodities, wholesale staple grains, cold-pressed vegetable oils, and culinary household seasoning products.'
                    : isProperties
                    ? 'Explore our master-planned estates, serviced residential and commercial land plots, architectural duplexes, and prime real estate investments.'
                    : 'A comprehensive visual documentation of corporate operations, infrastructure, and products.'}
                </p>
              </div>

              {/* Category Filter Pills (unboxed clean segmented style) */}
              {galleryCategories.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap",
                        selectedCategory === cat
                          ? "bg-slate-900 text-white shadow-md"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-blue-600 font-semibold group-hover:underline">
                        View Image
                      </span>
                      <a
                        href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20${encodeURIComponent(item.title)}%20from%20${encodeURIComponent(company.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-emerald-600 transition-colors"
                        title="Enquire on WhatsApp"
                      >
                        <MessageSquare size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && currentLightboxItem && (
              <div 
                className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
                onClick={closeLightbox}
              >
                <div 
                  className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-blue-600 rounded-full">
                        {currentLightboxItem.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {lightboxIndex + 1} of {filteredGallery.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20${encodeURIComponent(currentLightboxItem.title)}%20from%20${encodeURIComponent(company.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-colors"
                      >
                        <MessageSquare size={14} />
                        Enquire on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={closeLightbox}
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close image modal"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Modal Body / Image */}
                  <div className="relative flex-grow bg-black flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-[500px]">
                    <img
                      src={currentLightboxItem.url}
                      alt={currentLightboxItem.title}
                      referrerPolicy="no-referrer"
                      className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                    />

                    {/* Navigation buttons */}
                    {filteredGallery.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prevLightbox}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          type="button"
                          onClick={nextLightbox}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Modal Caption */}
                  <div className="p-6 bg-slate-950 border-t border-white/10 text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      {currentLightboxItem.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {currentLightboxItem.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                      <span className="text-xs text-slate-500">
                        {company.name} · An Affiliate of GEMKOL FZE
                      </span>
                      <a
                        href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20interested%20in%20${encodeURIComponent(currentLightboxItem.title)}%20(${encodeURIComponent(company.name)}).%20Please%20provide%20pricing%20and%20specifications.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                      >
                        <MessageSquare size={14} />
                        Order / Enquire: 08036091778
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Interested in our {company.sector} division?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Contact the GEMKOL corporate office for enquiries regarding {company.name} products and services.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl transition-all"
            >
              ENQUIRE NOW
            </Link>
            <a 
              href="https://wa.me/2348036091778"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-3"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <CheckCircle2 size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
