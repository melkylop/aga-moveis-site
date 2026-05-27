# QA Manual · AGA Móveis

Checklist antes de cada deploy. Use junto com `testes/testes.html` (que cobre o lado automático).

---

## Visual e interação

### Hero
- [ ] Título carrega com itálico em `qualquer estofado`, `sofá feito pra durar`, `tecnologia`, `design`.
- [ ] Sublinhado aparece em `qualidade`.
- [ ] Imagem do sofá (`imagens/aga1.png`) carrega sem `404`.
- [ ] Botão "Conheça a linha →" rola até a seção Produtos com scroll suave.
- [ ] CTAs circulares (blush e gold) têm hover com leve rotação e sombra.

### Statement / Showcase / AboutSplit
- [ ] Imagens carregam (sem `broken image`).
- [ ] Imagem do Pexels carrega (testar com rede lenta no DevTools — `Throttling`).

### Stats e Pillars
- [ ] Os 3 stats aparecem alinhados em desktop e empilhados em mobile.
- [ ] Os 4 pillars têm glyph diferente (◆ ◇ ◈ ✦).
- [ ] Hover em pillar escurece o fundo.

### Produtos
- [ ] 6 cards renderizados.
- [ ] Hover em cada card eleva levemente (translateY -6px).
- [ ] Links "Ver na Bemol" abrem em nova aba.
- [ ] Links "Falar no Zap" abrem `wa.me/5592981869534`.

### Processo
- [ ] 5 steps na ordem 1→5.
- [ ] Hover em cada step move o conteúdo para a direita e mostra `→`.

### Depoimentos
- [ ] Texto muda automaticamente a cada 6 segundos.
- [ ] Os 3 dots embaixo permitem trocar manualmente.

### Contato
- [ ] Botão verde do WhatsApp abre `wa.me/5592981869534`.
- [ ] Endereço, telefone e horário visíveis.

### Rodapé
- [ ] Links "Privacidade" e "Termos de Uso" navegam para `legal/`.
- [ ] As páginas legais voltam para `../index.html` com o link "← voltar ao site".

---

## LGPD

- [ ] Em navegador anônimo, o banner LGPD aparece no canto inferior.
- [ ] Clicar em "Entendi" oculta o banner.
- [ ] Recarregar a página: o banner **não volta** (preferência persistida).
- [ ] Limpar `localStorage` (DevTools → Application) e recarregar: banner volta.
- [ ] "Saber mais" abre `legal/politica-privacidade.html`.

---

## Acessibilidade

- [ ] Todas as imagens têm `alt` (smoke test já cobre, mas conferir o texto faz sentido).
- [ ] Navegação por teclado: `Tab` percorre logo → menu → CTA → seções.
- [ ] Foco visível em todos os links e botões.
- [ ] Lighthouse · Acessibilidade: meta ≥ 90.

---

## Performance

- [ ] DevTools → Network → desabilitar cache → reload: total < 2 MB.
- [ ] Fontes carregam em < 800 ms em 4G simulado.
- [ ] Lighthouse · Performance: meta ≥ 80 (desktop) / ≥ 70 (mobile). Babel Standalone limita o teto.

---

## Segurança

- [ ] DevTools → Network → headers da resposta principal: CSP, X-Frame-Options, HSTS presentes.
- [ ] [securityheaders.com](https://securityheaders.com/) com a URL pública: nota A ou melhor.
- [ ] [Mozilla Observatory](https://observatory.mozilla.org/) com a URL pública: nota B ou melhor (Babel impede A+).
- [ ] Console limpo durante o boot (sem erros vermelhos).

---

## Responsividade

Testar em:
- [ ] Mobile (375 px) — Chrome DevTools, iPhone SE.
- [ ] Tablet (768 px) — iPad.
- [ ] Desktop (1280 px) — laptop padrão.
- [ ] Desktop wide (1920 px) — monitor full HD.

Verificar especialmente:
- Menu (`.nav-links`) some abaixo de 980 px (sem hambúrguer ainda — pendência).
- Grid de pillars: 4 → 2 → 1 colunas.
- Cards de produto: 3 → 1 colunas.

---

## Browsers

- [ ] Chrome (mais recente).
- [ ] Firefox (mais recente).
- [ ] Edge (mais recente).
- [ ] Safari (mais recente, se possível em macOS/iOS).

---

## Antes do deploy final

- [ ] Conferir telefone exibido em todo lugar: `(92) 98186-9534`.
- [ ] Conferir links de WhatsApp: `https://wa.me/5592981869534`.
- [ ] Conferir endereço: `Av. do Turismo, K7, nº 8090 — Tarumã, Manaus / AM, CEP 69041-010`.
- [ ] Ano do copyright: revisar a cada virada de ano.
- [ ] Substituir todas as imagens de placeholder, se houver, por imagens reais.
- [ ] Configurar headers de segurança no servidor (ver `seguranca/headers.exemplo.conf`).
- [ ] Habilitar HTTPS com certificado válido.
- [ ] Subir favicon.
