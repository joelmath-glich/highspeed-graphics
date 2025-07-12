import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-danger shadow-sm' : 'bg-transparent'} transition`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#hero">High Speed Graphics</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white" href="#graphics">Design</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#print">Print</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#why-us">Why Us</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
