import React from 'react';
import { Link } from 'react-router-dom';

export function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Navegação estrutural (Breadcrumb)" className="mb-4">
      <ol className="breadcrumb mb-0 py-2 px-3 rounded-3" style={{ background: 'var(--bg-accent-subtle)', fontSize: '0.875rem' }}>
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none">
            <i className="bi bi-house-door me-1" aria-hidden="true" />
            Início
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return isLast ? (
            <li key={idx} className="breadcrumb-item active fw-semibold" aria-current="page">
              {item.label}
            </li>
          ) : (
            <li key={idx} className="breadcrumb-item">
              <Link to={item.href} className="text-decoration-none">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
