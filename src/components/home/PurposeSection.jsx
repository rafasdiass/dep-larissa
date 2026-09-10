import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function PurposeSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="purpose-section section-padding" aria-labelledby="purpose-heading">
      <div className="container-xl">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span variants={itemVariants} className="section-tag">Propósito & Compromisso</motion.span>
          <motion.h2 variants={itemVariants} id="purpose-heading" className="section-title">
            Por que o Ceará precisa de coragem pra mudar?
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            A política tradicional esqueceu a rotina de quem cuida, de quem trabalha dobrado e de quem não encontra apoio do Estado quando mais precisa.
          </motion.p>
        </motion.div>

        <motion.div 
          className="row g-4 align-items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={itemVariants} className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'var(--bg-accent-subtle)', color: 'var(--brand-secondary)' }}>
                  <i className="bi bi-people-fill fs-3" aria-hidden="true" />
                </div>
                <h3 className="fs-5 fw-bold mb-2">Quem cuida de quem cuida?</h3>
                <p className="text-secondary small mb-0">
                  Milhares de mães cearenses vivem a sobrecarga invisível do cuidado sem acesso a creches em tempo integral, sem saúde mental e sem apoio financeiro.
                </p>
              </div>
              <div className="pt-3 border-top mt-4">
                <span className="badge bg-light text-dark border">Prioridade Zero</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'var(--bg-accent-subtle)', color: 'var(--brand-secondary)' }}>
                  <i className="bi bi-currency-dollar fs-3" aria-hidden="true" />
                </div>
                <h3 className="fs-5 fw-bold mb-2">Autonomia Financeira é Liberdade</h3>
                <p className="text-secondary small mb-0">
                  A violência e a vulnerabilidade recuam quando a mulher tem renda própria. O microcrédito orientado e a capacitação real são caminhos de independência.
                </p>
              </div>
              <div className="pt-3 border-top mt-4">
                <span className="badge bg-light text-dark border">Geração de Renda</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'var(--bg-accent-subtle)', color: 'var(--brand-secondary)' }}>
                  <i className="bi bi-shield-check fs-3" aria-hidden="true" />
                </div>
                <h3 className="fs-5 fw-bold mb-2">Um Estado que Realmente Entrega</h3>
                <p className="text-secondary small mb-0">
                  Leis existem no papel; o que falta é fiscalização rigorosa, orçamento direcionado para a ponta e transparência aberta em tempo real no parlamento.
                </p>
              </div>
              <div className="pt-3 border-top mt-4">
                <span className="badge bg-light text-dark border">Fiscalização Ativa</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/quem-e-larissa" className="btn btn-brand-outline">
            <span>Conheça a história e trajetória de Larissa DeLucca</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
