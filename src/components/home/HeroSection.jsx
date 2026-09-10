import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site.config';
import { assetManifest } from '../../assets/assetManifest';
import { Icon } from '../common/Icons';

export function HeroSection({ onOpenVideo }) {
  const heroImage = assetManifest.images.hero;
  const presentationVideo = assetManifest.videos[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="nikolas-hero-section" aria-labelledby="hero-title">
      {/* Background Cinematográfico com Luzes Volumétricas e Degradê Roxo/Preto */}
      <div className="hero-atmosphere">
        <div className="hero-light-orb hero-light-magenta"></div>
        <div className="hero-light-orb hero-light-purple"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      {/* Tipografia Monumental de Fundo (Marca do Candidato Estilo Nikolas) */}
      <div className="hero-monumental-bg-text" aria-hidden="true">
        <span>DELUCCA</span>
      </div>

      <div className="container-xl position-relative z-2">
        <div className="row align-items-center g-5 min-vh-hero">
          {/* Coluna 1: Conteúdo Estratégico, Slogan e CTAs */}
          <motion.div
            className="col-12 col-lg-7 text-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag de Urna e Partido */}
            <motion.div variants={itemVariants} className="mb-3">
              <div className="hero-electoral-pill">
                <span className="pill-dot"></span>
                <span className="pill-state">CEARÁ</span>
                <span className="pill-divider">/</span>
                <span className="pill-office">DEPUTADA ESTADUAL</span>
                <span className="pill-divider">/</span>
                <strong className="pill-number">15888 {siteConfig.candidate.party}</strong>
              </div>
            </motion.div>

            {/* Nome e Título de Grande Porte */}
            <motion.h1 variants={itemVariants} id="hero-title" className="hero-main-title mb-2">
              {siteConfig.candidate.name}
            </motion.h1>

            {/* Slogan de Campanha */}
            <motion.div variants={itemVariants} className="mb-3">
              <h2 className="hero-campaign-slogan">
                Coragem pra mudar.
              </h2>
            </motion.div>

            {/* Lema dos Três Pilares */}
            <motion.p variants={itemVariants} className="hero-campaign-lema mb-4">
              Renda para Escolher. Rede para Conseguir. Proteção para Viver.
            </motion.p>

            {/* Grupo de Ação / CTAs Duplo + Gatilho de Vídeo */}
            <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3 align-items-center mb-5">
              <Link to="/propostas" className="btn-hero-primary">
                <span>CONHEÇA AS PROPOSTAS</span>
                <Icon name="arrow-right" size={18} />
              </Link>

              <a
                href={assetManifest.documents.mandatePlan.downloadUrl}
                download={assetManifest.documents.mandatePlan.fileName}
                className="btn-hero-secondary"
              >
                <Icon name="download" size={18} />
                <span>BAIXAR PLANO DE MANDATO</span>
              </a>

              {onOpenVideo && presentationVideo && (
                <button
                  type="button"
                  onClick={() => onOpenVideo(presentationVideo)}
                  className="btn-hero-video-trigger"
                  aria-label="Assistir ao vídeo de apresentação de Larissa DeLucca"
                >
                  <span className="video-trigger-play-icon">
                    <Icon name="play" size={14} />
                  </span>
                  <span>ASSISTIR APRESENTAÇÃO</span>
                </button>
              )}
            </motion.div>

            {/* Badges de Autoridade / Social Proof */}
            <motion.div variants={itemVariants} className="hero-badges-strip">
              <div className="authority-pill">
                <Icon name="check-circle" size={16} className="text-neon-magenta" />
                <span>Advogada & Defensora de Direitos</span>
              </div>
              <div className="authority-pill">
                <Icon name="check-circle" size={16} className="text-neon-magenta" />
                <span>Mãe Atípica & Voz da Inclusão</span>
              </div>
              <div className="authority-pill">
                <Icon name="check-circle" size={16} className="text-neon-magenta" />
                <span>Fundação Mulheres Aceleradas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna 2: Foto Oficial com Iluminação Neon e Composição de Impacto */}
          <motion.div
            className="col-12 col-lg-5 text-center position-relative"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait-stage">
              {/* Halos de Luz Neon ao Redor da Foto */}
              <div className="portrait-glow-halo"></div>
              <div className="portrait-accent-band"></div>

              {/* Cartão de Moldura da Foto */}
              <div className="portrait-frame">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  className="portrait-img"
                  loading="eager"
                  fetchpriority="high"
                />

                {/* Card Flutuante de Assinatura no Rodapé da Foto */}
                <div className="portrait-floating-card">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span className="floating-card-name">Larissa DeLucca</span>
                      <span className="floating-card-role">Deputada Estadual · 15888 MDB</span>
                    </div>
                    <span className="floating-card-flag">CEARÁ</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
