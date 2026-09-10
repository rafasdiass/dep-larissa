import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SkipLink } from '../components/common/SkipLink';

describe('Layout Components', () => {
  it('renders SkipLink with accessible target', () => {
    render(<SkipLink targetId="main-content" />);
    const link = screen.getByRole('link', { name: /pular para o conteúdo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
  });

  it('renders Header with candidate branding and navigation', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Larissa DeLucca')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /abrir menu de navegação/i })).toBeInTheDocument();
  });

  it('renders Footer with mandatory developer credit for Lavita Code', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    const devCredit = screen.getByTestId('developer-credit');
    expect(devCredit).toBeInTheDocument();
    expect(devCredit).toHaveTextContent('Criação e desenvolvimento: Lavita Code');

    // Also verify candidate office, number, party
    const offices = screen.getAllByText(/Deputada Estadual/i);
    expect(offices.length).toBeGreaterThan(0);

    const numbers = screen.getAllByText(/15888/i);
    expect(numbers.length).toBeGreaterThan(0);
  });
});
