import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BusPhotos from '@/components/BusPhotos';
import Biglietti from '@/components/Biglietti';
import Storia from '@/components/Storia';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BusPhotos />
        <Biglietti />
        <Storia />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
