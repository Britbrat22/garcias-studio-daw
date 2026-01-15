const Hero = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Garcias Studio</h1>
      <p style={{ fontSize: '1.2rem' }}>
        AI-powered music production for producers and singers.
      </p>
      <a href="#features" style={{
        marginTop: '2rem',
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#ff6a00',
        color: '#fff',
        borderRadius: '4px',
        textDecoration: 'none'
      }}>
        Start Creating
      </a>
    </section>
  );
};

export default Hero;
