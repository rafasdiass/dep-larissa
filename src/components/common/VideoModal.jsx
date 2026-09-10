import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

export function VideoModal({ isOpen, video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <div className="video-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="video-modal-container"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="video-modal-header">
            <div className="d-flex align-items-center gap-2">
              <span className="badge-neon">Vídeo Oficial</span>
              <h3 className="video-modal-title mb-0">{video.title}</h3>
            </div>
            <button
              type="button"
              className="video-modal-close-btn"
              onClick={onClose}
              aria-label="Fechar vídeo"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <div className="video-modal-player-wrapper">
            <video
              src={video.src}
              controls
              autoPlay
              playsInline
              className="video-modal-video"
            >
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>

          <div className="video-modal-footer">
            <p className="video-modal-description mb-0 text-secondary">
              {video.description}
            </p>
            <div className="mt-3 d-flex flex-wrap gap-2">
              <a
                href="/propostas"
                className="btn btn-brand-primary btn-sm"
                onClick={onClose}
              >
                <span>Ver Propostas Relacionadas</span>
                <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default VideoModal;
