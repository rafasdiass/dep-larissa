import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../../assets/assetManifest';

export function PlanPreviewSection() {
  const plan = assetManifest.documents.mandatePlan;

  return (
    <section className="plan-preview section-padding" style={{ background: 'var(--bg-surface)' }} aria-labelledby="plan-heading">
      <div className="container-xl">
        <div
          className="p-4 p-md-5 rounded-4 shadow-sm"
          style={{
            background: 'var(--bg-accent-subtle)',
            border: '2px solid rgba(230, 0, 126, 0.3)',
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-3 text-center">
              <div
                className="p-4 rounded-4 d-inline-flex flex-column align-items-center justify-content-center shadow-sm"
                style={{ background: '#FFFFFF', width: '140px', height: '160px', border: '1px solid var(--border-color)' }}
              >
                <i className="bi bi-file-earmark-pdf-fill fs-1" style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
                <span className="fw-bold mt-2 text-uppercase small" style={{ color: 'var(--brand-pink)', fontSize: '0.75rem' }}>PDF Oficial</span>
                <span className="badge bg-secondary-subtle text-secondary mt-1" style={{ fontSize: '0.65rem' }}>{plan.size}</span>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <span className="badge bg-primary-subtle text-primary mb-2">Documento Oficial de Campanha</span>
              <h2 id="plan-heading" className="fs-3 fw-bold mb-2">
                Baixe o Plano de Mandato Completo
              </h2>
              <p className="text-secondary small mb-3" style={{ lineHeight: 1.6 }}>
                Acesse na íntegra as 28 páginas de diretrizes, metas quantificáveis, diagnóstico do estado do Ceará e os compromissos éticos registrados para a legislatura 2027–2030.
              </p>
              <div className="d-flex flex-wrap gap-3 text-muted small">
                <span><i className="bi bi-check2-circle text-success me-1" />{plan.pages}</span>
                <span><i className="bi bi-shield-check text-success me-1" />Autenticado</span>
                <span><i className="bi bi-download text-primary me-1" />Download Direto</span>
              </div>
            </div>

            <div className="col-12 col-md-3 text-md-end text-center">
              <a
                href={plan.downloadUrl}
                download={plan.fileName}
                className="btn btn-brand-primary w-100 justify-content-center mb-2"
              >
                <i className="bi bi-download me-2" aria-hidden="true" />
                Baixar PDF
              </a>
              <Link to="/plano-de-mandato" className="btn btn-sm btn-link text-decoration-none d-block">
                Ver sumário dos capítulos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
