import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { RelatedProposals } from '../../components/proposals/RelatedProposals';
import { proposalsList } from '../../data/proposals';
import { axesData } from '../../data/axes';
import { assetManifest } from '../../assets/assetManifest';

export function IndividualProposalPage() {
  const { slug } = useParams();
  const proposal = proposalsList.find((p) => p.slug === slug);

  if (!proposal) {
    return <Navigate to="/propostas" replace />;
  }

  const axis = axesData.find((a) => a.slug === proposal.axisSlug);

  return (
    <article className="individual-proposal-page py-5">
      <div className="container-xl">
        <Breadcrumbs
          items={[
            { label: 'Propostas', href: '/propostas' },
            { label: axis?.shortTitle || 'Eixo', href: `/propostas/${proposal.axisSlug}` },
            { label: proposal.shortTitle },
          ]}
        />

        <header className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span
              className="badge rounded-pill px-3 py-2 text-white"
              style={{ background: axis?.color || 'var(--brand-pink)' }}
            >
              Iniciativa {proposal.number}
            </span>
            <span className="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary">
              Pilar: {proposal.pillar}
            </span>
          </div>

          <h1 className="display-4 fw-extrabold mb-3">{proposal.title}</h1>
          <p className="lead text-secondary" style={{ maxWidth: '820px' }}>
            {proposal.summary}
          </p>
        </header>

        <div className="row g-5">
          <div className="col-12 col-lg-8">
            {/* Problema vs Solução */}
            <div className="brand-card p-4 p-md-5 mb-4">
              <h2 className="fs-4 fw-bold mb-3 text-danger">
                <i className="bi bi-exclamation-triangle-fill me-2" />
                Diagnóstico do Problema no Ceará
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                {proposal.problem}
              </p>

              <hr className="my-4" />

              <h2 className="fs-4 fw-bold mb-3 text-success">
                <i className="bi bi-check-circle-fill me-2" />
                A Proposta Legislativa na Prática
              </h2>
              <p className="text-secondary mb-4" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                {proposal.practicalProposal}
              </p>

              <div className="p-3 rounded-3 bg-light border-start border-3 border-primary">
                <strong className="d-block small text-dark mb-1">Impacto Quantitativo Esperado:</strong>
                <span className="small text-secondary">{proposal.expectedImpact}</span>
              </div>
            </div>

            {/* Indicadores de Sucesso */}
            <div className="brand-card p-4 mb-4">
              <h3 className="fs-5 fw-bold mb-3">Indicadores e Métricas de Fiscalização</h3>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {proposal.indicators.map((ind, i) => (
                  <li key={i} className="d-flex align-items-center gap-2 small text-secondary">
                    <i className="bi bi-graph-up-arrow text-primary" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <aside className="sticky-top" style={{ top: '100px' }}>
              <div className="brand-card p-4 mb-4">
                <h3 className="fs-5 fw-bold mb-3">Eixo Programático</h3>
                <p className="small text-secondary mb-3">{axis?.lead}</p>
                <Link
                  to={`/propostas/${proposal.axisSlug}`}
                  className="btn btn-sm btn-brand-outline w-100 justify-content-center"
                >
                  <span>Ver todas do Eixo {axis?.number}</span>
                  <i className="bi bi-arrow-right ms-2" />
                </Link>
              </div>

              <div className="p-4 rounded-4 text-center" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
                <i className="bi bi-file-earmark-pdf fs-2 mb-2 d-block" />
                <h3 className="fs-5 fw-bold mb-2 text-white">Documento Oficial</h3>
                <p className="small text-white-50 mb-3">
                  Baixe o Plano de Mandato com todas as metas de Larissa DeLucca.
                </p>
                <a
                  href={assetManifest.documents.mandatePlan.downloadUrl}
                  download={assetManifest.documents.mandatePlan.fileName}
                  className="btn btn-light fw-bold w-100 justify-content-center"
                >
                  <i className="bi bi-download me-2" />
                  Baixar PDF Oficial
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Propostas Relacionadas */}
        <RelatedProposals currentSlug={proposal.slug} axisSlug={proposal.axisSlug} />
      </div>
    </article>
  );
}
