import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BusPhotos = () => {
  const busImages = [
    {
      id: 1,
      src: '/placeholder-bus-01.jpg',
      alt: 'Autobus REPOLE - Vista esterna',
      caption: 'I nostri autobus moderni e confortevoli'
    },
    {
      id: 2,
      src: '/placeholder-bus-02.jpg', 
      alt: 'Autobus REPOLE - Interno',
      caption: 'Interni spaziosi e climatizzati'
    }
  ];

  return (
    <section id="flotta" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-repole-blue mb-6">
            La nostra flotta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Autobus moderni, sicuri e confortevoli per i tuoi viaggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {busImages.map((bus) => (
            <Card key={bus.id} className="card-repole overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-repole-blue-light to-repole-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🚌</div>
                    <p className="text-sm opacity-75">Placeholder: {bus.src.split('/').pop()}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg font-medium text-repole-blue text-center">
                    {bus.caption}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusPhotos;