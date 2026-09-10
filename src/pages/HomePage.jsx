import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
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

export function HomePage() {
  return (
    <div className="home-page">
      {/* 01. Hero Section com Foto Oficial, Duplo CTA e Identidade de Urna */}
      <HeroSection />

      {/* 02. Introdução e Propósito Institucional */}
      <PurposeSection />

      {/* 03. Os 3 Pilares da Campanha */}
      <PillarsSection />

      {/* 04. 4 Eixos Programáticos da ALCE */}
      <AxesSection />

      {/* 05. Destaques de Propostas Práticas */}
      <ProposalHighlights />

      {/* 06. Como Funciona o Mandato na Assembleia */}
      <MandateExplainer />

      {/* 07. Plano de Mandato em PDF (Download Direto) */}
      <PlanPreviewSection />

      {/* 08. Transparência, Método e Compromissos Éticos */}
      <TransparencySection />

      {/* 09. Trajetória e História com Fotos Oficiais */}
      <TrajectoryPreview />

      {/* 10. Seção de Mídia e Vídeos Oficiais com Transcrição */}
      <MediaSection />

      {/* 11. Materiais de Campanha e Adesivos */}
      <MaterialsSection />

      {/* 12. Sala de Imprensa e Releases */}
      <PressSection />

      {/* 13. Canais Oficiais de Comunicação (WhatsApp e Instagram) */}
      <OfficialChannelsSection />

      {/* 14. Chamada de Apoiadores e Voluntários */}
      <VolunteerCtaSection />

      {/* 15. Perguntas & Respostas Frequentes (FAQ) */}
      <FaqSection />
    </div>
  );
}

export default HomePage;
