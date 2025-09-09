import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-repole-blue-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrizione */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">REPOLE Autolinee</h3>
            <p className="text-repole-blue-light leading-relaxed mb-6">
              Dal 1970 la tua compagnia di autobus di fiducia. 
              Collegando città e persone con sicurezza, puntualità e comfort.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-repole-orange" />
                <a href="mailto:info@repolebus.it" className="text-repole-blue-light hover:text-white transition-colors">
                  info@repolebus.it
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-repole-orange" />
                <a href="tel:+390835000000" className="text-repole-blue-light hover:text-white transition-colors">
                  +39 0835 000000
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-repole-orange mt-1" />
                <span className="text-repole-blue-light">
                  Via Roma, 123<br />
                  75100 Matera (MT)
                </span>
              </div>
            </div>
          </div>

          {/* Link utili */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Link utili</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-repole-blue-light hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#linee" className="text-repole-blue-light hover:text-white transition-colors">
                  Le nostre linee
                </a>
              </li>
              <li>
                <a href="#biglietti" className="text-repole-blue-light hover:text-white transition-colors">
                  Acquista biglietti
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-repole-blue-light hover:text-white transition-colors">
                  Contattaci
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social e copyright */}
        <div className="border-t border-repole-blue pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-repole-blue-light hover:text-repole-orange transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-repole-blue-light hover:text-repole-orange transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-repole-blue-light hover:text-repole-orange transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm text-repole-blue-light text-center">
            © 2025 REPOLE Autolinee - Tutti i diritti riservati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;