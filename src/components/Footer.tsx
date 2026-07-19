import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';


const SocialFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const SocialInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const SocialYoutube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2e', color: '#cbd5e1' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 32px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
              <img 
                src={logo} 
                alt="Dr. Soumya's Dental Clinic" 
                style={{ 
                  height: 44, 
                  width: 'auto', 
                  objectFit: 'contain',
                }} 
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20, color: '#94a3b8' }}>
              Advanced dental care with a gentle touch. Your healthy, confident smile is our greatest achievement.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { Icon: SocialFacebook, href: '#' },
                { Icon: SocialInstagram, href: 'https://www.instagram.com/dr.soumyas.dental.clinic?utm_source=qr&igsh=MWw3NnhidzZlcXM4OQ%3D%3D' },
                { Icon: SocialYoutube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                  width: 38, height: 38,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(13,148,136,0.25)';
                    (e.currentTarget as HTMLElement).style.color = '#14b8a6';
                    (e.currentTarget as HTMLElement).style.borderColor = '#0d9488';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: 15, marginBottom: 20, letterSpacing: '0.5px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Before & After Gallery', path: '/gallery' },
                { label: 'Blog', path: '/blog' },
                { label: 'Book Appointment', path: '/appointment' },
                { label: 'Contact Us', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#14b8a6'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94a3b8'}
                >
                  <span style={{ color: '#0d9488', fontSize: 12 }}>›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: 15, marginBottom: 20, letterSpacing: '0.5px' }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'General Dentistry',
                'Dental Implants',
                'Orthodontics & Braces',
                'Cosmetic Dentistry',
                'Teeth Whitening',
                'Root Canal Treatment',
                'Pediatric Dentistry',
                'Emergency Dental Care',
              ].map(s => (
                <Link key={s} to="/services" style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#14b8a6'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#94a3b8'}
                >
                  <span style={{ color: '#0d9488', fontSize: 12 }}>›</span>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: 15, marginBottom: 20, letterSpacing: '0.5px' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: MapPin, text: 'Johns Arcade, Opp. PS Mission Hospital, Kundannoor, Maradu, Ernakulam, Kerala 682304' },
                { Icon: Phone, text: '+91 98765 43210' },
                { Icon: Mail, text: 'info@drsoumyasdentalclinic.com\ndrsoumyasdentalclinic@gmail.com' },
                { Icon: Clock, text: 'Mon - Sat: 9:30 AM – 7:30 PM\nSun: Appointments only' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 32, height: 32,
                    background: 'rgba(13,148,136,0.15)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}>
                    <Icon size={14} color="#14b8a6" />
                  </div>
                  <span style={{ fontSize: 13, lineHeight: 1.6, color: '#94a3b8', whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: 13, color: '#64748b' }}>
            © 2024 Dr. Soumya's Dental Clinic. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(t => (
              <a key={t} href="#" style={{ fontSize: 13, color: '#64748b', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#14b8a6'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
