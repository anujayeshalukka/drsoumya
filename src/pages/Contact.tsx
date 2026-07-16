import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const WA_MESSAGE = encodeURIComponent('Hello, I would like to know more about your dental services and book an appointment.');

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 60%, #0d4a4a 100%)',
        padding: '160px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              Reach Us
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Contact Us
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7 }}>
              We're here to help. Reach out by phone, WhatsApp, or fill in the enquiry form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20, marginBottom: 64 }}>
            {[
              {
                Icon: Phone,
                title: 'Call Us',
                lines: ['+91 98765 43210', '+91 98765 43211'],
                href: 'tel:+919876543210',
                gradient: 'linear-gradient(135deg, #eff8ff, #e0f2fe)',
                iconColor: '#1e7ae8',
              },
              {
                Icon: Mail,
                title: 'Email Us',
                lines: ['info@drsoumyadental.com', 'appointments@drsoumyadental.com'],
                href: 'mailto:info@drsoumyadental.com',
                gradient: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
                iconColor: '#0d9488',
              },
              {
                Icon: MapPin,
                title: 'Visit Us',
                lines: ['123 Health Street', 'Medical Colony, Chennai – 600001'],
                href: 'https://maps.google.com',
                gradient: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
                iconColor: '#e11d48',
              },
              {
                Icon: Clock,
                title: 'Working Hours',
                lines: ['Mon–Sat: 9 AM – 8 PM', 'Sunday: 10 AM – 2 PM'],
                href: '#',
                gradient: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
                iconColor: '#d97706',
              },
            ].map(({ Icon, title, lines, href, gradient, iconColor }) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-lift"
                style={{
                  display: 'block',
                  background: 'white',
                  borderRadius: 20,
                  padding: '28px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div style={{ width: 52, height: 52, background: gradient, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={22} color={iconColor} />
                </div>
                <div style={{ fontWeight: 700, color: '#0d1b2e', fontSize: 15, marginBottom: 8 }}>{title}</div>
                {lines.map(line => (
                  <div key={line} style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7 }}>{line}</div>
                ))}
              </motion.a>
            ))}
          </div>

          {/* Main content: form + map */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
            <EnquiryForm />

            {/* Map + WhatsApp */}
            <div>
              {/* Google Maps embed */}
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.1)', marginBottom: 24, border: '1px solid #e5e7eb' }}>
                <div style={{ background: '#e5e7eb', height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Chennai+Tamil+Nadu+India&z=13&output=embed"
                    width="100%"
                    height="340"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location Map"
                  />
                </div>
                <div style={{ padding: '20px 24px', background: 'white', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <MapPin size={18} color="#0d9488" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#0d1b2e', fontSize: 14 }}>Dr. Soumya's Dental Clinic</div>
                    <div style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6 }}>123 Health Street, Medical Colony, Chennai – 600001, Tamil Nadu</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/919876543210?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 12,
                  background: 'linear-gradient(135deg, #25d366, #128c7e)',
                  color: 'white',
                  borderRadius: 16,
                  padding: '18px 24px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: 16,
                  boxShadow: '0 8px 30px rgba(37,211,102,0.35)',
                  transition: 'all 0.3s ease',
                  marginBottom: 20,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat with Us on WhatsApp
              </a>

              {/* Emergency note */}
              <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 14, padding: '16px 18px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20 }}>🚨</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#9a3412', fontSize: 14, marginBottom: 4 }}>Dental Emergency?</div>
                  <div style={{ color: '#7c2d12', fontSize: 13, lineHeight: 1.6 }}>
                    For urgent dental pain, broken teeth, or trauma, call us immediately at <strong>+91 98765 43210</strong>. We offer same-day emergency appointments.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
