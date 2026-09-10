import React, { useState } from 'react';
import { assetManifest } from '../../assets/assetManifest';

export function MediaSection() {
  const videos = assetManifest.videos;
  const [openTranscript, setOpenTranscript] = useState({});

  const toggleTranscript = (id) => {
    setOpenTranscript((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="media-section section-padding" style={{ background: 'var(--bg-surface)' }} aria-labelledby="media-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Vídeos Oficiais</span>
          <h2 id="media-heading" className="section-title">
            Em Primeira Pessoa com Larissa DeLucca
          </h2>
          <p className="section-subtitle">
            Assista às mensagens em vídeo sobre os pilares da campanha, os desafios das famílias atípicas e o projeto para a ALCE.
          </p>
        </div>

        <div className="row g-4">
          {videos.map((vid) => (
            <div key={vid.id} className="col-12 col-lg-4">
              <div className="video-card">
                <div className="video-container">
                  <video
                    controls
                    preload="metadata"
                    aria-label={`Vídeo: ${vid.title}`}
                    className="w-100"
                  >
                    <source src={vid.src} type="video/mp4" />
                    Seu navegador não suporta reprodução de vídeo HTML5.
                  </video>
                </div>

                <div className="video-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge bg-secondary-subtle text-secondary small">
                      {vid.thumbnailText}
                    </span>
                    <span className="small text-muted">{vid.duration}</span>
                  </div>

                  <h3 className="video-title">{vid.title}</h3>
                  <p className="video-desc">{vid.description}</p>

                  <div className="mt-auto pt-2 border-top">
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-decoration-none p-0 text-secondary"
                      onClick={() => toggleTranscript(vid.id)}
                      aria-expanded={Boolean(openTranscript[vid.id])}
                    >
                      <i className={`bi bi-chevron-${openTranscript[vid.id] ? 'up' : 'down'} me-1`} />
                      {openTranscript[vid.id] ? 'Ocultar transcrição' : 'Ver transcrição acessível'}
                    </button>

                    {openTranscript[vid.id] && (
                      <div className="p-3 mt-2 rounded bg-light border small text-secondary" role="region">
                        <strong>Transcrição resumida:</strong> {vid.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
