import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { proposalsList } from '../../data/proposals';
import { axesData } from '../../data/axes';

export function ProposalExplorer() {
  const [search, setSearch] = useState('');
  const [selectedAxis, setSelectedAxis] = useState('all');

  const filteredProposals = useMemo(() => {
    return proposalsList.filter((p) => {
      const matchAxis = selectedAxis === 'all' || p.axisSlug === selectedAxis;
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.practicalProposal.toLowerCase().includes(q);

      return matchAxis && matchSearch;
    });
  }, [search, selectedAxis]);

  return (
    <div className="proposal-explorer my-5">
      {/* Barra de Filtros e Busca */}
      <div className="p-4 rounded-4 mb-4" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)' }}>
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-transparent border-end-0">
                <i className="bi bi-search text-muted" aria-hidden="true" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Buscar por termo (ex: fonoaudiologia, microcrédito, DDM)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar propostas legislativas"
              />
              {search && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setSearch('')}
                  title="Limpar busca"
                >
                  <i className="bi bi-x" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6 text-md-end">
            <span className="small text-muted me-2">Filtrar por Eixo:</span>
            <select
              className="form-select d-inline-block w-auto"
              value={selectedAxis}
              onChange={(e) => setSelectedAxis(e.target.value)}
              aria-label="Filtrar propostas por eixo temático"
            >
              <option value="all">Todos os 4 Eixos ({proposalsList.length})</option>
              {axesData.map((ax) => (
                <option key={ax.slug} value={ax.slug}>
                  {ax.number}. {ax.shortTitle}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Botões rápidos de Eixo */}
        <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
          <button
            type="button"
            className={`btn btn-sm rounded-pill ${selectedAxis === 'all' ? 'btn-dark' : 'btn-light border'}`}
            onClick={() => setSelectedAxis('all')}
          >
            Todos ({proposalsList.length})
          </button>
          {axesData.map((ax) => {
            const count = proposalsList.filter((p) => p.axisSlug === ax.slug).length;
            const isSelected = selectedAxis === ax.slug;
            return (
              <button
                key={ax.slug}
                type="button"
                className={`btn btn-sm rounded-pill ${isSelected ? 'btn-primary' : 'btn-light border'}`}
                style={isSelected ? { background: ax.color, borderColor: ax.color, color: '#FFFFFF' } : {}}
                onClick={() => setSelectedAxis(ax.slug)}
              >
                {ax.shortTitle} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Contador de Resultados */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="small text-secondary fw-semibold">
          Exibindo {filteredProposals.length} de {proposalsList.length} iniciativas
        </span>
        {(search || selectedAxis !== 'all') && (
          <button
            type="button"
            className="btn btn-sm btn-link text-decoration-none p-0 text-danger"
            onClick={() => {
              setSearch('');
              setSelectedAxis('all');
            }}
          >
            <i className="bi bi-x-circle me-1" />
            Limpar todos os filtros
          </button>
        )}
      </div>

      {/* Grid de Propostas */}
      {filteredProposals.length === 0 ? (
        <div className="text-center p-5 rounded-4 bg-light">
          <i className="bi bi-search fs-1 text-muted d-block mb-3" />
          <h3 className="fs-5 fw-bold">Nenhuma proposta encontrada</h3>
          <p className="text-secondary small mb-3">Tente buscar por outro termo ou remova o filtro de eixo.</p>
          <button
            type="button"
            className="btn btn-sm btn-brand-primary"
            onClick={() => {
              setSearch('');
              setSelectedAxis('all');
            }}
          >
            Ver Todas as Propostas
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProposals.map((item) => {
            const axis = axesData.find((a) => a.slug === item.axisSlug);
            return (
              <div key={item.slug} className="col-12 col-lg-6">
                <div className="brand-card h-100 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <span
                        className="badge rounded-pill px-3 py-1 text-white"
                        style={{ background: axis?.color || 'var(--brand-pink)' }}
                      >
                        Iniciativa {item.number}
                      </span>
                      <span className="small text-muted">{item.pillar}</span>
                    </div>

                    <h3 className="fs-5 fw-bold mb-2">{item.title}</h3>
                    <p className="text-secondary small mb-3">{item.summary}</p>

                    <div className="p-3 rounded-3 bg-light border-start border-3 border-primary mb-3">
                      <strong className="d-block small text-dark mb-1">
                        <i className="bi bi-lightbulb me-1 text-warning" />
                        Proposta Prática:
                      </strong>
                      <span className="small text-secondary">{item.practicalProposal}</span>
                    </div>

                    <div className="mb-3">
                      <span className="text-muted small d-block mb-1">Indicadores de Sucesso:</span>
                      <div className="d-flex flex-wrap gap-1">
                        {item.indicators.map((ind, i) => (
                          <span key={i} className="badge bg-secondary-subtle text-secondary small">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-top mt-auto d-flex justify-content-between align-items-center">
                    <span className="small text-muted">{axis?.shortTitle}</span>
                    <Link
                      to={`/propostas/${item.axisSlug}`}
                      className="btn btn-sm btn-brand-primary"
                    >
                      <span>Ver no Eixo {axis?.number}</span>
                      <i className="bi bi-arrow-right ms-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
