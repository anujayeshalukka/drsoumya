import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '10 Habits That Are Secretly Harming Your Teeth',
    excerpt: 'From ice chewing to teeth grinding, discover the everyday habits that could be silently damaging your enamel and how to break them for good.',
    category: 'Oral Health Tips',
    date: 'December 10, 2024',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#eff8ff',
  },
  {
    id: 2,
    title: 'Dental Implants vs. Dentures: Which is Right for You?',
    excerpt: 'A comprehensive comparison of dental implants and traditional dentures — weighing cost, comfort, longevity, and lifestyle factors to help you make the best decision.',
    category: 'Dental Implants',
    date: 'November 28, 2024',
    readTime: '7 min read',
    img: 'https://images.pexels.com/photos/3779695/pexels-photo-3779695.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#f0fdfa',
  },
  {
    id: 3,
    title: 'How Often Should You Replace Your Toothbrush?',
    excerpt: "Most people keep their toothbrush far too long. Learn the right replacement schedule, signs it's time for a new one, and how to choose the best brush for your needs.",
    category: 'Oral Hygiene',
    date: 'November 15, 2024',
    readTime: '4 min read',
    img: 'https://images.pexels.com/photos/6502305/pexels-photo-6502305.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fff7ed',
  },
  {
    id: 4,
    title: 'Is Teeth Whitening Safe? Everything You Need to Know',
    excerpt: 'Dispelling myths about teeth whitening — from at-home strips to professional in-office treatments. Find out what works, what\'s safe, and what to avoid.',
    category: 'Cosmetic Dentistry',
    date: 'October 30, 2024',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fdf4ff',
  },
  {
    id: 5,
    title: 'Your Child\'s First Dental Visit: A Parent\'s Complete Guide',
    excerpt: 'When should your child first see a dentist, what to expect, and how to create positive dental experiences that last a lifetime. Tips every parent needs.',
    category: 'Pediatric Dentistry',
    date: 'October 15, 2024',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#f0fdf4',
  },
  {
    id: 6,
    title: 'Understanding Gum Disease: Early Signs & Prevention',
    excerpt: 'Gum disease affects millions of people silently. Learn to spot the early warning signs, understand the stages from gingivitis to periodontitis, and how to prevent it.',
    category: 'Periodontal Health',
    date: 'September 28, 2024',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/3762469/pexels-photo-3762469.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#fff1f2',
  },
];

const categories = ['All', 'Oral Health Tips', 'Dental Implants', 'Cosmetic Dentistry', 'Pediatric Dentistry', 'Oral Hygiene', 'Periodontal Health'];

export default function Blog() {
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 60% 50%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              Dental Health Blog
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Tips for a Healthier Smile
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7 }}>
              Expert advice, oral health tips, and dental care guides from Dr. Soumya's team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ padding: '32px 24px 0', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', paddingBottom: 20 }}>
          {categories.map((cat, i) => (
            <button
              key={cat}
              style={{
                padding: '8px 18px',
                borderRadius: 50,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
                background: i === 0 ? 'linear-gradient(135deg, #1e7ae8, #0d9488)' : 'white',
                color: i === 0 ? 'white' : '#64748b',
                border: i === 0 ? 'none' : '1px solid #e5e7eb',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-lift"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              background: 'white',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 4px 25px rgba(0,0,0,0.07)',
              border: '1px solid #f1f5f9',
              marginBottom: 40,
            }}
          >
            <div style={{ aspectRatio: '16/9', background: '#e5e7eb', overflow: 'hidden' }}>
              <img src={posts[0].img} alt={posts[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: posts[0].color, borderRadius: 50, padding: '5px 12px', fontSize: 12, color: '#0d9488', fontWeight: 600, marginBottom: 16 }}>
                <Tag size={11} />
                {posts[0].category}
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, color: '#0d1b2e', lineHeight: 1.3, marginBottom: 14 }}>
                {posts[0].title}
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 14, marginBottom: 20 }}>{posts[0].excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 12 }}>
                  <Calendar size={13} /> {posts[0].date}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#94a3b8', fontSize: 12 }}>
                  <Clock size={13} /> {posts[0].readTime}
                </div>
              </div>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: '#1e7ae8', fontWeight: 600, fontSize: 14,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}>
                Read Full Article <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Rest of posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-lift"
                style={{
                  background: 'white',
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div style={{ aspectRatio: '16/9', background: '#e5e7eb', overflow: 'hidden' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                    onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '22px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: post.color, borderRadius: 50, padding: '4px 10px', fontSize: 11, color: '#0d9488', fontWeight: 600, marginBottom: 12 }}>
                    <Tag size={10} />
                    {post.category}
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 17, color: '#0d1b2e', lineHeight: 1.4, marginBottom: 10 }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#94a3b8', fontSize: 11 }}>
                        <Calendar size={11} /> {post.date.split(',')[0]}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#94a3b8', fontSize: 11 }}>
                        <Clock size={11} /> {post.readTime}
                      </div>
                    </div>
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#1e7ae8', fontWeight: 600, fontSize: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      Read <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0d1b2e, #1e3a5f)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: 'white', marginBottom: 14 }}>
            Subscribe to Dental Health Tips
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, marginBottom: 28 }}>
            Get monthly expert advice, promotions, and oral health updates delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                padding: '13px 20px',
                borderRadius: 50,
                border: '1.5px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontSize: 14,
                flex: 1,
                minWidth: 220,
                backdropFilter: 'blur(8px)',
              }}
            />
            <button className="btn-primary" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
