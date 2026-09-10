import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { proposalsData } from '../data/proposalsData';
import { siteConfig } from '../config/site.config';

export function ProposalDetailPage() {
  const { slug } = useParams();
  const proposal = proposalsData.find((p) => p.slug === slug);

  if (!proposal) {
    return <Navigate to="/propostas" replace />;
  }

  return (
    <article className="proposal-detail-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item"><Link to="/propostas">Propostas</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{proposal.shortTitle}</li>
          </ol>
        </nav>

        {/* Header do Eixo */}
        <header className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge rounded-pill px-3 py-2" style={{ background: proposal.color, color: '#FFFFFF' }}>
              Eixo {proposal.number}
            </span>
            <span className="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary">
              Pilar: {proposal.pillar}
            </span>
          </div>

          <h1 className="display-4 fw-bold mb-3">{proposal.title}</h1>
          <p className="lead text-secondary" style={{ maxWidth: '820px' }}>
            {proposal.summary}
          </p>
        </header>

        {/* Descrição Detalhada */}
        <div className="row g-5">
          <div className="col-12 col-lg-8">
            <section className="mb-5">
              <h2 className="fs-3 fw-bold mb-3">Diagnóstico e Visão do Mandato</h2>
              <p className="text-secondary" style={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                {proposal.description}
              </p>
            </section>

            <section className="mb-5">
              <h2 className="fs-3 fw-bold mb-4">Iniciativas Legislativas Prioritárias</h2>
              <div className="d-flex flex-column gap-4">
                {proposal.initiatives.map((init, idx) => (
                  <div key={idx} className="brand-card p-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge bg-light text-dark border">Iniciativa {proposal.number}.{idx + 1}</span>
                      <h3 className="fs-5 fw-bold mb-0">{init.title}</h3>
                    </div>
                    <p className="text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                      {init.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <aside className="sticky-top" style={{ top: '100px' }}>
              <div className="brand-card mb-4 p-4">
                <h3 className="fs-5 fw-bold mb-3">Outros Eixos</h3>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  {proposalsData
                    .filter((p) => p.slug !== slug)
                    .map((other) => (
                      <li key={other.slug}>
                        <Link
                          to={`/propostas/${other.slug}`}
                          className="text-decoration-none d-flex align-items-center justify-content-between p-2 rounded hover-bg"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          <span className="small fw-semibold">{other.number}. {other.shortTitle}</span>
                          <i className="bi bi-chevron-right text-muted" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="p-4 rounded-4 text-center" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
                <h3 className="fs-5 fw-bold mb-2">Apoie este projeto</h3>
                <p className="small mb-3 text-white-50">Junte-se à corrente de voluntários pela mudança no Ceará.</p>
                <Link to="/contato" className="btn btn-light w-100 fw-bold">
                  Quero Ser Voluntário(a)
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}
