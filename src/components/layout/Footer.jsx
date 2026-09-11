import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { socialConfig } from '../../config/social.config';
import { legalConfig } from '../../config/legal.config';
import { Icon } from '../common/Icons';

const navigation = [
  ['Quem é Larissa', '/quem-e-larissa'],
  ['Todas as propostas', '/propostas'],
  ['Plano de mandato', '/plano-de-mandato'],
  ['Transparência', '/transparencia'],
  ['Materiais de campanha', '/materiais'],
  ['Imprensa', '/imprensa'],
  ['Fale com a equipe', '/contato'],
];
const priorities = [
  ['Autonomia e trabalho', '/propostas/autonomia-e-trabalho'],
  ['Maternidade e cuidado', '/propostas/maternidade-infancia-rede-cuidado'],
  ['Proteção às mulheres', '/propostas/protecao-as-mulheres'],
  ['Estado que entrega', '/propostas/estado-que-enxerga-integra-entrega'],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-xl">
        <div className="footer-main-grid">
          <div className="footer-identity">
            <Link to="/" className="footer-brand" aria-label="Larissa DeLucca — voltar ao início">
              <span className="footer-office">{siteConfig.candidate.office} · Ceará</span>
              <span className="footer-brand-title">Larissa DeLucca<span aria-hidden="true">.</span></span>
              <span className="footer-ballot">{siteConfig.candidate.number} <span>{siteConfig.candidate.party}</span></span>
            </Link>
            <p className="footer-slogan">{siteConfig.candidate.slogan}</p>
            <div className="footer-social-links" aria-label="Redes sociais oficiais">
              <a href={socialConfig.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram oficial de Larissa DeLucca"><Icon name="instagram" size={20} /><span>Instagram</span><Icon name="arrow-up-right" size={14} /></a>
              <a href={socialConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp oficial de Larissa DeLucca"><Icon name="whatsapp" size={20} /><span>WhatsApp</span><Icon name="arrow-up-right" size={14} /></a>
            </div>
          </div>
          <nav className="footer-nav" aria-labelledby="footer-navigation-title">
            <h2 id="footer-navigation-title" className="footer-heading">Explore</h2>
            <ul className="footer-links">{navigation.map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}</ul>
          </nav>
          <div className="footer-priorities">
            <nav className="footer-nav" aria-labelledby="footer-priorities-title">
              <h2 id="footer-priorities-title" className="footer-heading">Nossas prioridades</h2>
              <ul className="footer-links">{priorities.map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}</ul>
            </nav>
            <address className="footer-contact">
              <span><Icon name="map-pin" size={16} />Fortaleza · Ceará</span>
              <a href={socialConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" aria-label={`Falar com a equipe pelo WhatsApp ${siteConfig.contact.whatsappDisplay}`}><Icon name="whatsapp" size={16} />{siteConfig.contact.whatsappDisplay}</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-legal-notice"><span>{legalConfig.cnpj}</span><span>{legalConfig.copyright}</span></p>
          <nav className="footer-legal-links" aria-label="Informações legais">
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/acessibilidade">Acessibilidade</Link>
          </nav>
        </div>
        <div className="footer-credit" data-testid="developer-credit">
          <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer">{siteConfig.developer.text}</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
