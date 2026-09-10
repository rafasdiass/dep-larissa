import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { socialConfig } from '../config/social.config';
import { assetManifest } from '../assets/assetManifest';

export function BioPage() {
  const bioImg = assetManifest.images.bio;
  const trajImg = assetManifest.images.trajectory;

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

        {/* Bloco de Apresentação com Foto Real */}
        <div className="row g-5 align-items-center mb-5">
          <div className="col-12 col-lg-5">
            <div
              className="bio-photo-card p-2 text-center shadow-lg"
              style={{
                background: 'var(--brand-gradient)',
                borderRadius: 'var(--radius-xl)',
              }}
            >
              <div className="rounded-4 overflow-hidden" style={{ background: '#FFFFFF' }}>
                <img
                  src={bioImg.src}
                  alt={bioImg.alt}
                  width={bioImg.width}
                  height={bioImg.height}
                  className="img-fluid w-100"
                  style={{ maxHeight: '480px', objectFit: 'cover', objectPosition: 'top' }}
                />
                <div className="p-3 bg-white">
                  <h2 className="fs-4 fw-bold text-dark mb-1">{siteConfig.candidate.name}</h2>
                  <p className="small text-secondary mb-0">
                    {siteConfig.candidate.office} · {siteConfig.candidate.number} {siteConfig.candidate.party}
                  </p>
                </div>
              </div>
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
                <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
              </Link>
              <a
                href={socialConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand-outline"
              >
                <i className="bi bi-instagram me-2" aria-hidden="true" />
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

        {/* Vídeos de Apresentação com Players Reais */}
        <section className="videos-section my-5 pt-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-2">Em Primeira Pessoa</h2>
            <p className="text-secondary">Assista às mensagens de Larissa DeLucca sobre sua missão e seus compromissos.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {assetManifest.videos.map((v) => (
              <div key={v.id} className="col-12 col-md-4">
                <div className="video-card h-100">
                  <div className="video-container">
                    <video controls preload="metadata" className="w-100" aria-label={`Vídeo: ${v.title}`}>
                      <source src={v.src} type="video/mp4" />
                      Seu navegador não suporta reprodução de vídeo.
                    </video>
                  </div>
                  <div className="video-body">
                    <span className="badge bg-secondary-subtle text-secondary small mb-2 d-inline-block">
                      {v.thumbnailText} · {v.duration}
                    </span>
                    <h3 className="fs-6 fw-bold mb-2">{v.title}</h3>
                    <p className="text-muted small mb-0">{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
