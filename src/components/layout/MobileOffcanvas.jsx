import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';

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

  return (
    <div
      className="offcanvas-backdrop show"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1040,
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        className="offcanvas offcanvas-end show"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de Navegação Principal"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '320px',
          maxWidth: '85vw',
          height: '100vh',
          backgroundColor: 'var(--bg-surface-elevated)',
          color: 'var(--text-primary)',
          boxShadow: 'var(--card-shadow-hover)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1050,
          padding: 'var(--space-6)',
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-subtle">
          <div>
            <span className="fw-bold font-display fs-5 d-block text-primary">Larissa DeLucca</span>
            <small className="text-muted fw-semibold">15888 MDB</small>
          </div>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Fechar menu"
            style={{ filter: 'var(--text-primary)' === '#F5F5F5' ? 'invert(1)' : 'none' }}
          />
        </div>

        <nav className="nav flex-column gap-2 flex-grow-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link fs-6 ${isActive ? 'active fw-bold text-brand-pink' : ''}`}
            onClick={onClose}
          >
            <i className="bi bi-house me-2" aria-hidden="true" />
            Início
          </NavLink>
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `nav-link fs-6 ${isActive ? 'active fw-bold text-brand-pink' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="pt-4 border-top border-subtle mt-auto">
          <a
            href={socialConfig.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brand-primary w-100 mb-3 justify-content-center"
          >
            <i className="bi bi-whatsapp me-2" aria-hidden="true" />
            Fale no WhatsApp
          </a>
          <div className="d-flex justify-content-center gap-3">
            <a
              href={socialConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary fs-4"
              aria-label="Instagram Oficial"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href={socialConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary fs-4"
              aria-label="WhatsApp Oficial"
            >
              <i className="bi bi-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
