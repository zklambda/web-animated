import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Security } from './components/Security';
import { Technical } from './components/Technical';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Technical />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

export default App;