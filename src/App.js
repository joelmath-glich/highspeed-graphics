import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import CountUp from 'react-countup'; // 📌 Add this to your imports


function App() {
  const [showContact, setShowContact] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const toggleMode = () => {
      document.body.classList.toggle('bg-dark');
      document.body.classList.toggle('text-white');
      document.querySelectorAll('.card, .card-service').forEach(c => {
        c.classList.toggle('bg-dark');
        c.classList.toggle('text-white');
        c.classList.toggle('border-light');
        c.classList.toggle('border-dark');
      });
      document.querySelectorAll('.list-group-item').forEach(li => {
        li.classList.toggle('bg-dark');
        li.classList.toggle('text-white');
      });
      const footer = document.querySelector('footer');
      if (footer) {
        footer.classList.toggle('bg-dark');
        footer.classList.toggle('text-white');
        footer.classList.toggle('bg-light');
        footer.classList.toggle('text-dark');
      }
      setIsDark(prev => !prev);
    };
    window.toggleMode = toggleMode;
  }, []);

  // Service details
  const designServices = [
    { title: 'Social Media Post', desc: 'Eye-catching posts for Facebook, Instagram, and more to boost your online presence.' },
    { title: 'Flyer / Poster Design', desc: 'Custom flyers and posters for events, promotions, and announcements.' },
    { title: 'Banner Design', desc: 'Large format banners for shops, events, and advertising.' },
    { title: 'Book Cover Design', desc: 'Professional covers to make your book stand out.' },
    { title: 'Logo Design', desc: 'Unique and memorable logos for your brand or business.' },
    { title: 'Payment & Receipt Vouchers', desc: 'Custom-designed vouchers for your business transactions.' },
    { title: 'Flex Vinyl Sticker', desc: 'Durable stickers for branding, decor, and more.' },
    { title: 'Light Board', desc: 'Illuminated boards for high-visibility signage.' },
    { title: 'Mug Printing', desc: 'Personalized mugs for gifts, branding, or events.' },
    { title: 'Envelopes', desc: 'Custom envelopes for business or personal use.' },
    { title: 'Rubber Stamp', desc: 'Custom rubber stamps for office or creative use.' },
    { title: 'Screen Printing', desc: 'High-quality screen printing for various materials.' },
    { title: 'T-Shirt Printing', desc: 'Custom t-shirts for teams, events, or promotions.' }
  ];

  const printServices = [
    { title: 'Flyer', desc: 'Affordable and vibrant flyers for all your marketing needs.' },
    { title: 'Business Cards', desc: 'Professional business cards to make a lasting impression.' },
    { title: 'Brochure', desc: 'Informative brochures to showcase your products or services.' },
    { title: 'Letter Head', desc: 'Custom letterheads for official correspondence.' },
    { title: 'Sticker Plotter Cutting', desc: 'Precision-cut stickers for branding and decoration.' }
  ];

  // Contact Modal
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
      <Navbar />
      {/* Hero Section */}
      <div id="hero" className="p-5 shadow hero-animated" style={{background: 'linear-gradient(135deg, #fff 60%, #d90429 100%)'}} data-aos="fade-down">
        <div className="container text-center">
          <h1 className="display-4 fw-bold" style={{color: '#d90429'}}>HIGH SPEED GRAPHICS</h1>
          <p className="lead" style={{color: '#222'}}>Bringing Colors to Your Dreams</p>
          <h5 className="mt-3" style={{color: '#d90429'}}>📍 Now Open @ Al-Yarmook, Sharjah</h5>
        </div>
      </div>

      {/* Dropdown Menu (below hero section) */}
      <div className="container my-3 animate__animated animate__fadeInDown" data-aos="fade-up">
        <div className="dropdown d-flex justify-content-center">
          <button className="btn btn-danger dropdown-toggle" type="button" id="mainDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="mainDropdown">
            <li><a className="dropdown-item" href="#hero">Home</a></li>
            <li><a className="dropdown-item" href="#graphics">Graphic Design</a></li>
            <li><a className="dropdown-item" href="#print">Printing</a></li>
            <li><a className="dropdown-item" href="#careers">Careers</a></li>
            <li><a className="dropdown-item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-5" id="why-us" data-aos="fade-up">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-danger">Why Choose Us</h2>
          <p className="text-muted">Committed to Delivering Results and Success</p>
        </div>
        <div className="row g-4">
          {/* Business Growth */}
          <div className="col-md-6" data-aos="fade-right">
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
          <div className="col-md-6" data-aos="fade-left">
            <div className="card shadow-sm h-100 border-start border-4 border-success p-3">
              <h5 className="fw-bold">🤝 Our Partnership Approach</h5>
              <p>
                We believe in long-term collaborations. By understanding your unique vision, we provide
                solutions that evolve with your goals—ensuring continued support for your growing business.
              </p>
            </div>
          </div>
          {/* Future Tech */}
          <div className="col-md-6" data-aos="fade-right">
            <div className="card shadow-sm h-100 border-start border-4 border-warning p-3">
              <h5 className="fw-bold">💡 Building for the Future</h5>
              <p>
                We stay ahead of trends by using modern design tools, print technologies, and techniques
                to help your business stand out in a competitive market.
              </p>
            </div>
          </div>
          {/* Support */}
          <div className="col-md-6" data-aos="fade-left">
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

    {/* Stats Section */}
<div className="container my-5" data-aos="fade-up">
  <h4 className="text-center text-danger fw-bold mb-4">📊 Our Business Stats</h4>
  <div className="row text-center g-4">
    <div className="col-md-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-danger fw-bold">
          <CountUp end={1000} duration={3} />+
        </h2>
        <p>Designs Delivered</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-success fw-bold">
          <CountUp end={500} duration={3} />+
        </h2>
        <p>Happy Clients</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-primary fw-bold">
          <CountUp end={24} duration={2} />
          /<CountUp end={7} duration={2} />
        </h2>
        <p>Support Availability</p>
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
      <div id="graphics" className="container my-5" data-aos="fade-up">
        <h4 className="section-title text-danger mb-4">🎨 Graphic Designing Services</h4>
        <div className="row g-4 mb-5">
          {designServices.map((service, idx) => (
            <div className="col-md-4 col-sm-6 mb-3" key={service.title} data-aos="zoom-in-up">
              <div className="card-service animate__animated animate__fadeInUp h-100" style={{cursor: 'pointer'}} onClick={() => setShowContact(true)}>
                <div className="fw-bold text-danger mb-1">{service.title}</div>
                <div className="card-body text-muted small">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Card - Printing */}
      <div id="print" className="container my-5" data-aos="fade-up">
        <h4 className="section-title text-primary mb-4">🖨️ All Types of Printing Works</h4>
        <div className="row g-4 mb-4">
          {printServices.map((service, idx) => (
            <div className="col-md-4 col-sm-6 mb-3" key={service.title} data-aos="zoom-in-up">
              <div className="card-service animate__animated animate__fadeInUp h-100" style={{cursor: 'pointer'}} onClick={() => setShowContact(true)}>
                <div className="fw-bold text-danger mb-1">{service.title}</div>
                <div className="card-body text-muted small">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Download */}
      <div className="container text-center mb-5" data-aos="fade-up">
        <div className="card p-3 shadow-sm d-inline-block animate__animated animate__fadeIn">
          <p className="mb-2 fw-bold">Prefer a brochure?</p>
          <a href="/docs/Highspeed Graphics.pdf" className="btn btn-outline-danger" download>
            📥 Download Our Flyer (PDF)
          </a>
        </div>
      </div>

      {/* Portfolio Gallery */}
      <div className="container my-5" data-aos="fade-up">
        <h4 className="text-center mb-4">🖼️ Portfolio Gallery</h4>
        <div className="row">
          <div className="col-md-4 mb-3" data-aos="zoom-in">
            <img src="/portfolio/project1.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="Work Sample 1" />
          </div>
          <div className="col-md-4 mb-3" data-aos="zoom-in">
            <img src="/portfolio/flyer.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="Flyer Design" />
          </div>
          <div className="col-md-4 mb-3" data-aos="zoom-in">
            <img src="/portfolio/tshirt.jpg" className="img-fluid rounded shadow-sm animate__animated animate__zoomIn" alt="T-Shirt Print" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-4 animate__animated animate__fadeInUp" id="contact">
        <div className="mb-3">
          <h5 className="fw-bold mb-1">HIGH SPEED GRAPHICS</h5>
          <p className="mb-2 small">At High Speed Graphics, we deliver reliable services tailored to your needs. Our global network ensures fast, flexible solutions.</p>
          <form className="d-flex justify-content-center align-items-center flex-wrap gap-2" style={{maxWidth: 400, margin: '0 auto'}} onSubmit={e => e.preventDefault()}>
            <input type="email" className="form-control form-control-sm" placeholder="Your Email" style={{maxWidth: 200}} required />
            <button type="submit" className="btn btn-danger btn-sm">Submit</button>
          </form>
        </div>
        <p>📬 PO Box : 66118 Sharjah, U.A.E</p>
        <p>📞 <a href="tel:+971509279857" className="text-white text-decoration-none">+971 50 927 9857</a></p>
        <p>✉️ <a href="mailto:hprinting231@gmail.com" className="text-white text-decoration-none">hprinting231@gmail.com</a></p>
        <p>
          <a href="https://wa.me/971509279857" target="_blank" className="btn btn-success btn-sm">💬 WhatsApp Us</a>
        </p>
      </footer>
    </>
  );
}

export default App;
