export const SUPABASE_SQL_SCRIPT = `-- ====================================================================
-- SUPABASE POSTGRESQL DATABASE CONNECTIVITY & SCHEMA SCRIPT
-- Application: GEMKOL FZE Conglomerate Database
-- Target Engine: Supabase PostgreSQL 15+ / 16+
-- ====================================================================

-- 1. ENABLE REQUIRED EXTENSIONS ON SUPABASE
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. CREATE SUBSIDIARY COMPANIES TABLE
CREATE TABLE IF NOT EXISTS public.companies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sector VARCHAR(100) NOT NULL,
    tagline TEXT,
    logo_url TEXT,
    hero_image_url TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. CREATE VICTORY GARDEN CITY PLOT PAYMENTS TABLE (Paystack / Supabase Integration)
CREATE TABLE IF NOT EXISTS public.vgc_plot_payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference VARCHAR(100) UNIQUE NOT NULL,
    plot_number VARCHAR(50) NOT NULL,
    buyer_name VARCHAR(255) NOT NULL,
    buyer_email VARCHAR(255) NOT NULL,
    buyer_phone VARCHAR(50) NOT NULL,
    amount_paid DECIMAL(15, 2) NOT NULL,
    payment_channel VARCHAR(50) DEFAULT 'Paystack',
    status VARCHAR(50) DEFAULT 'pending',
    bank_account_used VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CREATE PROPERTY & GENERAL ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.property_enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id VARCHAR(50) REFERENCES public.companies(id) ON DELETE CASCADE,
    sender_name VARCHAR(255) NOT NULL,
    sender_email VARCHAR(255) NOT NULL,
    sender_phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'unread',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. CREATE PRODUCT CATALOGUE TABLE
CREATE TABLE IF NOT EXISTS public.product_catalog (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id VARCHAR(50) REFERENCES public.companies(id) ON DELETE CASCADE,
    product_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    image_url TEXT,
    price_on_enquiry BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. CREATE EXECUTIVE MESSAGES / GCEO INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.executive_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_name VARCHAR(255) NOT NULL,
    sender_organization VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    purpose VARCHAR(100) DEFAULT 'Strategic Partnership',
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ====================================================================
-- 7. CONFIGURE SUPABASE ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Enable RLS on all tables
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vgc_plot_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_catalog ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.executive_messages ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access to Companies & Product Catalog
CREATE POLICY "Public Read Companies" ON public.companies
    FOR SELECT USING (true);

CREATE POLICY "Public Read Product Catalog" ON public.product_catalog
    FOR SELECT USING (true);

-- Allow Anonymous/Public to Insert Plot Payments & Enquiries
CREATE POLICY "Public Insert VGC Payments" ON public.vgc_plot_payments
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Insert Property Enquiries" ON public.property_enquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public Insert Executive Messages" ON public.executive_messages
    FOR INSERT WITH CHECK (true);

-- Allow Authenticated Staff/Admins Full Access
CREATE POLICY "Admin Full Control VGC Payments" ON public.vgc_plot_payments
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admin Full Control Enquiries" ON public.property_enquiries
    FOR ALL USING (auth.role() = 'authenticated');

-- ====================================================================
-- 8. SEED INITIAL DATA FOR GEMKOL FZE CONGLOMERATE
-- ====================================================================

INSERT INTO public.companies (id, name, sector, tagline, logo_url, description) VALUES
('nita-foam', 'NITA FOAM CHEMICAL COMPANY', 'Manufacturing', 'Quality Comfort for Better Living', 'https://i.ibb.co/mrMvvTvK/GEMKOLFZE-Real-Estate-Logo-1.png', 'Polyurethane foam manufacturing, orthopedic mattresses, and chemical bedding solutions.'),
('gemkol-resources', 'GEMKOL RESOURCES LTD', 'Resources & Minerals', 'Harnessing Natural Potential', 'https://i.ibb.co/mrMvvTvK/GEMKOLFZE-Real-Estate-Logo-1.png', 'Gold processing, mineral exploration, and Golden Bull mobility solutions.'),
('jerisverich-agro', 'JERISVERICH AGRO ALLIED RESOURCES', 'Agro-Allied', 'Feeding the Future', 'https://i.ibb.co/mrMvvTvK/GEMKOLFZE-Real-Estate-Logo-1.png', 'Agricultural commodities, parboiled rice milling, sesame export, and cooking oils.'),
('gemkol-properties', 'GEMKOL RESOURCES INVESTMENTS AND PROPERTIES LTD', 'Real Estate', 'Building Your Dreams', 'https://i.ibb.co/mrMvvTvK/GEMKOLFZE-Real-Estate-Logo-1.png', 'Real estate development, estate infrastructure, and Victory Garden City Kano.')
ON CONFLICT (id) DO NOTHING;
`;

export const SUPABASE_CLIENT_CODE = `import { createClient } from '@supabase/supabase-js';

// Configure environment variables in .env
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://puzcmrjxkxsefukznlhy.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1emNtcmp4a3hzZWZ1a3pubGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0ODQ5MDMsImV4cCI6MjExMDA2MDkwM30.IXQvSfpjIcI3mWP8NzUQyDkrmJ4tbk2UZ_s7GTOj5kU';

// Initialize Supabase Client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Example Query: Save VGC Plot Payment to Supabase
export async function saveVgcPaymentToSupabase(paymentData: {
  reference: string;
  plot_number: string;
  buyer_name: string;
  buyer_email: string;
  buyer_phone: string;
  amount_paid: number;
  bank_account_used?: string;
}) {
  const { data, error } = await supabase
    .from('vgc_plot_payments')
    .insert([
      {
        ...paymentData,
        status: 'success',
        created_at: new Date().toISOString()
      }
    ])
    .select();

  if (error) {
    console.error('Supabase Error:', error);
    throw error;
  }
  return data;
}
`;
