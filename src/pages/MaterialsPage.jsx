import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { assetManifest } from '../assets/assetManifest';

export function MaterialsPage() {
  const materials = [
    {
      category: 'Santinho Digital',
      title: 'Santinho Oficial 15888 Larissa DeLucca',
      desc: 'Formato vertical ideal para compartilhamento no WhatsApp, Telegram e stories do Instagram.',
      format: 'JPG / PNG (1080x1920)',
      fileName: 'santinho-digital-larissa-15888.png',
      icon: 'bi-phone',
    },
    {
      category: 'Adesivo & Carro',
      title: 'Adesivo de Para-brisa e Perfurete',
      desc: 'Arte com dimensões regulamentadas pelo TSE para impressão em gráficas parceiras.',
      format: 'PDF Vetorial (CMYK)',
      fileName: 'adesivo-parabrisa-larissa-15888.pdf',
      icon: 'bi-car-front',
    },
    {
      category: 'Redes Sociais',
      title: 'Pack de Cards dos 4 Eixos Programáticos',
      desc: 'Conjunto de 8 artes prontas para alimentar feed de Instagram, Facebook e grupos de bairro.',
      format: 'ZIP (8 imagens HD)',
      fileName: 'pack-cards-eixos-larissa-15888.zip',
      icon: 'bi-images',
    },
    {
      category: 'Foto de Perfil',
      title: 'Moldura Oficial "Sou Larissa 15888"',
      desc: 'Moldura em PNG transparente para você aplicar na sua foto de perfil do WhatsApp.',
      format: 'PNG Transparente',
      fileName: 'moldura-perfil-larissa-15888.png',
      icon: 'bi-person-badge',
    },
    {
      category: 'Documento',
      title: 'Plano de Mandato na Íntegra',
      desc: 'Documento oficial completo em 28 páginas com as propostas para o Ceará.',
      format: 'PDF (4.2 MB)',
      fileName: assetManifest.documents.mandatePlan.fileName,
      icon: 'bi-file-earmark-pdf',
    },
    {
      category: 'Identidade Visual',
      title: 'Logomarca e Paleta de Cores Oficial',
      desc: 'Logos em alta resolução, referências do degradê Rosa/Laranja e tipografia.',
      format: 'ZIP (Vetores SVG + PNG)',
      fileName: 'identidade-visual-larissa-15888.zip',
      icon: 'bi-palette',
    },
  ];

  return (
    <article className="materials-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Materiais</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Campanha na Ponta dos Dedos
          </span>
          <h1 className="display-4 fw-bold mb-3">Materiais Oficiais de Campanha</h1>
          <p className="lead text-secondary">
            Baixe e compartilhe santinhos, cards para WhatsApp, adesivos e o plano de mandato para fortalecer a voz de Larissa DeLucca no seu município.
          </p>
        </header>

        {/* Grid de Materiais */}
        <div className="row g-4">
          {materials.map((mat, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="brand-card h-100 d-flex flex-column justify-content-between p-4">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-secondary-subtle text-secondary small fw-semibold">
                      {mat.category}
                    </span>
                    <i className={`bi ${mat.icon} fs-4`} style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
                  </div>

                  <h2 className="fs-5 fw-bold mb-2">{mat.title}</h2>
                  <p className="text-secondary small mb-3">{mat.desc}</p>
                  <span className="badge bg-light text-dark border small mb-3 d-inline-block">
                    {mat.format}
                  </span>
                </div>

                <div className="pt-3 border-top mt-auto">
                  <a
                    href={`/assets/docs/${encodeURIComponent(mat.fileName)}`}
                    download={mat.fileName}
                    className="btn btn-brand-primary w-100 justify-content-center"
                  >
                    <i className="bi bi-download me-2" aria-hidden="true" />
                    Baixar Arquivo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Caixa de Regras de Uso da Marca */}
        <section className="rules-section mt-5 pt-4">
          <div className="p-4 p-md-5 rounded-4" style={{ background: 'var(--bg-accent-subtle)' }}>
            <h2 className="fs-3 fw-bold mb-3">Orientações Legais do TSE para Uso de Material</h2>
            <ul className="text-secondary small mb-4" style={{ lineHeight: 1.8 }}>
              <li>É permitida a livre manifestação do pensamento e o compartilhamento espontâneo de material de campanha por cidadãos em redes sociais privadas e mensageiros.</li>
              <li>É vedado o impulsionamento pago de conteúdos por pessoas físicas ou jurídicas sem registro oficial de campanha.</li>
              <li>A impressão de materiais gráficos deve sempre conter o CNPJ do responsável pela confecção e o CNPJ da campanha: <strong>{siteConfig.candidate.number} — MDB</strong>.</li>
            </ul>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/contato" className="btn btn-brand-primary">
                Dúvidas sobre Impressão ou Gráfica? Fale Conosco
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
