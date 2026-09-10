import React from 'react';
import { Link } from 'react-router-dom';
import { legalConfig } from '../config/legal.config';
import { siteConfig } from '../config/site.config';

export function PrivacyPage() {
  return (
    <article className="privacy-page py-5">
      <div className="container-xl max-w-800">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Privacidade</li>
          </ol>
        </nav>

        <header className="mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Proteção de Dados & LGPD
          </span>
          <h1 className="display-4 fw-bold mb-3">Política de Privacidade</h1>
          <p className="lead text-secondary">
            Saiba com total transparência como coletamos, utilizamos e protegemos os seus dados pessoais, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
          </p>
        </header>

        <section className="mb-4">
          <h2 className="fs-3 fw-bold mb-3">1. Controlador dos Dados</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Os dados pessoais tratados neste site são controlados pela campanha eleitoral oficial de <strong>{siteConfig.candidate.name}</strong>, inscrita no CNPJ sob o nº <strong>{legalConfig.cnpj}</strong>, com sede em Fortaleza, Estado do Ceará.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="fs-3 fw-bold mb-3">2. Dados Coletados e Finalidade</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Coletamos apenas as informações fornecidas voluntariamente por você através do nosso formulário de voluntariado e apoio:
          </p>
          <ul className="text-secondary" style={{ lineHeight: 1.8 }}>
            <li><strong>Nome Completo:</strong> para identificação do cidadão apoiador.</li>
            <li><strong>Número de WhatsApp / Telefone:</strong> para envio de comunicados da campanha, convites para plenárias e materiais digitais.</li>
            <li><strong>Município / Região:</strong> para regionalização de convites e ações de mobilização.</li>
            <li><strong>E-mail (opcional):</strong> para envio de newsletters temáticas e informativos do mandato.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="fs-3 fw-bold mb-3">3. Não Comercialização e Não Compartilhamento</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            A campanha de Larissa DeLucca <strong>nunca comercializa, cede ou aluga</strong> dados pessoais de apoiadores a empresas terceiras, agências de publicidade externas ou qualquer outra entidade sem relação com o projeto eleitoral e legislativo aqui apresentado.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="fs-3 fw-bold mb-3">4. Seus Direitos (Revogação e Exclusão)</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Nos termos do artigo 18 da LGPD, você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, a alteração de dados incompletos ou a <strong>eliminação total</strong> de seus dados de nossa base de contatos.
          </p>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Para exercer seus direitos, envie uma mensagem pelo WhatsApp oficial <strong>{siteConfig.contact.whatsappDisplay}</strong> ou solicite descadastramento em qualquer mensagem recebida.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="fs-3 fw-bold mb-3">5. Cookies e Armazenamento Local</h2>
          <p className="text-secondary" style={{ lineHeight: 1.8 }}>
            Utilizamos armazenamento local exclusivamente para lembrar a sua preferência de tema visual (Modo Claro / Modo Escuro) através da chave técnica <code>dep-larissa-theme</code>. Não utilizamos cookies invasivos para rastreamento de navegação individualizada em outros sites.
          </p>
        </section>
      </div>
    </article>
  );
}
