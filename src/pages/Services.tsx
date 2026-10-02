import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { services } from '../data/services';
import { useSeo } from '../lib/seo';

export default function Services() {
  useSeo({
    title: "Dental Services | Dr. Soumya's Dental Clinic, Maradu",
    description: "Explore dental services at Dr. Soumya's Dental Clinic in Maradu, Ernakulam, including root canal treatment, implants, orthodontics, paediatric dentistry, periodontal care, oral diagnosis and preventive dentistry.",
    path: '/services',
  });
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 60%, #0d4a4a 100%)',
        padding: 'var(--hero-top, 160px) 24px var(--hero-bottom, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 40% 60%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              What We Offer
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Comprehensive Dental Services
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
              Everything your family needs for perfect oral health — under one roof, delivered by specialists.
            </p>
          
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: 'var(--section-y, 80px) 24px', background: '#f8fafc' }}>
        <div className="services-grid" style={{ maxWidth: 1280, margin: '0 auto' }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="service-card svc-card"
            >
              <div className="svc-card-icon">{svc.icon}</div>
              <h2 className="svc-card-title">{svc.title}</h2>
              <p className="svc-card-desc">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
        <style>{`
          .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
          @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .services-grid { gap: 12px; } }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'var(--section-y, 80px) 24px',
        background: 'linear-gradient(135deg, #0d1b2e, #1e3a5f)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: 'white', marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Book a consultation and our specialists will recommend the best treatment plan for your needs.
          </p>
          <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={16} />
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
