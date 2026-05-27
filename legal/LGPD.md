# Conformidade LGPD — AGA Móveis

> Documento técnico que descreve **como** o site da AGA Móveis está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).

---

## 1. Diagnóstico do site

| Aspecto | Situação atual |
|---|---|
| Coleta de dados pessoais no site | **Nenhuma.** Não há formulário, login, newsletter nem comentários. |
| Cookies próprios | **Nenhum.** O site não grava cookies. |
| Cookies de terceiros | Possíveis nas imagens externas (Bemol, Pexels) e Google Fonts (sem cookies, mas com requisição que vaza IP). |
| Local Storage | Apenas para guardar a escolha do usuário sobre o banner LGPD (chave `aga_lgpd_consent`). |
| Analytics / Pixel | **Nenhum.** Não há Google Analytics, Facebook Pixel etc. |
| Dados que saem do site | Endereço IP do usuário ao baixar Google Fonts, imagens da Bemol e do Pexels. |

**Conclusão:** o site **não controla** dados pessoais via formulário próprio. O contato com o cliente é feito 100% pelo WhatsApp da fábrica, onde a comunicação acontece em outro ambiente (Meta/WhatsApp). Mesmo assim, por boa prática e exigência da LGPD, o site mostra:

1. Aviso de uso de armazenamento local (banner).
2. Política de privacidade pública.
3. Termos de uso públicos.

---

## 2. Bases legais usadas

| Tratamento | Base legal (Art. 7º LGPD) |
|---|---|
| Armazenar preferência do banner LGPD em `localStorage` | Legítimo interesse (operação básica do site) |
| Carregar fontes do Google | Legítimo interesse |
| Mostrar imagens hospedadas na Bemol | Legítimo interesse (catálogo público de parceiro de varejo) |
| Mostrar imagens do Pexels | Legítimo interesse |

Não há tratamento que exija consentimento explícito porque não há coleta de dado pessoal pelo site.

> **Atenção:** se um dia for adicionado formulário, newsletter, Analytics ou pixel, a base legal precisa ser revista e o banner LGPD precisa ser ajustado para coletar **consentimento granular** (Art. 8º LGPD).

---

## 3. Direitos do titular (Art. 18 LGPD)

Mesmo o site não tratando dados, qualquer pessoa pode exercer seus direitos perante a AGA Móveis (que coleta dados via WhatsApp, presencial e nota fiscal):

- Confirmação de existência de tratamento.
- Acesso aos dados.
- Correção de dados incompletos, inexatos ou desatualizados.
- Anonimização, bloqueio ou eliminação.
- Portabilidade.
- Eliminação dos dados tratados com consentimento.
- Informação sobre compartilhamento.
- Revogação do consentimento.

**Canal oficial:** WhatsApp `(92) 98186-9534` ou presencial na Av. do Turismo K7, 8090 — Tarumã, Manaus / AM.

---

## 4. Encarregado (DPO)

A AGA Móveis, como microempresa, pode ser dispensada de nomear DPO formal (Resolução CD/ANPD nº 2/2022, Art. 11). Mesmo assim, deve existir um **canal de contato** acessível, que é o WhatsApp oficial.

> Em caso de crescimento da empresa ou início de tratamento de dados em escala (e-commerce próprio, CRM com >5 mil cadastros etc.), revisar a obrigação de nomear DPO.

---

## 5. Incidentes de segurança

Em caso de incidente de segurança envolvendo dados pessoais (ex.: vazamento de lista de clientes do WhatsApp Business, comprometimento do servidor):

1. **Contenção imediata** — isolar o sistema afetado.
2. **Avaliação de impacto** — quantos titulares, quais dados, qual o risco.
3. **Comunicação à ANPD** em até 3 dias úteis se houver risco aos titulares (Art. 48 LGPD).
4. **Comunicação aos titulares afetados.**
5. **Registro interno** do incidente.

---

## 6. Implementação técnica

### 6.1 Banner LGPD

Componente `CookieConsent` em [`../components.jsx`](../components.jsx). Características:

- Aparece **uma vez** por dispositivo.
- Salva a escolha em `localStorage` (chave `aga_lgpd_consent` com valor `accepted` ou `dismissed` e timestamp).
- Não bloqueia o site.
- Link para [Política de Privacidade](politica-privacidade.html).
- Permanece desativável a qualquer momento por dois botões: "Entendi" e "Saber mais".

### 6.2 Política de Privacidade

Arquivo HTML estático: [`politica-privacidade.html`](politica-privacidade.html).

Linkado no rodapé do site e dentro do banner LGPD.

### 6.3 Termos de Uso

Arquivo HTML estático: [`termos-uso.html`](termos-uso.html).

Linkado no rodapé do site.

---

## 7. Checklist de manutenção

Revisar **a cada 12 meses** ou quando houver mudança significativa no site:

- [ ] Os documentos `politica-privacidade.html` e `termos-uso.html` ainda refletem a realidade?
- [ ] Foi adicionado algum script de terceiro (Analytics, pixel, chat) desde a última revisão?
- [ ] Mudaram os domínios externos usados (imagens, fontes, CDN)?
- [ ] A LGPD foi alterada por nova resolução da ANPD?
- [ ] O canal de contato (WhatsApp) ainda é o oficial?

---

## 8. Histórico

| Data | Alteração |
|---|---|
| 2026-05-27 | Criação inicial. Banner, política, termos e diagnóstico do site. |
