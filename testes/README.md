# Testes · AGA Móveis

Sistema de testes **sem build step**, alinhado com a stack do projeto (HTML + React + Babel via CDN).

## Estrutura

```
testes/
├── README.md           · este arquivo
├── testes.html         · runner que roda no navegador
├── smoke.test.js       · smoke tests automáticos (DOM, IntersectionObserver, LGPD)
└── qa-manual.md        · checklist de QA manual
```

---

## Como rodar

1. Sirva o projeto via HTTP local (a partir da **raiz do projeto**, não da pasta `testes/`):

   ```bash
   python -m http.server 8000
   ```

2. Abra <http://localhost:8000/testes/testes.html> no navegador.

3. Os smoke tests rodam automaticamente. O resultado aparece em tela com **verde** (passou) ou **vermelho** (falhou).

> **Por que iframe?** O runner carrega `index.html` dentro de um `<iframe>` e inspeciona o DOM resultante. Isso permite testar a aplicação real sem mock, sem build, sem dependência adicional.

---

## O que os smoke tests cobrem

| Teste | O que valida |
|---|---|
| `root-render` | A div `#root` recebe conteúdo (React montou). |
| `secoes-presentes` | As 5 seções com IDs (`inicio`, `empresa`, `produtos`, `processo`, `contato`) existem. |
| `nav-links` | Os 5 links do menu existem e apontam para as âncoras corretas. |
| `whatsapp-links` | Todos os links de WhatsApp usam o número oficial e `rel="noreferrer"`. |
| `imagens-com-alt` | Todas as imagens têm atributo `alt`. |
| `cards-produtos` | A lista de produtos renderiza ao menos 6 cards. |
| `csp-presente` | A meta tag de Content-Security-Policy está presente. |
| `lgpd-banner` | O banner LGPD aparece quando `localStorage` está vazio. |
| `lgpd-persiste` | Após clicar em "Entendi", a escolha é salva em `localStorage`. |
| `sem-console-errors` | Console fica limpo durante o boot (sem erros vermelhos). |

---

## QA manual

Os testes automáticos não cobrem comportamento visual, scroll suave nem responsividade. Use [`qa-manual.md`](qa-manual.md) como checklist antes de cada deploy.

---

## Adicionando novos testes

1. Adicione uma função em `smoke.test.js` seguindo o padrão:

   ```js
   suite.test('meu-teste', async ({ doc, expect }) => {
     const el = doc.querySelector('.minha-classe');
     expect(el, 'elemento deve existir').not.toBe(null);
   });
   ```

2. Não há build — basta recarregar `testes.html` no navegador.

3. Mantenha cada teste **idempotente** e **rápido** (< 500 ms). Para testes lentos, use `await suite.sleep(ms)` com parcimônia.

---

## Limitações

- Roda só no navegador, não em CI sem um headless browser (Playwright/Puppeteer).
- Não simula clique de usuário com profundidade (apenas verifica DOM).
- Não cobre acessibilidade automatizada — usar Lighthouse / axe-core no DevTools.

---

## Próximos passos sugeridos

- [ ] Integrar com Playwright para rodar em CI quando o projeto for versionado.
- [ ] Adicionar testes visuais (snapshot) ao migrar para build.
- [ ] Adicionar Lighthouse CI para auditoria de performance/SEO.
