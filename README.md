# Website Oficial — Larissa DeLucca (15888 MDB)

> Plataforma digital de campanha e mandato legislativo de **Larissa DeLucca**, candidata a Deputada Estadual pelo Ceará (15888 — MDB). Advogada, mãe atípica e presidente da Fundação Mulheres Aceleradas.

---

## 1. Stack Tecnológica Homologada

- **Core:** React 18 + Vite
- **Roteamento:** React Router v6
- **Estilização:** SCSS Modular com Design Tokens oficiais
- **Grid & Reset:** Bootstrap 5.3 (apenas Grid responsivo e Reboot)
- **Ícones:** Bootstrap Icons
- **Acessibilidade:** WCAG 2.2 Nível AA (Skip-links, foco visível, contraste cromático, modo escuro nativo)
- **Backend / Serverless:** Vercel Serverless Function (`api/volunteer.js`) com proteção honeypot e zero banco de dados no MVP.
- **Crédito Obrigatório:** Presente e centralizado no rodapé: *"Criação e desenvolvimento: Lavita Code"*.

---

## 2. Estrutura do Repositório

```text
dep-larissa/
├── api/
│   └── volunteer.js              # Serverless Function na Vercel com proteção anti-spam
├── public/
│   ├── assets/
│   │   ├── docs/                 # Plano de mandato oficial em PDF (download direto)
│   │   ├── images/               # Fotos oficiais da candidata
│   │   └── videos/               # Vídeos MP4 para streaming sob demanda
│   ├── robots.txt                # Diretivas para motores de busca
│   └── sitemap.xml               # Sitemap com as rotas canônicas
├── src/
│   ├── assets/                   # Mapeamento e manifest de assets
│   ├── components/
│   │   ├── common/               # Breadcrumbs, SkipLink, ThemeToggle, VolunteerForm, SEO
│   │   ├── home/                 # As 15 seções modulares da Home Page
│   │   ├── layout/               # Header, Footer, MobileOffcanvas, MainLayout
│   │   └── proposals/            # ProposalExplorer, RelatedProposals
│   ├── config/                   # Configurações centralizadas (site, social, legal, seo)
│   ├── data/                     # Coleções de dados estruturados (eixos e propostas)
│   ├── pages/                    # Todas as páginas da aplicação
│   │   └── proposals/            # Páginas canônicas dos 4 Eixos e Proposta Individual
│   ├── styles/                   # Tokens SCSS (cores, tipografia, espaçamento)
│   └── __tests__/                # Suíte completa de testes automatizados com Vitest
├── vercel.json                   # Roteamento SPA e cabeçalhos de segurança
└── vite.config.js                # Configuração do Vite e aliases
```

---

## 3. Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor local de desenvolvimento
npm run dev

# Executar bateria de testes automatizados
npm run test

# Gerar build de produção para Vercel
npm run build
```

---

## 4. Como Customizar Dados e Cores

- **Dados da Candidata & Redes:** Edite [`src/config/site.config.js`](file:///Users/rafaeldias/IdeaProjects/dep-larissa/src/config/site.config.js) e [`src/config/social.config.js`](file:///Users/rafaeldias/IdeaProjects/dep-larissa/src/config/social.config.js).
- **Cores Oficiais:** Edite os tokens em [`src/styles/tokens/_colors.scss`](file:///Users/rafaeldias/IdeaProjects/dep-larissa/src/styles/tokens/_colors.scss).
- **Propostas & Eixos:** Atualize os registros estruturados em [`src/data/axes.js`](file:///Users/rafaeldias/IdeaProjects/dep-larissa/src/data/axes.js) e [`src/data/proposals.js`](file:///Users/rafaeldias/IdeaProjects/dep-larissa/src/data/proposals.js).

---

## 5. Política de Deploy e Domínio

- **Vercel Preview Deploys:** Ativos para cada PR apontando para a branch `dev`.
- **Domínio Oficial em Quarentena:** O domínio `https://larissadelucca.com.br/` só terá o apontamento de DNS liberado após a validação final da equipe de coordenação.

---

**Desenvolvido por Lavita Code**  
[https://lavitacode.com.br](https://lavitacode.com.br)
