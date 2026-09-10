import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { VolunteerForm } from '../components/common/VolunteerForm';
import { siteConfig } from '../config/site.config';
import { socialConfig } from '../config/social.config';

export function ContactPage() {
  return (
    <article className="contact-page py-5">
      <div className="container-xl">
        <Breadcrumbs items={[{ label: 'Contato' }]} />

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Participe do Movimento
          </span>
          <h1 className="display-4 fw-extrabold mb-3">Fale Conosco e Seja Voluntário(a)</h1>
          <p className="lead text-secondary">
            Esta campanha é feita de pessoas reais. Queremos ouvir suas ideias, receber sugestões e contar com a sua força para multiplicar o 15888 no Ceará.
          </p>
        </header>

        <div className="row g-5">
          {/* Informações Diretas */}
          <div className="col-12 col-lg-5">
            <div className="brand-card p-4 p-md-5 mb-4">
              <h2 className="fs-3 fw-bold mb-4">Canais Diretos</h2>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: '#25D366' }}
                >
                  <i className="bi bi-whatsapp fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">WhatsApp Oficial</strong>
                  <span className="text-secondary small d-block mb-2">Atendimento de segunda a sábado</span>
                  <a
                    href={socialConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-success"
                  >
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: '#E1306C' }}
                >
                  <i className="bi bi-instagram fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">Instagram</strong>
                  <span className="text-secondary small d-block mb-2">Acompanhe a rotina da campanha</span>
                  <a
                    href={socialConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-danger"
                  >
                    @larisdelucca
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: 'var(--brand-pink)' }}
                >
                  <i className="bi bi-geo-alt fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">Comitê Central</strong>
                  <span className="text-secondary small d-block">Fortaleza — Ceará</span>
                  <span className="text-muted small">Candidatura a Deputada Estadual 15888</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Voluntariado com Honeypot */}
          <div className="col-12 col-lg-7">
            <div className="brand-card p-4 p-md-5">
              <h2 className="fs-3 fw-bold mb-2">Cadastre-se para Apoiar</h2>
              <p className="text-secondary small mb-4">
                Preencha seus dados para receber materiais, participar do comitê de voluntários e ser a voz de Larissa no seu bairro ou município.
              </p>

              <VolunteerForm />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
