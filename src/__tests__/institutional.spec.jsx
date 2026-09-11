import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('Sprint 5 — Páginas Institucionais & Materiais', () => {
  it('renders /quem-e-larissa with bio image, timeline and video player', () => {
    render(
      <MemoryRouter initialEntries={['/quem-e-larissa']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /conheça larissa delucca/i })).toBeInTheDocument();
    expect(screen.getByText(/a força da experiência vivida/i)).toBeInTheDocument();
    expect(screen.getByText(/marcos da trajetória/i)).toBeInTheDocument();

    const bioImg = screen.getByRole('img', { name: /retrato de perfil de larissa delucca/i });
    expect(bioImg).toBeInTheDocument();
  });

  it('renders /plano-de-mandato with direct download link', () => {
    render(
      <MemoryRouter initialEntries={['/plano-de-mandato']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /plano de mandato legislativo/i })).toBeInTheDocument();
    const downloadBtns = screen.getAllByRole('link', { name: /baixar pdf/i });
    expect(downloadBtns.length).toBeGreaterThan(0);
    expect(downloadBtns[0]).toHaveAttribute('href', '/assets/docs/plano-de-mandato-larissa-delucca-15888.pdf');
  });

  it('renders /transparencia with CNPJ and legal commitments', () => {
    render(
      <MemoryRouter initialEntries={['/transparencia']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /transparência e prestação de contas/i })).toBeInTheDocument();
    expect(screen.getByText(/identificação jurídica da campanha/i)).toBeInTheDocument();
  });

  it('renders /materiais with download items and TSE guidance', () => {
    render(
      <MemoryRouter initialEntries={['/materiais']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /materiais oficiais de campanha/i })).toBeInTheDocument();
    expect(screen.getByText(/santinho oficial 15888 larissa delucca/i)).toBeInTheDocument();
  });

  it('renders /imprensa with press kit items and official WhatsApp contact', () => {
    render(
      <MemoryRouter initialEntries={['/imprensa']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /assessoria de comunicação/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato da assessoria/i })).toBeInTheDocument();
  });
});
