import React from 'react';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348036091778"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
      aria-label="WhatsApp Us"
    >
      <MessageSquare fill="currentColor" className="w-6 h-6" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-slate-100">
        Chat with GEMKOL
      </span>
    </a>
  );
}

import { Header } from './Header';
import { Footer } from './Footer';
import { AIAssistant } from './AIAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <AIAssistant />
    </div>
  );
}
