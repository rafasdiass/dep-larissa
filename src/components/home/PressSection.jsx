import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export function PressSection() {
  return (
    <section className="press-section section-padding" style={{ background: 'var(--bg-accent-subtle)' }} aria-labelledby="press-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Imprensa & Comunicação</span>
          <h2 id="press-heading" className="section-title">
            Sala de Imprensa e Sala de Notícias
          </h2>
          <p className="section-subtitle">
            Canal aberto para jornalistas, veículos de rádio, TV e portais que cobrem o cenário político cearense.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8">
            <div className="brand-card p-4">
              <span className="badge bg-primary-subtle text-primary mb-2">Release Oficial</span>
              <h3 className="fs-5 fw-bold mb-2">
                Larissa DeLucca lança plataforma programática para a ALCE com foco em famílias atípicas
              </h3>
              <p className="text-secondary small mb-3">
                Advogada e presidente da Fundação Mulheres Aceleradas apresenta proposta de lei para criação da Rede Estadual de Atenção Neurodivergente.
              </p>
              <div className="d-flex align-items-center gap-3">
                <Link to="/imprensa" className="btn btn-sm btn-brand-outline">
                  Acessar Press-Kit e Fotos HD
                </Link>
                <span className="text-muted small">Atualizado em 10 de Setembro de 2026</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="p-4 rounded-4 text-center" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
              <i className="bi bi-broadcast fs-1 mb-2 d-block" />
              <h3 className="fs-5 fw-bold mb-2 text-white">Plantão da Assessoria</h3>
              <p className="small mb-3 text-white-50">
                Agendamento de entrevistas e solicitação de posicionamentos oficiais.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá! Sou jornalista e gostaria de agendar uma entrevista com Larissa DeLucca.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light fw-bold w-100 justify-content-center"
              >
                <i className="bi bi-whatsapp me-2" aria-hidden="true" />
                Falar com a Assessoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
