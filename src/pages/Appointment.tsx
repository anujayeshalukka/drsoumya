import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CircleCheck as CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLocation } from 'react-router-dom';

const services = [
  'General Dentistry / Check-up',
  'Teeth Cleaning',
  'Dental Implants',
  'Root Canal Treatment',
  'Orthodontics & Braces',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Emergency Dental Care',
  'Other / Consultation',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM',
];

interface FormData {
  patient_name: string;
  phone: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  service: string;
  message: string;
}

const INITIAL: FormData = {
  patient_name: '', phone: '', email: '',
  preferred_date: '', preferred_time: '', service: '', message: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid #e5e7eb',
  borderRadius: 12,
  fontSize: 14,
  color: '#1a202c',
  background: '#f9fafb',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  boxSizing: 'border-box',
};

export default function Appointment() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (location.hash === '#appointment-form') {
      const formElement = document.getElementById('appointment-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 500);
      }
    }
  }, [location.hash]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.patient_name.trim() || !form.phone.trim() || !form.email.trim() || !form.preferred_date || !form.preferred_time || !form.service) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    const { error: dbError } = await supabase.from('appointments').insert([form]);
    setSubmitting(false);
    if (dbError) { setError('Something went wrong. Please try again.'); return; }
    setSuccess(true);
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
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(13,148,136,0.15) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'inline-block', background: 'rgba(13,148,136,0.2)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: 50, padding: '6px 18px', fontSize: 13, color: '#14b8a6', fontWeight: 600, marginBottom: 20 }}>
              Online Booking
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 5vw, 54px)', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: 18 }}>
              Book Your Appointment
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.7 }}>
              Schedule your visit in under 60 seconds. We'll confirm your appointment and send you a reminder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '80px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
            {/* Info sidebar */}
            <div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: '#0d1b2e', marginBottom: 20 }}>
                  What to Expect
                </h2>
                {[
                  { step: '1', title: 'Fill the Form', desc: 'Provide your details and preferred appointment time.' },
                  { step: '2', title: 'Confirmation Call', desc: 'We\'ll call/WhatsApp you within 2 hours to confirm.' },
                  { step: '3', title: 'Visit the Clinic', desc: 'Arrive 10 minutes early for your paperwork.' },
                  { step: '4', title: 'Your Healthy Smile', desc: 'Receive expert care from our specialist team.' },
                ].map(({ step, title, desc }) => (
                  <div key={step} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                    <div style={{
                      width: 36, height: 36,
                      background: 'linear-gradient(135deg, #1e7ae8, #0d9488)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: 14, fontWeight: 700, color: 'white',
                    }}>{step}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0d1b2e', fontSize: 15, marginBottom: 3 }}>{title}</div>
                      <div style={{ color: '#64748b', fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}

                <div style={{
                  background: 'linear-gradient(135deg, #e0f2fe, #ccfbf1)',
                  borderRadius: 16,
                  padding: '20px',
                  marginTop: 8,
                }}>
                  <div style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: 12, fontSize: 15 }}>Clinic Hours</div>
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
                    { day: 'Sunday', time: '10:00 AM – 2:00 PM' },
                  ].map(({ day, time }) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
                      <span style={{ color: '#475569' }}>{day}</span>
                      <span style={{ fontWeight: 600, color: '#0d9488' }}>{time}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, padding: '16px', background: '#fff7ed', borderRadius: 12, border: '1px solid #fed7aa' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 18 }}>🚨</span>
                    <span style={{ fontWeight: 700, color: '#9a3412', fontSize: 14 }}>Dental Emergency?</span>
                  </div>
                  <p style={{ color: '#7c2d12', fontSize: 13, marginBottom: 10 }}>Call us immediately for same-day emergency care.</p>
                  <a href="tel:+919876543210" style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    color: '#9a3412', fontWeight: 700, textDecoration: 'none', fontSize: 15,
                  }}>
                    <Phone size={16} />
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="form-container"
                style={{
                  background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
                  border: '2px solid #86efac',
                  borderRadius: 24,
                  padding: '56px 36px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={60} color="#16a34a" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: '#0d1b2e', marginBottom: 12 }}>
                  Appointment Requested!
                </h3>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 8, fontSize: 15 }}>
                  Thank you, your appointment request has been received.
                </p>
                <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 32, fontSize: 14 }}>
                  Our team will contact you within <strong>2 hours</strong> to confirm your slot. You'll also receive a WhatsApp confirmation.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn-primary"
                >
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              <motion.form
                id="appointment-form"
                className="form-container"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                onSubmit={handleSubmit}
                style={{
                  background: 'white',
                  borderRadius: 24,
                  padding: '40px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                  border: '1px solid #e5e7eb',
                }}
              >
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#0d1b2e', marginBottom: 6 }}>
                  Patient Details
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>All fields marked * are required.</p>

                {error && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 10, padding: '10px 14px', color: '#dc2626', fontSize: 14, marginBottom: 20 }}>
                    {error}
                  </div>
                )}

                <div className="form-grid">
                  <FieldWrap icon={<User size={15} color="#0d9488" />} label="Patient Name *">
                    <input ref={nameInputRef} name="patient_name" value={form.patient_name} onChange={handleChange} placeholder="Full name" style={inputStyle} />
                  </FieldWrap>
                  <FieldWrap icon={<Phone size={15} color="#0d9488" />} label="Phone Number *">
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" type="tel" style={inputStyle} />
                  </FieldWrap>
                </div>

                <FieldWrap icon={<Mail size={15} color="#0d9488" />} label="Email Address *" style={{ marginBottom: 16 }}>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" style={inputStyle} />
                </FieldWrap>

                <div className="form-grid">
                  <FieldWrap icon={<Calendar size={15} color="#0d9488" />} label="Preferred Date *">
                    <input
                      name="preferred_date" value={form.preferred_date} onChange={handleChange}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      style={inputStyle}
                    />
                  </FieldWrap>
                  <FieldWrap icon={<Clock size={15} color="#0d9488" />} label="Preferred Time *">
                    <select name="preferred_time" value={form.preferred_time} onChange={handleChange} style={inputStyle}>
                      <option value="">Select time...</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </FieldWrap>
                </div>

                <FieldWrap icon={<span style={{ fontSize: 14 }}>🦷</span>} label="Service Required *" style={{ marginBottom: 16 }}>
                  <select name="service" value={form.service} onChange={handleChange} style={inputStyle}>
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </FieldWrap>

                <FieldWrap icon={<MessageSquare size={15} color="#0d9488" />} label="Message / Notes" style={{ marginBottom: 28 }}>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Any specific concerns, allergies, or notes for the doctor..."
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </FieldWrap>

                <button type="submit" className="btn-primary" disabled={submitting} style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  opacity: submitting ? 0.75 : 1,
                  cursor: submitting ? 'wait' : 'pointer',
                  padding: '15px',
                  fontSize: 15,
                }}>
                  {submitting ? 'Submitting...' : (<><Calendar size={17} /> Confirm Appointment Request</>)}
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: '#94a3b8', marginTop: 14 }}>
                  By submitting, you agree to our Privacy Policy. We'll never share your data.
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-container {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

function FieldWrap({ icon, label, children, style }: { icon: React.ReactNode; label: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 7 }}>
        {icon} {label}
      </label>
      {children}
    </div>
  );
}
