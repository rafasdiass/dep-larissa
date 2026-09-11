import React, { useRef } from 'react';
import { Icon } from './Icons';
import { useDialogFocus } from '../../hooks/useDialogFocus';
export function VideoModal({ isOpen, video, onClose }) {
  const panel = useRef(null);
  useDialogFocus(isOpen, panel, onClose);
  if (!isOpen || !video) return null;
  return <div className="video-modal-backdrop" onClick={onClose}>
    <div ref={panel} className="video-modal-container" role="dialog" aria-modal="true" aria-labelledby="video-modal-title" tabIndex={-1} onClick={(event) => event.stopPropagation()}>
      <div className="video-modal-header"><h2 id="video-modal-title">{video.title}</h2><button type="button" onClick={onClose} className="video-modal-close-btn" aria-label="Fechar vídeo"><Icon name="close" /></button></div>
      <video key={video.src} src={video.src} controls autoPlay playsInline tabIndex={0} className="video-modal-video">Seu navegador não suporta a reprodução de vídeo.</video>
      <p className="video-modal-description">{video.description}</p>
    </div>
  </div>;
}
export default VideoModal;
