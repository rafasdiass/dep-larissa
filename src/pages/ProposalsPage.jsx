import React from 'react';
import { Link } from 'react-router-dom';
import { proposalsData } from '../data/proposalsData';
import { siteConfig } from '../config/site.config';

export function ProposalsPage() {
  return (
    <article className="proposals-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Propostas</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Plano Programático 2026
          </span>
          <h1 className="display-4 fw-bold mb-3">4 Eixos para Transformar o Ceará</h1>
          <p className="lead text-secondary">
            Propostas legislativas estruturadas para garantir autonomia econômica, acolhimento integral às famílias atípicas, proteção rigorosa às mulheres e eficiência no serviço público.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <Link to="/plano-de-mandato" className="btn btn-brand-outline">
              <i className="bi bi-file-earmark-pdf me-2" aria-hidden="true" />
              Baixar Documento Completo em PDF
            </Link>
          </div>
        </header>

        {/* Eixos Grid */}
        <div className="row g-4">
          {proposalsData.map((eixo) => (
            <div key={eixo.slug} className="col-12 col-lg-6">
              <div className="brand-card h-100 d-flex flex-column justify-content-between p-4 p-md-5">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: 54,
                        height: 54,
                        background: 'var(--bg-accent-subtle)',
                        color: eixo.color,
                        fontSize: '1.5rem',
                      }}
                    >
                      <i className={`bi ${eixo.icon}`} aria-hidden="true" />
                    </div>
                    <span className="badge rounded-pill px-3 py-1 bg-secondary-subtle text-secondary fw-semibold">
                      Eixo {eixo.number} · {eixo.pillar}
                    </span>
                  </div>

                  <h2 className="fs-3 fw-bold mb-3">{eixo.title}</h2>
                  <p className="text-secondary mb-4">{eixo.summary}</p>

                  <h3 className="fs-6 fw-bold text-uppercase text-muted mb-3" style={{ letterSpacing: '0.05em' }}>
                    Principais Iniciativas:
                  </h3>
                  <ul className="list-unstyled mb-4">
                    {eixo.initiatives.map((init, idx) => (
                      <li key={idx} className="d-flex align-items-start gap-2 mb-2">
                        <i className="bi bi-check2-circle text-primary mt-1" aria-hidden="true" style={{ color: 'var(--brand-pink)' }} />
                        <span className="small text-secondary">
                          <strong>{init.title}:</strong> {init.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-top mt-auto">
                  <Link
                    to={`/propostas/${eixo.slug}`}
                    className="btn btn-brand-primary w-100 justify-content-center"
                  >
                    <span>Ver Detalhes do Eixo {eixo.number}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Compartilhar */}
        <section className="share-section mt-5 pt-4 text-center">
          <div className="p-4 rounded-4" style={{ background: 'var(--bg-accent-subtle)' }}>
            <h3 className="fs-4 fw-bold mb-2">Ajude a espalhar essas propostas pelo Ceará</h3>
            <p className="text-secondary small mb-3">
              Compartilhe o plano de trabalho de Larissa DeLucca com sua rede de contatos no WhatsApp.
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Conheça as propostas de Larissa DeLucca (15888 MDB) para o Ceará: ' + siteConfig.urls.domain + '/propostas')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand-primary"
            >
              <i className="bi bi-whatsapp me-2" aria-hidden="true" />
              Compartilhar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
