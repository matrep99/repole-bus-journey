import React from 'react';
import { Users, Award, MapPin } from 'lucide-react';

const Storia = () => {
  return (
    <section className="py-20 px-6 bg-repole-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Dal 1970 con voi
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
            REPOLE nasce nel 1970 per collegare città e persone. Da oltre 50 anni portiamo i nostri passeggeri a destinazione con affidabilità e comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">50+</h3>
            <p className="text-repole-orange-light">Anni di esperienza</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100%</h3>
            <p className="text-repole-orange-light">Affidabilità e puntualità</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">4</h3>
            <p className="text-repole-orange-light">Regioni collegate</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            La famiglia REPOLE ha sempre messo al primo posto la sicurezza e il comfort dei viaggiatori, 
            investendo continuamente in mezzi moderni e tecnologie all'avanguardia per offrire 
            un servizio di trasporto pubblico di qualità superiore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Storia;