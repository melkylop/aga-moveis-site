// Decorative SVG motifs — simple wavy lines, sparks, leaves
// Kept minimal and stylized; not attempting realistic illustrations.

const Spark = ({
  size = 18,
  color = "currentColor",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  style: style
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z",
  fill: color
}));
const Wave = ({
  w = 80,
  color = "currentColor",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: "16",
  viewBox: "0 0 80 16",
  fill: "none",
  style: style
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 8 Q12 0, 22 8 T42 8 T62 8 T78 8",
  stroke: color,
  strokeWidth: "1.6",
  strokeLinecap: "round",
  fill: "none"
}));
const Dash = ({
  color = "currentColor",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: "36",
  height: "6",
  viewBox: "0 0 36 6",
  style: style
}, /*#__PURE__*/React.createElement("line", {
  x1: "2",
  y1: "3",
  x2: "34",
  y2: "3",
  stroke: color,
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeDasharray: "2 6"
}));
const Circles = ({
  color = "currentColor",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  style: style
}, /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "20",
  r: "2.4",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "20",
  cy: "10",
  r: "1.8",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "32",
  cy: "22",
  r: "2.8",
  fill: color
}), /*#__PURE__*/React.createElement("circle", {
  cx: "22",
  cy: "32",
  r: "1.6",
  fill: color
}));

// Decorative scribble cluster — used behind hero sofa. Simple strokes only.
const ScribbleCluster = ({
  color = "rgba(247,230,226,0.45)",
  style
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 600 480",
  style: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    ...style
  },
  fill: "none"
}, /*#__PURE__*/React.createElement("g", {
  stroke: color,
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M40 220 q20 -20 0 -40 q-20 -20 0 -40"
}), /*#__PURE__*/React.createElement("path", {
  d: "M70 290 q24 -10 0 -30"
}), /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "160",
  x2: "80",
  y2: "160",
  strokeDasharray: "3 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "30",
  y1: "350",
  x2: "90",
  y2: "340",
  strokeDasharray: "3 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M180 60 q10 -20 30 -10 q20 10 10 30"
}), /*#__PURE__*/React.createElement("path", {
  d: "M260 40 q14 4 16 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M330 30 q-8 14 6 24 q14 10 4 22"
}), /*#__PURE__*/React.createElement("path", {
  d: "M520 180 q20 -8 0 -28 q-20 -20 0 -36"
}), /*#__PURE__*/React.createElement("path", {
  d: "M560 260 q-16 -2 -14 18"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "120",
  cy: "120",
  r: "3",
  fill: color,
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "540",
  cy: "100",
  r: "3",
  fill: color,
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "100",
  cy: "400",
  r: "3",
  fill: color,
  stroke: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "560",
  cy: "380",
  r: "3",
  fill: color,
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M150 380 l4 0 M152 378 l0 4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M480 410 l6 0 M483 407 l0 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M420 80 q14 -10 30 0 q-14 10 -30 0 Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M90 80 q14 -10 30 0 q-14 10 -30 0 Z"
})));
const TopBar = () => /*#__PURE__*/React.createElement("div", {
  className: "top-bar"
}, /*#__PURE__*/React.createElement("div", {
  className: "ticker"
}, /*#__PURE__*/React.createElement("span", null, "Estofados sob medida"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Camas Box"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Colch\xF5es"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Poltronas"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Entrega em Manaus / AM")), /*#__PURE__*/React.createElement("a", {
  className: "zap",
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("span", {
  className: "dot"
}), "WhatsApp"));
const Nav = ({
  activeSection,
  onNav
}) => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("a", {
  href: "#top",
  className: "nav-logo",
  onClick: e => {
    e.preventDefault();
    onNav('top');
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "mark"
}, /*#__PURE__*/React.createElement("em", null, "aga"), " m\xF3veis"), /*#__PURE__*/React.createElement("span", {
  className: "sub"
}, "est. Manaus")), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#inicio",
  className: activeSection === 'inicio' ? 'active' : '',
  onClick: e => {
    e.preventDefault();
    onNav('inicio');
  }
}, "In\xEDcio"), /*#__PURE__*/React.createElement("a", {
  href: "#empresa",
  className: activeSection === 'empresa' ? 'active' : '',
  onClick: e => {
    e.preventDefault();
    onNav('empresa');
  }
}, "Empresa"), /*#__PURE__*/React.createElement("a", {
  href: "#produtos",
  className: activeSection === 'produtos' ? 'active' : '',
  onClick: e => {
    e.preventDefault();
    onNav('produtos');
  }
}, "Produtos"), /*#__PURE__*/React.createElement("a", {
  href: "#processo",
  className: activeSection === 'processo' ? 'active' : '',
  onClick: e => {
    e.preventDefault();
    onNav('processo');
  }
}, "Processo"), /*#__PURE__*/React.createElement("a", {
  href: "#contato",
  className: activeSection === 'contato' ? 'active' : '',
  onClick: e => {
    e.preventDefault();
    onNav('contato');
  }
}, "Contato")), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("button", {
  className: "nav-cta"
}, "Falar com a AGA \u2192")));
const SofaPlaceholder = ({
  label = "sofá retrátil",
  code = "AGA-01"
}) => /*#__PURE__*/React.createElement("div", {
  className: "sofa-img",
  "aria-label": label
}, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, code));
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "hero",
  id: "inicio"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-eyebrow"
}, /*#__PURE__*/React.createElement("span", {
  className: "pill"
}, "AGA M\xF3veis \xB7 Manaus / AM"), /*#__PURE__*/React.createElement("span", null, "desde sempre, conforto pra durar")), /*#__PURE__*/React.createElement("h1", null, "Por que se contentar ", /*#__PURE__*/React.createElement("em", null, "com qualquer estofado"), " se o", /*#__PURE__*/React.createElement("br", null), "seu lar merece um ", /*#__PURE__*/React.createElement("em", null, "sof\xE1 feito pra durar"), " com", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
  className: "underline"
}, "qualidade"), ", ", /*#__PURE__*/React.createElement("em", null, "tecnologia"), " e ", /*#__PURE__*/React.createElement("em", null, "design"), "?"), /*#__PURE__*/React.createElement("div", {
  className: "hero-cta-row"
}, /*#__PURE__*/React.createElement("button", {
  className: "btn-ghost",
  onClick: () => document.getElementById('produtos').scrollIntoView({
    behavior: 'smooth'
  })
}, "Conhe\xE7a a linha ", /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192"))), /*#__PURE__*/React.createElement("div", {
  className: "hero-featured"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-card"
}, /*#__PURE__*/React.createElement("h3", null, "Procurando um", /*#__PURE__*/React.createElement("br", null), "sof\xE1 novo?"), /*#__PURE__*/React.createElement("a", {
  href: "#produtos",
  onClick: e => {
    e.preventDefault();
    document.getElementById('produtos').scrollIntoView({
      behavior: 'smooth'
    });
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "cta-circle blush"
}, "Ver Produtos", /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192")))), /*#__PURE__*/React.createElement("div", {
  className: "sofa-stage"
}, /*#__PURE__*/React.createElement(ScribbleCluster, null), /*#__PURE__*/React.createElement("img", {
  className: "sofa-img-real",
  src: "imagens/aga1.png",
  alt: "Sof\xE1 retr\xE1til 3 lugares AGA M\xF3veis"
})), /*#__PURE__*/React.createElement("div", {
  className: "hero-card"
}, /*#__PURE__*/React.createElement("h3", null, "Quer falar", /*#__PURE__*/React.createElement("br", null), "direto com a gente?"), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("button", {
  className: "cta-circle gold"
}, "WhatsApp", /*#__PURE__*/React.createElement("span", {
  className: "arrow"
}, "\u2192"))))));
const Statement = () => /*#__PURE__*/React.createElement("section", {
  className: "statement"
}, /*#__PURE__*/React.createElement("p", null, "Conectamos fam\xEDlias de ", /*#__PURE__*/React.createElement("em", null, "Manaus"), " a estofados, camas e colch\xF5es feitos com ", /*#__PURE__*/React.createElement("em", null, "mat\xE9ria-prima"), " de qualidade \u2014 pra durarem", /*#__PURE__*/React.createElement("em", null, " d\xE9cadas"), " no seu lar."));
const Showcase = () => /*#__PURE__*/React.createElement("section", {
  className: "showcase-section",
  id: "empresa"
}, /*#__PURE__*/React.createElement("div", {
  className: "showcase-illustration"
}, /*#__PURE__*/React.createElement("img", {
  className: "frame-img",
  src: "imagens/sofa3.png",
  alt: "Destaque sof\xE1 AGA M\xF3veis"
})), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", null, "Sob medida"), ", montado em ", /*#__PURE__*/React.createElement("em", null, "Manaus")), /*#__PURE__*/React.createElement("p", {
  className: "lede"
}, "Toda pe\xE7a que sai da nossa f\xE1brica \xE9 pensada pro clima e o estilo de vida amaz\xF4nico: tecidos resistentes, espumas de alta densidade e acabamento que aguenta o tempo e o uso da fam\xEDlia toda."), /*#__PURE__*/React.createElement("button", {
  className: "btn-outline",
  onClick: () => document.getElementById('produtos').scrollIntoView({
    behavior: 'smooth'
  })
}, "Veja todos os estofados ", /*#__PURE__*/React.createElement("span", null, "\u2192")));
const AboutSplit = () => /*#__PURE__*/React.createElement("section", {
  className: "about-split"
}, /*#__PURE__*/React.createElement("div", {
  className: "about-text"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "/ Sobre a AGA"), /*#__PURE__*/React.createElement("h2", null, "H\xE1 anos transformando lares amaz\xF4nicos com ", /*#__PURE__*/React.createElement("em", null, "m\xF3veis"), " que unem qualidade, tecnologia e ", /*#__PURE__*/React.createElement("em", null, "design exclusivo"), "."), /*#__PURE__*/React.createElement("p", null, "Na AGA M\xF3veis, nosso compromisso vai al\xE9m de vender um sof\xE1 ou uma cama. Trabalhamos para que cada pe\xE7a seja a melhor escolha do nosso cliente \u2014 seja na sala de estar, no quarto do casal ou na varanda."), /*#__PURE__*/React.createElement("p", null, "Nossa equipe est\xE1 pronta para ajudar voc\xEA a encontrar as melhores op\xE7\xF5es que combinam com seu estilo e necessidade. Transforme seu lar com m\xF3veis de alta qualidade e design exclusivo."), /*#__PURE__*/React.createElement("div", {
  className: "about-actions"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("button", {
  className: "btn-pill solid"
}, "Chamar no WhatsApp \u2192")), /*#__PURE__*/React.createElement("button", {
  className: "btn-pill",
  onClick: () => document.getElementById('produtos').scrollIntoView({
    behavior: 'smooth'
  })
}, "Ver cat\xE1logo"))), /*#__PURE__*/React.createElement("div", {
  className: "about-img"
}, /*#__PURE__*/React.createElement("img", {
  src: "imagens/produtos/familia-sofa.jpg",
  alt: "Fam\xEDlia feliz sorrindo junta no sof\xE1 em sala de estar",
  loading: "lazy"
})));
const Stats = () => /*#__PURE__*/React.createElement("section", {
  className: "stats"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "/ Mais que uma f\xE1brica de m\xF3veis"), /*#__PURE__*/React.createElement("div", {
  className: "stats-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "+", /*#__PURE__*/React.createElement("em", null, "10")), /*#__PURE__*/React.createElement("div", {
  className: "caption"
}, "Anos atendendo fam\xEDlias de Manaus")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, /*#__PURE__*/React.createElement("em", null, "4")), /*#__PURE__*/React.createElement("div", {
  className: "caption"
}, "Linhas: Camas Box, Colch\xF5es, Estofados e Poltronas")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "100", /*#__PURE__*/React.createElement("em", null, "%")), /*#__PURE__*/React.createElement("div", {
  className: "caption"
}, "Produ\xE7\xE3o pr\xF3pria \xB7 acabamento sob medida"))));
const Pillars = () => {
  const pillars = [{
    glyph: '◆',
    title: 'Missão',
    body: 'Ser referência em qualidade e tecnologia e a melhor escolha de nossos clientes em estofados e camas.',
    num: '01'
  }, {
    glyph: '◇',
    title: 'Visão',
    body: 'Ser referência em qualidade e tecnologia e a melhor escolha de nossos clientes em estofados e camas.',
    num: '02'
  }, {
    glyph: '◈',
    title: 'Valores',
    body: 'Honestidade. Zelamos pelos bens da empresa e dos colegas de trabalho.',
    num: '03'
  }, {
    glyph: '✦',
    title: 'Compromisso',
    body: 'Cumprimos os padrões e normas da empresa e os acordos com colegas e clientes.',
    num: '04'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "pillars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "/ O que nos move"), /*#__PURE__*/React.createElement("h2", null, "Quatro ", /*#__PURE__*/React.createElement("em", null, "princ\xEDpios"), " que sustentam tudo que sai da ", /*#__PURE__*/React.createElement("em", null, "nossa f\xE1brica"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pillars-grid"
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "pillar",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "glyph"
  }, p.glyph), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.body), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, p.num, " / 04")))));
};
const Categories = () => {
  const products = [{
    name: 'Sofá de Canto Cordoba Azul Marinho',
    cat: 'Estofados',
    meta: 'canto · azul marinho',
    desc: 'Sofá de canto em veludo azul marinho. Estrutura em madeira maciça e espuma de alta densidade para uso diário.',
    img: 'imagens/produtos/cordoba-azul-marinho.jpg',
    link: 'https://www.bemol.com.br/sofa-de-canto-aga-cordoba-azul-marinho-1085023/p'
  }, {
    name: 'Sofá Curvo 4 Lugares Xangai Vinho',
    cat: 'Estofados',
    meta: 'curvo · 4 lugares · vinho',
    desc: 'Linha premium da AGA: sofá curvo de 4 lugares no clássico vinho — a mesma cor que dá identidade à marca.',
    img: 'imagens/produtos/xangai-vinho.jpg',
    link: 'https://www.bemol.com.br/sofa-curvo-4-lugares-aga-xangai-vinho--mp-/p'
  }, {
    name: 'Recamier Captonê com Braço Salmão',
    cat: 'Estofados',
    meta: 'recamier · captonê · salmão',
    desc: 'Recamier captonê com braço, em tom salmão. Peça decorativa para hall, quarto ou cantos de leitura.',
    img: 'imagens/produtos/recamier-captone-salmao.jpg',
    link: 'https://www.bemol.com.br/sofa-recamier-aga-captone-com-braco-inca-salmao-mp/p'
  }, {
    name: 'Sofá de Canto Arizona Verde Militar',
    cat: 'Estofados',
    meta: 'canto modular · 1×2×2 · verde militar',
    desc: 'Configuração modular Arizona (1×2×2 lugares) em verde militar. Acomoda família inteira com chaise integrada.',
    img: 'imagens/produtos/arizona-verde-militar.jpg',
    link: 'https://www.bemol.com.br/sofa-arizona-de-aga-canto-verde-militar-1x2x2--mp-/p'
  }, {
    name: 'Sofá Retrátil Washington Castor',
    cat: 'Estofados',
    meta: 'retrátil · reclinável · carregador por indução',
    desc: '3 lugares retrátil e reclinável com carregador por indução integrado no braço. Cor castor, acabamento premium.',
    img: 'imagens/produtos/washington-castor.jpg',
    link: 'https://www.bemol.com.br/sofa-3-lugares-aga-washington-retratil-e-reclinavel-com-carregador-por-inducao-castor--mp-/p'
  }, {
    name: 'Sofá Retrátil Florida Tabaco',
    cat: 'Estofados',
    meta: 'retrátil · reclinável · USB · tabaco',
    desc: 'Retrátil e reclinável com entrada USB no braço. Acabamento tabaco que combina com salas em tons neutros.',
    img: 'imagens/produtos/florida-tabaco.jpg',
    link: 'https://www.bemol.com.br/sofa-3-lugares-aga-florida-retratil-e-reclinavel-com-carregador-usb-tabaco--mp-/p'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "categories",
    id: "produtos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cat-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Nossa linha de ", /*#__PURE__*/React.createElement("em", null, "estofados")), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, "Linha de estofados dispon\xEDvel tamb\xE9m na Bemol \xB7 cat\xE1logo atualizado mensalmente.")), /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, products.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "cat-card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `img ${p.img ? 'has-photo' : ''}`
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, p.cat.toLowerCase()), /*#__PURE__*/React.createElement("span", null, "AGA \xB7 ", String(i + 1).padStart(2, '0')))), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, p.meta), /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("p", null, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, p.link ? /*#__PURE__*/React.createElement("a", {
    href: p.link,
    target: "_blank",
    rel: "noreferrer",
    className: "link-bemol"
  }, "Ver na Bemol ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192")) : /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, "sob consulta"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5592981869534",
    target: "_blank",
    rel: "noreferrer"
  }, "Falar no Zap ", /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192"))))))));
};
const Process = () => {
  const steps = [{
    n: '1',
    name: 'Conversa'
  }, {
    n: '2',
    name: 'Escolha do tecido & medidas'
  }, {
    n: '3',
    name: 'Orçamento sem compromisso'
  }, {
    n: '4',
    name: 'Produção na fábrica'
  }, {
    n: '5',
    name: 'Entrega & montagem'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "process",
    id: "processo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "process-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "/ Nosso Processo"), /*#__PURE__*/React.createElement("h2", null, "Cinco passos do ", /*#__PURE__*/React.createElement("em", null, "primeiro contato"), " at\xE9 o m\xF3vel ", /*#__PURE__*/React.createElement("em", null, "na sua sala"), "."), /*#__PURE__*/React.createElement("p", null, "Trabalhamos com produ\xE7\xE3o pr\xF3pria. Voc\xEA fala diretamente com quem vai fazer o seu m\xF3vel, escolhe tecido, cor e medida \u2014 e a gente cuida do resto.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-num"
  }, s.n), /*#__PURE__*/React.createElement("h4", null, s.name), /*#__PURE__*/React.createElement("span", {
    className: "step-arrow"
  }, "\u2192"))))));
};
const Testimonial = () => {
  const items = [{
    quote: "Comprei o sofá de canto modular há três anos e está intacto. Atendimento honesto e produto que dura.",
    author: "Marina · Compensa"
  }, {
    quote: "Conheci a AGA por indicação e hoje toda a sala foi feita por eles. Recomendo de olhos fechados.",
    author: "Rafael · Adrianópolis"
  }, {
    quote: "A cama box que fizeram pra gente é mais firme que qualquer uma de loja de shopping. Recomendo!",
    author: "Família Costa · Ponta Negra"
  }];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "testimonial"
  }, /*#__PURE__*/React.createElement("p", {
    className: "quote"
  }, /*#__PURE__*/React.createElement("em", null, "\""), items[i].quote, /*#__PURE__*/React.createElement("em", null, "\"")), /*#__PURE__*/React.createElement("div", {
    className: "author"
  }, "\u2014 ", items[i].author), /*#__PURE__*/React.createElement("div", {
    className: "t-nav"
  }, items.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    className: i === idx ? 'active' : '',
    onClick: () => setI(idx),
    "aria-label": `Depoimento ${idx + 1}`
  }))));
};
const Contact = () => /*#__PURE__*/React.createElement("section", {
  className: "contact",
  id: "contato"
}, /*#__PURE__*/React.createElement("h2", null, "Vamos falar sobre o ", /*#__PURE__*/React.createElement("em", null, "seu pr\xF3ximo m\xF3vel"), "?"), /*#__PURE__*/React.createElement("p", null, "Transforme seu lar com m\xF3veis de alta qualidade e design exclusivo. Nossa equipe est\xE1 pronta para ajudar voc\xEA a encontrar as melhores op\xE7\xF5es que combinam com seu estilo e necessidade."), /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, /*#__PURE__*/React.createElement("button", {
  className: "contact-cta"
}, /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "white",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.5 1.4h.01c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.31-8.4ZM12 21.5h-.01a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.86 1 1-3.76-.23-.39A9.7 9.7 0 0 1 2.3 11.8 9.7 9.7 0 0 1 12 2.1c2.6 0 5 1 6.8 2.8a9.6 9.6 0 0 1 2.8 6.8 9.7 9.7 0 0 1-9.6 9.8Zm5.4-7.3c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.15-.7 0c-.3-.15-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.13-.65.13-.13.3-.35.45-.5s.2-.3.3-.5c.1-.2 0-.4-.1-.55-.1-.15-.7-1.7-1-2.35-.27-.6-.53-.5-.7-.5h-.6c-.2 0-.5.07-.8.4-.3.3-1 1-1 2.45 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.5.7.3 1.25.5 1.7.65.7.22 1.35.2 1.85.12.55-.08 1.8-.73 2.05-1.45.25-.7.25-1.3.17-1.45-.08-.12-.27-.2-.57-.35Z"
})), "Chamar no WhatsApp")), /*#__PURE__*/React.createElement("div", {
  className: "contact-meta"
}, /*#__PURE__*/React.createElement("div", {
  className: "item"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "/ Endere\xE7o"), /*#__PURE__*/React.createElement("div", {
  className: "value"
}, "Av. do Turismo, K7, n\xBA 8090", /*#__PURE__*/React.createElement("br", null), "Bairro Tarum\xE3 \xB7 Manaus / AM", /*#__PURE__*/React.createElement("br", null), "CEP 69041-010")), /*#__PURE__*/React.createElement("div", {
  className: "item"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "/ Telefone"), /*#__PURE__*/React.createElement("div", {
  className: "value"
}, "(92) 98186-9534")), /*#__PURE__*/React.createElement("div", {
  className: "item"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "/ Hor\xE1rio"), /*#__PURE__*/React.createElement("div", {
  className: "value"
}, "Seg\u2013Sex \xB7 8h \xE0s 18h", /*#__PURE__*/React.createElement("br", null), "S\xE1b \xB7 8h \xE0s 13h"))));
const Footer = () => /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
  className: "foot-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "foot-brand"
}, /*#__PURE__*/React.createElement("div", {
  className: "lg"
}, /*#__PURE__*/React.createElement("em", null, "aga"), " m\xF3veis"), /*#__PURE__*/React.createElement("p", null, "Estofados, camas e poltronas sob medida \u2014 produzidos em Manaus desde sempre, pensados para o clima e o estilo amaz\xF4nico.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Navegar"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#inicio"
}, "In\xEDcio")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#empresa"
}, "Empresa")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#produtos"
}, "Produtos")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#processo"
}, "Processo")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#contato"
}, "Contato")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Produtos"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#produtos"
}, "Estofados")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#produtos"
}, "Camas Box")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#produtos"
}, "Colch\xF5es")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#produtos"
}, "Poltronas")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Contato"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "(92) 98186-9534"), /*#__PURE__*/React.createElement("li", null, "Av. do Turismo K7, 8090"), /*#__PURE__*/React.createElement("li", null, "Tarum\xE3 \xB7 Manaus / AM"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "https://wa.me/5592981869534",
  target: "_blank",
  rel: "noreferrer"
}, "WhatsApp \u2192"))))), /*#__PURE__*/React.createElement("div", {
  className: "foot-bottom"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 AGA M\xF3veis \xB7 2026 \xB7 Todos os direitos reservados"), /*#__PURE__*/React.createElement("div", {
  className: "foot-legal"
}, /*#__PURE__*/React.createElement("a", {
  href: "legal/politica-privacidade.html"
}, "Privacidade"), /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true"
}, "\xB7"), /*#__PURE__*/React.createElement("a", {
  href: "legal/termos-uso.html"
}, "Termos de Uso")), /*#__PURE__*/React.createElement("span", null, "Manaus / Amazonas \xB7 Brasil")));

// Banner LGPD — informa uso de armazenamento local e linka para política de privacidade.
// Sem cookies próprios; preferência salva em localStorage (chave aga_lgpd_consent).
const CookieConsent = () => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem('aga_lgpd_consent');
      if (!saved) {
        setVisible(true);
        return;
      }
      // Defesa em profundidade: se a chave foi adulterada, tratar como ausente.
      const parsed = JSON.parse(saved);
      const ok = parsed && typeof parsed.decision === 'string' && (parsed.decision === 'accepted' || parsed.decision === 'dismissed');
      if (!ok) setVisible(true);
    } catch (e) {
      // localStorage indisponível ou JSON inválido — mostrar banner.
      setVisible(true);
    }
  }, []);
  const dismiss = decision => {
    try {
      window.localStorage.setItem('aga_lgpd_consent', JSON.stringify({
        decision,
        date: new Date().toISOString()
      }));
    } catch (e) {/* sem persistência neste navegador */}
    setVisible(false);
  };
  if (!visible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "lgpd-banner",
    role: "dialog",
    "aria-live": "polite",
    "aria-label": "Aviso de privacidade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lgpd-text"
  }, /*#__PURE__*/React.createElement("strong", null, "Aviso de privacidade."), " Este site \xE9 institucional e n\xE3o coleta dados pessoais por formul\xE1rio. Usamos apenas armazenamento local do seu navegador para lembrar esta prefer\xEAncia. Saiba mais na ", /*#__PURE__*/React.createElement("a", {
    href: "legal/politica-privacidade.html"
  }, "Pol\xEDtica de Privacidade"), "."), /*#__PURE__*/React.createElement("div", {
    className: "lgpd-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "lgpd-link",
    href: "legal/politica-privacidade.html"
  }, "Saber mais"), /*#__PURE__*/React.createElement("button", {
    className: "lgpd-accept",
    type: "button",
    onClick: () => dismiss('accepted')
  }, "Entendi")));
};
Object.assign(window, {
  TopBar,
  Nav,
  Hero,
  Statement,
  Showcase,
  AboutSplit,
  Stats,
  Pillars,
  Categories,
  Process,
  Testimonial,
  Contact,
  Footer,
  CookieConsent
});
