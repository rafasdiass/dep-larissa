import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SkipLink } from '../components/common/SkipLink';

describe('Sprint 6 — SEO & Acessibilidade WCAG 2.2 AA', () => {
  it('injects dynamic meta tags and Schema.org JSON-LD correctly', () => {
    render(
      <BrowserRouter>
        <SEO
          title="Autonomia e Trabalho"
          description="Propostas para geração de renda e microcrédito no Ceará."
          canonical="https://larissadelucca.com.br/propostas/autonomia-e-trabalho"
        />
      </BrowserRouter>
    );

    expect(document.title).toContain('Autonomia e Trabalho');

    const descMeta = document.querySelector('meta[name="description"]');
    expect(descMeta).toHaveAttribute('content', 'Propostas para geração de renda e microcrédito no Ceará.');

    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute('content', expect.stringContaining('Autonomia e Trabalho'));

    const jsonLd = document.getElementById('json-ld-schema');
    expect(jsonLd).toBeInTheDocument();
    const parsed = JSON.parse(jsonLd.textContent || '{}');
    expect(parsed['@type']).toBe('Person');
    expect(parsed.name).toBe('Larissa DeLucca');
  });

  it('provides visible skip link targeting main-content with proper tabIndex', () => {
    render(
      <div>
        <SkipLink targetId="main-content" />
        <main id="main-content" tabIndex="-1">
          <h1>Conteúdo Principal</h1>
        </main>
      </div>
    );

    const skipLink = screen.getByRole('link', { name: /pular para o conteúdo principal/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});
