// AGA Móveis — main app

function App() {
  const [active, setActive] = React.useState('inicio');

  const onNav = (id) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); setActive('inicio'); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  React.useEffect(() => {
    const sections = ['inicio','empresa','produtos','processo','contato'];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div id="top">
      <TopBar />
      <Nav activeSection={active} onNav={onNav} />
      <Hero />
      <Statement />
      <Showcase />
      <AboutSplit />
      <Stats />
      <Pillars />
      <Categories />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
