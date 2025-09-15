import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Smartphone, Clock } from 'lucide-react';

const Biglietti = () => {
  return (
    <section id="biglietti" className="py-20 px-6 bg-repole-blue-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-repole-blue mb-6">
            Acquista i tuoi biglietti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Presto sarà disponibile l'acquisto online. Nel frattempo contattaci per prenotare il tuo viaggio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="card-repole text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-repole-blue">Pagamento sicuro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Accettiamo tutte le principali carte di credito e debito per la massima comodità
              </p>
            </CardContent>
          </Card>

          <Card className="card-repole text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-repole-blue">Biglietto digitale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ricevi il tuo biglietto direttamente sul telefono, sempre a portata di mano
              </p>
            </CardContent>
          </Card>

          <Card className="card-repole text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-repole-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-repole-blue">Prenotazione rapida</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prenota in pochi click e ricevi conferma immediata della tua prenotazione
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <a 
            href="https://mycard.cotrab.eu/" 
            target="_blank" 
            rel="noopener"
            className="btn-primary inline-block px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ display: 'inline-block', padding: '12px 18px', borderRadius: '999px', background: '#0D4FA8', color: '#fff', fontWeight: '700', textDecoration: 'none' }}
          >
            Richiedi la tessera elettronica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Biglietti;