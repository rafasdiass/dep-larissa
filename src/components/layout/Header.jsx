import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileOffcanvas } from './MobileOffcanvas';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header py-2" role="banner">
        <div className="container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="header-brand" aria-label="Larissa DeLucca — Página Inicial">
            <div className="brand-avatar-badge" aria-hidden="true">
              LD
            </div>
            <div>
              <span className="brand-title d-block">{siteConfig.candidate.name}</span>
              <span className="brand-badge d-block">
                {siteConfig.candidate.office} · {siteConfig.candidate.number} {siteConfig.candidate.party}
              </span>
            </div>
          </Link>

          <nav className="d-none d-lg-flex align-items-center gap-1" role="navigation" aria-label="Navegação Principal">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Início
            </NavLink>
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href={socialConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand-primary btn-sm d-none d-sm-inline-flex"
              aria-label="Abrir WhatsApp oficial da campanha"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <ThemeToggle />

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileMenuOpen}
            >
              <i className="bi bi-list" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileOffcanvas isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
