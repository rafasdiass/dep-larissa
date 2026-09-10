import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';

export function AccessibilityPage() {
  return (
    <article className="accessibility-page py-5">
      <div className="container-xl max-w-800">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Acessibilidade</li>
          </ol>
        </nav>

        <header className="mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Compromisso com Todos
          </span>
          <h1 className="display-4 fw-bold mb-3">Declaração de Acessibilidade Digital</h1>
          <p className="lead text-secondary">
            Acreditamos que uma internet verdadeiramente democrática precisa ser acessível a qualquer pessoa, com ou sem deficiência.
          </p>
        </header>

        <section className="mb-5">
          <h2 className="fs-3 fw-bold mb-3">Padrões e Diretrizes (WCAG 2.1 AA)</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Este website foi projetado e desenvolvido em conformidade com as diretrizes do <strong>W3C / WCAG 2.1 Nível AA</strong> (Web Content Accessibility Guidelines). Implementamos boas práticas de engenharia de software para proporcionar uma navegação fluida, intuitiva e sem barreiras.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fs-3 fw-bold mb-3">Recursos de Acessibilidade Implementados</h2>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="brand-card p-3 h-100">
                <strong className="d-block mb-1">
                  <i className="bi bi-arrow-right-short text-primary" /> Skip-Link (Pular para o Conteúdo)
                </strong>
                <p className="small text-secondary mb-0">
                  Permite aos usuários que navegam por teclado saltar diretamente os blocos de navegação e ir ao conteúdo principal via tecla Tab.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="brand-card p-3 h-100">
                <strong className="d-block mb-1">
                  <i className="bi bi-moon-stars text-primary" /> Modo Escuro & Alto Contraste
                </strong>
                <p className="small text-secondary mb-0">
                  Alternador de tema Claro / Escuro com persistência local e contraste cromático adequado para conforto visual e baixa visão.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="brand-card p-3 h-100">
                <strong className="d-block mb-1">
                  <i className="bi bi-tag text-primary" /> Marcação Semântica e ARIA
                </strong>
                <p className="small text-secondary mb-0">
                  Uso estrito de elementos HTML5 semânticos (`&lt;main&gt;`, `&lt;nav&gt;`, `&lt;header&gt;`, `&lt;footer&gt;`, `&lt;article&gt;`) e atributos ARIA para leitores de tela (NVDA, JAWS, VoiceOver).
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="brand-card p-3 h-100">
                <strong className="d-block mb-1">
                  <i className="bi bi-bounding-box text-primary" /> Foco Teclado Visível
                </strong>
                <p className="small text-secondary mb-0">
                  Indicadores de foco (`:focus-visible`) nítidos e destacados em todos os links, botões e campos de formulário.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fs-3 fw-bold mb-3">Feedback e Canais de Suporte</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Se você encontrar qualquer dificuldade ao navegar ou tiver sugestões para melhorar a acessibilidade desta plataforma, entre em contato diretamente pelo WhatsApp <strong>{siteConfig.contact.whatsappDisplay}</strong> ou pelo formulário na página de{' '}
            <Link to="/contato">Contato</Link>.
          </p>
        </section>
      </div>
    </article>
  );
}
