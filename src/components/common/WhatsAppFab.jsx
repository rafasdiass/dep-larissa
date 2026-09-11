import React from 'react';
import { socialConfig } from '../../config/social.config';
import { Icon } from './Icons';

export function WhatsAppFab() {
  return (
    <aside className="wa-fab-container" aria-label="Ação rápida WhatsApp">
      <a
        href={socialConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Acessar Canal Oficial de Larissa DeLucca no WhatsApp"
      >
        <span className="wa-fab-pulse" aria-hidden="true"></span>
        <span className="wa-fab-pulse wa-fab-pulse-delayed" aria-hidden="true"></span>
        <div className="wa-fab-icon-box">
          <Icon name="whatsapp" size={26} className="wa-fab-svg" />
        </div>
        <span className="wa-fab-label">Canal no WhatsApp</span>
      </a>
    </aside>
  );
}

export default WhatsAppFab;
