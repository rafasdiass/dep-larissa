import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { socialConfig } from '../../config/social.config';
import { Icon } from '../common/Icons';
import { useDialogFocus } from '../../hooks/useDialogFocus';
export function MobileOffcanvas({ isOpen, onClose, returnFocusRef }) {
  const panel = useRef(null);
  useDialogFocus(isOpen, panel, onClose, returnFocusRef);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onResize = (event) => { if (event.matches) onClose(); };
    mq?.addEventListener?.('change', onResize);
    return () => mq?.removeEventListener?.('change', onResize);
  }, [onClose]);
  if (!isOpen) return null;
  const links = [
    ['Início', '/', 'house'], ['Quem é Larissa', '/quem-e-larissa', 'person'],
    ['Propostas', '/propostas', 'document'], ['Plano de Mandato', '/plano-de-mandato', 'download'],
    ['Transparência', '/transparencia', 'shield'], ['Materiais', '/materiais', 'box'],
    ['Imprensa', '/imprensa', 'newspaper'], ['Contato', '/contato', 'envelope'],
  ];
  return <div className="mobile-menu-backdrop" onClick={onClose}>
    <div className="mobile-drawer-panel" id="mobile-navigation" ref={panel} role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title" tabIndex={-1} onClick={(event) => event.stopPropagation()}>
      <div className="mobile-drawer-heading"><strong id="mobile-menu-title">Larissa DeLucca</strong><button type="button" className="mobile-drawer-close-btn" onClick={onClose} aria-label="Fechar menu"><Icon name="close" /></button></div>
      <nav aria-label="Navegação móvel">{links.map(([label, href, icon]) => <NavLink key={href} to={href} end={href === '/'} onClick={onClose} className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`}><Icon name={icon} /><span>{label}</span></NavLink>)}</nav>
      <a href={socialConfig.whatsapp.url} className="btn-brand-primary" target="_blank" rel="noreferrer"><Icon name="whatsapp" />Falar no WhatsApp</a>
    </div>
  </div>;
}
