import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { COMPANIES, GEMKOL_LOGO_URL } from '@/src/constants';

const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Companies', href: '/companies' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 border-slate-200 shadow-sm' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img 
            src={GEMKOL_LOGO_URL} 
            alt="GEMKOL FZE Official Logo" 
            className="h-11 w-auto transition-all object-contain rounded-md"
          />
          <div className="flex flex-col items-start">
            <span className={cn(
              "text-lg font-extrabold tracking-tight whitespace-nowrap transition-colors",
              isScrolled ? "text-slate-900" : "text-white drop-shadow-sm"
            )}>
              GEMKOL FZE
            </span>
            <span className={cn(
              "text-[9px] uppercase tracking-[0.2em] font-semibold opacity-90",
              isScrolled ? "text-blue-600" : "text-amber-300"
            )}>
              Diversified Business Group
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "hover:opacity-100 transition-all whitespace-nowrap shrink-0 relative py-1",
                location.pathname === item.href ? "opacity-100" : "opacity-70",
                isScrolled ? "text-slate-900" : "text-white",
                location.pathname === item.href && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-4 shrink-0">
          <a 
            href="https://wa.me/2348036091778"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0",
              isScrolled 
                ? "bg-slate-900 text-white hover:bg-slate-800" 
                : "bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-black/10"
            )}
          >
            CONTACT US
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={cn(isScrolled ? "text-slate-900" : "text-white")} />
            ) : (
              <Menu className={cn(isScrolled ? "text-slate-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-lg font-semibold text-slate-900 py-2 border-b border-slate-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/2348036091778"
              className="mt-4 w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
