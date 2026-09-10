import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';
import { proposalsList } from '../data/proposals';
import { axesData } from '../data/axes';

describe('Sprint 4 — Repositório Profundo de Propostas & Eixos', () => {
  it('validates data integrity of axes and proposals collection', () => {
    expect(axesData).toHaveLength(4);
    expect(proposalsList.length).toBeGreaterThanOrEqual(12);

    proposalsList.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.axisSlug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.problem).toBeTruthy();
      expect(p.practicalProposal).toBeTruthy();
      expect(p.expectedImpact).toBeTruthy();
      expect(p.indicators.length).toBeGreaterThan(0);
    });
  });

  it('renders /propostas hub with search and filter functionality', () => {
    render(
      <MemoryRouter initialEntries={['/propostas']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /4 eixos para transformar o ceará/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/buscar por termo/i)).toBeInTheDocument();

    // Filter by search input
    const input = screen.getByPlaceholderText(/buscar por termo/i);
    fireEvent.change(input, { target: { value: 'neurodivergente' } });

    const results = screen.getAllByText(/Rede Estadual de Atenção Neurodivergente/i);
    expect(results.length).toBeGreaterThan(0);
  });

  it('renders canonical page for Eixo 1: Autonomia e Trabalho', () => {
    render(
      <MemoryRouter initialEntries={['/propostas/autonomia-e-trabalho']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /autonomia e trabalho/i })).toBeInTheDocument();
    const matches = screen.getAllByText(/Mulher Trabalhando: Aceleração de Negócios e Renda/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders canonical page for Eixo 2: Maternidade, Infância e Rede de Cuidado', () => {
    render(
      <MemoryRouter initialEntries={['/propostas/maternidade-infancia-rede-cuidado']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /maternidade, infância e rede de cuidado/i })).toBeInTheDocument();
    const matches = screen.getAllByText(/Programa Cuidar de Quem Cuida: Saúde Mental das Mães/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders canonical page for Eixo 3: Proteção às Mulheres', () => {
    render(
      <MemoryRouter initialEntries={['/propostas/protecao-as-mulheres']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /proteção às mulheres/i })).toBeInTheDocument();
    const matches = screen.getAllByText(/Plantão 24h nas Delegacias da Mulher/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders canonical page for Eixo 4: Um Estado que Enxerga, Integra e Entrega', () => {
    render(
      <MemoryRouter initialEntries={['/propostas/estado-que-enxerga-integra-entrega']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /um estado que enxerga, integra e entrega/i })).toBeInTheDocument();
    const matches = screen.getAllByText(/Gabinete Aberto & Prestação de Contas em Tempo Real/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders individual proposal page /proposta/:slug with breadcrumb and metrics', () => {
    render(
      <MemoryRouter initialEntries={['/proposta/rede-estadual-atencao-neurodivergente-rean']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /rede estadual de atenção neurodivergente/i })).toBeInTheDocument();
    expect(screen.getByText(/Diagnóstico do Problema no Ceará/i)).toBeInTheDocument();
    expect(screen.getByText(/A Proposta Legislativa na Prática/i)).toBeInTheDocument();
  });
});
