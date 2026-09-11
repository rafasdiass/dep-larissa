import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/layout/Header';
import { App } from '../App';
import { ThemeToggle } from '../components/common/ThemeToggle';
import { assetManifest } from '../assets/assetManifest';

const renderHome = () => render(<MemoryRouter><HomePage /></MemoryRouter>);
afterEach(() => { document.body.style.overflow = ''; });

describe('Visual redesign regressions', () => {
  it('uses actual portraits, never the brand guide or gradient as home photos', () => {
    renderHome();
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    images.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(/larissa-retrato-/);
      expect(existsSync(resolve('public', img.getAttribute('src').slice(1)))).toBe(true);
    });
    expect(readFileSync('public' + assetManifest.images.hero.src)).toEqual(readFileSync('public/assets/images/degrade-larissa-delucca.jpg'));
    expect(readFileSync('public' + assetManifest.images.hero.src)).not.toEqual(readFileSync('public' + assetManifest.images.palette.src));
  });

  it('limits initial proposal density, filters with JS and links to canonical routes', async () => {
    renderHome();
    const section = screen.getByRole('region', {name: /propostas que mudam/i});
    expect(section.querySelectorAll('.nikolas-project-card')).toHaveLength(3);
    const filter = within(section).getByRole('button', { name: 'Saúde & Eficiência' });
    fireEvent.click(filter);
    expect(filter).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => expect(section.querySelectorAll('.nikolas-project-card')).toHaveLength(1));
    expect(within(section).getByRole('link', { name: /prontuário único/i })).toHaveAttribute('href', '/propostas/estado-que-enxerga-integra-entrega');
  });

  it('opens video, contains keyboard focus and restores the trigger after Escape', () => {
    renderHome();
    const trigger = screen.getByRole('button', {name: /assistir ao vídeo de apresentação/i});
    trigger.focus(); fireEvent.click(trigger);
    const dialog = screen.getByRole('dialog', {name: /por que sou candidata/i});
    const close = within(dialog).getByRole('button', {name: 'Fechar vídeo'});
    expect(close).toHaveFocus();
    expect(dialog.querySelector('video')).toHaveAttribute('controls');
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(close, {key: 'Tab', shiftKey: true});
    expect(dialog.querySelector('video')).toHaveFocus();
    fireEvent.keyDown(document, {key: 'Escape'});
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(document.body.style.overflow).toBe('');
  });

  it('provides menu icons, focus trapping, close by backdrop and focus restoration', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    const trigger = screen.getByRole('button', {name: /abrir menu/i});
    trigger.focus(); fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    const dialog = screen.getByRole('dialog');
    expect(dialog.querySelectorAll('nav svg')).toHaveLength(8);
    expect(within(dialog).getByRole('button', {name: 'Fechar menu'})).toHaveFocus();
    fireEvent.keyDown(document, {key: 'Tab', shiftKey: true});
    expect(within(dialog).getByRole('link', {name: 'Falar no WhatsApp'})).toHaveFocus();
    fireEvent.click(dialog.parentElement);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('closes mobile navigation when a destination is selected', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    fireEvent.click(screen.getByRole('button', {name: /abrir menu/i}));
    fireEvent.click(within(screen.getByRole('dialog')).getByRole('link', {name: 'Propostas'}));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', {level: 1, name: /4 eixos para transformar o ceará/i})).toBeInTheDocument();
  });

  it('keeps theme controls usable when localStorage is blocked', () => {
    const getItem = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {throw new Error('Unavailable');});
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {throw new Error('Unavailable');});
    render(<ThemeToggle />);
    fireEvent.click(screen.getByRole('button', {name: /mudar para o modo/i}));
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    getItem.mockRestore(); setItem.mockRestore();
  });
});
