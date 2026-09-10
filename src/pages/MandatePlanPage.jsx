import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../assets/assetManifest';
import { siteConfig } from '../config/site.config';

export function MandatePlanPage() {
  const plan = assetManifest.documents.mandatePlan;

  const chapters = [
    {
      num: '01',
      title: 'Diagnóstico Real do Ceará',
      desc: 'Mapeamento detalhado dos índices de vulnerabilidade das mulheres chefes de família, carência de creches e distribuição regional do atendimento neurodivergente no estado.',
    },
    {
      num: '02',
      title: 'Tríplice Pilar de Atuação',
      desc: 'Fundamentos de Renda para Escolher, Rede para Conseguir e Proteção para Viver com metas quantificáveis e cronograma de implementação.',
    },
    {
      num: '03',
      title: 'Compromissos Éticos e Gestão do Gabinete',
      desc: 'Código de conduta do mandato, renúncia a privilégios desnecessários, seleção técnica de assessoria e prestação de contas mensal aberta ao cidadão.',
    },
    {
      num: '04',
      title: 'Plano de Ação para os Primeiros 100 Dias',
      desc: 'Primeiros projetos de lei prioritários na ALCE: Rede Estadual de Atenção Neurodivergente (REAN), Selo Empresa Amiga da Mãe e Gabinete Aberto.',
    },
  ];

  return (
    <article className="mandate-plan-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Plano de Mandato</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Documento Oficial
          </span>
          <h1 className="display-4 fw-bold mb-3">Plano de Mandato Legislativo</h1>
          <p className="lead text-secondary">
            Conheça o documento programático completo que orientará cada voto, projeto de lei e fiscalização de Larissa DeLucca na Assembleia Legislativa do Estado do Ceará.
          </p>
        </header>

        {/* Card de Download em Destaque */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div
              className="p-4 p-md-5 rounded-4 shadow-sm"
              style={{
                background: 'var(--bg-surface)',
                border: '2px solid var(--brand-pink)',
              }}
            >
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-3 text-center">
                  <div
                    className="p-4 rounded-3 d-inline-flex flex-column align-items-center justify-content-center"
                    style={{ background: 'rgba(230,0,126,0.08)', width: '130px', height: '150px' }}
                  >
                    <i className="bi bi-file-earmark-pdf-fill fs-1" style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
                    <span className="fw-bold mt-2 text-uppercase" style={{ fontSize: '0.75rem', color: 'var(--brand-pink)' }}>PDF Oficial</span>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <span className="badge bg-success-subtle text-success mb-2">{plan.version}</span>
                  <h2 className="fs-3 fw-bold mb-2">{plan.title}</h2>
                  <p className="text-secondary small mb-2">
                    Arquivo oficial para consulta pública de propostas, diretrizes orçamentárias e metas legislativas.
                  </p>
                  <div className="d-flex gap-3 text-muted small">
                    <span><i className="bi bi-file-text me-1" />{plan.pages}</span>
                    <span><i className="bi bi-hdd me-1" />{plan.size}</span>
                    <span><i className="bi bi-shield-check me-1" />Autenticado</span>
                  </div>
                </div>

                <div className="col-12 col-md-3 text-md-end text-center">
                  <a
                    href={`/assets/docs/${encodeURIComponent(plan.fileName)}`}
                    download={plan.fileName}
                    className="btn btn-brand-primary w-100 justify-content-center"
                  >
                    <i className="bi bi-download me-2" aria-hidden="true" />
                    Baixar PDF
                  </a>
                  <span className="text-muted d-block mt-2" style={{ fontSize: '0.75rem' }}>
                    Download gratuito e direto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sumário Executivo dos Capítulos */}
        <section className="chapters-section my-5">
          <div className="text-center mb-5 max-w-700 mx-auto">
            <h2 className="fs-2 fw-bold mb-2">Estrutura do Plano de Mandato</h2>
            <p className="text-secondary">O plano está dividido em 4 eixos estratégicos para leitura clara e transparente.</p>
          </div>

          <div className="row g-4">
            {chapters.map((ch) => (
              <div key={ch.num} className="col-12 col-md-6">
                <div className="brand-card h-100 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="d-flex align-items-center justify-content-center fw-bold rounded-circle"
                      style={{
                        width: 44,
                        height: 44,
                        background: 'var(--brand-gradient)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-family-display)',
                      }}
                    >
                      {ch.num}
                    </span>
                    <h3 className="fs-5 fw-bold mb-0">{ch.title}</h3>
                  </div>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                    {ch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Contato e Dúvidas */}
        <section className="faq-cta text-center p-5 rounded-4 mt-5" style={{ background: 'var(--bg-accent-subtle)' }}>
          <h3 className="fs-3 fw-bold mb-2">Tem sugestões para o nosso Plano?</h3>
          <p className="text-secondary mb-4 max-w-600 mx-auto">
            Acreditamos na construção coletiva e participativa. Envie suas considerações diretamente para nossa equipe de formulação de políticas públicas.
          </p>
          <Link to="/contato" className="btn btn-brand-primary">
            <i className="bi bi-chat-dots me-2" aria-hidden="true" />
            Enviar Sugestão de Projeto de Lei
          </Link>
        </section>
      </div>
    </article>
  );
}
