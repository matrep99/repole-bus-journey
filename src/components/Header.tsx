import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // Mobile menu functionality
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const siteNav = document.getElementById('siteNav');
    const body = document.body;

    function openNav() {
      siteNav?.classList.add('open');
      navToggle?.setAttribute('aria-expanded', 'true');
      siteNav?.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      const firstLink = siteNav?.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeNav() {
      siteNav?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      siteNav?.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      navToggle?.focus();
    }

    function toggleNav() {
      const isOpen = siteNav?.classList.contains('open');
      isOpen ? closeNav() : openNav();
    }

    navToggle?.addEventListener('click', toggleNav);
    navClose?.addEventListener('click', closeNav);

    // Close with ESC
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && siteNav?.classList.contains('open')) {
        closeNav();
      }
    };
    document.addEventListener('keydown', handleKeydown);

    // Close clicking outside
    const handleClick = (e: Event) => {
      if (!siteNav?.classList.contains('open')) return;
      const target = e.target as Element;
      const clickInsideMenu = siteNav.contains(target) || navToggle?.contains(target);
      if (!clickInsideMenu) closeNav();
    };
    document.addEventListener('click', handleClick);

    // Handle navigation clicks
    const handleNavClick = (e: Event) => {
      const target = e.target as Element;
      const link = target.closest('a');
      if (!link) return;

      // Gestione ancora Contatti (footer)
      if (link.matches('[data-nav-anchor]')) {
        e.preventDefault();
        const targetElement = document.getElementById('contatti');
        closeNav();
        if (targetElement) {
          setTimeout(() => targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
          history.pushState(null, '', '#contatti');
        } else {
          // se non sei in home, porta a home con hash
          location.href = '/#contatti';
        }
        return;
      }

      // Gestione "Biglietti" (sezione in Home)
      if (link.matches('[data-home-anchor]')) {
        e.preventDefault();
        closeNav();
        if (location.pathname === '/' || location.pathname === '') {
          const targetElement = document.getElementById('biglietti');
          if (targetElement) {
            setTimeout(() => targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
            history.pushState(null, '', '#biglietti');
          } else {
            location.href = '/#biglietti';
          }
        } else {
          location.href = '/#biglietti';
        }
        return;
      }

      // Per gli altri link interni normali chiudi e lascia procedere
      closeNav();
    };
    siteNav?.addEventListener('click', handleNavClick);

    // Handle initial hash
    const handleLoad = () => {
      if (location.hash === '#contatti') {
        const target = document.getElementById('contatti');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (location.hash === '#biglietti') {
        const target = document.getElementById('biglietti');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('load', handleLoad);

    return () => {
      navToggle?.removeEventListener('click', toggleNav);
      navClose?.removeEventListener('click', closeNav);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleClick);
      siteNav?.removeEventListener('click', handleNavClick);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        html { scroll-behavior: smooth; }
        .site-header { position: sticky; top: 0; z-index: 50; background: #0D4FA8; }
        .nav-toggle {
          display: inline-flex; flex-direction: column; gap: 4px; padding: 10px 12px;
          border: 0; background: transparent; cursor: pointer;
        }
        .nav-toggle-bar { width: 24px; height: 2px; background: white; display: block; }
        .site-nav { display: none; }
        .site-nav.open { 
          display: block; position: fixed; inset: 0; background: rgba(255,255,255,.98); 
          padding: 80px 24px; z-index: 60; 
        }
        .site-nav ul { list-style: none; margin: 0; padding: 0; }
        .site-nav li { margin: 12px 0; }
        .site-nav a { color: #0D4FA8; font-weight: 700; text-decoration: none; font-size: 18px; }
        .site-nav a:hover { color: #F28C28; text-decoration: underline; }

        .nav-close {
          position: absolute; top: 16px; right: 16px;
          border: 0; background: transparent; font-size: 28px; line-height: 1;
          color: #0D4FA8; cursor: pointer;
        }
        .nav-close:hover { color: #F28C28; }

        @media (min-width: 992px) {
          .nav-toggle { display: none; }
          .site-nav { display: block; position: static; padding: 0; background: transparent; }
          .site-nav ul { display: flex; gap: 24px; }
          .site-nav li { margin: 0; }
          .site-nav a { color: white; font-weight: 500; font-size: 16px; }
          .nav-close { display: none; }
        }

        #contatti, #biglietti { scroll-margin-top: 80px; }
        `
      }} />
      
      <header className="site-header bg-repole-blue py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="logo flex items-center space-x-4">
            <img 
              src="/lovable-uploads/6ddc7ba0-c7ae-4e24-87c6-cbf9676a62bb.png" 
              alt="REPOLE Autolinee" 
              className="h-12 w-auto"
            />
          </a>

          <button 
            id="navToggle" 
            className="nav-toggle md:hidden" 
            aria-controls="siteNav" 
            aria-expanded="false" 
            aria-label="Apri menu"
          >
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
            <span className="nav-toggle-bar"></span>
          </button>

          <nav id="siteNav" className="site-nav" aria-hidden="true">
            <button id="navClose" className="nav-close" aria-label="Chiudi menu">✕</button>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/orari-e-prezzi">Orari e Prezzi</a></li>
              <li><a href="/#biglietti" data-home-anchor>Biglietti</a></li>
              <li><a href="#contatti" data-nav-anchor>Contatti</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;