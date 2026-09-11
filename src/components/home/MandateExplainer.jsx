import React from 'react';

export function MandateExplainer() {
  const steps = [
    {
      num: '1',
      title: 'Legislar com Propósito',
      desc: 'Apresentar projetos de lei focados nas reais prioridades: saúde atípica, apoio à mulher, creches e autonomia econômica.',
      icon: 'bi-file-earmark-code',
    },
    {
      num: '2',
      title: 'Fiscalizar com Rigor',
      desc: 'Acompanhar cada centavo do orçamento estadual, vistoriar hospitais, cobrar agilidade no SUS e combater o desperdício de dinheiro público.',
      icon: 'bi-search',
    },
    {
      num: '3',
      title: 'Destinar Recursos com Transparência',
      desc: 'Encaminhar emendas parlamentares com consulta popular para equipar centros de reabilitação e entidades do terceiro setor.',
      icon: 'bi-pie-chart-fill',
    },
    {
      num: '4',
      title: 'Gabinete Aberto & Itinerante',
      desc: 'Um mandato presente nos bairros e cidades do interior, com prestação de contas mensal e canal direto de escuta com os cidadãos.',
      icon: 'bi-chat-heart-fill',
    },
  ];

  return (
    <section className="mandate-explainer section-padding" aria-labelledby="explainer-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Educação Política</span>
          <h2 id="explainer-heading" className="section-title">
            O que faz uma Deputada Estadual?
          </h2>
          <p className="section-subtitle">
            Entenda como a atuação na Assembleia Legislativa do Estado do Ceará (ALCE) impacta diretamente o seu dia a dia e os serviços públicos da sua cidade.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((st) => (
            <div key={st.num} className="col-12 col-md-6 col-lg-3">
              <div className="mandate-step-card">
                <div className="step-number">{st.num}</div>
                <h3 className="fs-5 fw-bold mb-2">{st.title}</h3>
                <p className="text-secondary small mb-0" style={{ lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
