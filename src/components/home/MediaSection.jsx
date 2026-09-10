import React, { useState } from 'react';
import { assetManifest } from '../../assets/assetManifest';
import { Icon } from '../common/Icons';

export function MediaSection({ onOpenVideo }) {
  const videos = assetManifest.videos;
  const [openTranscript, setOpenTranscript] = useState({});

  const toggleTranscript = (id) => {
    setOpenTranscript((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="nikolas-media-section" aria-labelledby="media-heading">
      <div className="container-xl">
        <div className="section-head-nikolas text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="live-dot-pulse"></span>
            <span className="section-eyebrow-tag">VÍDEOS OFICIAIS & PRONUNCIAMENTOS</span>
          </div>
          <h2 id="media-heading" className="section-main-heading">
            EM PRIMEIRA PESSOA COM LARISSA DELUCCA
          </h2>
          <p className="section-sub-heading max-w-700 mx-auto">
            Mensagens diretas sobre a luta pelas mães atípicas, autonomia feminina e propostas concretas para o Ceará.
          </p>
        </div>

        <div className="row g-4">
          {videos.map((vid) => (
            <div key={vid.id} className="col-12 col-lg-4">
              <div className="nikolas-video-card">
                {/* Visualizador de Vídeo com Gatilho para Modal ou Player Direto */}
                <div className="video-player-box position-relative">
                  <video
                    src={vid.src}
                    preload="metadata"
                    playsInline
                    className="video-element"
                  />
                  <div
                    className="video-overlay-play-cover"
                    onClick={() => onOpenVideo && onOpenVideo(vid)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Reproduzir vídeo: ${vid.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        onOpenVideo && onOpenVideo(vid);
                      }
                    }}
                  >
                    <div className="play-pulse-circle">
                      <Icon name="play" size={20} className="play-icon-triangle" />
                    </div>
                    <span className="play-hint-text">ASSISTIR VÍDEO</span>
                  </div>
                </div>

                <div className="video-card-info p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge-neon">{vid.thumbnailText}</span>
                    <span className="video-duration-pill">{vid.duration}</span>
                  </div>

                  <h3 className="video-card-headline">{vid.title}</h3>
                  <p className="video-card-summary">{vid.description}</p>

                  <div className="video-card-actions mt-3 pt-3 border-top border-light border-opacity-10 d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn-transcript-toggle"
                      onClick={() => toggleTranscript(vid.id)}
                      aria-expanded={Boolean(openTranscript[vid.id])}
                    >
                      <Icon
                        name={openTranscript[vid.id] ? 'close' : 'document'}
                        size={15}
                      />
                      <span>
                        {openTranscript[vid.id] ? 'Fechar transcrição' : 'Ver transcrição acessível'}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="btn-play-modal-direct"
                      onClick={() => onOpenVideo && onOpenVideo(vid)}
                    >
                      <span>Abrir</span>
                      <Icon name="arrow-up-right" size={14} />
                    </button>
                  </div>

                  {openTranscript[vid.id] && (
                    <div className="transcript-box-panel mt-3 p-3 rounded" role="region">
                      <strong className="d-block text-white mb-1">Transcrição resumida:</strong>
                      <p className="mb-0 small text-secondary">{vid.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MediaSection;
