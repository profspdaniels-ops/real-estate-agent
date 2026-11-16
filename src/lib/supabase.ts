import { createClient } from '@supabase/supabase-js';

// Supabase environment variables configured for GEMKOL FZE Database
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://puzcmrjxkxsefukznlhy.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1emNtcmp4a3hzZWZ1a3pubGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0ODQ5MDMsImV4cCI6MjExMDA2MDkwM30.IXQvSfpjIcI3mWP8NzUQyDkrmJ4tbk2UZ_s7GTOj5kU';

/**
 * Official Supabase Client Instance for GEMKOL FZE Conglomerate Database.
 * Connects to Supabase PostgreSQL database tables:
 * - companies
 * - vgc_plot_payments
 * - property_enquiries
 * - product_catalog
 * - executive_messages
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Helper function to test connection to Supabase instance
 */
export async function testSupabaseConnection(customUrl?: string, customKey?: string) {
  try {
    const client = customUrl && customKey ? createClient(customUrl, customKey) : supabase;
    const { data, error } = await client.from('companies').select('count', { count: 'exact', head: true });
    
    if (error && error.code !== 'PGRST116') {
      return { success: false, message: `Supabase returned: ${error.message}` };
    }
    return { success: true, message: 'Successfully connected to Supabase PostgreSQL Database!' };
  } catch (err: any) {
    return { success: false, message: err?.message || 'Connection failed. Check URL and Key.' };
  }
}
