import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';
import { legalConfig } from '../../config/legal.config';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container-xl">
        <div className="row g-4 justify-content-between">
          {/* Coluna 1: Marca & Lema */}
          <div className="col-12 col-md-5 col-lg-4">
            <h2 className="footer-brand-title">{siteConfig.candidate.name}</h2>
            <div className="footer-brand-badge">
              {siteConfig.candidate.office} · {siteConfig.candidate.number} {siteConfig.candidate.party}
            </div>
            <p className="footer-slogan mb-3">
              <strong>{siteConfig.candidate.slogan}</strong><br />
              {siteConfig.candidate.lema}
            </p>
            <div className="footer-social-links">
              <a
                href={socialConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Oficial de Larissa DeLucca"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a
                href={socialConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="WhatsApp Oficial de Larissa DeLucca"
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div className="col-6 col-md-3 col-lg-2">
            <h3 className="footer-heading">Navegação</h3>
            <ul className="footer-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/quem-e-larissa">Quem é Larissa</Link></li>
              <li><Link to="/propostas">Propostas</Link></li>
              <li><Link to="/plano-de-mandato">Plano de Mandato</Link></li>
              <li><Link to="/transparencia">Transparência</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Eixos & Ações */}
          <div className="col-6 col-md-4 col-lg-3">
            <h3 className="footer-heading">Eixos de Atuação</h3>
            <ul className="footer-links">
              <li><Link to="/propostas/autonomia-e-trabalho">Autonomia e Trabalho</Link></li>
              <li><Link to="/propostas/maternidade-infancia-rede-cuidado">Maternidade & Cuidado</Link></li>
              <li><Link to="/propostas/protecao-as-mulheres">Proteção às Mulheres</Link></li>
              <li><Link to="/propostas/estado-que-enxerga-integra-entrega">Estado que Entrega</Link></li>
              <li><Link to="/materiais">Materiais de Campanha</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Imprensa & Apoio */}
          <div className="col-12 col-md-4 col-lg-3">
            <h3 className="footer-heading">Imprensa & Contato</h3>
            <ul className="footer-links">
              <li><Link to="/imprensa">Sala de Imprensa / Press-Kit</Link></li>
              <li><Link to="/contato">Fale com a Equipe</Link></li>
              <li><Link to="/acessibilidade">Declaração de Acessibilidade</Link></li>
              <li><Link to="/privacidade">Política de Privacidade</Link></li>
            </ul>
            <div className="mt-3">
              <small className="text-secondary d-block">WhatsApp: {siteConfig.contact.whatsappDisplay}</small>
              <small className="text-secondary d-block">Fortaleza — Ceará</small>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-legal-notice">
            <span>{legalConfig.cnpj}</span> · <span>{legalConfig.copyright}</span>
          </div>

          {/* Crédito Obrigatório Centralizado */}
          <div className="footer-credit" data-testid="developer-credit">
            <a
              href={siteConfig.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              <strong>{siteConfig.developer.text}</strong>
            </a>
          </div>

          <div className="footer-legal-links">
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/acessibilidade">Acessibilidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
