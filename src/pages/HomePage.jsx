import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { socialConfig } from '../config/social.config';

export function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5 py-lg-6" style={{ background: 'var(--bg-accent-subtle)' }}>
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF', fontSize: '0.875rem' }}>
                {siteConfig.candidate.office} · {siteConfig.candidate.number} {siteConfig.candidate.party}
              </span>
              <h1 className="display-4 fw-extrabold mb-3" style={{ fontFamily: 'var(--font-family-display)', letterSpacing: '-0.5px' }}>
                {siteConfig.candidate.name}
              </h1>
              <p className="fs-3 fw-bold mb-3" style={{ color: 'var(--brand-pink)' }}>
                {siteConfig.candidate.slogan}
              </p>
              <p className="lead text-secondary mb-4" style={{ maxWidth: '580px', lineHeight: 1.6 }}>
                {siteConfig.candidate.lema}
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/propostas" className="btn btn-brand-primary">
                  <span>Conheça as Propostas</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
                <Link to="/plano-de-mandato" className="btn btn-brand-outline">
                  <i className="bi bi-file-earmark-pdf me-1" aria-hidden="true" />
                  <span>Baixar Plano de Mandato</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-5 text-center">
              <div
                className="hero-image-card mx-auto position-relative"
                style={{
                  maxWidth: '420px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'var(--brand-gradient)',
                  padding: '6px',
                  boxShadow: 'var(--card-shadow-hover)',
                }}
              >
                <div
                  className="hero-image-inner p-4 text-center d-flex flex-column align-items-center justify-content-center"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: 'calc(var(--radius-xl) - 4px)',
                    minHeight: '440px',
                  }}
                >
                  <div
                    className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center text-white mb-3 shadow"
                    style={{
                      width: '180px',
                      height: '180px',
                      background: 'var(--brand-gradient)',
                      fontSize: '3.5rem',
                      fontFamily: 'var(--font-family-display)',
                      fontWeight: 'bold',
                    }}
                  >
                    LD
                  </div>
                  <h2 className="fs-4 fw-bold mb-1">{siteConfig.candidate.name}</h2>
                  <p className="text-muted small mb-3">
                    Advogada · Presidente Fundação Mulheres Aceleradas · Mãe Atípica
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <span className="badge bg-light text-dark border">Ceará 15888</span>
                    <span className="badge bg-light text-dark border">MDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pilares */}
      <section className="pillars-section py-5 py-lg-6">
        <div className="container-xl">
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="fw-bold fs-2 mb-2">3 Pilares para Transformar o Ceará</h2>
            <p className="text-secondary">Uma visão integrada de autonomia, acolhimento e segurança para cada mulher e família cearense.</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="brand-card h-100 text-center">
                <div className="icon-circle mb-3 mx-auto" style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(230,0,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-pink)', fontSize: '1.5rem' }}>
                  <i className="bi bi-briefcase-fill" aria-hidden="true" />
                </div>
                <h3 className="fs-4 fw-bold mb-2">Renda para Escolher</h3>
                <p className="text-secondary small">Autonomia econômica, microcrédito e aceleração de negócios para que toda mulher cearense tenha independência financeira.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="brand-card h-100 text-center">
                <div className="icon-circle mb-3 mx-auto" style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,138,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-orange)', fontSize: '1.5rem' }}>
                  <i className="bi bi-puzzle-fill" aria-hidden="true" />
                </div>
                <h3 className="fs-4 fw-bold mb-2">Rede para Conseguir</h3>
                <p className="text-secondary small">Apoio integral às mães atípicas, inclusão escolar, diagnósticos ágeis e rede de cuidado para quem dedica a vida a cuidar.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="brand-card h-100 text-center">
                <div className="icon-circle mb-3 mx-auto" style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(230,0,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-pink)', fontSize: '1.5rem' }}>
                  <i className="bi bi-shield-check" aria-hidden="true" />
                </div>
                <h3 className="fs-4 fw-bold mb-2">Proteção para Viver</h3>
                <p className="text-secondary small">Combate rigoroso à violência contra a mulher, proteção preventiva antes da tragédia e interiorização do suporte jurídico.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Eixos Programáticos */}
      <section className="axes-section py-5 bg-light-subtle">
        <div className="container-xl">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="text-uppercase fw-semibold text-brand-orange small letter-spacing-1">Plano de Mandato</span>
              <h2 className="fw-bold fs-2 mb-0">Os 4 Eixos de Atuação</h2>
            </div>
            <Link to="/propostas" className="btn btn-outline-secondary btn-sm mt-2 mt-sm-0">
              Ver todas as propostas <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="brand-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-danger-subtle text-danger mb-2">Eixo 1</span>
                  <h3 className="fs-5 fw-bold mb-2">Autonomia e Trabalho</h3>
                  <p className="text-secondary small mb-3">Mulher Trabalhando, Ceará Acelera Mulher, Crédito que Chega e Trabalho Compatível.</p>
                </div>
                <Link to="/propostas/autonomia-e-trabalho" className="small fw-semibold text-brand-pink text-decoration-none">
                  Explorar eixo <i className="bi bi-chevron-right" />
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="brand-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-warning-subtle text-warning mb-2">Eixo 2</span>
                  <h3 className="fs-5 fw-bold mb-2">Maternidade & Cuidado</h3>
                  <p className="text-secondary small mb-3">Vaga Garantida, Nenhuma Família Sozinha, Cuidar de Quem Cuida e Inclusão Escolar.</p>
                </div>
                <Link to="/propostas/maternidade-infancia-rede-cuidado" className="small fw-semibold text-brand-orange text-decoration-none">
                  Explorar eixo <i className="bi bi-chevron-right" />
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="brand-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-danger-subtle text-danger mb-2">Eixo 3</span>
                  <h3 className="fs-5 fw-bold mb-2">Proteção às Mulheres</h3>
                  <p className="text-secondary small mb-3">Proteção Antes da Tragédia, Interiorização Rápida, Recomeço e Violência Digital.</p>
                </div>
                <Link to="/propostas/protecao-as-mulheres" className="small fw-semibold text-brand-pink text-decoration-none">
                  Explorar eixo <i className="bi bi-chevron-right" />
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="brand-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-info-subtle text-info mb-2">Eixo 4</span>
                  <h3 className="fs-5 fw-bold mb-2">Estado que Entrega</h3>
                  <p className="text-secondary small mb-3">Observatório Renda, Orçamento com Lupa, Emenda com Destino e Matriz Jurídica.</p>
                </div>
                <Link to="/propostas/estado-que-enxerga-integra-entrega" className="small fw-semibold text-brand-orange text-decoration-none">
                  Explorar eixo <i className="bi bi-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section py-5 text-center" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
        <div className="container-xl">
          <h2 className="display-6 fw-bold mb-2 text-white">Faça Parte Deste Movimento</h2>
          <p className="fs-5 mb-4 text-white-50" style={{ maxWidth: 640, margin: '0 auto' }}>
            Junte-se a milhares de cearenses que acreditam em um mandato focado em renda, acolhimento e proteção real.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href={socialConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="btn btn-light fw-bold px-4 py-3 rounded-pill text-dark shadow">
              <i className="bi bi-whatsapp text-success me-2" />
              Conversar no WhatsApp
            </a>
            <Link to="/quem-e-larissa" className="btn btn-outline-light fw-bold px-4 py-3 rounded-pill">
              Conhecer a Trajetória
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
