import React from 'react';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';

export function OfficialChannelsSection() {
  return (
    <section className="official-channels-section section-padding" aria-labelledby="channels-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Conectividade & Escuta</span>
          <h2 id="channels-heading" className="section-title">
            Fale Diretamente com Nossa Equipe
          </h2>
          <p className="section-subtitle">
            Acompanhe o dia a dia da campanha, envie sua mensagem ou participe das plenárias participativas.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="brand-card h-100 p-4 p-md-5 d-flex flex-column align-items-center text-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-white mb-3"
                style={{ width: 64, height: 64, background: '#25D366', fontSize: '2rem' }}
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </div>
              <h3 className="fs-4 fw-bold mb-2">WhatsApp Oficial</h3>
              <p className="text-secondary small mb-3">
                Envie sugestões para projetos de lei, solicite materiais ou fale com a nossa coordenação.
              </p>
              <strong className="fs-5 d-block mb-3 text-dark">{siteConfig.contact.whatsappDisplay}</strong>
              <a
                href={socialConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand-primary w-100 justify-content-center mt-auto"
              >
                <i className="bi bi-whatsapp me-2" aria-hidden="true" />
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-5">
            <div className="brand-card h-100 p-4 p-md-5 d-flex flex-column align-items-center text-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-white mb-3"
                style={{ width: 64, height: 64, background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', fontSize: '2rem' }}
              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </div>
              <h3 className="fs-4 fw-bold mb-2">Instagram Oficial</h3>
              <p className="text-secondary small mb-3">
                Stories em tempo real, vídeos de plenárias, debates e bastidores da campanha pelo Ceará.
              </p>
              <strong className="fs-5 d-block mb-3 text-dark">@larisdelucca</strong>
              <a
                href={socialConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand-outline w-100 justify-content-center mt-auto"
              >
                <i className="bi bi-instagram me-2" aria-hidden="true" />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
