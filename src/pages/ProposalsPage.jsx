import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProposalExplorer } from '../components/proposals/ProposalExplorer';
import { axesData } from '../data/axes';
import { siteConfig } from '../config/site.config';
import { assetManifest } from '../assets/assetManifest';

export function ProposalsPage() {
  return (
    <article className="proposals-page py-5">
      <div className="container-xl">
        <Breadcrumbs items={[{ label: 'Propostas' }]} />

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Plano Programático 2026
          </span>
          <h1 className="display-4 fw-extrabold mb-3">4 Eixos para Transformar o Ceará</h1>
          <p className="lead text-secondary">
            Propostas legislativas estruturadas para garantir autonomia econômica, acolhimento integral às famílias atípicas, proteção rigorosa às mulheres e eficiência no serviço público.
          </p>
          <div className="mt-4 d-flex justify-content-center flex-wrap gap-3">
            <a
              href={assetManifest.documents.mandatePlan.downloadUrl}
              download={assetManifest.documents.mandatePlan.fileName}
              className="btn btn-brand-primary"
            >
              <i className="bi bi-file-earmark-pdf-fill me-2" aria-hidden="true" />
              Baixar Plano de Mandato Completo em PDF
            </a>
          </div>
        </header>

        {/* 4 Eixos Cards */}
        <section className="axes-overview mb-5" aria-labelledby="axes-overview-heading">
          <h2 id="axes-overview-heading" className="visually-hidden">Visão Geral dos Eixos</h2>
          <div className="row g-4">
            {axesData.map((eixo) => (
              <div key={eixo.slug} className="col-12 col-md-6 col-lg-3">
                <div
                  className="brand-card h-100 p-4 d-flex flex-column justify-content-between"
                  style={{ borderTop: `4px solid ${eixo.color}` }}
                >
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span className="badge bg-secondary-subtle text-secondary small fw-semibold">
                        {eixo.badge}
                      </span>
                      <i className={`bi ${eixo.icon} fs-4`} style={{ color: eixo.color }} aria-hidden="true" />
                    </div>
                    <h3 className="fs-5 fw-bold mb-2">{eixo.title}</h3>
                    <p className="small text-secondary mb-3">{eixo.lead}</p>
                  </div>
                  <Link
                    to={`/propostas/${eixo.slug}`}
                    className="btn btn-sm btn-outline-secondary w-100 justify-content-center mt-auto"
                  >
                    <span>Ver Eixo {eixo.number}</span>
                    <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Central de Exploração e Busca de Propostas */}
        <section className="explorer-section mb-5" aria-labelledby="explorer-heading">
          <div className="section-header">
            <span className="section-tag">Repositório Programático</span>
            <h2 id="explorer-heading" className="section-title">
              Busca & Exploração de Propostas
            </h2>
            <p className="section-subtitle">
              Pesquise por termos de interesse ou filtre por eixo temático para consultar as propostas detalhadas do mandato.
            </p>
          </div>

          <ProposalExplorer />
        </section>

        {/* CTA Compartilhar */}
        <section className="share-section mt-5 pt-4 text-center">
          <div className="p-4 p-md-5 rounded-4" style={{ background: 'var(--bg-accent-subtle)' }}>
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
