import React from 'react';
import { Link } from 'react-router-dom';
import { assetManifest } from '../../assets/assetManifest';
import { Icon } from '../common/Icons';
export function PlanPreviewSection() {
  const plan = assetManifest.documents.mandatePlan;
  return <section className="plan-preview" aria-labelledby="plan-heading">
    <div className="container-xl plan-inner">
      <Icon name="document" size={44} />
      <div className="plan-copy"><span className="section-tag">DOCUMENTO COMPLETO</span><h2 id="plan-heading">Baixe o plano de mandato completo</h2><p>Diretrizes e propostas para consultar com calma.</p></div>
      <div className="plan-actions"><a className="btn-brand-primary" href={plan.downloadUrl} download={plan.fileName}><Icon name="download" size={18} />Baixar PDF</a><Link to="/plano-de-mandato">Ver o plano on-line <Icon name="arrow-up-right" size={15} /></Link></div>
    </div>
  </section>;
}
