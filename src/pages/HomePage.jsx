import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { PurposeSection } from '../components/home/PurposeSection';
import { PillarsSection } from '../components/home/PillarsSection';
import { AxesSection } from '../components/home/AxesSection';
import { ProposalHighlights } from '../components/home/ProposalHighlights';
import { MandateExplainer } from '../components/home/MandateExplainer';
import { PlanPreviewSection } from '../components/home/PlanPreviewSection';
import { TransparencySection } from '../components/home/TransparencySection';
import { TrajectoryPreview } from '../components/home/TrajectoryPreview';
import { MediaSection } from '../components/home/MediaSection';
import { MaterialsSection } from '../components/home/MaterialsSection';
import { PressSection } from '../components/home/PressSection';
import { OfficialChannelsSection } from '../components/home/OfficialChannelsSection';
import { VolunteerCtaSection } from '../components/home/VolunteerCtaSection';
import { FaqSection } from '../components/home/FaqSection';
import { VideoModal } from '../components/common/VideoModal';

export function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideo = (video) => {
    setActiveVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <div className="home-page-container">
      {/* 01. Hero Section Estilo Nikolas Ferreira com Tipografia Gigante, Iluminação Neon e Duplo CTA */}
      <HeroSection onOpenVideo={handleOpenVideo} />

      {/* 02. Painel "Números que Importam" com Contadores de Impacto */}
      <StatsSection />

      {/* 03. Propósito e Mensagem Central */}
      <PurposeSection />

      {/* 04. Os 3 Pilares Fundamentais da Campanha */}
      <PillarsSection />

      {/* 05. Destaques de Propostas Interativas com Filtros Dinâmicos */}
      <ProposalHighlights />

      {/* 06. 4 Eixos Programáticos na Assembleia Legislativa */}
      <AxesSection />

      {/* 07. Como Funciona o Mandato Parlamentar */}
      <MandateExplainer />

      {/* 08. Plano de Mandato em PDF com Download Direto */}
      <PlanPreviewSection />

      {/* 09. Mídia e Vídeos Oficiais com Lightbox Modal */}
      <MediaSection onOpenVideo={handleOpenVideo} />

      {/* 10. Trajetória e Perfil Oficial */}
      <TrajectoryPreview />

      {/* 11. Transparência e Prestação de Contas Ética */}
      <TransparencySection />

      {/* 12. Materiais de Campanha para Download */}
      <MaterialsSection />

      {/* 13. Sala de Imprensa e Notícias */}
      <PressSection />

      {/* 14. Canais Oficiais de Comunicação */}
      <OfficialChannelsSection />

      {/* 15. Apoiadores, Embaixadores e Voluntariado */}
      <VolunteerCtaSection />

      {/* 16. Perguntas Frequentes (FAQ) Interativo */}
      <FaqSection />

      {/* Modal de Vídeo Dinâmico (Overlay Imersivo) */}
      <VideoModal
        isOpen={isVideoModalOpen}
        video={activeVideo}
        onClose={handleCloseVideo}
      />
    </div>
  );
}

export default HomePage;
