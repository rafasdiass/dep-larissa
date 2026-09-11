import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { VolunteerForm } from '../components/common/VolunteerForm';

describe('VolunteerForm Component', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders required form fields and hidden honeypot', () => {
    render(
      <BrowserRouter>
        <VolunteerForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/whatsapp com ddd/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/município \/ bairro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/concordo em receber mensagens/i)).toBeInTheDocument();

    // Honeypot field exists for bots
    expect(screen.getByLabelText(/não preencha este campo/i)).toBeInTheDocument();
  });

  it('validates mandatory fields before submitting', () => {
    render(
      <BrowserRouter>
        <VolunteerForm />
      </BrowserRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /confirmar apoio/i });
    fireEvent.click(submitBtn);

    expect(screen.getByRole('alert')).toHaveTextContent(/por favor, informe seu nome completo/i);
  });

  it('submits successfully when fields are properly filled', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true, message: 'Cadastro recebido!' }),
    });

    render(
      <BrowserRouter>
        <VolunteerForm />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/nome completo/i), { target: { value: 'Francisca Ferreira' } });
    fireEvent.change(screen.getByLabelText(/whatsapp com ddd/i), { target: { value: '85988887777' } });
    fireEvent.change(screen.getByLabelText(/município \/ bairro/i), { target: { value: 'Fortaleza - Messejana' } });
    fireEvent.click(screen.getByLabelText(/concordo em receber mensagens/i));

    const submitBtn = screen.getByRole('button', { name: /confirmar apoio/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByTestId('form-success')).toBeInTheDocument();
      expect(screen.getByText(/obrigado pelo seu apoio!/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
