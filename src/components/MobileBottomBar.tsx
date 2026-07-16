import { Link, useLocation } from 'react-router-dom';
import { Home, Stethoscope, Calendar, Phone } from 'lucide-react';

export default function MobileBottomBar() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home, isExternal: false },
    { label: 'Services', path: '/services', icon: Stethoscope, isExternal: false },
    { label: 'Book', path: '/appointment', icon: Calendar, isExternal: false },
    { label: 'Call', path: 'tel:+919876543210', icon: Phone, isExternal: true },
  ];

  return (
    <>
      <nav className="mobile-bottom-bar" style={{
        position: 'fixed',
        bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
        left: '16px',
        right: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        borderRadius: '24px',
        display: 'none', // Hidden by default, shown via media query
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '56px',
        zIndex: 1000,
        padding: '0 8px',
      }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          const linkStyle = {
            display: 'flex',
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            color: isActive ? '#0d9488' : '#64748b',
            width: '100%',
            height: '100%',
            gap: '3px',
            transition: 'color 0.2s ease',
          };

          const iconStyle = {
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.2s ease',
          };

          const labelStyle = {
            fontSize: '10px',
            fontWeight: isActive ? 600 : 500,
          };

          if (item.isExternal) {
            return (
              <a key={item.label} href={item.path} style={linkStyle}>
                <Icon size={20} style={iconStyle} />
                <span style={labelStyle}>{item.label}</span>
              </a>
            );
          }

          return (
            <Link key={item.label} to={item.path} style={linkStyle}>
              <Icon size={20} style={iconStyle} />
              <span style={labelStyle}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* CSS to show only on mobile and add padding to body so content isn't hidden behind the bar */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: flex !important;
          }
          body {
            /* Add padding to bottom to prevent content from being hidden behind the bar */
            padding-bottom: 100px;
            padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px));
          }
          /* Hide the WhatsApp button or adjust its position so it doesn't overlap */
          .whatsapp-btn-wrapper {
            bottom: 100px !important;
            bottom: calc(100px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }
      `}</style>
    </>
  );
}
