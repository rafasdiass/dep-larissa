import React from 'react';
import { Link } from 'react-router-dom';

export function PillarsSection() {
  const pillars = [
    {
      id: 'renda',
      title: 'Renda para Escolher',
      lema: 'Autonomia Econômica & Independência Feminina',
      color: '#E6007E',
      icon: 'bi-wallet2',
      bgGlow: 'rgba(230,0,126,0.08)',
      points: [
        'Acesso desburocratizado a microcrédito produtivo para chefes de família',
        'Capacitação em negócios digitais e aceleração de microempreendedoras',
        'Incentivo fiscal a empresas que oferecem jornadas flexíveis para mães',
      ],
      link: '/propostas/autonomia-e-trabalho',
    },
    {
      id: 'rede',
      title: 'Rede para Conseguir',
      lema: 'Acolhimento Integral & Apoio às Mães Atípicas',
      color: '#FF8A00',
      icon: 'bi-heart-half',
      bgGlow: 'rgba(255,138,0,0.08)',
      points: [
        'Centros integrados de terapias no SUS (T.O., fonoaudiologia, psicologia)',
        'Programa Cuidar de Quem Cuida: saúde mental para mães cuidadoras',
        'Inclusão escolar garantida com mediadores qualificados em sala',
      ],
      link: '/propostas/maternidade-infancia-rede-cuidado',
    },
    {
      id: 'protecao',
      title: 'Proteção para Viver',
      lema: 'Segurança Real & Tolerância Zero à Violência',
      color: '#FFBA00',
      icon: 'bi-shield-fill-check',
      bgGlow: 'rgba(255,186,0,0.1)',
      points: [
        'Funcionamento 24h com atendimento humanizado em todas as DDMs',
        'Aluguel social emergencial para mulheres sob medida protetiva',
        'Patrulhas Maria da Penha regionalizadas no interior e litoral do Ceará',
      ],
      link: '/propostas/protecao-as-mulheres',
    },
  ];

  return (
    <section className="pillars-section section-padding" style={{ background: 'var(--bg-surface)' }} aria-labelledby="pillars-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Tríplice Pilar</span>
          <h2 id="pillars-heading" className="section-title">
            3 Pilares para Transformar o Ceará
          </h2>
          <p className="section-subtitle">
            Uma abordagem estruturada para dar suporte real à mulher cearense em cada fase de sua vida.
          </p>
        </div>

        <div className="row g-4">
          {pillars.map((p) => (
            <div key={p.id} className="col-12 col-lg-4">
              <div
                className="pillar-card"
                style={{
                  borderTop: `4px solid ${p.color}`,
                }}
              >
                <div
                  className="pillar-icon-box"
                  style={{
                    background: p.bgGlow,
                    color: p.color,
                  }}
                >
                  <i className={`bi ${p.icon}`} aria-hidden="true" />
                </div>

                <h3 className="pillar-title">{p.title}</h3>
                <p className="small fw-semibold mb-3" style={{ color: p.color }}>
                  {p.lema}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-2 mb-4 flex-grow-1">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2 small text-secondary">
                      <i className="bi bi-check2 text-success mt-1" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={p.link}
                  className="btn btn-sm btn-outline-secondary w-100 justify-content-center mt-auto"
                >
                  <span>Ver Propostas do Pilar</span>
                  <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
