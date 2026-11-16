/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { FirebaseProvider } from './contexts/FirebaseContext';

import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import CompanyDetail from './pages/CompanyDetail';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import VictoryGardenCity from './pages/VictoryGardenCity';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';
import Payment from './pages/Payment';
import SupabaseHub from './pages/SupabaseHub';

export default function App() {
  return (
    <Router>
      <FirebaseProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:id" element={<CompanyDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/victory-garden-city" element={<VictoryGardenCity />} />
            <Route path="/media" element={<Media />} />
            <Route path="/supabase" element={<SupabaseHub />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </FirebaseProvider>
    </Router>
  );
}
