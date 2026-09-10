import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileOffcanvas } from './MobileOffcanvas';
import { Icon } from '../common/Icons';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavItems = [
    { label: 'Início', href: '/', icon: 'house' },
    { label: 'Quem é Larissa', href: '/quem-e-larissa', icon: 'person' },
    { label: 'Propostas', href: '/propostas', icon: 'document' },
    { label: 'Plano de Mandato', href: '/plano-de-mandato', icon: 'download' },
    { label: 'Transparência', href: '/transparencia', icon: 'shield' },
    { label: 'Materiais', href: '/materiais', icon: 'box' },
    { label: 'Contato', href: '/contato', icon: 'envelope' },
  ];

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <div className="container-fluid px-3 px-xl-5">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo / Marca do Candidato */}
            <Link to="/" className="header-brand" aria-label="Larissa DeLucca — Início">
              <div className="brand-logo-container">
                <div className="brand-symbol">
                  <span>LD</span>
                </div>
                <div className="brand-text-block">
                  <span className="brand-candidate-name">{siteConfig.candidate.name}</span>
                  <div className="brand-meta-badge">
                    <span className="badge-office">DEPUTADA ESTADUAL</span>
                    <span className="badge-number">15888 {siteConfig.candidate.party}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Navegação Desktop com Ícones SVG Nativos */}
            <nav
              className="d-none d-xl-flex align-items-center header-nav"
              role="navigation"
              aria-label="Navegação Principal"
            >
              {primaryNavItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `nav-link-item ${isActive ? 'active' : ''}`
                  }
                >
                  <Icon name={item.icon} size={16} className="nav-icon" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Ações do Topo: WhatsApp de Destaque + Theme Toggle + Mobile Toggle */}
            <div className="header-actions-group d-flex align-items-center gap-2 gap-sm-3">
              <a
                href={socialConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-header-whatsapp d-none d-md-inline-flex align-items-center gap-2"
                aria-label="Canal Oficial no WhatsApp"
              >
                <Icon name="whatsapp" size={18} />
                <span>CANAL NO WHATSAPP</span>
              </a>

              <ThemeToggle />

              <button
                type="button"
                className="btn-mobile-drawer-toggle d-xl-none"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menu de navegação"
                aria-expanded={isMobileMenuOpen}
              >
                <Icon name="menu" size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileOffcanvas
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
