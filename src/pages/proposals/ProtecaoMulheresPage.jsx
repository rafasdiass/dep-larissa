import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { RelatedProposals } from '../../components/proposals/RelatedProposals';
import { axesData } from '../../data/axes';
import { proposalsList } from '../../data/proposals';
import { assetManifest } from '../../assets/assetManifest';

export function ProtecaoMulheresPage() {
  const axis = axesData.find((a) => a.slug === 'protecao-as-mulheres');
  const axisProposals = proposalsList.filter((p) => p.axisSlug === 'protecao-as-mulheres');

  return (
    <article className="axis-detail-page py-5">
      <div className="container-xl">
        <Breadcrumbs
          items={[
            { label: 'Propostas', href: '/propostas' },
            { label: axis.shortTitle },
          ]}
        />

        {/* Header do Eixo */}
        <header className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge rounded-pill px-3 py-2 text-white" style={{ background: axis.color }}>
              {axis.badge}
            </span>
            <span className="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary">
              Pilar: {axis.pillar}
            </span>
          </div>

          <h1 className="display-4 fw-extrabold mb-3">{axis.title}</h1>
          <p className="lead text-secondary" style={{ maxWidth: '820px' }}>
            {axis.lead}
          </p>
        </header>

        {/* Estatísticas e Diagnóstico */}
        <section className="mb-5">
          <div className="row g-4">
            {axis.stats.map((st, idx) => (
              <div key={idx} className="col-12 col-md-4">
                <div className="p-4 rounded-4 text-center border bg-light">
                  <span className="display-6 fw-bold d-block" style={{ color: axis.color }}>
                    {st.value}
                  </span>
                  <span className="small text-secondary">{st.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diagnóstico Geral */}
        <section className="mb-5">
          <div className="p-4 p-md-5 rounded-4 bg-white border">
            <h2 className="fs-3 fw-bold mb-3">Segurança Efetiva e Proteção Antes da Tragédia</h2>
            <p className="text-secondary" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              {axis.description}
            </p>
          </div>
        </section>

        {/* Subtemas e Iniciativas Detalhadas */}
        <section className="mb-5">
          <h2 className="fs-3 fw-bold mb-4">Projetos de Lei e Ações de Segurança</h2>
          <div className="d-flex flex-column gap-4">
            {axisProposals.map((item) => (
              <div key={item.slug} className="brand-card p-4 p-md-5">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge bg-secondary-subtle text-secondary fw-semibold">
                    Iniciativa {item.number}
                  </span>
                  <span className="small text-muted">{item.legalBase}</span>
                </div>

                <h3 className="fs-4 fw-bold mb-3">{item.title}</h3>

                <div className="row g-4 mb-4">
                  <div className="col-12 col-lg-6">
                    <div className="p-3 rounded-3 bg-light h-100">
                      <strong className="text-danger small d-block mb-1">
                        <i className="bi bi-exclamation-octagon me-1" />
                        O Gargalo da Segurança:
                      </strong>
                      <p className="small text-secondary mb-0">{item.problem}</p>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="p-3 rounded-3 bg-light h-100">
                      <strong className="text-success small d-block mb-1">
                        <i className="bi bi-check2-circle me-1" />
                        A Medida Prática:
                      </strong>
                      <p className="small text-secondary mb-0">{item.practicalProposal}</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-between pt-3 border-top gap-3">
                  <div>
                    <span className="small text-muted d-block mb-1">Impacto Esperado:</span>
                    <strong className="small text-dark">{item.expectedImpact}</strong>
                  </div>
                  <a
                    href={assetManifest.documents.mandatePlan.downloadUrl}
                    download={assetManifest.documents.mandatePlan.fileName}
                    className="btn btn-sm btn-brand-outline"
                  >
                    <i className="bi bi-download me-1" />
                    Baixar Texto no Plano
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Propostas Relacionadas */}
        <RelatedProposals currentSlug="protecao-as-mulheres" />
      </div>
    </article>
  );
}
