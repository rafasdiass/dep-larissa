import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../../assets/assetManifest';
import { Icon } from '../common/Icons';

export function TrajectoryPreview() {
  return (
    <section className="trajectory-preview section-padding" aria-labelledby="trajectory-heading">
      <div className="container-xl biography-grid">
        <div className="biography-photo">
          <img src={assetManifest.images.bio.src} alt={assetManifest.images.bio.alt} width="1144" height="1600" loading="lazy" />
          <span className="photo-caption">LARISSA DELUCCA <span>CEARÁ</span></span>
        </div>
        <div className="biography-copy">
          <span className="section-tag">01 / QUEM É LARISSA</span>
          <h2 id="trajectory-heading">Da vivência do cuidado<br />à <em>coragem</em> de agir.</h2>
          <p>Advogada, mãe atípica e presidente da Fundação Mulheres Aceleradas. Larissa DeLucca traz a experiência do cuidado e da defesa de direitos para a sua atuação pública.</p>
          <p>Conheça sua história, suas prioridades e o plano de trabalho para o Ceará.</p>
          <Link to="/quem-e-larissa" className="editorial-link">Ler biografia completa <Icon name="arrow-up-right" size={20} /></Link>
          <div className="biography-pillars">
            <span><Icon name="sparkles" size={20} />Renda para Escolher</span>
            <span><Icon name="heart" size={20} />Rede para Conseguir</span>
            <span><Icon name="shield" size={20} />Proteção para Viver</span>
          </div>
        </div>
      </div>
    </section>
  );
}
