import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';

export function PressPage() {
  const releases = [
    {
      date: '10 Setembro 2026',
      title: 'Larissa DeLucca lança plataforma programática oficial para Assembleia Legislativa do Ceará',
      subtitle: 'Com foco em mães atípicas e autonomia econômica feminina, advogada apresenta plano com 4 eixos estratégicos.',
      category: 'Nota Oficial',
    },
    {
      date: '04 Setembro 2026',
      title: 'Fundação Mulheres Aceleradas amplia alcance de capacitação para mais de 15 municípios cearenses',
      subtitle: 'Histórico de projetos sociais no interior do estado fundamenta propostas de microcrédito e desenvolvimento regional.',
      category: 'Atuação Social',
    },
    {
      date: '28 Agosto 2026',
      title: 'Em entrevista, Larissa DeLucca defende centros microrregionais do SUS para crianças neurodivergentes',
      subtitle: 'Proposta prevê desoneração das famílias atípicas e zeramento da fila de terapias em cidades do interior.',
      category: 'Entrevista',
    },
  ];

  return (
    <article className="press-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Imprensa</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Sala de Imprensa & Press-Kit
          </span>
          <h1 className="display-4 fw-bold mb-3">Assessoria de Comunicação</h1>
          <p className="lead text-secondary">
            Espaço dedicado a jornalistas, comunicadores e produtores de conteúdo. Acesse releases, agende entrevistas e baixe o press-kit oficial de Larissa DeLucca.
          </p>
        </header>

        {/* Card de Contato da Assessoria */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div
              className="p-4 p-md-5 rounded-4"
              style={{
                background: 'var(--brand-gradient)',
                color: '#FFFFFF',
              }}
            >
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-8">
                  <span className="badge bg-white text-dark mb-2">Plantão de Imprensa</span>
                  <h2 className="fs-3 fw-bold mb-2 text-white">Solicitações de Entrevistas & Pautas</h2>
                  <p className="small mb-0 text-white-50">
                    Atendimento ágil para veículos de TV, rádio, portais de notícia, podcasts e cobertura política estadual.
                  </p>
                </div>
                <div className="col-12 col-md-4 text-md-end">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Olá Assessoria! Sou jornalista e gostaria de solicitar uma entrevista com Larissa DeLucca.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-light fw-bold w-100 justify-content-center"
                  >
                    <i className="bi bi-whatsapp me-2" aria-hidden="true" />
                    Contato da Assessoria
                  </a>
                  <span className="text-white-50 d-block mt-2 small text-center">
                    {siteConfig.contact.whatsappDisplay}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Press-Kit para Download */}
        <section className="press-kit-section my-5">
          <h2 className="fs-3 fw-bold mb-4">Itens do Press-Kit Oficial</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="brand-card h-100 p-4">
                <i className="bi bi-camera-fill fs-2 mb-3" style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
                <h3 className="fs-5 fw-bold mb-2">Fotos Oficiais em Alta Resolução</h3>
                <p className="text-secondary small mb-3">
                  Fotos institucionais em estúdio e em atividades sociais com liberação de direitos autorais para imprensa.
                </p>
                <a href="/assets/docs/press-kit-fotos.zip" download className="btn btn-brand-outline btn-sm">
                  Baixar Fotos HD (ZIP)
                </a>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="brand-card h-100 p-4">
                <i className="bi bi-person-lines-fill fs-2 mb-3" style={{ color: 'var(--brand-orange)' }} aria-hidden="true" />
                <h3 className="fs-5 fw-bold mb-2">Mini-Bio e Perfil Curatorial</h3>
                <p className="text-secondary small mb-3">
                  Texto pronto para abertura de matérias, créditos em matérias de rádio, TV e créditos em notas jornalísticas.
                </p>
                <Link to="/quem-e-larissa" className="btn btn-brand-outline btn-sm">
                  Ver Biografia Completa
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="brand-card h-100 p-4">
                <i className="bi bi-file-earmark-text-fill fs-2 mb-3" style={{ color: 'var(--brand-yellow)' }} aria-hidden="true" />
                <h3 className="fs-5 fw-bold mb-2">Dados de Registro & Candidatura</h3>
                <p className="text-secondary small mb-3">
                  Documento em PDF com número 15888, coligação, certidões e histórico institucional.
                </p>
                <Link to="/transparencia" className="btn btn-brand-outline btn-sm">
                  Ver Dados Oficiais
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Releases Recentes */}
        <section className="releases-section my-5">
          <h2 className="fs-3 fw-bold mb-4">Notas e Releases para a Imprensa</h2>
          <div className="d-flex flex-column gap-3">
            {releases.map((rel, idx) => (
              <article key={idx} className="brand-card p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="badge bg-secondary-subtle text-secondary small">{rel.category}</span>
                  <time className="small text-muted">{rel.date}</time>
                </div>
                <h3 className="fs-5 fw-bold mb-2">{rel.title}</h3>
                <p className="text-secondary small mb-0">{rel.subtitle}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
