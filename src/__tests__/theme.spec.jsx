import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ThemeToggle } from '../components/common/ThemeToggle';

describe('Theme Engine & Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders theme toggle button with accessible label', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /mudar para o modo/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles theme between light and dark when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /mudar para o modo/i });

    // Initial theme should be light (or based on matchMedia fallback)
    const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = initialTheme === 'light' ? 'dark' : 'light';

    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe(nextTheme);
    expect(localStorage.getItem('dep-larissa-theme')).toBe(nextTheme);

    // Toggle back
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe(initialTheme);
    expect(localStorage.getItem('dep-larissa-theme')).toBe(initialTheme);
  });
});
