import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { assetManifest } from '../../assets/assetManifest';

export function HeroSection() {
  const heroImage = assetManifest.images.hero;

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Coluna de Texto e CTAs */}
          <div className="col-12 col-lg-7">
            <div className="mb-3">
              <span className="hero-badge">
                <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                <span>{siteConfig.candidate.state} · {siteConfig.candidate.office}</span>
                <span className="mx-1">•</span>
                <strong>{siteConfig.candidate.number} {siteConfig.candidate.party}</strong>
              </span>
            </div>

            <h1 id="hero-heading" className="hero-title mb-3">
              {siteConfig.candidate.name}
            </h1>

            <div className="mb-3">
              <p className="hero-slogan mb-0">
                {siteConfig.candidate.slogan}
              </p>
            </div>

            <p className="hero-lema mb-4">
              {siteConfig.candidate.lema}
            </p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <Link to="/propostas" className="btn btn-brand-primary btn-lg">
                <span>Conheça as Propostas</span>
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <a
                href={assetManifest.documents.mandatePlan.downloadUrl}
                download={assetManifest.documents.mandatePlan.fileName}
                className="btn btn-brand-outline btn-lg"
              >
                <i className="bi bi-file-earmark-pdf-fill me-1" aria-hidden="true" />
                <span>Baixar Plano de Mandato</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-top d-flex flex-wrap gap-4 text-secondary small">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success" aria-hidden="true" />
                <span>Advogada & Defensora de Direitos</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success" aria-hidden="true" />
                <span>Mãe Atípica & Voz da Inclusão</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success" aria-hidden="true" />
                <span>Fundação Mulheres Aceleradas</span>
              </div>
            </div>
          </div>

          {/* Coluna da Foto Oficial */}
          <div className="col-12 col-lg-5 text-center">
            <div className="hero-photo-wrapper">
              <div className="hero-photo-card">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="hero-photo-img"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="hero-photo-caption">
                  <span className="fw-bold fs-5 d-block text-dark">{siteConfig.candidate.name}</span>
                  <span className="text-secondary small">Candidata a Deputada Estadual · 15888 MDB Ceará</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
