import React from 'react';
import { Link } from 'react-router-dom';
import { legalConfig } from '../config/legal.config';
import { siteConfig } from '../config/site.config';

export function TransparencyPage() {
  const commitments = [
    {
      title: 'Portal da Transparência em Tempo Real',
      desc: 'Todas as notas fiscais de despesas do gabinete e de campanha publicadas e auditáveis por qualquer cidadão.',
      icon: 'bi-eye-fill',
    },
    {
      title: 'Seleção Técnica de Equipe',
      desc: 'Processo seletivo público e qualificado para contratação dos cargos de assessoria parlamentar e técnica.',
      icon: 'bi-people-fill',
    },
    {
      title: 'Voto Aberto e Justificado',
      desc: 'Publicação do posicionamento e justificativa de cada voto em plenário e comissões temáticas na ALCE.',
      icon: 'bi-check-circle-fill',
    },
    {
      title: 'Emendas Participativas',
      desc: 'Decisão popular com votação online comunitária para a destinação dos recursos das emendas parlamentares.',
      icon: 'bi-hand-thumbs-up-fill',
    },
  ];

  return (
    <article className="transparency-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Transparência</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Compromisso Ético
          </span>
          <h1 className="display-4 fw-bold mb-3">Transparência e Prestação de Contas</h1>
          <p className="lead text-secondary">
            O dinheiro público pertence ao povo cearense. Conheça nossos dados de campanha, regras de conformidade eleitoral e compromissos éticos de mandato.
          </p>
        </header>

        {/* Dados Legais da Campanha */}
        <section className="legal-data-section mb-5">
          <div className="brand-card p-4 p-md-5">
            <div className="d-flex align-items-center gap-2 mb-4">
              <i className="bi bi-shield-lock-fill fs-3" style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
              <h2 className="fs-3 fw-bold mb-0">Identificação Jurídica da Campanha</h2>
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <span className="small text-muted d-block">Nome da Candidata</span>
                <strong className="fs-6">{siteConfig.candidate.ballotName}</strong>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="small text-muted d-block">Cargo / UF</span>
                <strong className="fs-6">{siteConfig.candidate.office} — {siteConfig.candidate.state}</strong>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="small text-muted d-block">Número / Partido</span>
                <strong className="fs-6">{siteConfig.candidate.number} · {siteConfig.candidate.party}</strong>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="small text-muted d-block">CNPJ de Campanha</span>
                <strong className="fs-6">{legalConfig.cnpj}</strong>
              </div>
            </div>

            <div className="alert alert-light border mt-4 mb-0" role="status">
              <i className="bi bi-info-circle me-2" aria-hidden="true" />
              <span>
                Prestação de contas registrada junto à Justiça Eleitoral e auditável conforme as resoluções do TSE.{' '}
                <a
                  href="https://divulgacandcontas.tse.jus.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-bold"
                  style={{ color: 'var(--brand-pink)' }}
                >
                  Consultar no DivulgaCandContas TSE <i className="bi bi-box-arrow-up-right small" />
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* 4 Compromissos de Mandato */}
        <section className="commitments-section my-5">
          <div className="text-center mb-5 max-w-700 mx-auto">
            <h2 className="fs-2 fw-bold mb-2">Padrões de Integridade na ALCE</h2>
            <p className="text-secondary">Critérios inegociáveis que nortearão toda a atuação no Parlamento Cearense.</p>
          </div>

          <div className="row g-4">
            {commitments.map((c, idx) => (
              <div key={idx} className="col-12 col-md-6">
                <div className="brand-card h-100 p-4">
                  <div
                    className="icon-circle mb-3"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(230,0,126,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--brand-pink)',
                      fontSize: '1.25rem',
                    }}
                  >
                    <i className={`bi ${c.icon}`} aria-hidden="true" />
                  </div>
                  <h3 className="fs-5 fw-bold mb-2">{c.title}</h3>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conformidade e LGPD */}
        <section className="compliance-section mt-5 pt-4">
          <div className="p-4 rounded-4" style={{ background: 'var(--bg-accent-subtle)' }}>
            <h3 className="fs-4 fw-bold mb-2">Proteção de Dados Pessoais (LGPD)</h3>
            <p className="text-secondary small mb-3">
              Não comercializamos, não compartilhamos e não utilizamos dados de cidadãos para fins alheios à comunicação estritamente institucional da campanha e do mandato. Você tem total controle sobre seus dados cadastrados.
            </p>
            <Link to="/privacidade" className="btn btn-brand-outline">
              Ler Política de Privacidade Completa
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
