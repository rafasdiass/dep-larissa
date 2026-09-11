import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function PillarsSection() {
  const pillars = [
    {
      id: 'renda',
      title: 'Renda para Escolher',
      lema: 'Autonomia Econômica & Independência Feminina',
      color: 'var(--brand-secondary)',
      icon: 'bi-wallet2',
      bgGlow: 'var(--bg-accent-subtle)',
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
      color: 'var(--brand-secondary)',
      icon: 'bi-heart-half',
      bgGlow: 'var(--bg-accent-subtle)',
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
      color: 'var(--brand-secondary)',
      icon: 'bi-shield-fill-check',
      bgGlow: 'var(--bg-accent-subtle)',
      points: [
        'Funcionamento 24h com atendimento humanizado em todas as DDMs',
        'Aluguel social emergencial para mulheres sob medida protetiva',
        'Patrulhas Maria da Penha regionalizadas no interior e litoral do Ceará',
      ],
      link: '/propostas/protecao-as-mulheres',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="pillars-section section-padding" style={{ background: 'var(--bg-surface)' }} aria-labelledby="pillars-heading">
      <div className="container-xl">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Tríplice Pilar</span>
          <h2 id="pillars-heading" className="section-title">
            3 Pilares para Transformar o Ceará
          </h2>
          <p className="section-subtitle">
            Uma abordagem estruturada para dar suporte real à mulher cearense em cada fase de sua vida.
          </p>
        </motion.div>

        <motion.div 
          className="row g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {pillars.map((p) => (
            <motion.div key={p.id} variants={itemVariants} className="col-12 col-lg-4">
              <div
                className="pillar-card shadow-sm h-100 d-flex flex-column"
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
                      <i className="bi bi-check2 mt-1" style={{ color: p.color }} aria-hidden="true" />
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
