import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { socialConfig } from '../../config/social.config';

export function VolunteerForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: 'Fortaleza',
    interest: 'voluntariado',
    message: '',
    consent: false,
    website: '', // honeypot invisível para bots
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Máscara dinâmica para WhatsApp brasileiro (DDD + 9 dígitos)
  const formatPhone = (val) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'whatsapp') {
      setFormData((prev) => ({
        ...prev,
        whatsapp: formatPhone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Por favor, informe seu nome completo.');
      setStatus('error');
      return;
    }

    const cleanPhone = formData.whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Por favor, informe um WhatsApp válido com DDD (ex: 85).');
      setStatus('error');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('É necessário concordar com a Política de Privacidade (LGPD).');
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

      const result = await res.json().catch(() => null);
      if (res.ok && result?.success === true) {
        setStatus('success');
        if (onSuccess) onSuccess();
      } else {
        throw new Error(result?.message || 'Erro ao processar envio. Tente diretamente pelo WhatsApp.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Falha na conexão. Você pode nos contatar diretamente no WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className="alert alert-success p-4 rounded-4 text-center" role="alert" data-testid="form-success">
        <i className="bi bi-check-circle-fill fs-1 text-success d-block mb-3" />
        <h3 className="fs-4 fw-bold">Obrigado pelo seu apoio!</h3>
        <p className="mb-3 text-secondary small">
          Seu cadastro foi registrado com sucesso. Nossa coordenação entrará em contato pelo seu WhatsApp.
        </p>
        <button
          type="button"
          className="btn btn-sm btn-brand-primary"
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
              website: '',
            });
          }}
        >
          Cadastrar outro contato
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="volunteer-form" data-testid="volunteer-form">
      {status === 'error' && (
        <div className="alert alert-danger mb-4 small" role="alert" data-testid="form-error">
          <i className="bi bi-exclamation-triangle-fill me-2" />
          {errorMessage}
          <a href={socialConfig.whatsapp.url} target="_blank" rel="noreferrer" className="d-block mt-2 fw-semibold">Conversar diretamente no WhatsApp</a>
        </div>
      )}

      {/* Honeypot field — invisível para usuários humanos */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="website-field">Não preencha este campo:</label>
        <input
          type="text"
          id="website-field"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="form-name" className="form-label fw-semibold small">
          Nome Completo <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          autoComplete="name"
          className="form-control"
          placeholder="Ex: Maria Francisca Silva"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-12 col-md-6">
          <label htmlFor="form-whatsapp" className="form-label fw-semibold small">
            WhatsApp com DDD <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            id="form-whatsapp"
            name="whatsapp"
            autoComplete="tel-national"
            inputMode="tel"
            className="form-control"
            placeholder="Ex: (85) 98888-0000"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="form-city" className="form-label fw-semibold small">
            Município / Bairro <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="form-city"
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
        <label htmlFor="form-email" className="form-label fw-semibold small">
          E-mail (opcional)
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          autoComplete="email"
          className="form-control"
          placeholder="Ex: maria@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="form-interest" className="form-label fw-semibold small">
          Como você quer apoiar o mandato?
        </label>
        <select
          id="form-interest"
          name="interest"
          className="form-select"
          value={formData.interest}
          onChange={handleChange}
        >
          <option value="voluntariado">Quero ser voluntário(a) ativo(a)</option>
          <option value="receber-material">Quero receber adesivos e santinhos</option>
          <option value="maes-atipicas">Sou mãe atípica e quero engajar minha rede</option>
          <option value="juridico">Apoio jurídico ou técnico</option>
          <option value="redes-sociais">Multiplicador(a) nas redes sociais</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="form-message" className="form-label fw-semibold small">
          Mensagem ou Sugestão para Larissa (opcional)
        </label>
        <textarea
          id="form-message"
          name="message"
          rows="3"
          className="form-control"
          placeholder="Deixe sua mensagem, dúvida ou sugestão de proposta legislativa..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="form-check mb-4">
        <input
          type="checkbox"
          className="form-check-input"
          id="form-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label className="form-check-label small text-secondary" htmlFor="form-consent">
          Concordo em receber mensagens da campanha oficial de Larissa DeLucca, de acordo com a{' '}
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
  );
}
