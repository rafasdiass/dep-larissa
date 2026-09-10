import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Qual é o número oficial de votação de Larissa DeLucca na urna?',
      a: `O número de Larissa DeLucca para Deputada Estadual no Ceará é 15888, pelo MDB (Movimento Democrático Brasileiro).`,
    },
    {
      q: 'O que significa ser uma "mãe atípica" e como isso influencia a atuação política?',
      a: `Mãe atípica é a mulher que educa e cuida de um filho com deficiência, neurodivergência (como TEA, TDAH, paralisia cerebral) ou doenças raras. Larissa vivencia na própria rotina a luta por laudos, filas do SUS e terapias, trazendo a autoridade de quem sente a dor para propor leis que realmente funcionem.`,
    },
    {
      q: 'Onde posso ler o Plano de Mandato completo?',
      a: `O Plano de Mandato oficial de 28 páginas está disponível para download gratuito em PDF nesta plataforma. Você pode baixá-lo diretamente pelo botão no topo da página ou na seção Plano de Mandato.`,
    },
    {
      q: 'Como posso receber adesivos e santinhos da campanha?',
      a: `Você pode solicitar material gráfico diretamente pelo formulário da página Contato ou enviar uma mensagem no WhatsApp oficial da campanha. Nossa equipe de coordenação agilizará a entrega no seu município.`,
    },
    {
      q: 'Como a campanha garante a transparência dos gastos?',
      a: `Todos os dados de arrecadação e despesas de campanha são prestados rigorosamente à Justiça Eleitoral pelo CNPJ oficial e podem ser consultados por qualquer cidadão na página de Transparência deste site e no sistema DivulgaCandContas do TSE.`,
    },
  ];

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq-section section-padding" style={{ background: 'var(--bg-surface)' }} aria-labelledby="faq-heading">
      <div className="container-xl max-w-800">
        <div className="section-header">
          <span className="section-tag">Dúvidas Frequentes</span>
          <h2 id="faq-heading" className="section-title">
            Perguntas & Respostas
          </h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre o número de urna, propostas, materiais e como apoiar o mandato.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                  aria-controls={`faq-ans-${idx}`}
                >
                  <span>{faq.q}</span>
                  <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'} text-muted ms-2`} aria-hidden="true" />
                </button>
                {isOpen && (
                  <div
                    id={`faq-ans-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="faq-answer"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-4">
          <span className="text-secondary small me-2">Ainda tem dúvidas?</span>
          <Link to="/contato" className="fw-bold" style={{ color: 'var(--brand-pink)' }}>
            Fale conosco diretamente
          </Link>
        </div>
      </div>
    </section>
  );
}
