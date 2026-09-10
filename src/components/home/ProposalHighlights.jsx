import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../common/Icons';

export function ProposalHighlights() {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Prioridades' },
    { id: 'maternidade', label: 'Maternidade & Inclusão' },
    { id: 'renda', label: 'Autonomia & Renda' },
    { id: 'protecao', label: 'Proteção às Mulheres' },
    { id: 'saude', label: 'Saúde & Eficiência' },
  ];

  const proposals = [
    {
      id: 'prop-1',
      category: 'maternidade',
      number: '01',
      tag: 'Maternidade & Inclusão',
      title: 'Zerar a Fila de Terapias no SUS para Crianças Atípicas',
      desc: 'Criação de centros regionais com psicólogos, terapeutas ocupacionais e fonoaudiólogos no interior e Região Metropolitana do Ceará.',
      link: '/propostas/maternidade-cuidado',
      icon: 'heart',
    },
    {
      id: 'prop-2',
      category: 'renda',
      number: '02',
      tag: 'Autonomia & Renda',
      title: 'Microcrédito Produtivo para Mães Solo e Empreendedoras',
      desc: 'Linhas de financiamento com juros subsidiados e capacitação prática da Fundação Mulheres Aceleradas para gerar independência real.',
      link: '/propostas/autonomia-trabalho',
      icon: 'sparkles',
    },
    {
      id: 'prop-3',
      category: 'protecao',
      number: '03',
      tag: 'Proteção & Segurança',
      title: 'Delegacias da Mulher 24 Horas com Equipe Multidisciplinar',
      desc: 'Plantão permanente e acolhimento com psicólogas e assistentes sociais para resposta imediata à violência doméstica em todo o estado.',
      link: '/propostas/protecao-mulheres',
      icon: 'shield',
    },
    {
      id: 'prop-4',
      category: 'saude',
      number: '04',
      tag: 'Saúde & Gestão',
      title: 'Prontuário Único Integrado e Fim do Reteste Desnecessário',
      desc: 'Digitalização completa dos exames na rede estadual, eliminando desperdício e acelerando o diagnóstico de famílias que mais precisam.',
      link: '/propostas/estado-entrega',
      icon: 'document',
    },
    {
      id: 'prop-5',
      category: 'maternidade',
      number: '05',
      tag: 'Educação Inclusiva',
      title: 'Monitores e Mediadores Especializados nas Escolas Públicas',
      desc: 'Garantia legal de profissionais qualificados em sala de aula para o aprendizado efetivo de crianças neurodivergentes.',
      link: '/propostas/maternidade-cuidado',
      icon: 'users',
    },
    {
      id: 'prop-6',
      category: 'renda',
      number: '06',
      tag: 'Inovação & Futuro',
      title: 'Bolsa Qualificação Tecnológica para Jovens Cearenses',
      desc: 'Conexão com polos de tecnologia de Fortaleza e interior, preparando a juventude para o mercado digital de alto rendimento.',
      link: '/propostas/autonomia-trabalho',
      icon: 'box',
    },
  ];

  const filteredProposals =
    activeCategory === 'todos'
      ? proposals
      : proposals.filter((p) => p.category === activeCategory);

  return (
    <section className="proposals-highlight-section" aria-labelledby="proposals-heading">
      <div className="container-xl">
        <div className="section-head-nikolas text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 mb-2">
            <span className="live-dot-pulse"></span>
            <span className="section-eyebrow-tag">AÇÕES LEGISLATIVAS PRIORITÁRIAS</span>
          </div>
          <h2 id="proposals-heading" className="section-main-heading">
            Propostas que Mudam a Vida Real
          </h2>
          <p className="section-sub-heading max-w-700 mx-auto">
            Projetos estruturados com rigor técnico, viabilidade orçamentária e foco intransigente nas famílias cearenses.
          </p>

          {/* Filtros Interativos em Pills com JavaScript */}
          <div className="category-filter-pills d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards com Números Gigantes no Estilo Nikolas Ferreira */}
        <motion.div layout className="row g-4">
          <AnimatePresence mode="popLayout">
            {filteredProposals.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="col-12 col-md-6 col-lg-4"
              >
                <Link to={item.link} className="nikolas-project-card">
                  <div className="project-card-inner">
                    {/* Número Gigante de Fundo Estilo Nikolas */}
                    <span className="project-watermark-number" aria-hidden="true">
                      {item.number}
                    </span>

                    {/* Tag da Categoria */}
                    <div className="d-flex align-items-center justify-content-between mb-3 position-relative z-2">
                      <span className="project-tag-pill">{item.tag}</span>
                      <div className="project-icon-circle">
                        <Icon name={item.icon} size={18} />
                      </div>
                    </div>

                    {/* Título de Impacto */}
                    <h3 className="project-card-headline position-relative z-2">
                      {item.title}
                    </h3>

                    {/* Descrição Concisa */}
                    <p className="project-card-summary position-relative z-2">
                      {item.desc}
                    </p>

                    {/* Botão de Ação Redondo Estilo Nikolas */}
                    <div className="project-action-bottom position-relative z-2">
                      <span className="project-read-more-text">Ver detalhes do projeto</span>
                      <div className="project-arrow-btn">
                        <Icon name="arrow-right" size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Link para Todas as Propostas */}
        <div className="text-center mt-5">
          <Link to="/propostas" className="btn-nikolas-viewall">
            <span>VER TODAS AS PROPOSTAS PROGRAMÁTICAS</span>
            <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProposalHighlights;
