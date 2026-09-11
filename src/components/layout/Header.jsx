import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileOffcanvas } from './MobileOffcanvas';
import { Icon } from '../common/Icons';
import { socialConfig } from '../../config/social.config';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButton = useRef(null);
  const location = useLocation();
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(closeMenu, [location.pathname, closeMenu]);
  const links = [
    ['Quem é Larissa', '/quem-e-larissa'],
    ['Propostas', '/propostas'],
    ['Plano de mandato', '/plano-de-mandato'],
    ['Transparência', '/transparencia'],
    ['Contato', '/contato'],
  ];
  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container-xl header-inner">
          <Link to="/" className="header-brand" aria-label="Larissa DeLucca — Início">
            <span className="brand-office">DEPUTADA ESTADUAL</span>
            <span className="brand-name">Larissa DeLucca</span>
            <span className="brand-state">15888 <span>MDB · CEARÁ</span></span>
          </Link>
          <nav className="header-nav" aria-label="Navegação Principal">
            {links.map(([label, href]) => <NavLink key={href} to={href} className={({isActive}) => `nav-link-item ${isActive ? 'active' : ''}`}>{label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <a href={socialConfig.instagram.url} className="header-social" target="_blank" rel="noreferrer" aria-label="Instagram oficial"><Icon name="instagram" size={20} /></a>
            <ThemeToggle />
            <button ref={menuButton} className="btn-mobile-drawer-toggle" type="button" aria-label="Abrir menu de navegação" aria-controls="mobile-navigation" aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(true)}><Icon name="menu" size={24} /></button>
          </div>
        </div>
      </header>
      <MobileOffcanvas isOpen={isMobileMenuOpen} onClose={closeMenu} returnFocusRef={menuButton} />
    </>
  );
}
