# AGENTS.md · Guia Operacional para Agentes de IA

> Este arquivo é a **fonte de verdade** para qualquer agente de IA (Claude, GPT, Gemini, Cursor, Copilot, etc.) que for trabalhar no projeto **AGA Móveis**. Leia-o por completo **antes** de qualquer alteração.

---

## 1. Visão Geral Rápida

- **Projeto:** Site institucional da fábrica AGA Móveis (Manaus / AM).
- **Stack:** HTML + CSS + React 18.3.1 (CDN production) + JSX pré-compilado via Babel CLI (dev-only).
- **Tipo:** Single Page Application estática.
- **Build:** `npm run build` transforma `app.jsx`/`components.jsx` em `app.js`/`components.js`. Em produção, só os `.js` rodam. Sem Babel no navegador.
- **Idioma do produto e dos commits:** **Português brasileiro (pt-BR)**.
- **Arquivos principais:** `index.html`, `app.jsx`, `components.jsx`, `styles.css`. Os arquivos `app.js` e `components.js` são **gerados** — nunca edite diretamente.
- **Documentação:** `README.md`, `AGENTS.md`.
- **Pastas auxiliares:** `seguranca/` (CSP, headers), `legal/` (LGPD), `testes/` (smoke runner), `imagens/`, `uploads/`.

---

## 2. Regras de Ouro (NÃO NEGOCIÁVEIS)

As regras abaixo valem para **toda e qualquer interação** com o repositório:

1. **NÃO crie erros.** Antes de salvar qualquer alteração, valide mentalmente (ou no navegador, quando possível) que o código continua funcionando.
2. **Ao corrigir um erro, NÃO crie novos.** Se um fix exigir tocar em mais de um lugar, mapeie todos os impactos antes de aplicar. Nada de "conserto e quebra outra coisa".
3. **Responda SEMPRE em pt-BR.** Independente do idioma do prompt, toda comunicação com o usuário, comentários no código e textos exibidos no site devem estar em português brasileiro.
4. **Seja eficiente com tokens.** Não releia arquivos já lidos no mesmo turno. Não duplique pesquisas. Não devolva código gigante quando um `Edit` cirúrgico resolve.
5. **NÃO quebre o projeto.** Toda alteração deve manter o site renderizando sem erros no console. Em caso de dúvida, **pergunte antes**.
6. **NÃO alucine.** Não invente componentes, funções, variáveis CSS, rotas, APIs ou bibliotecas que não existam. Confira o código real antes de citar qualquer coisa.
7. **Atualize este AGENTS.md a cada 5 prompts.** Veja a seção [Política de Atualização](#9-política-de-atualização-deste-arquivo).
8. **NÃO instale dependências sem autorização.** O projeto tem apenas três `devDependencies` (`@babel/cli`, `@babel/core`, `@babel/preset-react`) usadas só para compilar JSX. Nada vai para produção via npm. Adicionar qualquer outra dependência — runtime OU dev — exige aprovação explícita.
9. **NÃO use emojis** em código ou textos do site, a menos que o usuário peça.
10. **Preserve a identidade visual.** A paleta vinho/blush/creme e a tipografia Instrument Serif são parte da marca — só mude se for um pedido explícito.

---

## 3. Arquitetura do Código

### 3.1 Fluxo de Renderização

```
desenvolvimento:
  components.jsx ┐
                 ├─ npm run build (Babel CLI)  →  components.js + app.js
  app.jsx        ┘

produção (no navegador):
  index.html
     │
     ├── carrega React + ReactDOM production (CDN unpkg, com SRI)
     ├── carrega components.js  ← já compilado
     └── carrega app.js          ← já compilado, faz createRoot().render()
```

**Fluxo de trabalho:** sempre que editar `app.jsx` ou `components.jsx`, rodar `npm run build` antes de testar/deploy. Em modo desenvolvimento ativo, use `npm run watch:components` em um terminal e `npm run watch:app` em outro.

### 3.2 Componentes em `components.jsx`

Todos os componentes vivem no escopo global (são anexados em `window` no final do arquivo). Eles são consumidos por `app.jsx` na ordem:

`TopBar → Nav → Hero → Statement → Showcase → AboutSplit → Stats → Pillars → Categories → Process → Testimonial → Contact → Footer`

Componentes decorativos (SVG): `Spark`, `Wave`, `Dash`, `Circles`, `ScribbleCluster`, `SofaPlaceholder`.

Componente transversal renderizado fora do fluxo: `CookieConsent` (banner LGPD), montado em `app.jsx` depois do `<Footer/>`.

### 3.3 Estado e Navegação

- `app.jsx` controla `active` (seção atual) via `IntersectionObserver` para scroll spy.
- `Categories` (em `components.jsx`) tem estado local de filtro de categoria.
- `Testimonial` tem rotação automática a cada 6 segundos.

### 3.4 CSS

- Arquivo único `styles.css` (~22 KB).
- Variáveis em `:root` (ver paleta no README).
- Convenção de classes: kebab-case por seção (ex.: `.hero-card`, `.cat-grid`, `.process-inner`).

---

## 4. Convenções de Código

| Item | Regra |
|---|---|
| Idioma de strings exibidas | pt-BR sempre |
| Comentários no código | Curtos, em pt-BR, só quando o **porquê** não é óbvio |
| JSX | Sem TypeScript, sem PropTypes (manter consistência com o que já existe) |
| CSS | Sem pré-processador. Variáveis CSS para tokens |
| Imports | Não usar `import/export` — tudo é global via `<script>` |
| Acentuação | Manter UTF-8. Não trocar `ã` por `a~` ou similar |
| Telefone/WhatsApp | Sempre `(92) 98186-9534` / link `https://wa.me/5592981869534` |

---

## 5. Como Testar Alterações

1. Servir os arquivos via HTTP local (`python -m http.server 8000` ou Live Server do VS Code).
2. Abrir o navegador em <http://localhost:8000>.
3. **Abrir o DevTools (F12)** e verificar:
   - Console sem erros (vermelho) nem warnings novos.
   - Network: todos os assets carregando (200).
4. Testar manualmente:
   - Scroll spy do menu (item ativo muda conforme rola).
   - Filtro de categoria em "Produtos".
   - Rotação automática dos depoimentos.
   - Links de WhatsApp abrindo corretamente.
5. Verificar responsividade básica (mobile / tablet / desktop).

---

## 6. Erros Comuns a Evitar

- ❌ Esquecer que **não há JSX import** — usar `React.useState` em vez de `useState` solto.
- ❌ Adicionar `export default` ou `import` (não funciona sem bundler).
- ❌ Mudar a versão das CDNs sem atualizar o `integrity` hash do `index.html`.
- ❌ Renomear IDs das seções (`#inicio`, `#empresa`, `#produtos`, `#processo`, `#contato`) — quebra o scroll spy.
- ❌ Tocar nas variáveis CSS sem verificar todos os usos (ex.: trocar `--wine` afeta dezenas de regras).
- ❌ Adicionar dependências externas (npm, CDN extra) sem autorização.
- ❌ Remover o `Object.assign(window, {...})` no fim de `components.jsx` — quebra `app.jsx`.
- ❌ Adicionar novo domínio externo (imagem, script, fonte) sem atualizar a CSP em `index.html` E em `seguranca/headers.exemplo.conf`.
- ❌ Remover o `CookieConsent` ou a chave `aga_lgpd_consent` no `localStorage` — quebra o fluxo LGPD.
- ❌ Mudar `frame-ancestors 'self'` para `'none'` na CSP — o runner em `testes/testes.html` para de funcionar.
- ❌ Editar `app.js` ou `components.js` diretamente — eles são gerados pelo `npm run build` e serão sobrescritos. Editar `.jsx` e recompilar.
- ❌ Esquecer de rodar `npm run build` antes de deploy — o site iria com a versão antiga compilada.
- ❌ Recolocar Babel Standalone no `index.html` — quebra a CSP estrita e regride a segurança.

---

## 7. Glossário de Negócio

| Termo | Significado |
|---|---|
| Estofados | Sofás (categoria principal da fábrica) |
| Camas Box | Bases + colchão, modelo box |
| Colchões | Vendidos separadamente, várias densidades (D33, D45, etc.) |
| Poltronas | Móveis individuais para sala/quarto |
| Sob medida | Diferencial da AGA: o cliente escolhe tecido, cor e medida |
| AM / Manaus | Estado/cidade onde está a fábrica (Av. do Turismo, Tarumã) |

---

## 8. Histórico de Alterações Recentes

> Esta seção é **atualizada a cada 5 prompts** (ver seção 9). Mantenha entradas curtas, com **data absoluta**, em ordem cronológica decrescente (mais recente no topo).

- **2026-05-27 (tarde)** — Auditoria OWASP aplicada: F-02 (React 18.3.1 em production builds com novos SRI), F-04 (`.gitignore`, `.netlifyignore`, `.vercelignore`), F-05 (innerHTML no smoke runner trocado por createElement/textContent), F-06 (7 imagens externas baixadas para `imagens/produtos/`, CSP `img-src` reduzida a `'self' data:`), F-08 (`robots.txt`, `sitemap.xml`, `favicon.svg`), F-09 (validação de schema do localStorage LGPD), F-10 (Open Graph + Twitter Card). F-03 e F-07 também aplicados: JSX agora pré-compilado via `npm run build` (Babel CLI dev-only) — `app.js` e `components.js` gerados; CSP `script-src` ficou estrita (sem `'unsafe-inline'` e sem `'unsafe-eval'`); arquivo `_headers` criado na raiz com a CSP estrita + HSTS + X-Frame-Options para Netlify/Cloudflare Pages. Babel Standalone removido do `index.html`.
- **2026-05-27 (manhã)** — Adicionada camada profissional para lançamento: meta tags de segurança no `index.html` (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), pasta `seguranca/` (SEGURANCA.md + headers.exemplo.conf para Nginx/Apache/Netlify/Vercel/Cloudflare), pasta `legal/` (LGPD.md + politica-privacidade.html + termos-uso.html), componente `CookieConsent` em `components.jsx` ligado no `app.jsx` após o `<Footer/>`, links legais no rodapé, pasta `testes/` (runner em testes.html + smoke.test.js + qa-manual.md). Lenis avaliado e **não integrado** — decisão documentada no README.
- **2026-05-22** — Criação inicial do `README.md` e do `AGENTS.md` com base na análise dos arquivos `index.html`, `app.jsx`, `components.jsx`, `styles.css` e da pasta `uploads/`. Projeto identificado como SPA estática React + Babel via CDN para o site da AGA Móveis (Manaus/AM).

---

## 9. Política de Atualização deste Arquivo

### Regra dos 5 Prompts

A cada **5 prompts** do usuário (contar mensagens dele, não respostas suas), o agente deve:

1. Revisar o que foi feito nos últimos 5 prompts.
2. Acrescentar uma entrada nova na seção **8. Histórico de Alterações Recentes** com:
   - **Data absoluta** no formato `AAAA-MM-DD`.
   - 1 a 3 linhas resumindo as mudanças relevantes (arquivos tocados, decisões, bugs resolvidos).
   - Sem repetir o que já está em entradas anteriores.
3. Se alguma **regra de ouro** mudou, atualizar a seção 2.
4. Se um **componente novo** foi criado, atualizar a seção 3.2.
5. Se um **erro comum** foi descoberto, adicionar à seção 6.

### O que NÃO registrar aqui

- Conversas casuais ou perguntas que não resultaram em mudanças.
- Detalhes que já estão claros no próprio código (ex.: "criei a função X que faz Y" — o nome já diz).
- Estado temporário ou em progresso. Só registrar coisas **consolidadas**.

### Como contar os 5 prompts

Se você for um agente que não mantém estado entre sessões, use o **`git log`** (quando o repositório for versionado) ou inspecione a última data registrada na seção 8 e compare com os arquivos modificados desde então. Em sessões longas dentro do mesmo turno, conte mensagens do usuário.

---

## 10. Quando em Dúvida

- **Pergunte ao usuário antes de:** instalar dependências, mudar arquitetura, remover componentes, trocar a paleta, alterar IDs de seção, mexer em integridade de hashes do CDN.
- **Pode agir sem perguntar para:** ajustes pontuais de CSS, correções de typo em textos pt-BR, refatorações que não mudam comportamento, atualização desta documentação.

---

**Lembrete final:** este arquivo existe para que qualquer IA chegue ao projeto e produza valor sem quebrar nada. Trate-o como um contrato.
