import React from 'react';

const OrariPrezzi = () => {
  return (
    <div className="min-h-screen bg-background">
      <style dangerouslySetInnerHTML={{
        __html: `
          .timetable{width:100%;border-collapse:separate;border-spacing:0;margin:1rem 0;font-size:16px}
          .timetable caption{ text-align:left;font-weight:600;margin:.5rem 0;color:#0D4FA8}
          .timetable th,.timetable td{border:1px solid #e6eef7;padding:10px 12px;text-align:center}
          .timetable thead th{background:#f0f5fb;font-weight:600}
          .timetable .sticky{position:sticky;left:0;background:#f8fbff;text-align:left;z-index:1}
          .badge{display:inline-block;padding:2px 8px;border-radius:999px;font-size:12px;font-weight:600}
          .badge--feriale{background:#e6f0ff;color:#0D4FA8}
          .badge--scolastica{background:#ffe9d6;color:#c25e00}
          .badge--giornaliera{background:#eee;color:#444}
          @media(max-width:768px){.timetable{display:block;overflow-x:auto;white-space:nowrap}}
          .price-table td:last-child,.price-table th:last-child{text-align:left}
          .num{text-align:right}
        `
      }} />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-repole-blue mb-6">
              Orari e Prezzi
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Consulta gli orari ufficiali delle nostre linee e le tariffe
            </p>
            <p className="text-sm text-muted-foreground italic">
              Orari ufficiali — validi salvo variazioni straordinarie
            </p>
          </div>

          {/* LINEA 287 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-repole-blue mb-8 text-center">
              LINEA 287 — Rapone ↔ Ruvo del Monte (SS 401)
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-repole-blue mb-4">
                Andata (Rapone → Area di interscambio – Area industriale Rapone)
              </h3>
              <div className="overflow-x-auto">
                <table className="timetable">
                  <caption>Linea 287 · Andata</caption>
                  <thead>
                    <tr>
                      <th className="sticky">Fermata</th>
                      <th>04:25<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>12:25<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>20:25<br/><span className="badge badge--giornaliera">Giornaliera</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="sticky">Rapone</td><td>04:25</td><td>12:25</td><td>20:25</td></tr>
                    <tr><td className="sticky">Ruvo del Monte</td><td>04:40</td><td>12:40</td><td>20:40</td></tr>
                    <tr><td className="sticky">Innesto SS 401</td><td>04:50</td><td>12:50</td><td>20:50</td></tr>
                    <tr><td className="sticky">Area di interscambio – Area industriale Rapone</td><td>04:52</td><td>12:52</td><td>20:52</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-repole-blue mb-4">
                Ritorno (Area di interscambio – Area industriale Rapone → Rapone)
              </h3>
              <div className="overflow-x-auto">
                <table className="timetable">
                  <caption>Linea 287 · Ritorno</caption>
                  <thead>
                    <tr>
                      <th className="sticky">Fermata</th>
                      <th>06:52<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>14:52<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>22:52<br/><span className="badge badge--giornaliera">Giornaliera</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="sticky">Area di interscambio – Area industriale Rapone</td><td>06:52</td><td>14:52</td><td>22:52</td></tr>
                    <tr><td className="sticky">Innesto SS 401</td><td>06:54</td><td>14:54</td><td>22:54</td></tr>
                    <tr><td className="sticky">Ruvo del Monte</td><td>07:04</td><td>15:04</td><td>23:05</td></tr>
                    <tr><td className="sticky">Rapone</td><td>07:19</td><td>15:19</td><td>23:19</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* LINEA 286 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-repole-blue mb-8 text-center">
              LINEA 286 — Rapone ↔ Calitri
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-repole-blue mb-4">
                Andata (Rapone → Calitri)
              </h3>
              <div className="overflow-x-auto">
                <table className="timetable">
                  <caption>Linea 286 · Andata</caption>
                  <thead>
                    <tr>
                      <th className="sticky">Fermata</th>
                      <th>06:20<br/><span className="badge badge--scolastica">Scolastica</span></th>
                      <th>06:55<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>07:20<br/><span className="badge badge--scolastica">Scolastica</span></th>
                      <th>13:00<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>17:00<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>18:10<br/><span className="badge badge--feriale">Feriale</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="sticky">Rapone</td><td>06:20</td><td>06:55</td><td>07:20</td><td>13:00</td><td>17:00</td><td>18:10</td></tr>
                    <tr><td className="sticky">Bivio S. Michele</td><td>06:30</td><td>07:05</td><td>07:28</td><td>13:10</td><td>17:10</td><td>18:20</td></tr>
                    <tr><td className="sticky">SS 401 (Scalo Rapone)</td><td>06:40</td><td>07:15</td><td>07:35</td><td>13:20</td><td>—</td><td>18:30</td></tr>
                    <tr><td className="sticky">Area di interscambio – Area industriale Rapone</td><td>06:45</td><td>07:05</td><td>07:40</td><td>13:25</td><td>—</td><td>18:35</td></tr>
                    <tr><td className="sticky">Ruvo del Monte (Strada SP 219)</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td className="sticky">Ruvo del Monte</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td className="sticky">Calitri</td><td>—</td><td>07:50</td><td>07:55</td><td>13:40</td><td>—</td><td>18:50</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-repole-blue mb-4">
                Ritorno (Calitri → Rapone)
              </h3>
              <div className="overflow-x-auto">
                <table className="timetable">
                  <caption>Linea 286 · Ritorno</caption>
                  <thead>
                    <tr>
                      <th className="sticky">Fermata</th>
                      <th>08:30<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>14:05<br/><span className="badge badge--scolastica">Scolastica</span></th>
                      <th>14:05<br/><span className="badge badge--scolastica">Scolastica</span></th>
                      <th>13:45<br/><span className="badge badge--feriale">Feriale</span></th>
                      <th>—</th>
                      <th>19:00<br/><span className="badge badge--feriale">Feriale</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="sticky">Calitri</td><td>08:30</td><td>14:05</td><td>14:05</td><td>13:45</td><td>—</td><td>19:00</td></tr>
                    <tr><td className="sticky">SS 401 (Scalo Rapone)</td><td>—</td><td>—</td><td>15:25</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td className="sticky">Bivio S. Michele</td><td>—</td><td>—</td><td>15:35</td><td>—</td><td>17:20</td><td>—</td></tr>
                    <tr><td className="sticky">Rapone</td><td>10:15</td><td>14:40</td><td>15:45</td><td>15:10</td><td>17:30</td><td>19:40</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* PREZZI BIGLIETTI */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-repole-blue mb-8 text-center">
              Prezzi Biglietti
            </h2>
            
            <div className="overflow-x-auto">
              <table className="timetable price-table">
                <caption>Tariffe Biglietti — singola corsa e A/R</caption>
                <thead>
                  <tr>
                    <th className="sticky">Tratta</th>
                    <th className="num">Intero</th>
                    <th className="num">Ridotto/Studenti</th>
                    <th className="num">Andata/Ritorno</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="sticky">Rapone ↔ Ruvo del Monte</td><td className="num">€ —</td><td className="num">€ —</td><td className="num">€ —</td><td>—</td></tr>
                  <tr><td className="sticky">Rapone ↔ Innesto SS 401</td><td className="num">€ —</td><td className="num">€ —</td><td className="num">€ —</td><td>—</td></tr>
                  <tr><td className="sticky">Rapone ↔ Area di interscambio – Area industriale Rapone</td><td className="num">€ —</td><td className="num">€ —</td><td className="num">€ —</td><td>—</td></tr>
                  <tr><td className="sticky">Rapone ↔ Calitri</td><td className="num">€ —</td><td className="num">€ —</td><td className="num">€ —</td><td>—</td></tr>
                  <tr><td className="sticky">Ruvo del Monte ↔ Calitri</td><td className="num">€ —</td><td className="num">€ —</td><td className="num">€ —</td><td>—</td></tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Prezzi ufficiali IVA inclusa. Riduzioni secondo normativa vigente. Info: repoledonatosnc@gmail.com
                <br />
                Via Aldo Moro 25, Rapone (PZ) · 349 2545721.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrariPrezzi;