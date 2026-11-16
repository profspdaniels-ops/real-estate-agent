import React, { useState } from 'react';
import { Database, Check, Copy, Code, Terminal, Server, ShieldCheck, Zap, Layers, FileCode, RefreshCw } from 'lucide-react';
import { SUPABASE_SQL_SCRIPT, SUPABASE_CLIENT_CODE } from '@/src/data/supabaseScript';
import { GEMKOL_LOGO_URL } from '@/src/constants';
import { testSupabaseConnection } from '@/src/lib/supabase';

export default function SupabaseHub() {
  const [activeTab, setActiveTab] = useState<'sql' | 'typescript' | 'tables' | 'tester'>('sql');
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedTs, setCopiedTs] = useState(false);

  // Tester state
  const [testUrl, setTestUrl] = useState('');
  const [testKey, setTestKey] = useState('');
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [testing, setTesting] = useState(false);

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCRIPT);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  const handleCopyTs = () => {
    navigator.clipboard.writeText(SUPABASE_CLIENT_CODE);
    setCopiedTs(true);
    setTimeout(() => setCopiedTs(false), 2500);
  };

  const handleRunTest = async (e: React.FormEvent) => {
    e.preventDefault();
    setTesting(true);
    setTestResult(null);

    const res = await testSupabaseConnection(testUrl || undefined, testKey || undefined);
    setTestResult(res);
    setTesting(false);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-8 md:p-12 border border-white/10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={GEMKOL_LOGO_URL} 
                  alt="GEMKOL FZE Official Logo" 
                  className="h-12 w-auto object-contain rounded-md bg-white/10 p-1 border border-white/20"
                />
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Database size={14} /> Supabase PostgreSQL
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Supabase SQL Database & Connectivity Hub
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Official relational PostgreSQL database scripts, table schemas, Row Level Security (RLS) policies, and TypeScript integration handlers for GEMKOL FZE conglomerate data.
              </p>
            </div>

            <div className="bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                <Server size={16} className="text-amber-400" />
                <span>Engine: PostgreSQL 15+</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Security: RLS Policies Enabled</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Zap size={16} className="text-sky-400" />
                <span>Integration: @supabase/supabase-js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('sql')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'sql' 
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <FileCode size={18} />
            SQL Script (Supabase DDls & RLS)
          </button>
          
          <button
            onClick={() => setActiveTab('typescript')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'typescript' 
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Code size={18} />
            TypeScript Client Connection
          </button>

          <button
            onClick={() => setActiveTab('tables')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'tables' 
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Layers size={18} />
            Schema Overview (5 Tables)
          </button>

          <button
            onClick={() => setActiveTab('tester')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'tester' 
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20' 
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Terminal size={18} />
            Connection Tester
          </button>
        </div>

        {/* Tab 1: SQL Script */}
        {activeTab === 'sql' && (
          <div className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in duration-300">
            <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">supabase.sql — GEMKOL FZE Schema & RLS</span>
              </div>
              <button
                onClick={handleCopySql}
                className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-950 hover:bg-amber-300 rounded-lg text-xs font-bold transition-all shadow-md"
              >
                {copiedSql ? (
                  <>
                    <Check size={16} className="text-emerald-950" />
                    Copied SQL Script!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy SQL Script
                  </>
                )}
              </button>
            </div>
            
            <div className="p-6 bg-slate-950/90 overflow-x-auto max-h-[600px] font-mono text-xs md:text-sm text-amber-200/90 leading-relaxed">
              <pre>{SUPABASE_SQL_SCRIPT}</pre>
            </div>

            <div className="p-6 bg-slate-900 border-t border-white/10 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <span>Run this script directly in the <strong>SQL Editor</strong> in your Supabase Dashboard to instantiate all tables and RLS security policies.</span>
              <a
                href="https://supabase.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all shrink-0"
              >
                Open Supabase Dashboard →
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: TypeScript Client */}
        {activeTab === 'typescript' && (
          <div className="bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in duration-300">
            <div className="px-6 py-4 bg-slate-950 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="w-3 h-3 rounded-full bg-sky-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2">src/lib/supabase.ts — Client Initialization</span>
              </div>
              <button
                onClick={handleCopyTs}
                className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-950 hover:bg-amber-300 rounded-lg text-xs font-bold transition-all shadow-md"
              >
                {copiedTs ? (
                  <>
                    <Check size={16} className="text-emerald-950" />
                    Copied TypeScript!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy TypeScript Code
                  </>
                )}
              </button>
            </div>

            <div className="p-6 bg-slate-950/90 overflow-x-auto max-h-[600px] font-mono text-xs md:text-sm text-sky-200/90 leading-relaxed">
              <pre>{SUPABASE_CLIENT_CODE}</pre>
            </div>

            <div className="p-6 bg-slate-900 border-t border-white/10 text-xs text-slate-400">
              Install Supabase client in your project with <code>npm install @supabase/supabase-js</code>. Environment variables can be configured in <code>.env</code> as <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>.
            </div>
          </div>
        )}

        {/* Tab 3: Tables Overview */}
        {activeTab === 'tables' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            <TableCard 
              name="public.companies"
              purpose="Stores GEMKOL FZE subsidiary corporate profiles & metadata"
              columns={['id (PK)', 'name', 'sector', 'tagline', 'logo_url', 'description', 'created_at']}
              rls="Public READ / Admin ALL"
            />
            <TableCard 
              name="public.vgc_plot_payments"
              purpose="Tracks Victory Garden City Kano plot purchases & Paystack transactions"
              columns={['id (PK UUID)', 'reference (UNIQUE)', 'plot_number', 'buyer_name', 'buyer_email', 'buyer_phone', 'amount_paid', 'status']}
              rls="Public INSERT / Admin ALL"
            />
            <TableCard 
              name="public.property_enquiries"
              purpose="Captures general enquiries for VGC plots and subsidiary products"
              columns={['id (PK UUID)', 'company_id (FK)', 'sender_name', 'sender_email', 'sender_phone', 'subject', 'message', 'status']}
              rls="Public INSERT / Admin ALL"
            />
            <TableCard 
              name="public.product_catalog"
              purpose="Stores product listings across NITA Foam, Jerisverich Agro, and Golden Bull"
              columns={['id (PK UUID)', 'company_id (FK)', 'product_name', 'category', 'description', 'image_url', 'price_on_enquiry']}
              rls="Public READ / Admin ALL"
            />
            <TableCard 
              name="public.executive_messages"
              purpose="Captures direct executive communications to GCEO Dr. Uche Godwin Jerome"
              columns={['id (PK UUID)', 'sender_name', 'sender_organization', 'email', 'phone', 'purpose', 'message', 'created_at']}
              rls="Public INSERT / Admin ALL"
            />
          </div>
        )}

        {/* Tab 4: Connection Tester */}
        {activeTab === 'tester' && (
          <div className="bg-slate-900 rounded-3xl border border-white/10 p-8 max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-300">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Terminal className="text-amber-400" /> Supabase Connection Tester
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Test your Supabase project URL and Anon Key against the live `@supabase/supabase-js` client handler.
            </p>

            <form onSubmit={handleRunTest} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Supabase Project URL
                </label>
                <input
                  type="url"
                  placeholder="https://your-project.supabase.co"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Supabase Anon Key
                </label>
                <input
                  type="password"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={testKey}
                  onChange={(e) => setTestKey(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={testing}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 disabled:opacity-50"
              >
                {testing ? (
                  <>
                    <RefreshCw className="animate-spin" size={18} />
                    Testing Connection...
                  </>
                ) : (
                  <>
                    <Zap size={18} />
                    Test Connection
                  </>
                )}
              </button>
            </form>

            {testResult && (
              <div className={`mt-6 p-4 rounded-xl border text-sm flex items-start gap-3 ${
                testResult.success 
                  ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200' 
                  : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
              }`}>
                {testResult.success ? <Check size={20} className="text-emerald-400 shrink-0" /> : <ShieldCheck size={20} className="text-rose-400 shrink-0" />}
                <div>
                  <p className="font-bold">{testResult.success ? 'Supabase Connection Successful!' : 'Connection Note:'}</p>
                  <p className="text-xs opacity-90 mt-1">{testResult.message}</p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

function TableCard({ name, purpose, columns, rls }: { name: string; purpose: string; columns: string[]; rls: string }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-sm font-bold text-amber-300">{name}</span>
          <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-slate-400">
            Table
          </span>
        </div>
        <p className="text-slate-400 text-xs mb-4 leading-relaxed">{purpose}</p>

        <div className="space-y-1.5 mb-6">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">Columns</span>
          {columns.map((col, idx) => (
            <div key={idx} className="text-xs font-mono text-slate-300 bg-slate-950/60 px-2.5 py-1 rounded border border-white/5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {col}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
        <span>Security:</span>
        <span className="font-semibold text-emerald-400">{rls}</span>
      </div>
    </div>
  );
}
