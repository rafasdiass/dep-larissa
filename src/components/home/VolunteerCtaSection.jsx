import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export function VolunteerCtaSection() {
  return (
    <section className="volunteer-cta-section section-padding" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }} aria-labelledby="volunteer-heading">
      <div className="container-xl">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            <span className="badge bg-white text-dark fw-bold mb-3 px-3 py-2">Faça Parte do Movimento</span>
            <h2 id="volunteer-heading" className="display-5 fw-extrabold text-white mb-3">
              Junte-se à nossa corrente por um Ceará mais acolhedor
            </h2>
            <p className="lead text-white-50 mb-0">
              Seja voluntário(a), receba materiais para distribuir no seu bairro e participe ativamente da campanha de <strong>{siteConfig.candidate.name} (15888 MDB)</strong>.
            </p>
          </div>

          <div className="col-12 col-lg-4 text-lg-end text-center">
            <Link to="/contato" className="btn btn-light btn-lg fw-bold shadow">
              <i className="bi bi-person-plus-fill me-2" aria-hidden="true" />
              Quero Ser Voluntário(a)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
