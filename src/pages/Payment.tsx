import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Landmark, CheckCircle2, ShieldCheck, ArrowRight, Wallet, Info, Gift, CreditCard } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const BANK_ACCOUNTS = [
  { bank: 'FCMB Bank', number: '9574856018' },
  { bank: 'Jaiz Bank', number: '0014202285' },
  { bank: 'First Bank', number: '2042761037' },
  { bank: 'Stanbic IBTC', number: '0051239119' },
  { bank: 'Wema Bank', number: '0125327929' },
];

const PLOT_OPTIONS = [
  { id: 'standard', name: 'Standard Residential Plot', price: 6000000, size: '450sqm' },
  { id: 'premium', name: 'Premium Corner Piece', price: 7500000, size: '500sqm' },
  { id: 'commercial', name: 'Commercial Plot', price: 15000000, size: '1000sqm' },
];

function Counter({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) {
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

export default function Payment() {
  const [selectedPlot, setSelectedPlot] = useState(PLOT_OPTIONS[0]);

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Secure Your Plot</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Invest in Victory Garden City Kano today. Join hundreds of satisfied investors in our premium gated community.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
              <span className="block text-4xl font-bold text-blue-600 mb-2">
                <Counter from={500} to={587} />+
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Plots Sold So Far</span>
            </div>
            <div className="bg-blue-600 p-8 rounded-3xl shadow-xl text-white text-center">
              <span className="block text-4xl font-bold mb-2">Flexible</span>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-200">Instalment Plans Available</span>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <Gift className="text-blue-400 opacity-20 w-12 h-12" />
              </div>
              <span className="block text-4xl font-bold mb-2">BUY 10 GET 1</span>
              <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Free Bonus Offer</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Plot Selection */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                   Select Plot Type
                </h3>
                <div className="space-y-4">
                  {PLOT_OPTIONS.map((plot) => (
                    <button
                      key={plot.id}
                      onClick={() => setSelectedPlot(plot)}
                      className={cn(
                        "w-full p-6 rounded-2xl border-2 text-left transition-all",
                        selectedPlot.id === plot.id 
                          ? "border-blue-600 bg-blue-50/50 ring-4 ring-blue-50" 
                          : "border-slate-100 hover:border-slate-200"
                      )}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-slate-900">{plot.name}</span>
                        {selectedPlot.id === plot.id && <CheckCircle2 size={18} className="text-blue-600" />}
                      </div>
                      <p className="text-xs text-slate-500 mb-4">{plot.size}</p>
                      <p className="text-xl font-bold text-blue-600">₦{plot.price.toLocaleString()}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-6 text-blue-600">
                  <Info size={24} />
                  <h4 className="font-bold">Instalment Options</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We offer flexible payment plans to suit your financial needs. You can spread your payment across several months after an initial deposit.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-2">Bulk Purchase Promo</p>
                  <p className="text-slate-900 font-bold text-sm">Buy up to 10 plots and receive one plot absolutely FREE!</p>
                </div>
              </div>
            </div>

            {/* Right: Payment Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
                <div className="bg-slate-900 p-10 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-blue-400 uppercase tracking-tight">Bank Transfer Details</h3>
                    <p className="text-slate-400 text-sm">Official payment accounts for Gemkol Properties</p>
                  </div>
                  <Landmark className="text-blue-500/20 w-12 h-12" />
                </div>

                <div className="p-10 md:p-12 space-y-10">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="pb-8 border-b border-slate-100">
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">Account Name</p>
                      <p className="text-2xl font-bold text-slate-900">GEMKOL RESOURCES INVESTMENT & PROPERTIES LTD.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {BANK_ACCOUNTS.map((acc, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                          <p className="text-[10px] text-blue-600 uppercase font-bold tracking-widest mb-2">{acc.bank}</p>
                          <p className="font-mono text-xl font-bold text-slate-900 tracking-wider group-hover:text-blue-700 transition-colors">{acc.number}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                      <Wallet size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 mb-2">Verification Instructions</h4>
                      <p className="text-emerald-700 text-sm leading-relaxed">
                        Please include your <strong>Full Name</strong> and <strong>Plot Type</strong> in the transfer description. Once payment is made, send your proof of payment via WhatsApp for instant verification.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/2348036091778?text=Hello%20GEMKOL%20FZE,%20I%20have%20made%20a%20bank%20transfer%20for%20a%20${encodeURIComponent(selectedPlot.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      NOTIFY VIA WHATSAPP
                      <ArrowRight size={20} />
                    </a>
                    <a 
                      href="mailto:gemkolfze@gmail.com"
                      className="flex-1 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold hover:border-blue-200 transition-all flex items-center justify-center gap-3"
                    >
                      SEND EMAIL RECEIPT
                    </a>
                  </div>
                </div>
              </div>

              {/* Showcase Links (Keeping provided image links structure but with cleaner UI) */}
              <div className="mt-12">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-[0.2em] mb-6 text-center">Development Showcase</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {[
                    { page: 'https://ibb.co/5XdtvpKC', direct: 'https://i.ibb.co/8nJT2vYG/IMG-20260909-WA0097.jpg', title: 'Victory Garden City Kano Master Plan & Infrastructure' },
                    { page: 'https://ibb.co/0ynLvGpX', direct: 'https://i.ibb.co/xq2bd7Ks/IMG-20260909-WA0060-1.jpg', title: 'Estate Road Network & Layout' },
                    { page: 'https://ibb.co/1JTntwtb', direct: 'https://i.ibb.co/PzgYvfvt/IMG-20260909-WA0092.jpg', title: 'Residential Zone Planning' },
                    { page: 'https://ibb.co/S7yXV30G', direct: 'https://i.ibb.co/mFTChctg/IMG-20260909-WA0091.jpg', title: 'Perimeter Security & Gate Development' },
                    { page: 'https://ibb.co/1YLbRk4V', direct: 'https://i.ibb.co/6cmNDkqh/IMG-20260909-WA0090.jpg', title: 'Community Infrastructure & Green Spaces' }
                  ].map((item, i) => (
                    <a 
                      key={i} 
                      href={item.direct} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="aspect-square rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all group relative"
                      title={item.title}
                    >
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img 
                        src={item.direct} 
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
