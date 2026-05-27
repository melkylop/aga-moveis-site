// AGA Móveis — main app

function App() {
  const [active, setActive] = React.useState('inicio');
  const onNav = id => {
    if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActive('inicio');
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
    setActive(id);
  };
  React.useEffect(() => {
    const sections = ['inicio', 'empresa', 'produtos', 'processo', 'contato'];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: '-40% 0px -55% 0px'
    });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(Nav, {
    activeSection: active,
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Statement, null), /*#__PURE__*/React.createElement(Showcase, null), /*#__PURE__*/React.createElement(AboutSplit, null), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Categories, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(CookieConsent, null));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
