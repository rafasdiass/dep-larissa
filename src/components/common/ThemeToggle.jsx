import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Mudar para o Modo Claro' : 'Mudar para o Modo Escuro'}
      title={isDark ? 'Modo Claro' : 'Modo Escuro'}
    >
      <i className={isDark ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary'} aria-hidden="true" />
    </button>
  );
}
