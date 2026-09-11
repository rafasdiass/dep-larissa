import React from 'react';
import { Link } from 'react-router-dom';
import { legalConfig } from '../../config/legal.config';
import { siteConfig } from '../../config/site.config';

export function TransparencySection() {
  return (
    <section className="transparency-section section-padding" aria-labelledby="transparency-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Compromisso Ético</span>
          <h2 id="transparency-heading" className="section-title">
            Transparência Ativa e Sem Segredos
          </h2>
          <p className="section-subtitle">
            Cada recurso de campanha e cada ato parlamentar estarão abertos para fiscalização de todo cidadão cearense.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="brand-card h-100 p-4 text-center">
              <i className="bi bi-file-earmark-check fs-2 mb-3" style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
              <h3 className="fs-6 fw-bold mb-2">Registro Legal</h3>
              <p className="small text-muted mb-2">CNPJ de Campanha:</p>
              <strong className="small d-block text-primary">{legalConfig.cnpj}</strong>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="brand-card h-100 p-4 text-center">
              <i className="bi bi-cash-stack fs-2 mb-3" style={{ color: 'var(--brand-orange)' }} aria-hidden="true" />
              <h3 className="fs-6 fw-bold mb-2">Verba com Lupa</h3>
              <p className="small text-secondary mb-0">
                Notas fiscais de gabinete divulgadas digitalmente em painel interativo aberto ao público.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="brand-card h-100 p-4 text-center">
              <i className="bi bi-person-check fs-2 mb-3" style={{ color: 'var(--brand-yellow)' }} aria-hidden="true" />
              <h3 className="fs-6 fw-bold mb-2">Assessoria Técnica</h3>
              <p className="small text-secondary mb-0">
                Seleção qualificada para cargos técnicos com foco em formulação legislativa e atendimento.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="brand-card h-100 p-4 text-center">
              <i className="bi bi-shield-lock fs-2 mb-3 text-success" aria-hidden="true" />
              <h3 className="fs-6 fw-bold mb-2">Privacidade LGPD</h3>
              <p className="small text-secondary mb-0">
                Dados de apoiadores protegidos, sem venda e sem compartilhamento comercial.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/transparencia" className="btn btn-brand-outline">
            <span>Ver Detalhes do Portal da Transparência</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
