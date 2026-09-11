import React from 'react';
import { Link } from 'react-router-dom';

export function MaterialsSection() {
  const items = [
    {
      title: 'Santinho Digital 15888',
      desc: 'Perfeito para compartilhar no WhatsApp, grupos comunitários e status.',
      badge: 'WhatsApp',
      icon: 'bi-phone',
    },
    {
      title: 'Adesivo para Carro & Janela',
      desc: 'Arte oficial em alta definição pronta para impressão gráfica parceira.',
      badge: 'Impressão',
      icon: 'bi-car-front',
    },
    {
      title: 'Pack de Cards dos Eixos',
      desc: '8 imagens com propostas didáticas para postar no Instagram e Facebook.',
      badge: 'Redes Sociais',
      icon: 'bi-images',
    },
  ];

  return (
    <section className="materials-section section-padding" aria-labelledby="materials-heading">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Mobilização Digital</span>
          <h2 id="materials-heading" className="section-title">
            Espalhe a Mensagem no seu Bairro
          </h2>
          <p className="section-subtitle">
            Baixe materiais oficiais, compartilhe nos grupos de WhatsApp e ajude a fortalecer a candidatura de Larissa DeLucca.
          </p>
        </div>

        <div className="row g-4">
          {items.map((it, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-secondary-subtle text-secondary small">{it.badge}</span>
                    <i className={`bi ${it.icon} fs-4`} style={{ color: 'var(--brand-pink)' }} aria-hidden="true" />
                  </div>
                  <h3 className="fs-5 fw-bold mb-2">{it.title}</h3>
                  <p className="text-secondary small mb-3">{it.desc}</p>
                </div>
                <Link to="/materiais" className="btn btn-sm btn-outline-secondary w-100 justify-content-center mt-auto">
                  <span>Acessar Material</span>
                  <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/materiais" className="btn btn-brand-primary">
            <span>Ver Central de Materiais Completa</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
