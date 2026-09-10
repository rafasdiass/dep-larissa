import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { socialConfig } from '../config/social.config';
import { assetManifest } from '../assets/assetManifest';

export function BioPage() {
  const milestones = [
    {
      year: 'Trajetória Profissional',
      title: 'Advogada e Defensora de Direitos',
      description: 'Atuação jurídica focada na defesa de mulheres vulneráveis, direito de família e combate à violência doméstica.',
      icon: 'bi-journal-check',
    },
    {
      year: 'Liderança Social',
      title: 'Presidente da Fundação Mulheres Aceleradas',
      description: 'Concepção e liderança de programas de autonomia econômica, capacitação profissional e acesso ao microcrédito para milhares de cearenses.',
      icon: 'bi-briefcase',
    },
    {
      year: 'Vivência Pessoal',
      title: 'Mãe Atípica e Voz da Inclusão',
      description: 'A experiência diária de cuidar e lutar por direitos na saúde, educação inclusiva e terapias especializadas para crianças atípicas no Ceará.',
      icon: 'bi-heart-pulse',
    },
    {
      year: 'Compromisso 2026',
      title: 'Candidatura a Deputada Estadual — 15888 MDB',
      description: 'Levar a experiência real da ponta para a Assembleia Legislativa do Ceará (ALCE), transformando dor em proposta legislativa concreta.',
      icon: 'bi-flag',
    },
  ];

  return (
    <article className="bio-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Quem é Larissa</li>
          </ol>
        </nav>

        {/* Header da Biografia */}
        <header className="mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Biografia Oficial
          </span>
          <h1 className="display-4 fw-bold mb-3">Conheça Larissa DeLucca</h1>
          <p className="lead text-secondary" style={{ maxWidth: '780px' }}>
            Advogada, mãe atípica e presidente da Fundação Mulheres Aceleradas. Conheça a história de quem vive os desafios das famílias cearenses e tem a coragem necessária para mudar a realidade do Ceará.
          </p>
        </header>

        {/* Bloco de Apresentação */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-12 col-lg-5">
            <div
              className="bio-photo-card p-4 text-center"
              style={{
                background: 'var(--brand-gradient)',
                borderRadius: 'var(--radius-xl)',
                color: '#FFFFFF',
              }}
            >
              <div
                className="rounded-circle bg-white text-dark mx-auto mb-4 d-flex align-items-center justify-content-center shadow"
                style={{
                  width: '200px',
                  height: '200px',
                  fontSize: '4rem',
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 'bold',
                  background: 'var(--bg-surface)',
                  color: 'var(--brand-pink)',
                }}
              >
                LD
              </div>
              <h2 className="fs-3 fw-bold text-white mb-1">{siteConfig.candidate.name}</h2>
              <p className="mb-3 text-white-50">{siteConfig.candidate.office} · {siteConfig.candidate.number} {siteConfig.candidate.party}</p>
              <p className="small mb-0 text-white" style={{ opacity: 0.95 }}>
                "{siteConfig.candidate.slogan}"
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <h2 className="fs-2 fw-bold mb-3">A força da experiência vivida</h2>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              Larissa DeLucca não construiu sua história em gabinetes refrigerados. Construiu na prática jurídica, no acolhimento de mulheres vítimas de violência e na liderança da <strong>Fundação Mulheres Aceleradas</strong>, entidade referência no fomento ao empreendedorismo feminino e capacitação produtiva.
            </p>
            <p className="text-secondary mb-3" style={{ lineHeight: 1.8 }}>
              Como <strong>mãe atípica</strong>, conhece na própria pele as noites sem dormir, a busca incessante por laudos médicos, a fila de espera por fonoaudiólogos, psicólogos e terapeutas ocupacionais no SUS, e o preconceito velado nas salas de aula das escolas cearenses.
            </p>
            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
              Na Assembleia Legislativa do Estado do Ceará, Larissa representará a união entre preparo técnico e sensibilidade humana, legislando para quem mais precisa de acolhimento e respeito do Estado.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/propostas" className="btn btn-brand-primary">
                Ver Propostas Legislativas
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <a
                href={socialConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand-outline"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Linha do Tempo / Pilares de Trajetória */}
        <section className="timeline-section my-5 pt-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-2">Marcos da Trajetória</h2>
            <p className="text-secondary">Os passos que moldaram uma atuação dedicada à justiça social no Ceará.</p>
          </div>

          <div className="row g-4">
            {milestones.map((m, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div className="brand-card h-100">
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
                    <i className={`bi ${m.icon}`} aria-hidden="true" />
                  </div>
                  <span className="badge bg-secondary-subtle text-secondary mb-2" style={{ fontSize: '0.75rem' }}>
                    {m.year}
                  </span>
                  <h3 className="fs-5 fw-bold mb-2">{m.title}</h3>
                  <p className="text-secondary small mb-0">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vídeos de Apresentação */}
        <section className="videos-section my-5 pt-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-2">Em Primeira Pessoa</h2>
            <p className="text-secondary">Assista às mensagens de Larissa DeLucca sobre sua missão e seus compromissos.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {assetManifest.videos.map((v) => (
              <div key={v.id} className="col-12 col-md-4">
                <div className="brand-card h-100 text-center">
                  <div
                    className="video-placeholder mb-3 d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: '180px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-accent-subtle)',
                      border: '1px dashed var(--brand-pink)',
                    }}
                  >
                    <div
                      className="play-btn rounded-circle mb-2 d-flex align-items-center justify-content-center shadow"
                      style={{
                        width: 48,
                        height: 48,
                        background: 'var(--brand-gradient)',
                        color: '#FFFFFF',
                      }}
                    >
                      <i className="bi bi-play-fill fs-4" aria-hidden="true" />
                    </div>
                    <span className="small text-secondary fw-semibold">{v.thumbnailText}</span>
                    <span className="badge bg-dark text-light mt-1" style={{ fontSize: '0.7rem' }}>{v.duration}</span>
                  </div>
                  <h3 className="fs-6 fw-bold mb-2">{v.title}</h3>
                  <p className="text-muted small mb-0">Arquivo: {v.fileName}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
