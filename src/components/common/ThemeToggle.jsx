import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from './Icons';

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
      <Icon
        name={isDark ? 'sun' : 'moon'}
        size={18}
        className={isDark ? 'text-warning' : 'text-neon-magenta'}
      />
    </button>
  );
}

export default ThemeToggle;
