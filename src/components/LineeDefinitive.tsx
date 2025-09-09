import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
        'Rapone': [
          { orario: '06:20', tipo: 'scolastica' },
          { orario: '06:55', tipo: 'feriale' },
          { orario: '07:20', tipo: 'scolastica' },
          { orario: '13:00', tipo: 'feriale' },
          { orario: '17:00', tipo: 'feriale' },
          { orario: '18:10', tipo: 'feriale' }
        ],
        'Bivio S. Michele': [
          { orario: '06:30', tipo: 'scolastica' },
          { orario: '07:05', tipo: 'feriale' },
          { orario: '07:28', tipo: 'scolastica' },
          { orario: '13:10', tipo: 'feriale' },
          { orario: '17:10', tipo: 'feriale' },
          { orario: '18:20', tipo: 'feriale' }
        ],
        'SS 401 (Scalo Rapone)': [
          { orario: '06:40', tipo: 'scolastica' },
          { orario: '07:15', tipo: 'feriale' },
          { orario: '07:35', tipo: 'scolastica' },
          { orario: '13:20', tipo: 'feriale' },
          { orario: '—', tipo: 'feriale' },
          { orario: '18:30', tipo: 'feriale' }
        ],
        'Area di interscambio': [
          { orario: '06:45', tipo: 'scolastica' },
          { orario: '07:05', tipo: 'feriale' }
        ],
        'Calitri': [
          { orario: '07:55', tipo: 'scolastica' }
        ]
      },
      ritorno: {
        'Calitri': [
          { orario: '08:30', tipo: 'feriale' },
          { orario: '14:05', tipo: 'scolastica' },
          { orario: '14:05', tipo: 'scolastica' },
          { orario: '13:45', tipo: 'feriale' },
          { orario: '—', tipo: 'feriale' },
          { orario: '19:00', tipo: 'feriale' }
        ],
        'SS 401 (Scalo Rapone)': [
          { orario: '—', tipo: 'feriale' },
          { orario: '—', tipo: 'scolastica' },
          { orario: '15:25', tipo: 'scolastica' },
          { orario: '—', tipo: 'feriale' },
          { orario: '—', tipo: 'feriale' },
          { orario: '—', tipo: 'feriale' }
        ],
        'Bivio S. Michele': [
          { orario: '—', tipo: 'feriale' },
          { orario: '—', tipo: 'scolastica' },
          { orario: '15:35', tipo: 'scolastica' },
          { orario: '—', tipo: 'feriale' },
          { orario: '17:20', tipo: 'feriale' },
          { orario: '—', tipo: 'feriale' }
        ],
        'Rapone': [
          { orario: '10:15', tipo: 'feriale' },
          { orario: '14:40', tipo: 'scolastica' },
          { orario: '15:45', tipo: 'scolastica' },
          { orario: '15:10', tipo: 'feriale' },
          { orario: '17:30', tipo: 'feriale' },
          { orario: '19:40', tipo: 'feriale' }
        ]
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
        'Rapone': [
          { orario: '04:25', tipo: 'feriale' },
          { orario: '12:25', tipo: 'feriale' },
          { orario: '20:25', tipo: 'giornaliera' }
        ],
        'Ruvo del Monte': [
          { orario: '04:40', tipo: 'feriale' },
          { orario: '12:40', tipo: 'feriale' },
          { orario: '20:40', tipo: 'giornaliera' }
        ],
        'Innesto SS 401': [
          { orario: '04:50', tipo: 'feriale' },
          { orario: '12:50', tipo: 'feriale' },
          { orario: '20:50', tipo: 'giornaliera' }
        ],
        'Area di interscambio': [
          { orario: '04:52', tipo: 'feriale' },
          { orario: '12:52', tipo: 'feriale' },
          { orario: '20:52', tipo: 'giornaliera' }
        ]
      },
      ritorno: {
        'Area di interscambio': [
          { orario: '06:52', tipo: 'feriale' },
          { orario: '14:52', tipo: 'feriale' },
          { orario: '22:52', tipo: 'giornaliera' }
        ],
        'Innesto SS 401': [
          { orario: '06:54', tipo: 'feriale' },
          { orario: '14:54', tipo: 'feriale' },
          { orario: '22:54', tipo: 'giornaliera' }
        ],
        'Ruvo del Monte': [
          { orario: '07:04', tipo: 'feriale' },
          { orario: '15:04', tipo: 'feriale' },
          { orario: '23:05', tipo: 'giornaliera' }
        ],
        'Rapone': [
          { orario: '07:19', tipo: 'feriale' },
          { orario: '15:19', tipo: 'feriale' },
          { orario: '23:19', tipo: 'giornaliera' }
        ]
      }
    }
  }
];

const LineeDefinitive = () => {
  const [selectedLine, setSelectedLine] = useState('286');
  const [selectedFilter, setSelectedFilter] = useState<'tutte' | 'feriale' | 'scolastica' | 'giornaliera'>('tutte');

  const currentLine = lineeData.find(l => l.id === selectedLine);

  const filters = [
    { value: 'tutte' as const, label: 'Tutte' },
    { value: 'feriale' as const, label: 'Feriale' },
    { value: 'scolastica' as const, label: 'Scolastica' },
    { value: 'giornaliera' as const, label: 'Giornaliera' }
  ];

  const getFilteredSchedules = (schedules: any) => {
    if (selectedFilter === 'tutte') return schedules;
    
    const filtered: any = {};
    Object.entries(schedules).forEach(([fermata, orari]: [string, any]) => {
      const filteredOrari = orari.filter((item: any) => 
        item.tipo === selectedFilter && item.orario !== '—'
      );
      if (filteredOrari.length > 0) {
        filtered[fermata] = filteredOrari;
      }
    });
    return filtered;
  };

  const getBadgeVariant = (tipo: string) => {
    switch (tipo) {
      case 'feriale':
        return 'default';
      case 'scolastica': 
        return 'secondary';
      case 'giornaliera':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getBadgeLabel = (tipo: string) => {
    switch (tipo) {
      case 'feriale':
        return 'Feriale';
      case 'scolastica':
        return 'Scolastica';
      case 'giornaliera':
        return 'Giornaliera';
      default:
        return tipo;
    }
  };

  const getFilterLabel = () => {
    switch (selectedFilter) {
      case 'tutte':
        return 'Tutte le corse';
      case 'feriale':
        return 'Solo corse feriali';
      case 'scolastica':
        return 'Solo corse scolastiche';
      case 'giornaliera':
        return 'Solo corse giornaliere';
      default:
        return 'Tutte le corse';
    }
  };

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
                
                {/* Legenda */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Feriale</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-repole-orange rounded-full"></div>
                    <span>Scolastica</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                    <span>Giornaliera</span>
                  </div>
                </div>

                {/* Filtro pill selector */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {filters.map((filter) => (
                    <Button
                      key={filter.value}
                      variant={selectedFilter === filter.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(filter.value)}
                      className={selectedFilter === filter.value 
                        ? "bg-repole-blue hover:bg-repole-blue-dark text-white" 
                        : "border-repole-blue text-repole-blue hover:bg-repole-blue hover:text-white"
                      }
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>

                {/* Microcopy dinamico */}
                <p className="text-sm text-muted-foreground mt-2">
                  Stai visualizzando: {getFilterLabel()}. Cambia dal selettore per filtrare le corse.
                </p>
              </CardHeader>
              
              <CardContent>
                <Tabs defaultValue="andata" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="andata">Andata</TabsTrigger>
                    <TabsTrigger value="ritorno">Ritorno</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="andata" className="space-y-4">
                    {Object.entries(getFilteredSchedules(currentLine.orari.andata)).map(([fermata, orari]: [string, any]) => (
                      <div key={fermata} className="border-l-4 border-repole-orange pl-4">
                        <h5 className="font-semibold text-repole-blue mb-2">{fermata}</h5>
                        <div className="flex flex-wrap gap-2">
                          {orari.map((item: any, index: number) => (
                            item.orario !== '—' && (
                              <div key={index} className="flex items-center gap-2">
                                <Badge 
                                  variant={getBadgeVariant(item.tipo)}
                                  className={
                                    item.tipo === 'feriale' ? 'bg-primary text-primary-foreground' :
                                    item.tipo === 'scolastica' ? 'bg-repole-orange text-white' :
                                    'bg-muted text-muted-foreground'
                                  }
                                >
                                  {getBadgeLabel(item.tipo)}
                                </Badge>
                                <span className="px-3 py-1 bg-repole-blue-light text-repole-blue rounded-full text-sm font-medium">
                                  {item.orario}
                                </span>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="ritorno" className="space-y-4">
                    {Object.entries(getFilteredSchedules(currentLine.orari.ritorno)).map(([fermata, orari]: [string, any]) => (
                      <div key={fermata} className="border-l-4 border-repole-orange pl-4">
                        <h5 className="font-semibold text-repole-blue mb-2">{fermata}</h5>
                        <div className="flex flex-wrap gap-2">
                          {orari.map((item: any, index: number) => (
                            item.orario !== '—' && (
                              <div key={index} className="flex items-center gap-2">
                                <Badge 
                                  variant={getBadgeVariant(item.tipo)}
                                  className={
                                    item.tipo === 'feriale' ? 'bg-primary text-primary-foreground' :
                                    item.tipo === 'scolastica' ? 'bg-repole-orange text-white' :
                                    'bg-muted text-muted-foreground'
                                  }
                                >
                                  {getBadgeLabel(item.tipo)}
                                </Badge>
                                <span className="px-3 py-1 bg-repole-blue-light text-repole-blue rounded-full text-sm font-medium">
                                  {item.orario}
                                </span>
                              </div>
                            )
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