import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { ProposalHighlights } from '../components/home/ProposalHighlights';
import { AxesSection } from '../components/home/AxesSection';
import { PlanPreviewSection } from '../components/home/PlanPreviewSection';
import { TrajectoryPreview } from '../components/home/TrajectoryPreview';
import { MediaSection } from '../components/home/MediaSection';
import { FaqSection } from '../components/home/FaqSection';
import { VideoModal } from '../components/common/VideoModal';
import { Icon } from '../components/common/Icons';
import { socialConfig } from '../config/social.config';

export function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const closeVideo = useCallback(() => setActiveVideo(null), []);
  return (
    <div className="home-page-container">
      <HeroSection onOpenVideo={setActiveVideo} />
      <TrajectoryPreview />
      <AxesSection />
      <ProposalHighlights />
      <PlanPreviewSection />
      <MediaSection onOpenVideo={setActiveVideo} />
      <FaqSection />
      <section className="community-section section-padding" aria-labelledby="community-title">
        <div className="container-xl community-inner">
          <div><span className="section-tag">CANAIS OFICIAIS</span><h2 id="community-title">Vamos conversar?</h2><p>Acompanhe Larissa, tire suas dúvidas e participe.</p></div>
          <div className="community-links">
            <a href={socialConfig.whatsapp.url} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={24} /><span>Iniciar conversa no WhatsApp</span><Icon name="arrow-up-right" size={18} /></a>
            <a href={socialConfig.instagram.url} target="_blank" rel="noreferrer"><Icon name="instagram" size={24} /><span>Seguir no Instagram</span><Icon name="arrow-up-right" size={18} /></a>
            <Link to="/contato"><Icon name="users" size={24} /><span>Quero ser voluntário(a)</span><Icon name="arrow-up-right" size={18} /></Link>
          </div>
        </div>
      </section>
      <VideoModal isOpen={Boolean(activeVideo)} video={activeVideo} onClose={closeVideo} />
    </div>
  );
}
export default HomePage;
