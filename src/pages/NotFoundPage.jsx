import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';

export function NotFoundPage() {
  return (
    <article className="not-found-page py-5 text-center">
      <div className="container-xl max-w-700 py-5">
        <span
          className="display-1 fw-bold d-block mb-3"
          style={{
            fontFamily: 'var(--font-family-display)',
            background: 'var(--brand-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </span>
        <h1 className="fs-2 fw-bold mb-3">Página não encontrada</h1>
        <p className="lead text-secondary mb-4">
          O link que você tentou acessar não existe ou mudou de endereço. Mas a caminhada por um Ceará mais acolhedor continua firme!
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <Link to="/" className="btn btn-brand-primary">
            <i className="bi bi-house-door me-2" aria-hidden="true" />
            Voltar ao Início
          </Link>
          <Link to="/propostas" className="btn btn-brand-outline">
            Ver Propostas
          </Link>
        </div>
      </div>
    </article>
  );
}
