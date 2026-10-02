import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, ArrowRight, SearchCheck, BookOpen } from 'lucide-react';
import drSoumyaImg from '../assets/dr-soumya.jpeg';
import drNimmiImg from '../assets/dr-nimmi.webp';
import drSreedeviImg from '../assets/dr-sreedevi.png';
import drRehanaImg from '../assets/dr-rehana.webp';
import drVineethImg from '../assets/dr-vineeth.webp';
import drTonyImg from '../assets/dr-tony.png';
import clinicReceptionImg from '../assets/clinic-reception.webp';
import { useSeo } from '../lib/seo';

const team: { name: string; role: string; qual: string; img?: string; bio?: string; specialties?: string[] }[] = [
  {
    name: 'Dr. Soumya',
    role: 'Oral Medicine / Radiology Specialist',
    qual: 'BDS, MDS',
    img: drSoumyaImg,
  },
  {
    name: 'Dr. Nimmi M',
    role: 'Oral and Maxillofacial Surgery',
    qual: 'BDS, MDS',
    img: drNimmiImg,
  },
  {
    name: 'Dr. Sreedevi R G',
    role: 'Orthodontist',
    qual: 'BDS, MDS · KDC Number 21747',
    img: drSreedeviImg,
  },
  {
    name: 'Dr. Rehana Bind A',
    role: 'Periodontist',
    qual: 'BDS, MDS',
    img: drRehanaImg,
  },
  {
    name: 'Dr. Vineeth John',
    role: 'Oral and Maxillofacial Surgeon',
    qual: 'BDS, MDS',
    img: drVineethImg,
  },
  {
    name: 'Dr. Tony Joy',
    role: 'Prosthodontist',
    qual: 'BDS, MDS',
    img: drTonyImg,
  },
];



const values = [
  { Icon: Heart, title: 'Patient-First Always', desc: 'Every decision we make puts your comfort, safety, and well-being first.' },
  { Icon: Award, title: 'Clinical Excellence', desc: 'We pursue the highest standards of dental care through continuous education.' },
  { Icon: SearchCheck, title: 'Early Diagnosis', desc: 'Careful examination and assessment help us identify concerns early and plan the right treatment.' },
  { Icon: BookOpen, title: 'Patient Education', desc: 'We help you understand your oral health so you can make informed decisions about your care.' },
];

export default function About() {
  useSeo({
    title: "About Dr. Soumya's Dental Clinic | Maradu, Ernakulam",
    description: "Learn about Dr. Soumya's Dental Clinic in Maradu, Ernakulam, Kerala and our approach to comprehensive dental and oral healthcare.",
    path: '/about',
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
              Dr. Soumya's Dental Clinic is dedicated to transforming smiles and changing lives with compassionate dental care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'var(--section-y, 96px) 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 'var(--block-gap, 80px)' }}>
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
                text: "We envision a community where everyone has access to high-quality dental care and understands the importance of oral health. We strive to be the region's most trusted dental practice.",
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--stack-gap, 60px)', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={clinicReceptionImg}
                alt="Reception at Dr. Soumya's Dental Clinic, Maradu"
                style={{ width: '100%', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#0d1b2e', lineHeight: 1.3, marginBottom: 20 }}>
                A Clinic Built on Trust & Technology
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Our clinic is designed to create a calming, stress-free environment from the moment you walk in.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                At Dr Soumya’s Dental Clinic, we aim to give every patient care that is thorough, compassionate and grounded in evidence. With a special focus on Oral Medicine & Radiology, each visit begins with a careful assessment, so that your treatment is planned around your individual needs.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                Whether you need routine dental care, preventive advice, evaluation of an oral condition, TMJ care or oral cancer screening, we place early diagnosis and clear patient education at the centre of your care — helping you look after your oral health for the long term.
              </p>
              <Link to="/appointment#appointment-form" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Book a Visit <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'var(--section-y, 80px) 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--head-gap, 52px)' }}>
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
      <section style={{ padding: 'var(--section-y, 80px) 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 'var(--head-gap, 56px)' }}>
            <div>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)', borderRadius: 50, padding: '6px 16px', fontSize: 13, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                Meet the Experts
              </div>
            </div>
            <h2 className="section-title" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: '#0d1b2e' }}>
              Our Dental Specialists
            </h2>
            <p style={{ color: '#64748b', maxWidth: 520, margin: '24px auto 0', fontSize: 15, lineHeight: 1.7 }}>
              Our team is dedicated to providing you with the best possible dental care.
            </p>
          </motion.div>

          <div className="team-grid">
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
                  {member.img && <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />}
                </div>
                <div className="team-card-body">
                  <div className="team-card-name" style={{ color: '#0d1b2e', fontWeight: 700 }}>{member.name}</div>
                  <div style={{ color: '#0d9488', fontSize: 12, fontWeight: 500, marginBottom: 12 }}>{member.role}</div>
                  <div style={{ fontSize: 12, color: '#64748b', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Award size={12} color="#0d9488" />
                    {member.qual}
                  </div>
                  {member.bio && <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{member.bio}</p>}
                  {member.specialties && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
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
                  </div>}
                </div>
              </motion.div>
            ))}
          </div>
          <style>{`
            .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 28px; }
            .team-card-body { padding: 20px 22px 24px; }
            .team-card-name { font-size: 16px; }
            @media (max-width: 640px) {
              .team-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
              .team-card-body { padding: 14px 12px 16px; }
              .team-card-name { font-size: 14px; }
            }
          `}</style>
        </div>
      </section>


    </div>
  );
}
