import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';
import { Icon } from '../common/Icons';

export function MobileOffcanvas({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: 'Início', href: '/', icon: 'house' },
    { label: 'Quem é Larissa', href: '/quem-e-larissa', icon: 'person' },
    { label: 'Propostas', href: '/propostas', icon: 'document' },
    { label: 'Plano de Mandato', href: '/plano-de-mandato', icon: 'download' },
    { label: 'Transparência', href: '/transparencia', icon: 'shield' },
    { label: 'Materiais', href: '/materiais', icon: 'box' },
    { label: 'Imprensa', href: '/imprensa', icon: 'newspaper' },
    { label: 'Contato', href: '/contato', icon: 'envelope' },
  ];

  return (
    <div className="offcanvas-backdrop show" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="mobile-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-light border-opacity-10">
          <div>
            <span className="fw-bold font-display fs-5 d-block text-white">LARISSA DELUCCA</span>
            <span className="badge-neon" style={{ fontSize: '0.75rem' }}>15888 MDB · CEARÁ</span>
          </div>
          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <nav className="nav flex-column gap-2 flex-grow-1" aria-label="Navegação móvel">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `mobile-nav-link d-flex align-items-center gap-3 ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              <Icon name={link.icon} size={20} className="mobile-nav-icon" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="pt-4 border-top border-light border-opacity-10 mt-auto">
          <a
            href={socialConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand-primary w-100 mb-3 justify-content-center"
          >
            <Icon name="whatsapp" size={20} />
            <span>Falar no WhatsApp Oficial</span>
          </a>
          <div className="d-flex justify-content-center gap-4 py-2">
            <a
              href={socialConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-link"
              aria-label="Instagram Oficial"
            >
              <Icon name="instagram" size={22} />
            </a>
            <a
              href={socialConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-link"
              aria-label="WhatsApp Oficial"
            >
              <Icon name="whatsapp" size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileOffcanvas;
