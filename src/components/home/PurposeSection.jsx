import React from 'react';
import { Link } from 'react-router-dom';

export function PurposeSection() {
  return (
    <section className="purpose-section section-padding" aria-labelledby="purpose-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Propósito & Compromisso</span>
          <h2 id="purpose-heading" className="section-title">
            Por que o Ceará precisa de coragem pra mudar?
          </h2>
          <p className="section-subtitle">
            A política tradicional esqueceu a rotina de quem cuida, de quem trabalha dobrado e de quem não encontra apoio do Estado quando mais precisa.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'rgba(230,0,126,0.1)', color: 'var(--brand-pink)' }}>
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
          </div>

          <div className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'rgba(255,138,0,0.1)', color: 'var(--brand-orange)' }}>
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
          </div>

          <div className="col-12 col-md-4">
            <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <div className="d-inline-flex p-3 rounded-3 mb-3" style={{ background: 'rgba(255,186,0,0.15)', color: 'var(--brand-yellow)' }}>
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
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/quem-e-larissa" className="btn btn-brand-outline">
            <span>Conheça a história e trajetória de Larissa DeLucca</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
