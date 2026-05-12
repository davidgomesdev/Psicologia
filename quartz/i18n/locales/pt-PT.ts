import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Sem título",
    description: "Sem descrição",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Resumo",
      info: "Info",
      todo: "Por fazer",
      tip: "Dica",
      success: "Sucesso",
      question: "Questão",
      warning: "Aviso",
      failure: "Falha",
      danger: "Perigo",
      bug: "Bug",
      example: "Exemplo",
      quote: "Citação",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "Sem backlinks encontrados",
    },
    themeToggle: {
      lightMode: "Tema claro",
      darkMode: "Tema escuro",
    },
    readerMode: {
      title: "Modo de leitura",
    },
    explorer: {
      title: "Explorador",
    },
    footer: {
      createdWith: "Criado com",
    },
    graph: {
      title: "Visão de gráfico",
    },
    recentNotes: {
      title: "Notas recentes",
      seeRemainingMore: ({ remaining }) => `Ver mais ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclusão de ${targetSlug}`,
      linkToOriginal: "Ligação ao original",
    },
    search: {
      title: "Pesquisar",
      searchBarPlaceholder: "Pesquisar...",
    },
    tableOfContents: {
      title: "Índice",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `Leitura de ${minutes} min`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Notas recentes",
      lastFewNotes: ({ count }) => `Últimas ${count} notas`,
    },
    error: {
      title: "Não encontrado",
      notFound: "Esta página é privada ou não existe.",
      home: "Voltar à página inicial",
    },
    folderContent: {
      folder: "Pasta",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 item nesta pasta." : `${count} itens nesta pasta.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Sumário de Tags",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 item com esta tag." : `${count} itens com esta tag.`,
      showingFirst: ({ count }) => `A mostrar as primeiras ${count} tags.`,
      totalTags: ({ count }) => `Encontradas ${count} tags.`,
    },
  },
} as const satisfies Translation
