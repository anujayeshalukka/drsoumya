import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'transparent',
          boxShadow: scrolled
            ? '0 2px 30px rgba(0,0,0,0.08)'
            : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? 68 : 80,
            transition: 'height 0.3s ease',
          }}>
            {/* Logo */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Link to="/" className={`logo-container ${scrolled ? 'scrolled' : ''}`}>
                <img
                  src={logo}
                  alt="Dr. Soumya's Dental Clinic"
                  style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: scrolled ? 0 : 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: scrolled ? 'translateY(-10px)' : 'translateY(0)',
                    pointerEvents: scrolled ? 'none' : 'auto',
                  }}
                />
                <img
                  src={logo2}
                  alt="Dr. Soumya's Dental Clinic"
                  style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: scrolled ? 1 : 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: scrolled ? 'translateY(0)' : 'translateY(10px)',
                    pointerEvents: scrolled ? 'auto' : 'none',
                  }}
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="mobile-hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  style={{
                    color: scrolled
                      ? location.pathname === link.path ? '#0d9488' : '#374151'
                      : location.pathname === link.path ? '#14b8a6' : 'rgba(255,255,255,0.92)',
                    fontSize: 14,
                    letterSpacing: '0.3px',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="mobile-hidden" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12 }}>
              <a
                href="tel:+919876543210"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: scrolled ? '#374151' : 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                }}
              >
                <Phone size={15} />
                +91 98765 43210
              </a>
              <Link
                to="/appointment#appointment-form"
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: 13, borderRadius: 50, textDecoration: 'none', display: 'inline-block' }}
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(o => !o)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? '#374151' : 'white',
                padding: 8,
              }}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: open ? '500px' : 0,
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: open ? '1px solid #e5e7eb' : 'none',
        }}>
          <div style={{ padding: '16px 24px 24px' }}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '13px 0',
                  color: location.pathname === link.path ? '#0d9488' : '#374151',
                  textDecoration: 'none',
                  fontSize: 16,
                  fontWeight: 500,
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="tel:+919876543210"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                <Phone size={16} />
                +91 98765 43210
              </a>
              <Link
                to="/appointment#appointment-form"
                className="btn-primary"
                style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile CSS override */}
      <style>{`
        .logo-container {
          display: block;
          position: relative;
          height: 50px;
          width: 150px;
          transition: all 0.3s ease;
          transform-origin: left center;
          /* On desktop, keep it large */
          transform: scale(1.4) translateX(10px);
        }
        .logo-container.scrolled {
          transform: scale(1.1) translateX(10px);
        }

        @media (max-width: 900px) {
          .mobile-menu-btn { display: flex !important; align-items: center; }
          .mobile-hidden { display: none !important; }
          
          /* On mobile, adjust the scale so it fits the viewport */
          .logo-container {
            transform: scale(1.1);
          }
          .logo-container.scrolled {
            transform: scale(0.9);
          }
        }
      `}</style>
    </>
  );
}
