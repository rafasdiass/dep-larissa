import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

describe('HomePage Component', () => {
  it('renders hero with candidate identity and election data', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Candidate Name
    const names = screen.getAllByText('Larissa DeLucca');
    expect(names.length).toBeGreaterThan(0);

    // Number & Party & Office
    const numbers = screen.getAllByText(/15888/);
    expect(numbers.length).toBeGreaterThan(0);

    const parties = screen.getAllByText(/MDB/);
    expect(parties.length).toBeGreaterThan(0);

    expect(screen.getByText(/Deputada Estadual/i)).toBeInTheDocument();

    // Slogan & Lema
    expect(screen.getByText(/Coragem pra mudar/i)).toBeInTheDocument();

    // CTAs
    expect(screen.getByRole('link', { name: /conheça as propostas/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /baixar plano de mandato/i })).toBeInTheDocument();
  });

  it('renders the 3 core programmatic pillars', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByText('Renda para Escolher')).toBeInTheDocument();
    expect(screen.getByText('Rede para Conseguir')).toBeInTheDocument();
    expect(screen.getByText('Proteção para Viver')).toBeInTheDocument();
  });
});
