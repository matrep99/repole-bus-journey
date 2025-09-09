import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

const lineeData = [
  {
    id: 'A',
    nome: 'Linea A',
    tratta: 'Matera → Bari',
    orari: ['07:00', '12:00', '17:00'],
    durata: '1h 30m'
  },
  {
    id: 'B',
    nome: 'Linea B',
    tratta: 'Potenza → Napoli',
    orari: ['08:30', '14:30', '19:30'],
    durata: '2h 15m'
  },
  {
    id: 'C',
    nome: 'Linea C',
    tratta: 'Policoro → Roma',
    orari: ['06:00', '13:00', '20:00'],
    durata: '4h 30m'
  }
];

const Linee = () => {
  return (
    <section id="linee" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-repole-blue mb-6">
            Le nostre linee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Colleghiamo le principali città del Sud Italia con comfort e puntualità
          </p>
        </div>

        {/* Mappa stilizzata */}
        <div className="mb-16 bg-repole-blue-light rounded-2xl p-8 text-center">
          <div className="inline-flex items-center space-x-4 text-repole-blue">
            <MapPin className="w-6 h-6" />
            <span className="text-lg font-semibold">Mappa delle linee</span>
            <MapPin className="w-6 h-6" />
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            Copertura: Basilicata, Puglia, Campania, Lazio
          </div>
        </div>

        {/* Card delle linee */}
        <div className="grid md:grid-cols-3 gap-8">
          {lineeData.map((linea) => (
            <Card key={linea.id} className="card-repole hover:border-repole-orange/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-repole-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{linea.id}</span>
                </div>
                <CardTitle className="text-2xl text-repole-blue">{linea.nome}</CardTitle>
                <p className="text-lg text-muted-foreground font-medium">{linea.tratta}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Durata: {linea.durata}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-repole-blue">Orari partenze:</h4>
                    <div className="flex flex-wrap gap-2">
                      {linea.orari.map((orario, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-repole-blue-light text-repole-blue rounded-full text-sm font-medium"
                        >
                          {orario}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-repole-orange hover:bg-repole-orange-dark text-white mt-4"
                    size="sm"
                  >
                    Dettagli
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Linee;