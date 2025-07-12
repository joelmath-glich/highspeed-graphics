import React from 'react';
import { Link } from 'react-router-dom';

function Home({ showContact, setShowContact, isDark, designServices, printServices }) {
  // Contact Modal (copied from App.js for Home page use)
  const ContactModal = () => (
    <div className="modal-backdrop-custom" onClick={() => setShowContact(false)}>
      <div className="modal-content-custom animate__animated animate__zoomIn" onClick={e => e.stopPropagation()}>
        <button className="btn-close-custom" onClick={() => setShowContact(false)}>&times;</button>
        <h3 className="mb-3 text-danger">Contact Us</h3>
        <p className="mb-1">📬 PO Box : 66118 Sharjah, U.A.E</p>
        <p className="mb-1">📞 <a href="tel:+971509279857" className="text-danger text-decoration-none">+971 50 927 9857</a></p>
        <p className="mb-1">✉️ <a href="mailto:hprinting231@gmail.com" className="text-danger text-decoration-none">hprinting231@gmail.com</a></p>
        <p>
          <a href="https://wa.me/971509279857" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">💬 WhatsApp Us</a>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {showContact && <ContactModal />}
      {/* Hero Section */}
      <div id="hero" className="p-5 shadow animate__animated animate__fadeInDown" style={{background: 'linear-gradient(135deg, #fff 60%, #d90429 100%)'}}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{color: '#d90429'}}>HIGH SPEED GRAPHICS</h1>
          <p className="lead" style={{color: '#222'}}>Bringing Colors to Your Dreams</p>
          <h5 className="mt-3" style={{color: '#d90429'}}>📍 Now Open @ Al-Yarmook, Sharjah</h5>
        </div>
      </div>

      {/* Dropdown Menu (below hero section) */}
      <div className="container my-3 animate__animated animate__fadeInDown">
        <div className="dropdown d-flex justify-content-center">
          <button className="btn btn-danger dropdown-toggle" type="button" id="mainDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="mainDropdown">
            <li><Link className="dropdown-item" to="/about">About Us</Link></li>
            <li><a className="dropdown-item" href="#hero">Home</a></li>
            <li><a className="dropdown-item" href="#graphics">Graphic Design</a></li>
            <li><a className="dropdown-item" href="#print">Printing</a></li>
            <li><a className="dropdown-item" href="#careers">Careers</a></li>
            <li><a className="dropdown-item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-5" id="why-us">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Why Choose Us</h2>
          <p className="text-muted">Committed to Delivering Results and Success</p>
        </div>
        <div className="row g-4">
          {/* Business Growth */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-primary p-3">
              <h5 className="fw-bold">🚀 How We Drive Business Growth</h5>
              <p>
                At High Speed Graphics, we empower businesses with stunning designs and impactful prints
                that increase visibility and brand recognition. From flyers to signage, we help you grow
                with purpose.
              </p>
            </div>
          </div>
          {/* Partnership Approach */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-success p-3">
              <h5 className="fw-bold">🤝 Our Partnership Approach</h5>
              <p>
                We believe in long-term collaborations. By understanding your unique vision, we provide
                solutions that evolve with your goals—ensuring continued support for your growing business.
              </p>
            </div>
          </div>
          {/* Future Tech */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-warning p-3">
              <h5 className="fw-bold">💡 Building for the Future</h5>
              <p>
                We stay ahead of trends by using modern design tools, print technologies, and techniques
                to help your business stand out in a competitive market.
              </p>
            </div>
          </div>
          {/* Support */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-danger p-3">
              <h5 className="fw-bold">🕐 24/7 Support</h5>
              <p>
                Need help after hours? We offer 24/7 support for urgent orders, updates, and revisions,
                ensuring your deadlines are always met without hassle.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Light/Dark Mode Toggle Emoji (top-right corner) */}
      <button
        onClick={() => window.toggleMode()}
        className="btn btn-light border-0 position-fixed"
        style={{ top: 20, right: 20, zIndex: 1050, fontSize: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        aria-label="Toggle light/dark mode"
      >
        {isDark ? '🌙' : '🌞'}
      </button>

      {/* Services Card - Graphic Design */}
      <div id="graphics" className="container my-5">
        <h4 className="section-title text-danger mb-4">🎨 Graphic Designing Services</h4>
        <div className="row g-4 mb-5">
          {designServices.map((service, idx) => (
            <div className="col-md-4 col-sm-6 mb-3" key={service.title}>
              <div className="card-service animate__animated animate__fadeInUp h-100" style={{cursor: 'pointer'}} onClick={() => setShowContact(true)}>
                <div className="fw-bold text-danger mb-1">{service.title}</div>
                <div className="card-body text-muted small">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Card - Printing */}
      <div id="print" className="container my-5">
        <h4 className="section-title text-primary mb-4">🖨️ All Types of Printing Works</h4>
        <div className="row g-4 mb-4">
          {printServices.map((service, idx) => (
            <div className="col-md-4 col-sm-6 mb-3" key={service.title}>
              <div className="card-service animate__animated animate__fadeInUp h-100" style={{cursor: 'pointer'}} onClick={() => setShowContact(true)}>
                <div className="fw-bold text-danger mb-1">{service.title}</div>
                <div className="card-body text-muted small">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download */}
      <div className="container text-center mb-5">
        <div className="card p-3 shadow-sm d-inline-block animate__animated animate__fadeIn">
          <p className="mb-2 fw-bold">Prefer a brochure?</p>
          <a href="/docs/Highspeed Graphics.pdf" className="btn btn-outline-danger" download>
            📥 Download Our Flyer (PDF)
          </a>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="container my-5">
        <h4 className="text-center mb-4">🖼️ Portfolio Gallery</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="/portfolio/project1.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="Work Sample 1" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/portfolio/flyer.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="Flyer Design" />
          </div>
          <div className="col-md-4 mb-3">
            <img src="/portfolio/tshirt.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="T-Shirt Print" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
