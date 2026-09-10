import React from 'react';
import { Link } from 'react-router-dom';

export function ProposalHighlights() {
  const highlights = [
    {
      tag: 'Saúde & Inclusão',
      title: 'Zerar a Fila de Terapias para Crianças Neurodivergentes',
      desc: 'Projeto de Lei para criação de centros regionais do SUS com fonoaudiólogos, psicólogos e terapeutas ocupacionais em cidades polo do interior e Região Metropolitana.',
      icon: 'bi-heart-pulse-fill',
      color: '#FF8A00',
    },
    {
      tag: 'Economia & Renda',
      title: 'Microcrédito Desburocratizado para Mulheres Chefes de Família',
      desc: 'Parceria com bancos de fomento para linhas de crédito com taxas subsidiadas e carência estendida voltadas a mães solo e autônomas cearenses.',
      icon: 'bi-cash-coin',
      color: '#E6007E',
    },
    {
      tag: 'Segurança & Defesa',
      title: 'DDMs 24 Horas com Equipe Multidisciplinar',
      desc: 'Destinação de emendas e pressão parlamentar para plantão permanente e assistência psicológica imediata a mulheres em situação de risco em todo o estado.',
      icon: 'bi-shield-check',
      color: '#FFBA00',
    },
    {
      tag: 'Educação Inclusiva',
      title: 'Monitores e Mediadores Especializados nas Escolas',
      desc: 'Garantia orçamentária para contratação e formação continuada de profissionais de apoio pedagógico para alunos atípicos na rede estadual de ensino.',
      icon: 'bi-mortarboard-fill',
      color: '#1A1A1A',
    },
  ];

  return (
    <section className="proposal-highlights section-padding" style={{ background: 'var(--bg-accent-subtle)' }} aria-labelledby="highlights-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Ações Práticas</span>
          <h2 id="highlights-heading" className="section-title">
            Propostas que Mudam a Vida Real
          </h2>
          <p className="section-subtitle">
            Medidas concretas pensadas com viabilidade técnica, orçamentária e jurídica para os primeiros 100 dias de mandato.
          </p>
        </div>

        <div className="row g-4">
          {highlights.map((h, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div
                    className="rounded-3 p-3 d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ background: 'var(--bg-surface)', color: h.color, fontSize: '1.5rem', border: '1px solid var(--border-color)' }}
                  >
                    <i className={`bi ${h.icon}`} aria-hidden="true" />
                  </div>
                  <span className="badge bg-secondary-subtle text-secondary small d-inline-block mb-2">
                    {h.tag}
                  </span>
                  <h3 className="fs-5 fw-bold mb-2">{h.title}</h3>
                  <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/propostas" className="btn btn-brand-primary">
            <span>Ver Todas as Propostas Programáticas</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
