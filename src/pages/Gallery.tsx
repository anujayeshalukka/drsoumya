import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Calendar, ZoomIn } from 'lucide-react';


const categories = ['All', 'Teeth Whitening', 'Dental Implants', 'Veneers & Cosmetic', 'Orthodontics', 'Smile Makeover'];

const gallery = [
  {
    id: 1,
    category: 'Teeth Whitening',
    beforeImg: '/teethwhitening1.jpg',
    afterImg: '/teethwhitening2.jpg',
    patient: 'Patient A',
    desc: 'Professional in-office teeth whitening — 8 shades brighter in 90 minutes.',
    treatment: 'Zoom Whitening',
    duration: '1 Visit',
  },
  {
    id: 2,
    category: 'Dental Implants',
    beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=compress&cs=tinysrgb&w=600',
    afterImg: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=compress&cs=tinysrgb&w=600',
    patient: 'Patient B',
    desc: 'Missing upper front tooth replaced with a titanium dental implant and ceramic crown.',
    treatment: 'Single Tooth Implant',
    duration: '3 Months',
  },
  {
    id: 3,
    category: 'Veneers & Cosmetic',
    beforeImg: '/cosmetic1.jpg',
    afterImg: '/cosmetic2.jpg',
    patient: 'Patient C',
    desc: 'Six porcelain veneers placed on upper front teeth for a complete smile transformation.',
    treatment: 'Porcelain Veneers',
    duration: '2 Weeks',
  },
  {
    id: 4,
    category: 'Orthodontics',
    beforeImg: '/Orthodontics1.jpg',
    afterImg: '/Orthodontics2.jpg',
    patient: 'Patient D',
    desc: 'Severe crowding and misalignment corrected with 18 months of ceramic braces.',
    treatment: 'Ceramic Braces',
    duration: '18 Months',
  },
  {
    id: 5,
    category: 'Smile Makeover',
    beforeImg: 'https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?auto=compress&cs=tinysrgb&w=600',
    afterImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=compress&cs=tinysrgb&w=600',
    patient: 'Patient E',
    desc: 'Full smile makeover combining whitening, composite bonding, and gum contouring.',
    treatment: 'Full Smile Makeover',
    duration: '3 Weeks',
  },
  {
    id: 6,
    category: 'Veneers & Cosmetic',
    beforeImg: '/Veneers1.jpg',
    afterImg: 'https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?auto=compress&cs=tinysrgb&w=600',
    patient: 'Patient F',
    desc: 'Composite bonding used to close gaps and reshape teeth for a natural, even smile.',
    treatment: 'Composite Bonding',
    duration: '1 Day',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ item: typeof gallery[0]; side: 'before' | 'after' } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = selectedCategory === 'All' ? gallery : gallery.filter(g => g.category === selectedCategory);

  const openLightbox = (item: typeof gallery[0], side: 'before' | 'after') => {
    setLightboxIndex(filtered.findIndex(g => g.id === item.id));
    setLightbox({ item, side });
  };

  const navigate = (dir: number) => {
    const newIndex = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(newIndex);
    setLightbox(prev => prev ? { item: filtered[newIndex], side: prev.side } : null);
  };

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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              Before & After Results
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Smile Transformation Gallery
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7 }}>
              Real patients. Real results. See the incredible smile transformations achieved at our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '32px 24px 0', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 20 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 50,
                border: selectedCategory === cat ? 'none' : '1px solid #e5e7eb',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                background: selectedCategory === cat ? 'linear-gradient(135deg, #1e7ae8, #0d9488)' : 'white',
                color: selectedCategory === cat ? 'white' : '#64748b',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="card-lift"
                  style={{
                    background: 'white',
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                    border: '1px solid #f1f5f9',
                  }}
                >
                  {/* Before/After images */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative' }}>
                    {[
                      { label: 'Before', img: item.beforeImg },
                      { label: 'After', img: item.afterImg },
                    ].map(({ label, img }) => (
                      <div
                        key={label}
                        onClick={() => openLightbox(item, label.toLowerCase() as 'before' | 'after')}
                        style={{ position: 'relative', aspectRatio: '1', cursor: 'zoom-in', overflow: 'hidden', background: '#e5e7eb' }}
                      >
                        <img src={img} alt={`${label} - ${item.patient}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                          onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                          onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: 8, left: 8,
                          background: label === 'After' ? 'linear-gradient(135deg, #1e7ae8, #0d9488)' : 'rgba(0,0,0,0.6)',
                          color: 'white',
                          borderRadius: 8,
                          padding: '3px 10px',
                          fontSize: 11,
                          fontWeight: 700,
                        }}>{label}</div>
                        <div style={{
                          position: 'absolute', inset: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'rgba(0,0,0,0)',
                          transition: 'background 0.3s ease',
                          opacity: 0,
                        }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.opacity = '1';
                            (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.3)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.opacity = '0';
                          }}
                        >
                          <ZoomIn size={24} color="white" />
                        </div>
                      </div>
                    ))}
                    {/* Divider */}
                    <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'white', zIndex: 1 }} />
                  </div>

                  {/* Info */}
                  <div style={{ padding: '18px 20px' }}>
                    <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #eff8ff, #f0fdfa)', borderRadius: 50, padding: '3px 10px', fontSize: 11, color: '#0d9488', fontWeight: 600, marginBottom: 8 }}>
                      {item.category}
                    </div>
                    <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</p>
                    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>
                        <strong style={{ color: '#64748b' }}>Treatment:</strong> {item.treatment}
                      </div>
                      <div style={{ fontSize: 12, color: '#94a3b8' }}>
                        <strong style={{ color: '#64748b' }}>Duration:</strong> {item.duration}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0d1b2e, #1e3a5f)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Ready for Your Own Transformation?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Book a free smile consultation and let our experts design your perfect treatment plan.
          </p>
          <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={16} />
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.92)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: 800, width: '100%', position: 'relative' }}
            >
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: 'absolute', top: -48, right: 0,
                  background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                  width: 40, height: 40, cursor: 'pointer', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={20} />
              </button>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, borderRadius: 16, overflow: 'hidden' }}>
                {[
                  { label: 'Before', img: lightbox.item.beforeImg },
                  { label: 'After', img: lightbox.item.afterImg },
                ].map(({ label, img }) => (
                  <div key={label} style={{ position: 'relative' }}>
                    <img src={img} alt={label} style={{ width: '100%', display: 'block' }} />
                    <div style={{
                      position: 'absolute', bottom: 10, left: 10,
                      background: label === 'After' ? 'linear-gradient(135deg, #1e7ae8, #0d9488)' : 'rgba(0,0,0,0.6)',
                      color: 'white', borderRadius: 8, padding: '4px 12px', fontSize: 13, fontWeight: 700,
                    }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ color: 'white', textAlign: 'center', marginTop: 16, fontSize: 14 }}>
                <span style={{ color: '#14b8a6', fontWeight: 600 }}>{lightbox.item.treatment}</span>
                {' · '}
                <span style={{ color: 'rgba(255,255,255,0.6)' }}>{lightbox.item.desc}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
                <button onClick={() => navigate(-1)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => navigate(1)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
