import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CircleCheck as CheckCircle, ArrowRight, Calendar } from 'lucide-react';
import dentalImg from '../assets/dental.jpg';

const services = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    tagline: 'Foundation of Good Oral Health',
    desc: 'Comprehensive dental care for the whole family including routine check-ups, professional cleanings, fillings, extractions, and preventive treatments. Regular visits help catch problems early and keep your smile healthy.',
    features: ['Comprehensive oral examinations', 'Professional teeth cleaning (scaling)', 'Tooth-colored composite fillings', 'Tooth extractions', 'Dental sealants', 'Night guards & mouth guards'],
    img: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#eff8ff',
  },
  {
    icon: '🧹',
    title: 'Teeth Cleaning',
    tagline: 'Bright, Fresh & Healthy',
    desc: 'Professional dental cleaning removes plaque, tartar, and stains that regular brushing cannot. Our hygienists use ultrasonic scalers and polishers to give you a deeply clean, fresh smile.',
    features: ['Ultrasonic plaque removal', 'Subgingival cleaning', 'Stain polishing', 'Fluoride treatment', 'Gum health assessment', 'Personalized home care guidance'],
    img: 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#f0fdfa',
  },
  {
    icon: '🔩',
    title: 'Dental Implants',
    tagline: 'Permanent Tooth Replacement',
    desc: 'Dental implants are the gold standard for replacing missing teeth. Titanium implants integrate with your jawbone to provide a permanent, natural-looking replacement that looks, feels, and functions like real teeth.',
    features: ['Single tooth implants', 'Multiple tooth implants', 'Full arch (All-on-4 / All-on-6)', 'Immediate loading implants', 'Implant-supported dentures', '3D surgical planning'],
    img: 'https://images.pexels.com/photos/3779695/pexels-photo-3779695.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fff7ed',
  },
  {
    icon: '🔄',
    title: 'Root Canal Treatment',
    tagline: 'Save Your Natural Teeth',
    desc: 'Root canal therapy saves severely infected or damaged teeth from extraction. Using advanced rotary instruments and precise techniques, we ensure the procedure is as comfortable and quick as a regular filling.',
    features: ['Painless rotary endodontics', 'Single-sitting RCT (most cases)', 'Advanced apex locator technology', 'Post & core build-up', 'Crown placement after RCT', 'Re-treatment of failed RCTs'],
    img: 'https://images.pexels.com/photos/6502304/pexels-photo-6502304.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fef3c7',
  },
  {
    icon: '😁',
    title: 'Orthodontics & Braces',
    tagline: 'Straighten Your Smile',
    desc: 'Correct misaligned teeth and bite issues with our range of orthodontic solutions. From traditional metal braces to virtually invisible aligners, we create beautifully straight smiles for teens and adults.',
    features: ['Metal braces', 'Ceramic (tooth-colored) braces', 'Invisible aligners (Invisalign)', 'Lingual (behind-teeth) braces', 'Retainers & space maintainers', 'Teeth expansion appliances'],
    img: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fdf4ff',
  },
  {
    icon: '💎',
    title: 'Cosmetic Dentistry',
    tagline: 'Transform Your Smile',
    desc: 'Our smile makeover treatments combine art and science to give you the smile you have always dreamed of. From subtle improvements to dramatic transformations, we customise every treatment to your unique face.',
    features: ['Porcelain veneers', 'Dental bonding', 'Smile design & makeover', 'Gum contouring', 'Tooth reshaping', 'Composite contouring'],
    img: dentalImg,
    color: '#fff1f2',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    tagline: 'Radiant, Confident Smile',
    desc: 'Our professional in-office teeth whitening delivers results up to 8 shades lighter in a single appointment. Safe, effective, and long-lasting — a dramatically whiter smile in just one visit.',
    features: ['In-office power whitening', 'Take-home whitening kits', 'Zoom whitening system', 'Whitening for sensitive teeth', 'Post-treatment care guidance', 'Maintenance touch-up kits'],
    img: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#f0fdf4',
  },
  {
    icon: '👶',
    title: 'Pediatric Dentistry',
    tagline: 'Gentle Care for Little Smiles',
    desc: 'Our child-friendly approach makes dental visits a positive experience. We use specialized techniques and a caring environment designed specifically to keep children comfortable, calm, and cooperative.',
    features: ['First dental visit consultation', 'Child-friendly cleanings', 'Dental sealants', 'Fluoride applications', 'Habit counseling', 'Interceptive orthodontics'],
    img: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#eff8ff',
  },
  {
    icon: '🚨',
    title: 'Emergency Dental Care',
    tagline: '24/7 Dental Emergency Help',
    desc: 'Dental emergencies don\'t wait for business hours. We offer same-day emergency appointments for severe toothaches, broken or knocked-out teeth, lost fillings or crowns, and dental injuries.',
    features: ['Same-day appointments', 'Severe toothache relief', 'Broken tooth treatment', 'Knocked-out tooth management', 'Lost crown/filling replacement', 'Dental abscess treatment'],
    img: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fff7ed',
  },
];

export default function Services() {
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
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 60 }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 40,
                alignItems: 'center',
                background: 'white',
                borderRadius: 28,
                overflow: 'hidden',
                boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
                border: '1px solid #f1f5f9',
              }}
            >
              {/* Image */}
              <div style={{
                order: i % 2 === 0 ? 0 : 1,
                aspectRatio: '4/3',
                background: '#e5e7eb',
                overflow: 'hidden',
              }}>
                <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.05)'}
                  onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '40px', order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: svc.color,
                  borderRadius: 12, padding: '8px 16px', marginBottom: 18,
                }}>
                  <span style={{ fontSize: 22 }}>{svc.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#0d9488', letterSpacing: 1, textTransform: 'uppercase' as const }}>
                    {svc.tagline}
                  </span>
                </div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, color: '#0d1b2e', marginBottom: 12 }}>
                  {svc.title}
                </h2>
                <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 14 }}>{svc.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 24 }}>
                  {svc.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                      <CheckCircle size={13} color="#0d9488" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: '#475569', fontSize: 12, lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/appointment#appointment-form" className="btn-primary" style={{
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 22px', fontSize: 13,
                }}>
                  Book This Service <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #0d1b2e, #1e3a5f)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: 'white', marginBottom: 16 }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Book a free consultation and our specialists will recommend the best treatment plan for your needs.
          </p>
          <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={16} />
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
