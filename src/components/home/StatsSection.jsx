import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../common/Icons';

export function StatsSection() {
  const stats = [
    {
      id: 'stat-mulheres',
      number: '+1.200',
      numericVal: 1200,
      label: 'Mulheres Aceleradas',
      description: 'Capacitadas em autonomia e renda',
      icon: 'users',
    },
    {
      id: 'stat-municipios',
      number: '184',
      numericVal: 184,
      label: 'Municípios no Radar',
      description: '100% de cobertura no Ceará',
      icon: 'map-pin',
    },
    {
      id: 'stat-familias',
      number: '+500',
      numericVal: 500,
      label: 'Famílias Atípicas',
      description: 'Acolhidas em iniciativas de inclusão',
      icon: 'heart',
    },
    {
      id: 'stat-plano',
      number: '28',
      numericVal: 28,
      label: 'Páginas de Metas',
      description: 'Plano de mandato auditável e real',
      icon: 'document',
    },
  ];

  return (
    <section className="stats-impact-section" aria-label="Números de impacto da campanha">
      <div className="container-xl">
        <div className="stats-glass-card">
          <div className="stats-card-header d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
            <div className="d-flex align-items-center gap-2">
              <span className="live-dot-pulse"></span>
              <span className="stats-header-tag">NÚMEROS QUE IMPORTAM · IMPACTO REAL</span>
            </div>
            <span className="stats-header-badge">COMPROMISSO ÉTICO & SOCIAL</span>
          </div>

          <div className="row g-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.id}
                className="col-12 col-sm-6 col-lg-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-item-box">
                  <div className="stat-icon-wrapper">
                    <Icon name={item.icon} size={24} className="text-neon-magenta" />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{item.number}</h3>
                    <p className="stat-label mb-1">{item.label}</p>
                    <span className="stat-subdesc">{item.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
