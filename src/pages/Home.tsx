import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Clock, ChevronDown, CircleCheck as CheckCircle, Phone, Calendar, ArrowLeft, ArrowRight, MapPin, Zap, Heart, Smile, Stethoscope, ShieldCheck } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import video1 from '../assets/video1.mp4';
import drSoumyaImg from '../assets/dr-soumya.jpeg';
import { useSeo } from '../lib/seo';
import { services } from '../data/services';

const MotionLink = motion.create(Link);


const whyChoose = [
  { Icon: Award, title: 'Qualified & Passionate', desc: 'Dr. Soumya is a BDS, MDS-qualified Oral Medicine / Radiology Specialist.' },
  { Icon: Zap, title: 'Advanced Technology', desc: 'Digital X-rays for detailed assessment and precise diagnosis.' },
  { Icon: Heart, title: 'Pain-Free Dentistry', desc: 'Gentle dental techniques to help anxious patients feel comfortable.' },
  { Icon: Smile, title: 'Family-Friendly', desc: 'A warm, welcoming environment for patients of all ages.' },
  { Icon: Stethoscope, title: 'Comprehensive Care', desc: 'Comprehensive diagnosis and personalised treatment for dental and oral health.' },
  { Icon: ShieldCheck, title: 'Preventive Dentistry', desc: 'Preventive care including oral hygiene guidance, fluoride and pit and fissure sealants.' },
];

const faqs = [
  { q: 'How often should I visit the dentist?', a: 'We recommend visiting every 6 months for a routine check-up and cleaning. Regular visits help detect issues early and keep your smile healthy.' },
  { q: 'Are dental implants painful?', a: 'Dental implant procedures are performed under local anesthesia, so you feel minimal discomfort. Post-procedure soreness is manageable with prescribed medication.' },
  { q: 'How long does teeth whitening last?', a: 'Professional teeth whitening results typically last 1–3 years depending on your diet and oral habits. Avoid staining foods and beverages for longer-lasting results.' },
  { q: 'How do I prepare my child for their first dental visit?', a: 'Talk positively about the dentist, read books about dental visits, and avoid using dental trips as a threat.' },
];

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= end) { setCount(end); clearInterval(interval); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function Home() {
  useSeo({
    title: "Dr. Soumya's Dental Clinic | Dentist in Maradu, Ernakulam, Kerala",
    description: "Dr. Soumya's Dental Clinic in Maradu, Ernakulam, Kerala, provides comprehensive dental care including root canal treatment, dental implants, orthodontics, periodontal care, paediatric dentistry, oral diagnosis and preventive dentistry.",
    path: '/',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Services carousel: 4 cards per view on desktop, 2 on tablet, 1 on mobile.
  const getServicesPerView = () => (window.innerWidth <= 1024 ? 2 : 4);
  const [servicesPerView, setServicesPerView] = useState(getServicesPerView);
  const [servicesStart, setServicesStart] = useState(0);
  const servicesTouchX = useRef<number | null>(null);
  const servicesSwiped = useRef(false);
  const servicesMaxIndex = services.length - servicesPerView;
  const servicesIndex = Math.min(servicesStart, servicesMaxIndex);
  const slideServices = (dir: number) =>
    setServicesStart(Math.min(Math.max(servicesIndex + dir * servicesPerView, 0), servicesMaxIndex));
  useEffect(() => {
    const onResize = () => setServicesPerView(getServicesPerView());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 40%, #0d4a4a 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Animated background particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle float-slow-animation" style={{
            width: [80, 120, 60, 100, 70, 90][i],
            height: [80, 120, 60, 100, 70, 90][i],
            left: `${[8, 85, 30, 70, 15, 55][i]}%`,
            top: `${[15, 10, 70, 60, 45, 80][i]}%`,
            animationDelay: `${i * 1.2}s`,
            opacity: 0.06,
          }} />
        ))}

        {/* Gradient orbs */}
        <div style={{
          position: 'absolute', width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)',
          top: '-200px', right: '-100px', borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(30,122,232,0.15) 0%, transparent 70%)',
          bottom: '-150px', left: '-100px', borderRadius: '50%',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 24px var(--hero-inner-bottom, 60px)', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--stack-gap, 60px)',
            alignItems: 'center',
          }}>
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(13,148,136,0.2)',
                border: '1px solid rgba(20,184,166,0.35)',
                borderRadius: 50,
                padding: '8px 18px',
                marginBottom: 24,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#14b8a6' }} className="pulse-ring" />
                <span style={{ color: '#5eead4', fontSize: 13, fontWeight: 500 }}>Now Accepting New Patients</span>
              </div>

              <h1 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(38px, 5vw, 64px)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: 20,
              }}>
                Your Healthy<br />
                <span style={{ color: '#14b8a6' }}>Smile</span> Starts Here
              </h1>

              <p style={{
                fontSize: 17,
                color: 'rgba(255,255,255,0.72)',
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 480,
              }}>
                Experience dental care at Dr. Soumya's Clinic. From routine check-ups to complete smile makeovers — with a gentle, patient-first approach.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 'var(--block-gap, 48px)' }}>
                <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <Calendar size={16} />
                  Book Appointment
                </Link>
                <a
                  href={`https://wa.me/918138887081?text=${encodeURIComponent('Hello, I would like to know more about your dental services and book an appointment.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

            </motion.div>

            {/* Right — 3D floating card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
                {/* Main image card */}
                <div style={{
                  borderRadius: 28,
                  overflow: 'hidden',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                  aspectRatio: '1',
                  background: 'linear-gradient(135deg, #1e3a5f, #0d4a4a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <video
                    src={video1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                  />
                  {/* Overlay gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(13,27,46,0.5) 0%, transparent 60%)',
                  }} />
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'rgba(255,255,255,0.45)', fontSize: 12,
        }}>
          <span>Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #1e7ae8, #0d9488)', padding: 'var(--section-y-sm, 64px) 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}>
            {[
              { end: 100, suffix: '%', label: 'Commitment to Care' },
              { end: 5, suffix: '+', label: 'Dental Specialists' },
              { end: 24, label: 'Dental Services' },
            ].map(stat => (
              <div key={stat.label} className="stat-box">
                <div style={{ fontSize: 42, fontWeight: 700, color: 'white', lineHeight: 1.1, marginBottom: 8 }}>
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--stack-gap, 64px)',
            alignItems: 'center',
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
                <img
                  src={drSoumyaImg}
                  alt="Dr. Soumya consulting patient"
                  style={{ width: '100%', maxHeight: '650px', objectFit: 'cover', objectPosition: 'top center', borderRadius: 24, display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 24, left: 24,
                  background: 'white',
                  borderRadius: 16,
                  padding: '14px 20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 44, height: 44,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1e7ae8, #0d9488)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Award size={20} color="white" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0d1b2e', fontSize: 15 }}>Dr. Soumya</div>
                      <div style={{ color: '#0d9488', fontSize: 12 }}>BDS, MDS — Oral Medicine / Radiology Specialist</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                About Our Clinic
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 700,
                color: '#0d1b2e',
                lineHeight: 1.25,
                marginBottom: 20,
              }}>
                Where Dental Excellence Meets Compassionate Care
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Dr Soumya’s Dental Clinic is a patient-focused dental care centre dedicated to providing comprehensive, compassionate and evidence-based oral healthcare in a comfortable and welcoming environment. With a special focus on Oral Medicine & Radiology, our clinic provides careful diagnosis and personalised treatment planning for a wide range of oral and dental conditions. From routine dental care and preventive services to oral disease evaluation, TMJ care and oral cancer screening, we strive to deliver quality care with a strong emphasis on early diagnosis, patient education and long-term oral health.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  'Your Oral Health, Our Priority.',
                  'Comprehensive Health and Hygiene',
                  'Latest Dental Technologies',
                  'Expert Dental Care',

                  
                ].map(point => (
                  <div key={point} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={16} color="#0d9488" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#475569', fontSize: 14 }}>{point}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: '#1e7ae8',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 15,
              }}>
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--head-gap, 64px)' }}
          >
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                What We Offer
              </div>
            </div>
            <h2 className="section-title" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              color: '#0d1b2e',
              marginBottom: 16,
            }}>
              Our Dental Services
            </h2>
            <p style={{ color: '#64748b', maxWidth: 560, margin: '24px auto 0', fontSize: 15, lineHeight: 1.7 }}>
              Comprehensive dental care for your entire family — from preventive treatments to advanced restorative and cosmetic procedures.
            </p>
          </motion.div>

          <div
            className="services-carousel"
            onScroll={e => { e.currentTarget.scrollLeft = 0; }}
            onTouchStart={e => { servicesTouchX.current = e.touches[0].clientX; servicesSwiped.current = false; }}
            onTouchEnd={e => {
              if (servicesTouchX.current === null) return;
              const dx = e.changedTouches[0].clientX - servicesTouchX.current;
              if (Math.abs(dx) > 50) {
                servicesSwiped.current = true;
                slideServices(dx < 0 ? 1 : -1);
              }
              servicesTouchX.current = null;
            }}
            onClickCapture={e => {
              // A swipe should slide the carousel, not open the card it ended on.
              if (servicesSwiped.current) {
                e.preventDefault();
                e.stopPropagation();
                servicesSwiped.current = false;
              }
            }}
          >
          <div
            className="services-carousel-track"
            style={{ transform: `translateX(calc(-${servicesIndex} * (100% + var(--carousel-gap)) / ${servicesPerView}))` }}
          >
            {services.map((svc, i) => (
              <MotionLink
                key={svc.title}
                to="/services"
                tabIndex={i >= servicesIndex && i < servicesIndex + servicesPerView ? 0 : -1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="service-card svc-card home-service-card"
              >
                <div className="svc-card-icon">{svc.icon}</div>
                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-desc home-service-desc" style={{ marginBottom: 16 }}>{svc.desc}</p>
                <span className="home-service-more" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  color: '#0d9488', fontWeight: 600, fontSize: 13,
                }}>
                  Learn more <ArrowRight size={13} />
                </span>
              </MotionLink>
            ))}
          </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
            <button type="button" className="carousel-btn" aria-label="Previous services" onClick={() => slideServices(-1)} disabled={servicesIndex === 0}>
              <ArrowLeft size={18} />
            </button>
            <button type="button" className="carousel-btn" aria-label="Next services" onClick={() => slideServices(1)} disabled={servicesIndex >= servicesMaxIndex}>
              <ArrowRight size={18} />
            </button>
          </div>
          <style>{`
            .services-carousel { overflow: hidden; padding: 12px 0 32px; margin-top: -12px; touch-action: pan-y; }
            .services-carousel-track { --carousel-gap: 24px; display: flex; gap: var(--carousel-gap); transition: transform 0.5s ease; }
            .services-carousel-track > * { flex: 0 0 calc((100% - 3 * var(--carousel-gap)) / 4); }
            @media (max-width: 1024px) { .services-carousel-track > * { flex-basis: calc((100% - var(--carousel-gap)) / 2); } }
            @media (max-width: 640px) {
              .services-carousel-track { --carousel-gap: 12px; }
              .home-service-card .home-service-desc { -webkit-line-clamp: 2; line-clamp: 2; }
            }
            .home-service-card { display: block; text-decoration: none; color: inherit; }
            .home-service-card:hover, .home-service-card:focus-visible { translate: 0 -6px; background: #fbfefe; box-shadow: 0 16px 40px rgba(13,148,136,0.14); }
            .home-service-card:focus-visible { outline: 2px solid #0d9488; outline-offset: -2px; }
            .home-service-card:focus-visible::before { opacity: 1; }
            .home-service-desc { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; line-clamp: 3; overflow: hidden; }
            .home-service-more { transition: color 0.25s ease; }
            .home-service-more svg { transition: transform 0.25s ease; }
            .home-service-card:hover .home-service-more, .home-service-card:focus-visible .home-service-more { color: #0f766e !important; }
            .home-service-card:hover .home-service-more svg, .home-service-card:focus-visible .home-service-more svg { transform: translateX(4px); }
            .carousel-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid #e2e8f0; background: white; color: #0d9488; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.06); transition: all 0.25s ease; }
            .carousel-btn:hover:not(:disabled) { background: linear-gradient(135deg, #1e7ae8, #0d9488); color: white; border-color: transparent; }
            .carousel-btn:disabled { opacity: 0.4; cursor: default; }
          `}</style>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: 'linear-gradient(135deg, #f0f9ff, #f0fdfa)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--head-gap, 64px)' }}
          >
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                Why Choose Us
              </div>
            </div>
            <h2 className="section-title" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              color: '#0d1b2e',
            }}>
              The Soumya Difference
            </h2>
            <p style={{ color: '#64748b', maxWidth: 540, margin: '24px auto 0', fontSize: 15, lineHeight: 1.7 }}>
              We're committed to providing the highest quality dental care in a comfortable, welcoming environment.
            </p>
          </motion.div>

          <div className="why-choose-grid">
            {whyChoose.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-lift"
                style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: '30px 28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: 18,
                  alignItems: 'flex-start',
                  border: '1px solid rgba(13,148,136,0.08)',
                }}
              >
                <div style={{
                  width: 52, height: 52,
                  background: 'linear-gradient(135deg, #eff8ff, #f0fdfa)',
                  borderRadius: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}>
                  <Icon size={22} color="#1e7ae8" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0d1b2e', marginBottom: 8 }}>{title}</h3>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <style>{`
            .why-choose-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; gap: 28px; }
            @media (max-width: 1024px) { .why-choose-grid { grid-template-columns: repeat(2, 1fr); } }
            @media (max-width: 640px) { .why-choose-grid { grid-template-columns: 1fr; gap: 20px; } }
          `}</style>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: 'var(--head-gap, 56px)' }}
          >
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                FAQ
              </div>
            </div>
            <h2 className="section-title" style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              color: '#0d1b2e',
            }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="faq-item"
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '22px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#0d1b2e' }}>{faq.q}</span>
                  <div style={{
                    width: 32, height: 32,
                    background: openFaq === i ? 'linear-gradient(135deg, #1e7ae8, #0d9488)' : '#f1f5f9',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}>
                    <ChevronDown
                      size={16}
                      color={openFaq === i ? 'white' : '#64748b'}
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                </button>
                <div style={{
                  maxHeight: openFaq === i ? '200px' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                }}>
                  <p style={{ padding: '0 0 22px', color: '#64748b', lineHeight: 1.7, fontSize: 15 }}>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ──────────────────────────────────── */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--stack-gap, 64px)',
            alignItems: 'center',
          }}>
            {/* Contact info */}
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                Get In Touch
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#0d1b2e',
                lineHeight: 1.3,
                marginBottom: 20,
              }}>
                Ready for Your Best Smile?
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>
                Have questions or want to book an appointment? We're here to help. Reach out via the form, call us, or message us on WhatsApp.
              </p>

              {[
                { Icon: Phone, label: 'Call Us', value: '+91 81388 87081', href: 'tel:+918138887081' },
                { Icon: MapPin, label: 'Visit Us', value: 'Johns Arcade, Opp. PS Mission Hospital, Kundannoor, Maradu, Ernakulam, Kerala 682304', href: 'https://maps.app.goo.gl/vYQXXwXyDi3qpxH97' },
                { Icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:30 AM – 7:30 PM | Sun: Appointments only', href: '#' },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                  marginBottom: 24, textDecoration: 'none',
                }}>
                  <div style={{
                    width: 48, height: 48,
                    background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)',
                    borderRadius: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color="#0d9488" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0d1b2e', fontSize: 14, marginBottom: 3 }}>{label}</div>
                    <div style={{ color: '#64748b', fontSize: 14 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Enquiry form */}
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section style={{
        padding: 'var(--section-y, 80px) 24px',
        background: 'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 50%, #0d4a4a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(13,148,136,0.15) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
          }}>
            Your Perfect Smile is One Click Away
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            Book your appointment today and take the first step towards a healthier, more confident smile.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Calendar size={16} />
              Book Appointment Now
            </Link>
            <a
              href={`https://wa.me/918138887081?text=${encodeURIComponent('Hello, I would like to know more about your dental services and book an appointment.')}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
