import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Contact GEMKOL FZE</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Have a question about our companies, products, or services? Our corporate team is ready to assist you with any enquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Chat with Us</h3>
              <p className="text-slate-500 text-sm mb-6">Get instant assistance via WhatsApp.</p>
              <a 
                href="https://wa.me/2348036091778"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline inline-flex items-center gap-2"
              >
                08036091778
              </a>
            </div>

            <div className="bg-slate-950 p-10 rounded-3xl text-white">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Address</h3>
              <p className="text-slate-400 text-sm mb-6">Send us a detailed enquiry.</p>
              <a 
                href="mailto:gemkolfze@gmail.com"
                className="text-blue-400 font-bold hover:underline"
              >
                gemkolfze@gmail.com
              </a>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Corporate Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                45 Aviation Quarters, Opp. NCAA Quarters, Off Airport Road, Kano, Nigeria
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+234..." 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option>General Enquiry</option>
                  <option>Product Enquiry</option>
                  <option>Property Investment</option>
                  <option>Business Partnership</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can we help you today?" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="button" 
                  className="w-full py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-24 py-12 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-slate-900">
            <Clock size={20} className="text-blue-600" />
            <span className="font-bold">Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center gap-4 text-slate-900">
            <Globe size={20} className="text-blue-600" />
            <span className="font-bold">Global Corporate Headquarters: Kano, Nigeria</span>
          </div>
        </div>
      </div>
    </div>
  );
}
