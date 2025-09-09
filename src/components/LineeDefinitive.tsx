import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

const lineeData = [
  {
    id: '286',
    nome: 'Linea 286',
    tratta: 'Rapone ↔ Calitri',
    fermate: [
      'Rapone',
      'Bivio S. Michele', 
      'SS 401 (Scalo Rapone)',
      'Area di interscambio – Area industriale Rapone',
      'Ruvo del Monte (Strada SP 219)',
      'Ruvo del Monte',
      'Calitri'
    ],
    orari: {
      andata: {
        'Rapone': ['06:20', '06:55', '07:20', '13:00', '17:00', '18:10'],
        'Bivio S. Michele': ['06:30', '07:05', '07:28', '13:10', '17:10', '18:20'],
        'SS 401 (Scalo Rapone)': ['06:40', '07:15', '07:35', '13:20', '—', '18:30'],
        'Area di interscambio': ['06:45', '07:05'],
        'Calitri': ['07:55']
      },
      ritorno: {
        'Calitri': ['08:30', '14:05', '14:05', '13:45', '—', '19:00'],
        'SS 401 (Scalo Rapone)': ['—', '—', '15:25', '—', '—', '—'],
        'Bivio S. Michele': ['—', '—', '15:35', '—', '17:20', '—'],
        'Rapone': ['10:15', '14:40', '15:45', '15:10', '17:30', '19:40']
      }
    }
  },
  {
    id: '287',
    nome: 'Linea 287',
    tratta: 'Rapone ↔ Ruvo del Monte (SS 401)',
    fermate: [
      'Rapone',
      'Ruvo del Monte',
      'Innesto SS 401', 
      'Area di interscambio – Area industriale Rapone'
    ],
    orari: {
      andata: {
        'Rapone': ['04:25', '12:25', '20:25'],
        'Ruvo del Monte': ['04:40', '12:40', '20:40'],
        'Innesto SS 401': ['04:50', '12:50', '20:50'],
        'Area di interscambio': ['04:52', '12:52', '20:52']
      },
      ritorno: {
        'Area di interscambio': ['06:52', '14:52', '22:52'],
        'Innesto SS 401': ['06:54', '14:54', '22:54'],
        'Ruvo del Monte': ['07:04', '15:04', '23:05'],
        'Rapone': ['07:19', '15:19', '23:19']
      }
    }
  }
];

const LineeDefinitive = () => {
  const [selectedLine, setSelectedLine] = useState('286');

  const currentLine = lineeData.find(l => l.id === selectedLine);

  return (
    <section id="linee" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-repole-blue mb-6">
            Le nostre linee
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collegamento affidabile tra Rapone e le destinazioni principali
          </p>
        </div>

        {/* Selezione linea */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {lineeData.map((linea) => (
              <Button
                key={linea.id}
                variant={selectedLine === linea.id ? "default" : "outline"}
                onClick={() => setSelectedLine(linea.id)}
                className={selectedLine === linea.id 
                  ? "bg-repole-blue hover:bg-repole-blue-dark text-white" 
                  : "border-repole-blue text-repole-blue hover:bg-repole-blue hover:text-white"
                }
              >
                {linea.nome}
              </Button>
            ))}
          </div>
        </div>

        {currentLine && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info linea */}
            <Card className="card-repole">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-repole-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">{currentLine.id}</span>
                </div>
                <CardTitle className="text-3xl text-repole-blue">{currentLine.nome}</CardTitle>
                <p className="text-xl text-muted-foreground font-medium">{currentLine.tratta}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-repole-blue flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Fermate principali
                    </h4>
                    <div className="space-y-2">
                      {currentLine.fermate.map((fermata, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-repole-orange rounded-full mr-3"></div>
                          <span>{fermata}</span>
                          {index < currentLine.fermate.length - 1 && (
                            <ArrowRight className="w-4 h-4 ml-2 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orari */}
            <Card className="card-repole">
              <CardHeader>
                <CardTitle className="text-2xl text-repole-blue flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Orari
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="andata" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="andata">Andata</TabsTrigger>
                    <TabsTrigger value="ritorno">Ritorno</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="andata" className="space-y-4">
                    {Object.entries(currentLine.orari.andata).map(([fermata, orari]) => (
                      <div key={fermata} className="border-l-4 border-repole-orange pl-4">
                        <h5 className="font-semibold text-repole-blue mb-2">{fermata}</h5>
                        <div className="flex flex-wrap gap-2">
                          {orari.map((orario, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-repole-blue-light text-repole-blue rounded-full text-sm font-medium"
                            >
                              {orario}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="ritorno" className="space-y-4">
                    {Object.entries(currentLine.orari.ritorno).map(([fermata, orari]) => (
                      <div key={fermata} className="border-l-4 border-repole-orange pl-4">
                        <h5 className="font-semibold text-repole-blue mb-2">{fermata}</h5>
                        <div className="flex flex-wrap gap-2">
                          {orari.map((orario, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-repole-blue-light text-repole-blue rounded-full text-sm font-medium"
                            >
                              {orario}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default LineeDefinitive;