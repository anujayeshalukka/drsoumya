import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Calendar, ZoomIn, Info } from 'lucide-react';
import { useSeo } from '../lib/seo';
import { gallery, galleryCategories, type GalleryItem } from '../data/gallery';

const categories = ['All', ...galleryCategories.filter(c => gallery.some(g => g.category === c))];

function IllustrativeBadge() {
  return (
    <span className="gallery-illustrative">
      <Info size={12} /> Illustrative Example
    </span>
  );
}

function BeforeAfter({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  return (
    <div className={large ? 'gallery-pair gallery-pair-large' : 'gallery-pair'}>
      {[
        { label: 'Before', src: item.beforeImage, alt: item.beforeAlt },
        { label: 'After', src: item.afterImage, alt: item.afterAlt },
      ].map(({ label, src, alt }) => (
        <div key={label} className="gallery-pair-img">
          <img src={src} alt={alt} loading="lazy" />
          <span className={label === 'After' ? 'gallery-tag gallery-tag-after' : 'gallery-tag'}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  useSeo({
    title: "Smile Gallery | Dr. Soumya's Dental Clinic, Maradu",
    description: "View the smile gallery of Dr. Soumya's Dental Clinic in Maradu, Ernakulam, Kerala.",
    path: '/gallery',
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const filtered = selectedCategory === 'All' ? gallery : gallery.filter(g => g.category === selectedCategory);
  const active = openIndex !== null ? filtered[openIndex] : null;

  const open = (index: number) => {
    openerRef.current = document.activeElement as HTMLElement;
    setOpenIndex(index);
  };
  const close = () => {
    setOpenIndex(null);
    openerRef.current?.focus();
  };
  const step = (dir: number) =>
    setOpenIndex(i => (i === null ? i : (i + dir + filtered.length) % filtered.length));

  // Lightbox: keyboard controls, focus on open, and no background scrolling.
  useEffect(() => {
    if (openIndex === null) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex === null]);

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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              Illustrative Treatment Examples
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Our Gallery
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7 }}>
              Explore examples of dental treatments and services offered at Dr. Soumya's Dental Clinic.
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
              type="button"
              aria-pressed={selectedCategory === cat}
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
      <section style={{ padding: 'var(--section-y-sm, 64px) 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p className="gallery-note">
            <Info size={15} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>The images in this gallery are illustrations that explain each treatment. They are not photographs of patients.</span>
          </p>
          <div className="gallery-grid">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="card-lift gallery-card"
                >
                  <button
                    type="button"
                    className="gallery-open"
                    onClick={() => open(i)}
                    aria-label={`View larger: ${item.title}, before and after${item.isIllustrative ? ' (illustrative example)' : ''}`}
                  >
                    <BeforeAfter item={item} />
                    <span className="gallery-zoom" aria-hidden="true"><ZoomIn size={16} /></span>
                  </button>
                  <div style={{ padding: '18px 20px 20px' }}>
                    <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #eff8ff, #f0fdfa)', borderRadius: 50, padding: '3px 10px', fontSize: 11, color: '#0d9488', fontWeight: 600, marginBottom: 8 }}>
                      {item.category}
                    </div>
                    <h2 className="svc-card-title">{item.title}</h2>
                    <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.7, marginBottom: item.isIllustrative ? 12 : 0 }}>{item.description}</p>
                    {item.isIllustrative && <IllustrativeBadge />}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--section-y, 80px) 24px', background: 'linear-gradient(135deg, #0d1b2e, #1e3a5f)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Ready for Your Own Transformation?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Book a Consultation and let our experts design your perfect treatment plan.
          </p>
          <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={16} />
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-lightbox-title"
          >
            <div className="gallery-lightbox-panel" onClick={e => e.stopPropagation()}>
              <div className="gallery-lightbox-head">
                <div>
                  <div style={{ color: '#14b8a6', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{active.category}</div>
                  <h2 id="gallery-lightbox-title" style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>{active.title}</h2>
                </div>
                <button ref={closeBtnRef} type="button" onClick={close} aria-label="Close gallery viewer" className="gallery-lightbox-btn">
                  <X size={20} />
                </button>
              </div>
              <BeforeAfter item={active} large />
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.7, marginTop: 16 }}>{active.description}</p>
              {active.isIllustrative && (
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, lineHeight: 1.6, marginTop: 8, display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                  <Info size={13} style={{ flexShrink: 0, marginTop: 2 }} />
                  Illustrative example. This is not a photograph of a patient.
                </p>
              )}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 16 }}>
                <button type="button" onClick={() => step(-1)} aria-label="Previous treatment" className="gallery-lightbox-btn">
                  <ChevronLeft size={20} />
                </button>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }} aria-live="polite">
                  {(openIndex ?? 0) + 1} / {filtered.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next treatment" className="gallery-lightbox-btn">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-note { display: flex; gap: 8px; align-items: flex-start; color: #64748b; font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .gallery-grid { grid-template-columns: 1fr; gap: 20px; } }
        .gallery-card { background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.07); border: 1px solid #f1f5f9; display: flex; flex-direction: column; }
        .gallery-open { position: relative; display: block; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in; }
        .gallery-open:focus-visible { outline: 3px solid #0d9488; outline-offset: -3px; }
        .gallery-zoom { position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; border-radius: 50%; background: rgba(13,27,46,0.55); color: white; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.25s ease; }
        .gallery-open:hover .gallery-zoom, .gallery-open:focus-visible .gallery-zoom { opacity: 1; }
        .gallery-pair { position: relative; display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: white; }
        .gallery-pair-img { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #e5e7eb; }
        .gallery-pair-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gallery-tag { position: absolute; bottom: 8px; left: 8px; background: rgba(13,27,46,0.7); color: white; border-radius: 6px; padding: 2px 8px; font-size: 10px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; }
        .gallery-tag-after { background: linear-gradient(135deg, #1e7ae8, #0d9488); }
        .gallery-illustrative { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: #64748b; background: #f1f5f9; border-radius: 50px; padding: 3px 10px; }
        .gallery-lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 24px; overflow-y: auto; }
        .gallery-lightbox-panel { width: 100%; max-width: 900px; margin: auto; }
        .gallery-lightbox-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 14px; }
        .gallery-pair-large { gap: 8px; background: none; }
        .gallery-pair-large .gallery-pair-img { border-radius: 12px; }
        .gallery-pair-large .gallery-tag { font-size: 12px; padding: 3px 10px; bottom: 10px; left: 10px; }
        .gallery-lightbox-btn { flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .gallery-lightbox-btn:focus-visible { outline: 2px solid #14b8a6; outline-offset: 2px; }
        @media (max-width: 640px) {
          .gallery-lightbox { padding: 16px; }
          .gallery-pair-large { gap: 6px; }
          .gallery-pair-large .gallery-tag { font-size: 10px; padding: 2px 8px; bottom: 6px; left: 6px; }
        }
      `}</style>
    </div>
  );
}
