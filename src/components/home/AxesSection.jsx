import React from 'react';
import { Link } from 'react-router-dom';
import { axesData } from '../../data/axes';
import { Icon } from '../common/Icons';
const icons = ['sparkles', 'heart', 'shield', 'document'];
export function AxesSection() {
  return (
    <section className="axes-section section-padding" aria-labelledby="axes-heading">
      <div className="container-xl axes-grid">
        <div>
          <span className="section-tag">02 / PLANO DE TRABALHO</span>
          <h2 id="axes-heading">4 eixos de atuação na Assembleia Legislativa</h2>
          <p>Conheça as prioridades e as propostas de cada eixo.</p>
          <Link to="/propostas" className="editorial-link">Explorar o plano <Icon name="arrow-up-right" size={20} /></Link>
        </div>
        <div className="axis-list">
          {axesData.map((axis, index) => <Link key={axis.slug} to={`/propostas/${axis.slug}`} className="axis-row">
            <span className="axis-number">0{index + 1}</span><Icon name={icons[index]} size={26} />
            <span className="axis-label"><strong>{axis.title}</strong><span>{axis.pillar}</span></span>
            <Icon name="arrow-up-right" size={22} />
          </Link>)}
        </div>
      </div>
    </section>
  );
}
