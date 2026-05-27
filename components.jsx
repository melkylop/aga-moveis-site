// Decorative SVG motifs — simple wavy lines, sparks, leaves
// Kept minimal and stylized; not attempting realistic illustrations.

const Spark = ({ size = 18, color = "currentColor", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" fill={color} />
  </svg>
);

const Wave = ({ w = 80, color = "currentColor", style }) => (
  <svg width={w} height="16" viewBox="0 0 80 16" fill="none" style={style}>
    <path d="M2 8 Q12 0, 22 8 T42 8 T62 8 T78 8" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>
);

const Dash = ({ color = "currentColor", style }) => (
  <svg width="36" height="6" viewBox="0 0 36 6" style={style}>
    <line x1="2" y1="3" x2="34" y2="3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 6" />
  </svg>
);

const Circles = ({ color = "currentColor", style }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" style={style}>
    <circle cx="8" cy="20" r="2.4" fill={color} />
    <circle cx="20" cy="10" r="1.8" fill={color} />
    <circle cx="32" cy="22" r="2.8" fill={color} />
    <circle cx="22" cy="32" r="1.6" fill={color} />
  </svg>
);

// Decorative scribble cluster — used behind hero sofa. Simple strokes only.
const ScribbleCluster = ({ color = "rgba(247,230,226,0.45)", style }) => (
  <svg viewBox="0 0 600 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }} fill="none">
    <g stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* left scribbles */}
      <path d="M40 220 q20 -20 0 -40 q-20 -20 0 -40" />
      <path d="M70 290 q24 -10 0 -30" />
      <line x1="20" y1="160" x2="80" y2="160" strokeDasharray="3 8" />
      <line x1="30" y1="350" x2="90" y2="340" strokeDasharray="3 8" />
      {/* top scribbles */}
      <path d="M180 60 q10 -20 30 -10 q20 10 10 30" />
      <path d="M260 40 q14 4 16 22" />
      <path d="M330 30 q-8 14 6 24 q14 10 4 22" />
      {/* right scribbles */}
      <path d="M520 180 q20 -8 0 -28 q-20 -20 0 -36" />
      <path d="M560 260 q-16 -2 -14 18" />
      {/* dots */}
      <circle cx="120" cy="120" r="3" fill={color} stroke="none" />
      <circle cx="540" cy="100" r="3" fill={color} stroke="none" />
      <circle cx="100" cy="400" r="3" fill={color} stroke="none" />
      <circle cx="560" cy="380" r="3" fill={color} stroke="none" />
      {/* sparkles */}
      <path d="M150 380 l4 0 M152 378 l0 4" />
      <path d="M480 410 l6 0 M483 407 l0 6" />
      {/* small leaves */}
      <path d="M420 80 q14 -10 30 0 q-14 10 -30 0 Z" />
      <path d="M90 80 q14 -10 30 0 q-14 10 -30 0 Z" />
    </g>
  </svg>
);

const TopBar = () => (
  <div className="top-bar">
    <div className="ticker">
      <span>Estofados sob medida</span>
      <span>·</span>
      <span>Camas Box</span>
      <span>·</span>
      <span>Colchões</span>
      <span>·</span>
      <span>Poltronas</span>
      <span>·</span>
      <span>Entrega em Manaus / AM</span>
    </div>
    <a className="zap" href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
      <span className="dot" />
      WhatsApp
    </a>
  </div>
);

const Nav = ({ activeSection, onNav }) => (
  <nav className="nav">
    <a href="#top" className="nav-logo" onClick={(e) => { e.preventDefault(); onNav('top'); }}>
      <span className="mark"><em>aga</em> móveis</span>
      <span className="sub">est. Manaus</span>
    </a>
    <div className="nav-links">
      <a href="#inicio" className={activeSection==='inicio'?'active':''} onClick={(e)=>{e.preventDefault(); onNav('inicio');}}>Início</a>
      <a href="#empresa" className={activeSection==='empresa'?'active':''} onClick={(e)=>{e.preventDefault(); onNav('empresa');}}>Empresa</a>
      <a href="#produtos" className={activeSection==='produtos'?'active':''} onClick={(e)=>{e.preventDefault(); onNav('produtos');}}>Produtos</a>
      <a href="#processo" className={activeSection==='processo'?'active':''} onClick={(e)=>{e.preventDefault(); onNav('processo');}}>Processo</a>
      <a href="#contato" className={activeSection==='contato'?'active':''} onClick={(e)=>{e.preventDefault(); onNav('contato');}}>Contato</a>
    </div>
    <a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
      <button className="nav-cta">Falar com a AGA →</button>
    </a>
  </nav>
);

const SofaPlaceholder = ({ label = "sofá retrátil", code = "AGA-01" }) => (
  <div className="sofa-img" aria-label={label}>
    <span>{label}</span>
    <span>{code}</span>
  </div>
);

const Hero = () => (
  <section className="hero" id="inicio">
    <div className="hero-eyebrow">
      <span className="pill">AGA Móveis · Manaus / AM</span>
      <span>desde sempre, conforto pra durar</span>
    </div>
    <h1>
      Por que se contentar <em>com qualquer estofado</em> se o
      <br />
      seu lar merece um <em>sofá feito pra durar</em> com
      <br />
      <span className="underline">qualidade</span>, <em>tecnologia</em> e <em>design</em>?
    </h1>
    <div className="hero-cta-row">
      <button className="btn-ghost" onClick={() => document.getElementById('produtos').scrollIntoView({behavior:'smooth'})}>
        Conheça a linha <span className="arrow">→</span>
      </button>
    </div>

    <div className="hero-featured">
      <div className="hero-card">
        <h3>Procurando um<br/>sofá novo?</h3>
        <a href="#produtos" onClick={(e)=>{e.preventDefault(); document.getElementById('produtos').scrollIntoView({behavior:'smooth'});}}>
          <button className="cta-circle blush">
            Ver Produtos
            <span className="arrow">→</span>
          </button>
        </a>
      </div>

      <div className="sofa-stage">
        <ScribbleCluster />
        <img
          className="sofa-img-real"
          src="imagens/aga1.png"
          alt="Sofá retrátil 3 lugares AGA Móveis"
        />
      </div>

      <div className="hero-card">
        <h3>Quer falar<br/>direto com a gente?</h3>
        <a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
          <button className="cta-circle gold">
            WhatsApp
            <span className="arrow">→</span>
          </button>
        </a>
      </div>
    </div>
  </section>
);

const Statement = () => (
  <section className="statement">
    <p>
      Conectamos famílias de <em>Manaus</em> a estofados, camas e
      colchões feitos com <em>matéria-prima</em> de qualidade — pra durarem
      <em> décadas</em> no seu lar.
    </p>
  </section>
);

const Showcase = () => (
  <section className="showcase-section" id="empresa">
    <div className="showcase-illustration">
      <img
        className="frame-img"
        src="imagens/sofa3.png"
        alt="Destaque sofá AGA Móveis"
      />
    </div>
    <h2><em>Sob medida</em>, montado em <em>Manaus</em></h2>
    <p className="lede">
      Toda peça que sai da nossa fábrica é pensada pro clima e o estilo de vida amazônico:
      tecidos resistentes, espumas de alta densidade e acabamento que aguenta o tempo
      e o uso da família toda.
    </p>
    <button className="btn-outline" onClick={() => document.getElementById('produtos').scrollIntoView({behavior:'smooth'})}>
      Veja todos os estofados <span>→</span>
    </button>
  </section>
);

const AboutSplit = () => (
  <section className="about-split">
    <div className="about-text">
      <div className="label">/ Sobre a AGA</div>
      <h2>
        Há anos transformando lares amazônicos com <em>móveis</em> que
        unem qualidade, tecnologia e <em>design exclusivo</em>.
      </h2>
      <p>
        Na AGA Móveis, nosso compromisso vai além de vender um sofá ou uma cama.
        Trabalhamos para que cada peça seja a melhor escolha do nosso cliente —
        seja na sala de estar, no quarto do casal ou na varanda.
      </p>
      <p>
        Nossa equipe está pronta para ajudar você a encontrar as melhores opções
        que combinam com seu estilo e necessidade. Transforme seu lar com
        móveis de alta qualidade e design exclusivo.
      </p>
      <div className="about-actions">
        <a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
          <button className="btn-pill solid">Chamar no WhatsApp →</button>
        </a>
        <button className="btn-pill" onClick={() => document.getElementById('produtos').scrollIntoView({behavior:'smooth'})}>
          Ver catálogo
        </button>
      </div>
    </div>
    <div className="about-img">
      <img
        src="imagens/produtos/familia-sofa.jpg"
        alt="Família feliz sorrindo junta no sofá em sala de estar"
        loading="lazy"
      />
    </div>
  </section>
);

const Stats = () => (
  <section className="stats">
    <div className="eyebrow">/ Mais que uma fábrica de móveis</div>
    <div className="stats-grid">
      <div className="stat">
        <div className="num">+<em>10</em></div>
        <div className="caption">Anos atendendo famílias de Manaus</div>
      </div>
      <div className="stat">
        <div className="num"><em>4</em></div>
        <div className="caption">Linhas: Camas Box, Colchões, Estofados e Poltronas</div>
      </div>
      <div className="stat">
        <div className="num">100<em>%</em></div>
        <div className="caption">Produção própria · acabamento sob medida</div>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const pillars = [
    { glyph: '◆', title: 'Missão', body: 'Ser referência em qualidade e tecnologia e a melhor escolha de nossos clientes em estofados e camas.', num: '01' },
    { glyph: '◇', title: 'Visão', body: 'Ser referência em qualidade e tecnologia e a melhor escolha de nossos clientes em estofados e camas.', num: '02' },
    { glyph: '◈', title: 'Valores', body: 'Honestidade. Zelamos pelos bens da empresa e dos colegas de trabalho.', num: '03' },
    { glyph: '✦', title: 'Compromisso', body: 'Cumprimos os padrões e normas da empresa e os acordos com colegas e clientes.', num: '04' },
  ];
  return (
    <section className="pillars">
      <div className="pillars-header">
        <div className="eyebrow">/ O que nos move</div>
        <h2>
          Quatro <em>princípios</em> que sustentam tudo
          que sai da <em>nossa fábrica</em>.
        </h2>
      </div>
      <div className="pillars-grid">
        {pillars.map((p, i) => (
          <div className="pillar" key={i}>
            <div className="glyph">{p.glyph}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <div className="num">{p.num} / 04</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const products = [
    {
      name: 'Sofá de Canto Cordoba Azul Marinho',
      cat: 'Estofados',
      meta: 'canto · azul marinho',
      desc: 'Sofá de canto em veludo azul marinho. Estrutura em madeira maciça e espuma de alta densidade para uso diário.',
      img: 'imagens/produtos/cordoba-azul-marinho.jpg',
      link: 'https://www.bemol.com.br/sofa-de-canto-aga-cordoba-azul-marinho-1085023/p',
    },
    {
      name: 'Sofá Curvo 4 Lugares Xangai Vinho',
      cat: 'Estofados',
      meta: 'curvo · 4 lugares · vinho',
      desc: 'Linha premium da AGA: sofá curvo de 4 lugares no clássico vinho — a mesma cor que dá identidade à marca.',
      img: 'imagens/produtos/xangai-vinho.jpg',
      link: 'https://www.bemol.com.br/sofa-curvo-4-lugares-aga-xangai-vinho--mp-/p',
    },
    {
      name: 'Recamier Captonê com Braço Salmão',
      cat: 'Estofados',
      meta: 'recamier · captonê · salmão',
      desc: 'Recamier captonê com braço, em tom salmão. Peça decorativa para hall, quarto ou cantos de leitura.',
      img: 'imagens/produtos/recamier-captone-salmao.jpg',
      link: 'https://www.bemol.com.br/sofa-recamier-aga-captone-com-braco-inca-salmao-mp/p',
    },
    {
      name: 'Sofá de Canto Arizona Verde Militar',
      cat: 'Estofados',
      meta: 'canto modular · 1×2×2 · verde militar',
      desc: 'Configuração modular Arizona (1×2×2 lugares) em verde militar. Acomoda família inteira com chaise integrada.',
      img: 'imagens/produtos/arizona-verde-militar.jpg',
      link: 'https://www.bemol.com.br/sofa-arizona-de-aga-canto-verde-militar-1x2x2--mp-/p',
    },
    {
      name: 'Sofá Retrátil Washington Castor',
      cat: 'Estofados',
      meta: 'retrátil · reclinável · carregador por indução',
      desc: '3 lugares retrátil e reclinável com carregador por indução integrado no braço. Cor castor, acabamento premium.',
      img: 'imagens/produtos/washington-castor.jpg',
      link: 'https://www.bemol.com.br/sofa-3-lugares-aga-washington-retratil-e-reclinavel-com-carregador-por-inducao-castor--mp-/p',
    },
    {
      name: 'Sofá Retrátil Florida Tabaco',
      cat: 'Estofados',
      meta: 'retrátil · reclinável · USB · tabaco',
      desc: 'Retrátil e reclinável com entrada USB no braço. Acabamento tabaco que combina com salas em tons neutros.',
      img: 'imagens/produtos/florida-tabaco.jpg',
      link: 'https://www.bemol.com.br/sofa-3-lugares-aga-florida-retratil-e-reclinavel-com-carregador-usb-tabaco--mp-/p',
    },
  ];

  return (
    <section className="categories" id="produtos">
      <div className="cat-head">
        <h2>Nossa linha de <em>estofados</em></h2>
        <div className="right">Linha de estofados disponível também na Bemol · catálogo atualizado mensalmente.</div>
      </div>
      <div className="cat-grid">
        {products.map((p, i) => (
          <div className="cat-card" key={i}>
            <div className={`img ${p.img ? 'has-photo' : ''}`}>
              {p.img ? (
                <img src={p.img} alt={p.name} loading="lazy" />
              ) : (
                <React.Fragment>
                  <span>{p.cat.toLowerCase()}</span>
                  <span>AGA · {String(i+1).padStart(2,'0')}</span>
                </React.Fragment>
              )}
            </div>
            <div className="body">
              <div className="meta">{p.meta}</div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
              <div className="row">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="link-bemol">
                    Ver na Bemol <span className="arrow">→</span>
                  </a>
                ) : (
                  <span className="price">sob consulta</span>
                )}
                <a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
                  Falar no Zap <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { n: '1', name: 'Conversa' },
    { n: '2', name: 'Escolha do tecido & medidas' },
    { n: '3', name: 'Orçamento sem compromisso' },
    { n: '4', name: 'Produção na fábrica' },
    { n: '5', name: 'Entrega & montagem' },
  ];
  return (
    <section className="process" id="processo">
      <div className="process-inner">
        <div className="process-left">
          <div className="eyebrow">/ Nosso Processo</div>
          <h2>Cinco passos do <em>primeiro contato</em> até o móvel <em>na sua sala</em>.</h2>
          <p>Trabalhamos com produção própria. Você fala diretamente com quem vai fazer o seu móvel, escolhe tecido, cor e medida — e a gente cuida do resto.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.n}</div>
              <h4>{s.name}</h4>
              <span className="step-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  const items = [
    { quote: "Comprei o sofá de canto modular há três anos e está intacto. Atendimento honesto e produto que dura.", author: "Marina · Compensa" },
    { quote: "Conheci a AGA por indicação e hoje toda a sala foi feita por eles. Recomendo de olhos fechados.", author: "Rafael · Adrianópolis" },
    { quote: "A cama box que fizeram pra gente é mais firme que qualquer uma de loja de shopping. Recomendo!", author: "Família Costa · Ponta Negra" },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(prev => (prev+1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="testimonial">
      <p className="quote">
        <em>"</em>{items[i].quote}<em>"</em>
      </p>
      <div className="author">— {items[i].author}</div>
      <div className="t-nav">
        {items.map((_, idx) => (
          <button key={idx} className={i===idx?'active':''} onClick={()=>setI(idx)} aria-label={`Depoimento ${idx+1}`} />
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="contact" id="contato">
    <h2>Vamos falar sobre o <em>seu próximo móvel</em>?</h2>
    <p>
      Transforme seu lar com móveis de alta qualidade e design exclusivo.
      Nossa equipe está pronta para ajudar você a encontrar as melhores opções
      que combinam com seu estilo e necessidade.
    </p>
    <a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">
      <button className="contact-cta">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.5 1.4h.01c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.31-8.4ZM12 21.5h-.01a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.86 1 1-3.76-.23-.39A9.7 9.7 0 0 1 2.3 11.8 9.7 9.7 0 0 1 12 2.1c2.6 0 5 1 6.8 2.8a9.6 9.6 0 0 1 2.8 6.8 9.7 9.7 0 0 1-9.6 9.8Zm5.4-7.3c-.3-.15-1.8-.9-2.1-1s-.5-.15-.7.15-.8 1-1 1.2-.4.15-.7 0c-.3-.15-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.13-.65.13-.13.3-.35.45-.5s.2-.3.3-.5c.1-.2 0-.4-.1-.55-.1-.15-.7-1.7-1-2.35-.27-.6-.53-.5-.7-.5h-.6c-.2 0-.5.07-.8.4-.3.3-1 1-1 2.45 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.2 5.1 4.5.7.3 1.25.5 1.7.65.7.22 1.35.2 1.85.12.55-.08 1.8-.73 2.05-1.45.25-.7.25-1.3.17-1.45-.08-.12-.27-.2-.57-.35Z"/>
        </svg>
        Chamar no WhatsApp
      </button>
    </a>
    <div className="contact-meta">
      <div className="item">
        <div className="label">/ Endereço</div>
        <div className="value">Av. do Turismo, K7, nº 8090<br/>Bairro Tarumã · Manaus / AM<br/>CEP 69041-010</div>
      </div>
      <div className="item">
        <div className="label">/ Telefone</div>
        <div className="value">(92) 98186-9534</div>
      </div>
      <div className="item">
        <div className="label">/ Horário</div>
        <div className="value">Seg–Sex · 8h às 18h<br/>Sáb · 8h às 13h</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="foot-grid">
      <div className="foot-brand">
        <div className="lg"><em>aga</em> móveis</div>
        <p>Estofados, camas e poltronas sob medida — produzidos em Manaus desde sempre, pensados para o clima e o estilo amazônico.</p>
      </div>
      <div>
        <h5>Navegar</h5>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#empresa">Empresa</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#processo">Processo</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
      <div>
        <h5>Produtos</h5>
        <ul>
          <li><a href="#produtos">Estofados</a></li>
          <li><a href="#produtos">Camas Box</a></li>
          <li><a href="#produtos">Colchões</a></li>
          <li><a href="#produtos">Poltronas</a></li>
        </ul>
      </div>
      <div>
        <h5>Contato</h5>
        <ul>
          <li>(92) 98186-9534</li>
          <li>Av. do Turismo K7, 8090</li>
          <li>Tarumã · Manaus / AM</li>
          <li><a href="https://wa.me/5592981869534" target="_blank" rel="noreferrer">WhatsApp →</a></li>
        </ul>
      </div>
    </div>
    <div className="foot-bottom">
      <span>© AGA Móveis · 2026 · Todos os direitos reservados</span>
      <div className="foot-legal">
        <a href="legal/politica-privacidade.html">Privacidade</a>
        <span aria-hidden="true">·</span>
        <a href="legal/termos-uso.html">Termos de Uso</a>
      </div>
      <span>Manaus / Amazonas · Brasil</span>
    </div>
  </footer>
);

// Banner LGPD — informa uso de armazenamento local e linka para política de privacidade.
// Sem cookies próprios; preferência salva em localStorage (chave aga_lgpd_consent).
const CookieConsent = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem('aga_lgpd_consent');
      if (!saved) { setVisible(true); return; }
      // Defesa em profundidade: se a chave foi adulterada, tratar como ausente.
      const parsed = JSON.parse(saved);
      const ok = parsed && typeof parsed.decision === 'string'
        && (parsed.decision === 'accepted' || parsed.decision === 'dismissed');
      if (!ok) setVisible(true);
    } catch (e) {
      // localStorage indisponível ou JSON inválido — mostrar banner.
      setVisible(true);
    }
  }, []);

  const dismiss = (decision) => {
    try {
      window.localStorage.setItem('aga_lgpd_consent', JSON.stringify({
        decision,
        date: new Date().toISOString(),
      }));
    } catch (e) { /* sem persistência neste navegador */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="lgpd-banner" role="dialog" aria-live="polite" aria-label="Aviso de privacidade">
      <div className="lgpd-text">
        <strong>Aviso de privacidade.</strong> Este site é institucional e não coleta dados pessoais por formulário.
        Usamos apenas armazenamento local do seu navegador para lembrar esta preferência.
        Saiba mais na <a href="legal/politica-privacidade.html">Política de Privacidade</a>.
      </div>
      <div className="lgpd-actions">
        <a className="lgpd-link" href="legal/politica-privacidade.html">Saber mais</a>
        <button className="lgpd-accept" type="button" onClick={() => dismiss('accepted')}>Entendi</button>
      </div>
    </div>
  );
};

Object.assign(window, {
  TopBar, Nav, Hero, Statement, Showcase, AboutSplit,
  Stats, Pillars, Categories, Process, Testimonial, Contact, Footer,
  CookieConsent,
});
