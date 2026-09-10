import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../App';

describe('App Routing', () => {
  it('navigates to /quem-e-larissa', () => {
    render(
      <MemoryRouter initialEntries={['/quem-e-larissa']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /conheça larissa delucca/i })).toBeInTheDocument();
  });

  it('navigates to /propostas', () => {
    render(
      <MemoryRouter initialEntries={['/propostas']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /4 eixos para transformar o ceará/i })).toBeInTheDocument();
  });

  it('navigates to /propostas/autonomia-e-trabalho', () => {
    render(
      <MemoryRouter initialEntries={['/propostas/autonomia-e-trabalho']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /autonomia econômica/i })).toBeInTheDocument();
  });

  it('navigates to /plano-de-mandato', () => {
    render(
      <MemoryRouter initialEntries={['/plano-de-mandato']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /plano de mandato legislativo/i })).toBeInTheDocument();
  });

  it('navigates to /transparencia', () => {
    render(
      <MemoryRouter initialEntries={['/transparencia']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /transparência e prestação de contas/i })).toBeInTheDocument();
  });

  it('navigates to /materiais', () => {
    render(
      <MemoryRouter initialEntries={['/materiais']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /materiais oficiais de campanha/i })).toBeInTheDocument();
  });

  it('navigates to /imprensa', () => {
    render(
      <MemoryRouter initialEntries={['/imprensa']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /assessoria de comunicação/i })).toBeInTheDocument();
  });

  it('navigates to /contato', () => {
    render(
      <MemoryRouter initialEntries={['/contato']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /fale conosco e seja voluntário/i })).toBeInTheDocument();
  });

  it('navigates to /acessibilidade', () => {
    render(
      <MemoryRouter initialEntries={['/acessibilidade']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /declaração de acessibilidade digital/i })).toBeInTheDocument();
  });

  it('navigates to /privacidade', () => {
    render(
      <MemoryRouter initialEntries={['/privacidade']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /política de privacidade/i })).toBeInTheDocument();
  });

  it('navigates to 404 for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/pagina-que-nao-existe']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1, name: /página não encontrada/i })).toBeInTheDocument();
  });
});
