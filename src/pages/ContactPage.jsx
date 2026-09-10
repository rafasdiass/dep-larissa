import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site.config';
import { socialConfig } from '../config/social.config';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: 'Fortaleza',
    interest: 'voluntariado',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.consent) {
      setErrorMessage('Por favor, preencha os campos obrigatórios e marque o consentimento com a LGPD.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erro ao processar envio. Tente diretamente pelo WhatsApp.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Houve um erro no envio. Você pode falar conosco diretamente no WhatsApp!');
    }
  };

  return (
    <article className="contact-page py-5">
      <div className="container-xl">
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Início</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contato</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-5 text-center max-w-800 mx-auto">
          <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: 'var(--brand-gradient)', color: '#FFFFFF' }}>
            Participe do Movimento
          </span>
          <h1 className="display-4 fw-bold mb-3">Fale Conosco e Seja Voluntário(a)</h1>
          <p className="lead text-secondary">
            Esta campanha é feita de pessoas reais. Queremos ouvir suas ideias, receber sugestões e contar com a sua força para multiplicar o 15888 no Ceará.
          </p>
        </header>

        <div className="row g-5">
          {/* Informações Diretas */}
          <div className="col-12 col-lg-5">
            <div className="brand-card p-4 p-md-5 mb-4">
              <h2 className="fs-3 fw-bold mb-4">Canais Diretos</h2>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: '#25D366' }}
                >
                  <i className="bi bi-whatsapp fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">WhatsApp Oficial</strong>
                  <span className="text-secondary small d-block mb-2">Atendimento de segunda a sábado</span>
                  <a
                    href={socialConfig.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-success"
                  >
                    Conversar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: '#E1306C' }}
                >
                  <i className="bi bi-instagram fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">Instagram</strong>
                  <span className="text-secondary small d-block mb-2">Acompanhe a rotina da campanha</span>
                  <a
                    href={socialConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-danger"
                  >
                    @larisdelucca
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                  style={{ width: 44, height: 44, background: 'var(--brand-pink)' }}
                >
                  <i className="bi bi-geo-alt fs-5" aria-hidden="true" />
                </div>
                <div>
                  <strong className="d-block">Comitê Central</strong>
                  <span className="text-secondary small d-block">Fortaleza — Ceará</span>
                  <span className="text-muted small">Candidatura a Deputada Estadual 15888</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Voluntariado / Cadastro */}
          <div className="col-12 col-lg-7">
            <div className="brand-card p-4 p-md-5">
              <h2 className="fs-3 fw-bold mb-2">Cadastre-se para Apoiar</h2>
              <p className="text-secondary small mb-4">
                Preencha seus dados para receber materiais, participar do comitê de voluntários e ser a voz de Larissa no seu bairro ou município.
              </p>

              {status === 'success' ? (
                <div className="alert alert-success p-4 rounded-3 text-center" role="alert">
                  <i className="bi bi-check-circle-fill fs-1 text-success d-block mb-3" />
                  <h3 className="fs-4 fw-bold">Obrigado pelo seu apoio!</h3>
                  <p className="mb-3">
                    Seu cadastro foi recebido com sucesso. Nossa coordenação entrará em contato pelo seu WhatsApp.
                  </p>
                  <button
                    type="button"
                    className="btn btn-brand-primary"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        whatsapp: '',
                        city: 'Fortaleza',
                        interest: 'voluntariado',
                        message: '',
                        consent: false,
                      });
                    }}
                  >
                    Cadastrar outro contato
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="alert alert-danger mb-4" role="alert">
                      <i className="bi bi-exclamation-triangle-fill me-2" />
                      {errorMessage}
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold small">
                      Nome Completo <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Ex: Maria Silva"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="whatsapp" className="form-label fw-semibold small">
                        WhatsApp com DDD <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        className="form-control"
                        placeholder="Ex: (85) 98888-0000"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label htmlFor="city" className="form-label fw-semibold small">
                        Município / Bairro <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        placeholder="Ex: Fortaleza - Aldeota"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold small">
                      E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Ex: maria@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="interest" className="form-label fw-semibold small">
                      Como gostaria de participar?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="form-select"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="voluntariado">Quero ser voluntário(a) ativo(a)</option>
                      <option value="receber-material">Quero receber santinhos e adesivos em casa</option>
                      <option value="maes-atipicas">Sou mãe atípica e quero mobilizar minha rede</option>
                      <option value="juridico">Apoio jurídico ou técnico</option>
                      <option value="redes-sociais">Multiplicador(a) digital nas redes</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold small">
                      Mensagem ou Sugestão (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      className="form-control"
                      placeholder="Conte um pouco sobre sua motivação ou envie uma sugestão para Larissa..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label small text-secondary" htmlFor="consent">
                      Concordo em receber mensagens oficiais da campanha de Larissa DeLucca via WhatsApp/e-mail, ciente dos termos da{' '}
                      <Link to="/privacidade" target="_blank">
                        Política de Privacidade (LGPD)
                      </Link>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-brand-primary w-100 py-3 justify-content-center"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                        Enviando cadastro...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2" aria-hidden="true" />
                        Confirmar Apoio
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
