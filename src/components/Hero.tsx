import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-repole-blue-light to-background py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-repole-blue mb-6">
          Dal 1970 al servizio dei viaggiatori
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          La tua compagnia di autobus di fiducia
        </p>
        <a 
          href="/orari-e-prezzi" 
          className="btn-primary inline-block px-8 py-4 text-lg font-bold rounded-full bg-repole-blue text-white hover:bg-repole-orange hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Orari e Prezzi ufficiali
        </a>
      </div>
    </section>
  );
};

export default Hero;