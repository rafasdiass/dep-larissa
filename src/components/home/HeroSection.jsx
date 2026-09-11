import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../../assets/assetManifest';
import { Icon } from '../common/Icons';

export function HeroSection({ onOpenVideo }) {
  const portrait = assetManifest.images.hero;
  return (
    <section className="campaign-hero" aria-labelledby="hero-title">
      <div className="hero-scene">
        <div className="container-xl hero-composition">
          <div className="hero-copy">
            <p className="hero-eyebrow">DEPUTADA ESTADUAL <span>•</span> CEARÁ</p>
            <h1 id="hero-title" aria-label="Larissa DeLucca">
              <span className="hero-first-name">Larissa</span>
              <span className="hero-last-name">DeLucca<span className="hero-name-dot">.</span></span>
            </h1>
            <p className="hero-intro">Advogada. Mãe atípica.<br />Uma voz pelo cuidado e pela autonomia.</p>
            <div className="hero-actions">
              <Link to="/propostas" className="btn-brand-primary">Conheça as propostas <Icon name="arrow-up-right" size={20} /></Link>
              <button type="button" className="hero-video-button" onClick={() => onOpenVideo?.(assetManifest.videos[0])} aria-label="Assistir ao vídeo de apresentação de Larissa DeLucca">
                <span className="play-outline"><Icon name="play" size={14} /></span> Conheça Larissa
              </button>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} fetchpriority="high" />
          </div>
          <div className="hero-ballot"><span>DEPUTADA ESTADUAL</span><strong>15888</strong><span>MDB <span aria-hidden="true">/</span> CEARÁ</span></div>
        </div>
      </div>
      <div className="hero-statement">
        <div className="container-xl hero-statement-inner">
          <p>Coragem pra <strong>mudar.</strong></p>
          <span className="hero-lema">Renda para Escolher. Rede para Conseguir. Proteção para Viver.</span>
          <a href={assetManifest.documents.mandatePlan.downloadUrl} download className="hero-plan-link" aria-label="Baixar plano de mandato"><Icon name="download" size={22} /><span>Plano de<br /><strong>mandato</strong></span></a>
        </div>
      </div>
    </section>
  );
}
