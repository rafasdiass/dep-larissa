import React from 'react';
import { Link } from 'react-router-dom';
import { proposalsData } from '../../data/proposalsData';

export function AxesSection() {
  return (
    <section className="axes-section section-padding" aria-labelledby="axes-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Plano de Mandato 2026</span>
          <h2 id="axes-heading" className="section-title">
            4 Eixos de Atuação na Assembleia Legislativa
          </h2>
          <p className="section-subtitle">
            Cada proposta foi desenhada ouvindo quem sente os problemas na pele: mães, autônomas, moradoras da periferia e líderes comunitárias.
          </p>
        </div>

        <div className="row g-4">
          {proposalsData.map((eixo) => (
            <div key={eixo.slug} className="col-12 col-md-6">
              <div className="brand-card h-100 p-4 p-lg-5 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-secondary-subtle text-secondary fw-semibold">
                      Eixo {eixo.number}
                    </span>
                    <span className="small text-muted">{eixo.pillar}</span>
                  </div>

                  <h3 className="fs-4 fw-bold mb-3">{eixo.title}</h3>
                  <p className="text-secondary small mb-4">{eixo.summary}</p>

                  <div className="d-flex flex-column gap-2 mb-4">
                    {eixo.initiatives.slice(0, 2).map((init, idx) => (
                      <div key={idx} className="p-2 rounded bg-light border-start border-3 border-primary small text-secondary">
                        <strong>{init.title}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-top mt-auto">
                  <Link
                    to={`/propostas/${eixo.slug}`}
                    className="btn btn-brand-outline w-100 justify-content-center"
                  >
                    <span>Conhecer Projetos do Eixo {eixo.number}</span>
                    <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
