# AGA Móveis · Site Institucional

[![Esteira DevSecOps](https://github.com/melkylop/aga-moveis-site/actions/workflows/security.yml/badge.svg)](https://github.com/melkylop/aga-moveis-site/actions/workflows/security.yml)

**Site em produção:** <https://aga-moveis-site.sandesmelky.workers.dev>

Site institucional da **AGA Móveis**, fábrica de estofados, camas box, colchões e poltronas localizada em Manaus / Amazonas. O site apresenta a empresa, suas linhas de produtos, processo de produção e canais de contato direto via WhatsApp.

Hospedado em **Cloudflare** (CDN global, HTTPS automático). Cada `git push` em `main` dispara deploy automático.

---

## Sobre a Empresa

- **Nome:** AGA Móveis
- **Segmento:** Fábrica de móveis (varejo e atacado)
- **Produtos:** Sofás (estofados), Camas Box, Colchões e Poltronas
- **Cidade:** Manaus / AM
- **Endereço:** Av. do Turismo, K7, nº 8090 — Bairro Tarumã — CEP 69041-010
- **WhatsApp:** (92) 98186-9534
- **Horário:** Seg–Sex · 8h às 18h · Sáb · 8h às 13h
- **Diferenciais:** Produção própria, peças sob medida, entrega e montagem em Manaus / AM.

---

## Stack Técnica

O projeto é um **site estático single-page**, sem build step (roda direto no navegador).

| Tecnologia | Versão | Origem |
|---|---|---|
| React | 18.3.1 | CDN (unpkg) |
| ReactDOM | 18.3.1 | CDN (unpkg) |
| Babel Standalone | 7.29.0 | CDN (unpkg) — compila JSX no navegador |
| HTML5 + CSS3 puro | — | Local |
| Google Fonts | — | Instrument Serif, DM Sans, JetBrains Mono |

> **Observação:** O Babel Standalone compila o JSX em tempo real no navegador. Isso é prático para protótipos, mas não é recomendado para produção em larga escala (impacto de performance).

---

## Estrutura de Arquivos

```
Aga Moveis/
├── index.html              # Ponto de entrada, carrega React + Babel via CDN
├── app.jsx                 # Componente <App/>, scroll spy e renderização raiz
├── components.jsx          # Todos os componentes da página + banner LGPD
├── styles.css              # Estilos globais e por seção
├── README.md               # Este arquivo
├── AGENTS.md               # Regras e contexto para agentes de IA
├── imagens/                # Imagens dos produtos da fábrica
├── uploads/                # Capturas de tela de referência do layout
├── seguranca/
│   ├── SEGURANCA.md        # Política de segurança e checklist de deploy
│   └── headers.exemplo.conf # Headers para Nginx/Apache/Netlify/Vercel/Cloudflare
├── legal/
│   ├── LGPD.md             # Documento técnico de conformidade
│   ├── politica-privacidade.html
│   └── termos-uso.html
└── testes/
    ├── README.md
    ├── testes.html         # Runner de smoke tests no navegador
    ├── smoke.test.js
    └── qa-manual.md        # Checklist de QA manual antes de deploy
```

---

## Seções da Página

A página é dividida nas seguintes seções (na ordem de renderização em `app.jsx`):

1. **TopBar** — barra superior com ticker e botão de WhatsApp.
2. **Nav** — navegação principal com scroll spy ativo.
3. **Hero** (`#inicio`) — chamada principal, ilustração decorativa (ScribbleCluster) e CTAs.
4. **Statement** — manifesto curto sobre matéria-prima e durabilidade.
5. **Showcase** (`#empresa`) — destaque do sofá AGA, fundada em 2008.
6. **AboutSplit** — bloco "Sobre a AGA" com texto + imagem.
7. **Stats** — números (+10 anos, 4 linhas, 100% produção própria).
8. **Pillars** — Missão, Visão, Valores e Compromisso.
9. **Categories** (`#produtos`) — catálogo filtrável por categoria (Todos, Estofados, Camas Box, Colchões, Poltronas).
10. **Process** (`#processo`) — 5 passos do contato à entrega.
11. **Testimonial** — depoimentos rotativos automáticos (6 s).
12. **Contact** (`#contato`) — CTA do WhatsApp + endereço e horários.
13. **Footer** — navegação, produtos, contato e copyright.

---

## Design System

### Paleta de Cores (variáveis CSS em `:root`)

| Token | Hex | Uso |
|---|---|---|
| `--wine` | `#6E1622` | Cor primária da marca |
| `--wine-deep` | `#4F0E18` | Variação escura |
| `--wine-2` | `#8B1F2E` | Variação clara |
| `--blush` | `#F0D9D5` | Realces suaves |
| `--blush-soft` | `#F7E6E2` | Fundos delicados |
| `--cream` | `#F5EFE6` | Fundos secundários |
| `--paper` | `#FAF7F2` | Fundo principal |
| `--ink` | `#1E0E10` | Texto principal |
| `--ink-soft` | `#4A2E32` | Texto secundário |
| `--gold` | `#C99A55` | Detalhes nobres |
| `--line` | `rgba(110,22,34,0.18)` | Bordas e divisores |

### Tipografia

- **Serif (títulos):** `Instrument Serif` — itálico usado para ênfase em palavras-chave.
- **Sans (corpo):** `DM Sans`
- **Mono (eyebrows / labels):** `JetBrains Mono`

---

## Como Rodar Localmente

### Setup inicial (uma vez só)
```bash
npm install
```
Instala apenas `@babel/cli`, `@babel/core` e `@babel/preset-react` como `devDependencies` — usados para compilar JSX. **Nada vai para produção** (a pasta `node_modules` fica fora do deploy via `.netlifyignore` / `.vercelignore`).

### Compilar JSX → JS
Antes de testar/deploy, sempre compilar:
```bash
npm run build
```
Gera `components.js` (a partir de `components.jsx`) e `app.js` (a partir de `app.jsx`).

Em modo de desenvolvimento contínuo, dois terminais:
```bash
npm run watch:components
npm run watch:app
```

### Servir o site
```bash
python -m http.server 8000
# ou:
npx http-server -p 8000
```
Acesse <http://localhost:8000>.

### Importante
- Edite **somente** `app.jsx` e `components.jsx`. Os `.js` são gerados — **nunca edite a mão**.
- Sempre `npm run build` antes de subir para produção. Os `.js` ficam desatualizados se você esquecer.

---

## Segurança

O site está preparado para lançamento profissional com várias camadas de defesa. Detalhes completos em [`seguranca/SEGURANCA.md`](seguranca/SEGURANCA.md).

### Resumo do que já está aplicado

- **Content Security Policy (CSP)** restritiva via meta tag no `index.html`.
- **Subresource Integrity (SRI)** nos scripts de React, ReactDOM e Babel via CDN.
- **`rel="noreferrer"`** em todos os links com `target="_blank"`.
- **Meta tags** `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` e `Permissions-Policy` desativando câmera, microfone, geolocalização, pagamentos e USB.

### A configurar no deploy

Headers HTTP que **só funcionam no servidor** (não em meta tag): `Strict-Transport-Security`, `X-Frame-Options`, e a própria CSP em modo mais forte. Veja exemplos prontos para Nginx, Apache, Netlify, Vercel e Cloudflare Pages em [`seguranca/headers.exemplo.conf`](seguranca/headers.exemplo.conf).

> **Importante:** o Babel Standalone exige `'unsafe-inline'` e `'unsafe-eval'` na CSP. Para uma CSP estrita, migrar para um build (Vite) e remover esses dois flags.

---

## LGPD · Lei Geral de Proteção de Dados

O site está em conformidade com a Lei nº 13.709/2018. Detalhes em [`legal/LGPD.md`](legal/LGPD.md).

### O que existe

- **Banner de aviso** (componente `CookieConsent`) — informa que o site não coleta dados pessoais e que apenas armazenamento local é usado para lembrar a preferência. Aparece uma vez por dispositivo.
- **[Política de Privacidade](legal/politica-privacidade.html)** — página estática completa, conforme exigências da LGPD.
- **[Termos de Uso](legal/termos-uso.html)** — página estática com regras de uso do site.
- **Links no rodapé** apontando para os dois documentos.

### Por que o banner é minimalista

O site **não tem formulário, login, newsletter, Analytics, pixel nem cookies próprios**. O único uso de armazenamento local é a chave `aga_lgpd_consent` (que guarda a própria escolha do usuário sobre o banner). Por isso, o aviso é informativo — não há tratamento que dependa de consentimento granular.

> Se um dia for adicionado Google Analytics, Facebook Pixel, formulário ou newsletter: **atualizar o banner para coletar consentimento granular** (Art. 8º LGPD) e atualizar a Política de Privacidade.

---

## Testes

Sistema de testes **sem build step**, alinhado com a stack do projeto. Detalhes em [`testes/README.md`](testes/README.md).

### Como rodar

1. Sirva o projeto via HTTP local (a partir da raiz):
   ```bash
   python -m http.server 8000
   ```
2. Abra <http://localhost:8000/testes/testes.html>.
3. Os smoke tests rodam automaticamente.

### O que cobre

- Render do React (`#root` populado).
- Existência das 5 seções (`#inicio`, `#empresa`, `#produtos`, `#processo`, `#contato`).
- Links de navegação e links de WhatsApp.
- Atributo `alt` em todas as imagens.
- Quantidade mínima de cards de produto.
- Presença e diretivas-chave da CSP.
- Banner LGPD (montagem e persistência em `localStorage`).
- Console limpo durante o boot.

Para coisas que automação não consegue (scroll suave, hover, responsividade), use o checklist em [`testes/qa-manual.md`](testes/qa-manual.md).

---

## Avaliação · Biblioteca Lenis

Lenis é uma biblioteca de **smooth scroll inercial** de ~6 KB que costuma ser usada em landing pages com forte apelo visual.

**Decisão atual: não integrar.** Motivos:

1. **A regra de ouro nº 8 do `AGENTS.md`** diz que não se instala dependência sem autorização. Mesmo via CDN, é uma adição de superfície.
2. **O scroll spy do projeto depende de `IntersectionObserver`.** Lenis interfere no scroll nativo e pode atrasar a atualização do menu ativo. Funciona, mas exige cuidado.
3. **O site já usa `scrollIntoView({ behavior: 'smooth' })`** em todos os CTAs — a experiência atual já é razoável para um site institucional.
4. **Babel Standalone** já consome boa parte do orçamento de JS no carregamento — adicionar mais uma lib piora o LCP.

### Quando faria sentido reavaliar

- Quando o projeto for migrado para Vite/Next (e Babel Standalone sair).
- Quando houver feedback real de usuário pedindo um scroll mais "fluído".
- Em uma versão "premium" do site com animações em scroll (parallax, reveal).

### Como integrar (referência)

Se um dia for autorizado:

1. Adicionar via CDN no `index.html` antes dos scripts do app:
   ```html
   <script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js"></script>
   ```
2. Inicializar em `app.jsx`:
   ```jsx
   React.useEffect(() => {
     const lenis = new window.Lenis({ smooth: true });
     const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
     requestAnimationFrame(raf);
     return () => lenis.destroy();
   }, []);
   ```
3. Substituir `scrollIntoView` por `lenis.scrollTo(el)` nos handlers.
4. Atualizar a CSP em `index.html` adicionando `https://unpkg.com` se ainda não estiver autorizado (já está).
5. Adicionar `integrity` hash do script Lenis.
6. Atualizar o smoke test `csp-presente` se necessário.

---

## Roadmap / Pontos de Atenção

- [ ] Substituir os `SofaPlaceholder` por imagens reais dos produtos (pasta `uploads/`).
- [ ] Migrar de Babel Standalone para um build real (Vite ou similar) antes de ir para produção.
- [ ] Adicionar favicon e meta tags Open Graph para compartilhamento social.
- [ ] Implementar formulário de contato server-side (hoje só há link de WhatsApp).
- [ ] Otimizar carregamento das fontes (`font-display: swap`).
- [ ] Adicionar responsividade mobile mais refinada (auditar breakpoints).
- [ ] Adicionar `alt` descritivo e melhorias de acessibilidade (ARIA).
- [ ] Configurar headers HTTP de segurança no servidor (ver [`seguranca/headers.exemplo.conf`](seguranca/headers.exemplo.conf)).
- [ ] Auditar pontuação em [securityheaders.com](https://securityheaders.com/) e [Mozilla Observatory](https://observatory.mozilla.org/).
- [ ] Adicionar menu mobile (hambúrguer) — abaixo de 980 px o `.nav-links` some.
- [ ] Considerar Playwright para rodar os smoke tests em CI no futuro.

---

## Licença

© AGA Móveis · 2026 · Todos os direitos reservados.
