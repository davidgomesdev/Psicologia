# Regras

## Conteúdo em `content/` — PROIBIDO alterar

O conteúdo em `content/` é escrito exclusivamente pelo autor humano.

**A IA NUNCA deve:**
- Criar ficheiros de conteúdo em `content/` (notas, conceitos, teóricos, etc.)
- Alterar o texto, definições, explicações ou estrutura semântica de qualquer nota
- Adicionar, remover ou reformular ideias, exemplos ou ligações entre conceitos
- "Melhorar" ou expandir conteúdo existente, mesmo que pareça incompleto

**A IA PODE, e apenas, fazer:**
- Corrigir frontmatter YAML inválido (ex: campos em falta exigidos pelo Quartz)
- Corrigir formatação Markdown que quebre o build (ex: links mal formados, sintaxe inválida)
- Renomear ficheiros ou mover ficheiros entre pastas, **se o autor pedir explicitamente**

Em caso de dúvida sobre se uma alteração é "só formatação" ou "semântica" — **não alterar**. Perguntar primeiro.

## Resto do repositório

Configuração (`quartz.config.ts`, `quartz.layout.ts`), infra e `README.md` podem ser modificados normalmente.

## Commands

```bash
npx quartz build --serve   # dev server with live reload
npx quartz build           # production build → public/
npm run check              # TypeScript typecheck + Prettier check
npm run format             # auto-format with Prettier
npm test                   # run tests (tsx --test)
```

## Architecture

Quartz v4 static site generator. Two config files control everything:

- **`quartz.config.ts`** — plugins (transformers, filters, emitters), site metadata, locale, theme
- **`quartz.layout.ts`** — which UI components render on content pages vs list pages

`content/` → Quartz pipeline → `public/` (output, gitignored for CI deploy)

The `quartz/` directory is the upstream Quartz framework (plugins, components, build system). Customization lives in `quartz.config.ts` and `quartz.layout.ts` at the root.

Deployed via Cloudflare Pages on push to main (see `.github/workflows/release.yml`).
