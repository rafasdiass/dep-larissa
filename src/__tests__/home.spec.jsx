import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

describe('HomePage Component (15 Seções)', () => {
  it('renders hero with candidate identity, official photo, and election data', () => {
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

    const offices = screen.getAllByText(/Deputada Estadual/i);
    expect(offices.length).toBeGreaterThan(0);

    // Slogan & Lema
    const slogans = screen.getAllByText(/Coragem pra mudar/i);
    expect(slogans.length).toBeGreaterThan(0);

    const lemas = screen.getAllByText(/Renda para Escolher\. Rede para Conseguir\. Proteção para Viver\./i);
    expect(lemas.length).toBeGreaterThan(0);

    // Official Hero Photo
    const heroImg = screen.getByRole('img', { name: /larissa delucca, candidata a deputada estadual 15888/i });
    expect(heroImg).toBeInTheDocument();
    expect(heroImg).toHaveAttribute('src', '/assets/images/hero-larissa-delucca.jpg');

    // CTAs
    expect(screen.getByRole('link', { name: /conheça as propostas/i })).toBeInTheDocument();
    const downloadBtns = screen.getAllByRole('link', { name: /baixar plano de mandato/i });
    expect(downloadBtns.length).toBeGreaterThan(0);
  });

  it('renders the 3 core programmatic pillars', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const rendaElements = screen.getAllByText(/Renda para Escolher/);
    expect(rendaElements.length).toBeGreaterThan(0);

    const redeElements = screen.getAllByText(/Rede para Conseguir/);
    expect(redeElements.length).toBeGreaterThan(0);

    const protecaoElements = screen.getAllByText(/Proteção para Viver/);
    expect(protecaoElements.length).toBeGreaterThan(0);
  });

  it('renders 4 axes and practical proposal highlights', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: /4 eixos de atuação na assembleia legislativa/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /propostas que mudam a vida real/i })).toBeInTheDocument();
  });

  it('renders mandate plan download section with official PDF link', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: /baixe o plano de mandato completo/i })).toBeInTheDocument();
    const pdfLinks = screen.getAllByRole('link', { name: /baixar pdf/i });
    expect(pdfLinks.length).toBeGreaterThan(0);
    expect(pdfLinks[0]).toHaveAttribute('href', '/assets/docs/plano-de-mandato-larissa-delucca-15888.pdf');
  });

  it('renders official videos section and toggles accessible transcription', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: /em primeira pessoa com larissa delucca/i })).toBeInTheDocument();

    const transcriptButtons = screen.getAllByRole('button', { name: /ver transcrição acessível/i });
    expect(transcriptButtons.length).toBeGreaterThan(0);

    // Click first transcript button to toggle open
    fireEvent.click(transcriptButtons[0]);
    expect(screen.getByText(/transcrição resumida:/i)).toBeInTheDocument();
  });

  it('renders FAQ section and toggles accordion items', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { level: 2, name: /perguntas & respostas/i })).toBeInTheDocument();

    // First question is open by default
    expect(screen.getByText(/o número de larissa delucca para deputada estadual no ceará é 15888/i)).toBeInTheDocument();

    // Toggle second question
    const q2 = screen.getByRole('button', { name: /o que significa ser uma "mãe atípica"/i });
    fireEvent.click(q2);
    expect(screen.getByText(/mãe atípica é a mulher que educa e cuida de um filho/i)).toBeInTheDocument();
  });

  it('renders volunteer CTA and official channels', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /quero ser voluntário\(a\)/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /iniciar conversa no whatsapp/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /seguir no instagram/i })).toBeInTheDocument();
  });
});
