import React from 'react';
import { Link } from 'react-router-dom';
import { proposalsList } from '../../data/proposals';

export function RelatedProposals({ currentSlug, axisSlug }) {
  // Find up to 3 related proposals
  const related = proposalsList
    .filter((p) => p.slug !== currentSlug && (axisSlug ? p.axisSlug === axisSlug : true))
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="related-proposals my-5 pt-4 border-top" aria-labelledby="related-heading">
      <h3 id="related-heading" className="fs-4 fw-bold mb-4">
        Propostas Relacionadas
      </h3>
      <div className="row g-4">
        {related.map((item) => (
          <div key={item.slug} className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <span className="badge bg-secondary-subtle text-secondary small mb-2">
                  {item.number} · {item.pillar}
                </span>
                <h4 className="fs-6 fw-bold mb-2">{item.title}</h4>
                <p className="small text-secondary mb-3">{item.summary}</p>
              </div>
              <Link
                to={`/proposta/${item.slug}`}
                className="btn btn-sm btn-brand-outline w-100 justify-content-center mt-auto"
              >
                <span>Ver Proposta</span>
                <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
