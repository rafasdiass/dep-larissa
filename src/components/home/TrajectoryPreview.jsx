import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../../assets/assetManifest';
import { siteConfig } from '../../config/site.config';

export function TrajectoryPreview() {
  const bioImg = assetManifest.images.bio;
  const trajImg = assetManifest.images.trajectory;

  return (
    <section className="trajectory-preview section-padding" style={{ background: 'var(--bg-accent-subtle)' }} aria-labelledby="trajectory-heading">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <div className="position-relative mx-auto" style={{ maxWidth: '480px' }}>
              <div
                className="rounded-4 overflow-hidden shadow-lg border"
                style={{ borderColor: 'rgba(230,0,126,0.3)', background: '#FFFFFF' }}
              >
                <img
                  src={bioImg.src}
                  alt={bioImg.alt}
                  width={bioImg.width}
                  height={bioImg.height}
                  className="img-fluid d-block"
                  style={{ maxHeight: '460px', width: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  loading="lazy"
                />
              </div>

              {/* Card sobreposto de destaque */}
              <div
                className="position-absolute bottom-0 start-0 p-3 m-3 rounded-3 shadow-lg"
                style={{
                  background: 'var(--bg-surface)',
                  borderLeft: '4px solid var(--brand-pink)',
                  maxWidth: '300px',
                }}
              >
                <span className="fw-bold small d-block">Fundação Mulheres Aceleradas</span>
                <span className="text-secondary" style={{ fontSize: '0.75rem' }}>
                  Impacto real em capacitação e geração de renda feminina no Ceará.
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <span className="section-tag">História & Liderança</span>
            <h2 id="trajectory-heading" className="fs-2 fw-extrabold mb-3">
              Da vivência do cuidado à coragem na tribuna
            </h2>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              <strong>{siteConfig.candidate.name}</strong> é advogada por vocação, mãe atípica por bênção e desafio, e líder social por indignação contra a inércia do poder público.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              À frente da Fundação Mulheres Aceleradas, estruturou projetos de formação empreendedora, inclusão produtiva e independência para mães chefes de família. Como mãe de criança com necessidades especiais, conhece a dor das filas do SUS, a falta de fonoaudiólogos e a exclusão escolar.
            </p>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <div className="p-3 rounded-3 bg-white border">
                  <strong className="d-block text-primary fs-5">+15 Cidades</strong>
                  <span className="text-muted small">Alcançadas com ações sociais</span>
                </div>
              </div>
              <div className="col-6">
                <div className="p-3 rounded-3 bg-white border">
                  <strong className="d-block text-primary fs-5">100% Cearense</strong>
                  <span className="text-muted small">Compromisso com o povo do Ceará</span>
                </div>
              </div>
            </div>

            <Link to="/quem-e-larissa" className="btn btn-brand-primary">
              <span>Ler Biografia Completa</span>
              <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
