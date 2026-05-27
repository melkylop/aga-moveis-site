# Política de Segurança — AGA Móveis

> Documento que reúne as medidas de segurança implementadas no site institucional da AGA Móveis e o que precisa ser configurado **na hora do deploy** para que o site vá ao ar de forma profissional.

---

## 1. Escopo

O site da AGA Móveis é uma SPA estática (HTML + React via CDN). **Não há backend, banco de dados, login nem coleta de dados pessoais via formulário próprio.** O único canal de contato é o WhatsApp da fábrica.

Mesmo sem backend, o site precisa estar protegido contra:

- Injeção de scripts de terceiros (XSS via CDN comprometida).
- Clickjacking (incorporação do site em iframes maliciosos).
- Sniffing de MIME type.
- Vazamento de Referer para sites de terceiros.
- Carregamento de recursos não autorizados.

---

## 2. Medidas já aplicadas no código

### 2.1 Content Security Policy (CSP)

Definida via `<meta http-equiv="Content-Security-Policy">` no `index.html` e reforçada pelo header HTTP do servidor (ver `_headers` na raiz e `headers.exemplo.conf` para outros ambientes).

`script-src` agora é estrito: `'self' https://unpkg.com`. **Sem `'unsafe-inline'` e sem `'unsafe-eval'`**, porque o JSX é pré-compilado para `.js` via `npm run build` antes do deploy. Babel não roda mais no navegador.

`style-src` mantém `'unsafe-inline'` por causa do atributo `style={{...}}` que o React usa em alguns componentes decorativos (SVGs).

### 2.2 Subresource Integrity (SRI)

Os scripts de React, ReactDOM e Babel carregados via CDN já têm o atributo `integrity` no `index.html`. Se a CDN for comprometida, o navegador bloqueia o carregamento.

> **Regra:** ao atualizar a versão de qualquer CDN, **sempre** atualizar o hash `integrity` correspondente.

### 2.3 Atributos `rel` em links externos

Todos os links com `target="_blank"` usam `rel="noreferrer"`. Isso:
- Bloqueia o vazamento de `document.referrer` para o destino.
- Impede que o destino acesse `window.opener` (proteção contra tab-nabbing).

### 2.4 Meta tags de segurança

No `<head>` do `index.html`:

- `X-Content-Type-Options: nosniff` — impede o navegador de inferir MIME type.
- `Referrer-Policy: strict-origin-when-cross-origin` — limita o que sai no header Referer.
- `Permissions-Policy` — desativa APIs que o site não usa (câmera, microfone, geolocalização etc.).

---

## 3. O que configurar NO SERVIDOR (deploy)

Meta tags HTML são uma camada parcial. Em produção, os headers reais do servidor têm prioridade. Use o arquivo [`headers.exemplo.conf`](headers.exemplo.conf) como referência.

### 3.1 Headers obrigatórios

| Header | Valor recomendado | Por quê |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Força HTTPS por 2 anos |
| `X-Frame-Options` | `SAMEORIGIN` | Permite iframe same-origin (necessário para o runner em `testes/testes.html`) e bloqueia outros domínios |
| `X-Content-Type-Options` | `nosniff` | Reforça o que está na meta |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Privacidade do usuário |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Princípio do menor privilégio |
| `Content-Security-Policy` | Ver `headers.exemplo.conf` | Defesa contra XSS |

### 3.2 HTTPS

- Certificado válido (Let's Encrypt, Cloudflare, etc.).
- Redirecionamento 301 de HTTP para HTTPS.
- Sem mixed content (todos os assets em HTTPS — confirmar imagens da Bemol e Pexels).

### 3.3 Hospedagem recomendada

Para um site estático como este, opções com headers configuráveis e HTTPS automático:

- **Cloudflare Pages**
- **Netlify** (usar `_headers` file)
- **Vercel** (usar `vercel.json`)
- **GitHub Pages + Cloudflare** na frente

---

## 4. Boas práticas para os mantenedores

1. **Nunca commitar segredos.** O projeto não tem nenhum hoje — manter assim.
2. **Auditar dependências CDN** a cada 6 meses. Verificar se há CVE em React/Babel.
3. **Revisar CSP** sempre que adicionar um novo recurso externo (nova fonte, nova imagem de outro domínio).
4. **Não desabilitar `integrity`** dos scripts CDN.
5. **Testar com [Mozilla Observatory](https://observatory.mozilla.org/)** após cada deploy.
6. **Testar com [securityheaders.com](https://securityheaders.com/)** após cada deploy. Meta: nota A ou A+.

---

## 5. Como reportar uma vulnerabilidade

Se você encontrou uma vulnerabilidade no site da AGA Móveis:

1. **Não publique** detalhes em público.
2. Entre em contato direto pelo WhatsApp `(92) 98186-9534` solicitando contato do responsável técnico.
3. Forneça: descrição, passos para reproduzir, impacto estimado.

Resposta esperada em até 5 dias úteis.

---

## 6. Itens em aberto (TODO de segurança)

- [ ] Configurar headers no servidor (ver seção 3).
- [ ] Migrar de Babel Standalone para build (Vite) e remover `'unsafe-eval'` da CSP.
- [ ] Adicionar `favicon.ico` (evita 404 e melhora confiança visual).
- [ ] Adicionar `robots.txt` e `sitemap.xml`.
- [ ] Auditar imagens externas (Bemol, Pexels) — considerar baixar e servir local para reduzir dependência de terceiros.
- [ ] Implementar monitoramento de uptime (UptimeRobot, BetterUptime).

---

## 7. Esteira DevSecOps · GitHub Actions

Workflow: [.github/workflows/security.yml](../.github/workflows/security.yml). Roda a cada `push`, `pull_request` e toda segunda 08:00 UTC.

### Os 3 jobs

| Job | Ferramenta | O que checa |
|---|---|---|
| `dependencies` | `npm audit` | Vulnerabilidades em pacotes (`--audit-level=high`) |
| `sast` | Semgrep com `p/owasp-top-ten` + `p/javascript` + `p/react` + `p/security-audit` | Anti-padrões e OWASP Top 10 no JSX/JS |
| `secrets` | Gitleaks 8.x (CLI) | Chaves/tokens/senhas vazadas no código e no histórico do Git |

Semgrep e Gitleaks publicam relatórios SARIF na aba **Security → Code scanning** do repositório.

### Branch protection na `main`

Configurado via API. Bloqueia merge para `main` se algum dos 3 status checks falhar. Também bloqueia force-push e deleção de branch. Resoluções de comentários em PR são obrigatórias.

### Notificações

GitHub envia email automático para o autor do commit quando a esteira falha (configurável em <https://github.com/settings/notifications>).

---

## 8. Histórico

| Data | Alteração |
|---|---|
| 2026-05-27 | Criação inicial. CSP, SRI, meta tags de segurança e referência de headers para deploy. Esteira DevSecOps com npm audit + Semgrep + Gitleaks. Branch protection na main exigindo 3 status checks. |
