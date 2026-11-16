import React, { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { COMPANIES } from '@/src/constants';
import { 
  NITA_FOAM_GALLERY, 
  GEMKOL_RESOURCES_GALLERY,
  JERISVERICH_AGRO_GALLERY,
  GEMKOL_PROPERTIES_GALLERY
} from '@/src/data/companyGalleries';

interface MediaItemData {
  id: string;
  title: string;
  description?: string;
  type: 'image' | 'video';
  companyId: string;
  url: string;
  category: string;
}

const BASE_MEDIA_ITEMS: MediaItemData[] = [
  { id: '1', title: 'GEMKOL Corporate Headquarters', description: 'Headquarters and central administrative complex in Kano, Nigeria.', type: 'image', companyId: 'all', url: '/src/assets/images/hero_gemkol_group_1793890997264.jpg', category: 'Corporate' },
];

// Combine all official subsidiary and group media assets
const ALL_MEDIA_ITEMS: MediaItemData[] = [
  ...BASE_MEDIA_ITEMS,
  ...NITA_FOAM_GALLERY.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: 'image' as const,
    companyId: item.companyId,
    url: item.url,
    category: item.category,
  })),
  ...GEMKOL_RESOURCES_GALLERY.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: 'image' as const,
    companyId: item.companyId,
    url: item.url,
    category: item.category,
  })),
  ...JERISVERICH_AGRO_GALLERY.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: 'image' as const,
    companyId: item.companyId,
    url: item.url,
    category: item.category,
  })),
  ...GEMKOL_PROPERTIES_GALLERY.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: 'image' as const,
    companyId: item.companyId,
    url: item.url,
    category: item.category,
  }))
];

export default function Media() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredMedia = ALL_MEDIA_ITEMS.filter(item => {
    const matchesCompany = activeFilter === 'all' || item.companyId === activeFilter || item.companyId === 'all';
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesCompany && matchesCategory;
  });

  const availableCategories = ['all', ...Array.from(new Set(
    (activeFilter === 'all' ? ALL_MEDIA_ITEMS : ALL_MEDIA_ITEMS.filter(i => i.companyId === activeFilter || i.companyId === 'all')).map(i => i.category)
  ))];

  const currentItem = lightboxIndex !== null ? filteredMedia[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && filteredMedia.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredMedia.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null && filteredMedia.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredMedia.length) % filteredMedia.length);
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
  }, [lightboxIndex, filteredMedia.length]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">
            Corporate Media Center
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Media Gallery</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            A comprehensive visual documentation of GEMKOL FZE operations, subsidiary manufacturing facilities, high-grade products, and flagship developments.
          </p>
        </div>

        {/* Company Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            type="button"
            onClick={() => { setActiveFilter('all'); setActiveCategory('all'); }}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap",
              activeFilter === 'all' 
                ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
            )}
          >
            All Divisions ({ALL_MEDIA_ITEMS.length})
          </button>
          {COMPANIES.map(company => {
            const count = ALL_MEDIA_ITEMS.filter(i => i.companyId === company.id).length;
            return (
              <button 
                key={company.id}
                type="button"
                onClick={() => { setActiveFilter(company.id); setActiveCategory('all'); }}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap",
                  activeFilter === company.id 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                )}
              >
                {company.name.split(' ')[0]} {company.id === 'nita-foam' ? 'FOAM' : ''} ({count})
              </button>
            );
          })}
        </div>

        {/* Sub-Category Filters */}
        {availableCategories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-slate-100">
            {availableCategories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap",
                  activeCategory === cat
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => {
            const company = COMPANIES.find(c => c.id === item.companyId);
            return (
              <div 
                key={item.id} 
                onClick={() => openLightbox(index)}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1"
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
                      {item.type === 'video' ? <Play size={20} fill="currentColor" /> : <Maximize2 size={20} />}
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1.5">
                      {company ? company.name : 'GEMKOL FZE'}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Enlarge Photo
                    </span>
                    <a
                      href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20${encodeURIComponent(item.title)}.`}
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
            );
          })}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 text-lg italic">No media items found matching your current filter.</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentItem && (
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
                    {currentItem.category}
                  </span>
                  <span className="text-xs text-slate-400">
                    {lightboxIndex + 1} of {filteredMedia.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20${encodeURIComponent(currentItem.title)}.`}
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
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image */}
              <div className="relative flex-grow bg-black flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-[500px]">
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />

                {filteredMedia.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevLightbox}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={nextLightbox}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                      aria-label="Next"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-950 border-t border-white/10 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {currentItem.title}
                </h3>
                {currentItem.description && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {currentItem.description}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-500">
                    GEMKOL FZE Media Centre · Official Media Asset
                  </span>
                  <a
                    href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20am%20enquiring%20about%20${encodeURIComponent(currentItem.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <MessageSquare size={14} />
                    Contact GEMKOL: 08036091778
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
