import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, Users, Zap, CircleCheck as CheckCircle, ArrowRight } from 'lucide-react';
import drSoumyaImg from '../assets/dr-soumya.png';
import interiorImg from '../assets/interior.png';

const team = [
  {
    name: 'Dr. Soumya Raghavan',
    role: 'Chief Dental Officer & Prosthodontist',
    qual: 'BDS, MDS (Prosthodontics) — 15+ Years',
    bio: 'Dr. Soumya is a highly accomplished prosthodontist with over 15 years of clinical excellence. She trained at leading dental institutions and specializes in smile makeovers, implants, and full-mouth rehabilitation. Her gentle approach and commitment to pain-free dentistry has earned her hundreds of loyal patients.',
    img: drSoumyaImg,
    specialties: ['Dental Implants', 'Smile Makeover', 'Full Mouth Rehabilitation', 'Veneers & Crowns'],
  },
  {
    name: 'Dr. Anju Krishnamurthy',
    role: 'Orthodontist',
    qual: 'BDS, MDS (Orthodontics) — 10+ Years',
    bio: 'Dr. Anju is our resident orthodontics specialist with a passion for creating perfectly aligned smiles. He is certified in both traditional braces and invisible aligners (Invisalign), treating patients from teens to adults.',
    img: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Traditional Braces', 'Invisible Aligners', 'Retainers', 'Pediatric Orthodontics'],
  },
  {
    name: 'Dr. Antony Joy',
    role: 'Endodontist',
    qual: 'BDS, MDS (Endodontics) — 8+ Years',
    bio: 'Dr. Preethi specializes in root canal treatments and endodontic surgery. Her precision technique and use of rotary endodontic instruments makes even complex root canals quick and painless.',
    img: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Root Canal Treatment', 'Endodontic Surgery', 'Dental Trauma', 'Pain Management'],
  },
  {
    name: 'Dr. Rimi Antony',
    role: 'Pediatric Dentist',
    qual: 'BDS, MDS (Pedodontics) — 9+ Years',
    bio: 'Dr. Suresh is beloved by his young patients for his patient, playful approach to dentistry. He specializes in making children feel safe and comfortable, building positive dental habits from an early age.',
    img: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Pediatric Check-ups', 'Sealants & Fluoride', 'Space Maintainers', 'Habit Breaking'],
  },
];



const values = [
  { Icon: Heart, title: 'Patient-First Always', desc: 'Every decision we make puts your comfort, safety, and well-being first.' },
  { Icon: Award, title: 'Clinical Excellence', desc: 'We pursue the highest standards of dental care through continuous education.' },
  { Icon: Zap, title: 'Innovation-Driven', desc: 'We invest in the latest technology to deliver better outcomes for you.' },
  { Icon: Users, title: 'Community Focused', desc: 'We actively support dental health education and community wellness programs.' },
];

export default function About() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 40%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              About Our Clinic
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 20 }}>
              Dedicated to Your Best Smile
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, lineHeight: 1.7 }}>
              Since 2008, Dr. Soumya's Dental Clinic has been transforming smiles and changing lives with compassionate, world-class dental care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '96px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 80 }}>
            {[
              {
                label: 'Our Mission',
                title: 'Delivering Excellence in Every Smile',
                text: 'Our mission is to provide exceptional, personalized dental care that improves oral health and transforms lives. We are committed to using advanced technology, evidence-based treatments, and genuine compassion to ensure every patient leaves with a healthier, more confident smile.',
                gradient: 'linear-gradient(135deg, #eff8ff, #e0f2fe)',
                borderColor: '#93c5fd',
              },
              {
                label: 'Our Vision',
                title: 'A Healthier, Happier Community',
                text: "We envision a community where everyone has access to high-quality dental care and understands the importance of oral health. We strive to be the region's most trusted dental practice, recognized for our exceptional outcomes, patient satisfaction, and commitment to continuous innovation.",
                gradient: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
                borderColor: '#6ee7b7',
              },
            ].map(card => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  background: card.gradient,
                  border: `1px solid ${card.borderColor}`,
                  borderRadius: 24,
                  padding: '36px',
                }}
              >
                <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.15)', borderRadius: 50, padding: '5px 14px', fontSize: 12, color: '#0d9488', fontWeight: 700, marginBottom: 14, letterSpacing: 1, textTransform: 'uppercase' as const }}>
                  {card.label}
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#0d1b2e', marginBottom: 14, lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 14 }}>{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Clinic intro */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={interiorImg}
                alt="Modern dental clinic interior"
                style={{ width: '100%', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#0d1b2e', lineHeight: 1.3, marginBottom: 20 }}>
                A Clinic Built on Trust & Technology
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Our state-of-the-art facility is designed to create a calming, stress-free environment from the moment you walk in. We've invested heavily in the latest dental equipment — from 3D intraoral scanners to laser treatment systems — so you receive the most precise, efficient care possible.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                {[
                  '3D digital intraoral scanning',
                  'Hospital-grade sterilization protocols',
                  'Dedicated children\'s treatment room',
                  'Comfortable patient lounges',
                  'On-site dental laboratory',
                  'Cashless payment & insurance accepted',
                ].map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CheckCircle size={15} color="#0d9488" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#475569', fontSize: 14 }}>{p}</span>
                  </div>
                ))}
              </div>
              <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Book a Visit <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 className="section-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: '#0d1b2e' }}>
              Our Core Values
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-lift"
                style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: 20,
                  padding: '28px',
                  textAlign: 'center',
                }}
              >
                <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #eff8ff, #f0fdfa)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Icon size={24} color="#1e7ae8" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0d1b2e', marginBottom: 8 }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                Meet the Experts
              </div>
            </div>
            <h2 className="section-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#0d1b2e' }}>
              Our Dental Specialists
            </h2>
            <p style={{ color: '#64748b', maxWidth: 520, margin: '24px auto 0', fontSize: 15, lineHeight: 1.7 }}>
              Our team of experienced specialists is dedicated to providing you with the best possible dental care.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-lift"
                style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', background: '#e5e7eb', overflow: 'hidden' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(13,27,46,0.8) 0%, transparent 100%)',
                    padding: '40px 20px 16px',
                  }}>
                    <div style={{ color: 'white', fontWeight: 700, fontSize: 16 }}>{member.name}</div>
                    <div style={{ color: '#14b8a6', fontSize: 12, fontWeight: 500 }}>{member.role}</div>
                  </div>
                </div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Award size={12} color="#0d9488" />
                    {member.qual}
                  </div>
                  <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{member.bio}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {member.specialties.map(s => (
                      <span key={s} style={{
                        background: 'linear-gradient(135deg, #eff8ff, #f0fdfa)',
                        color: '#0d9488',
                        borderRadius: 50,
                        padding: '3px 10px',
                        fontSize: 11,
                        fontWeight: 600,
                        border: '1px solid rgba(13,148,136,0.2)',
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}
