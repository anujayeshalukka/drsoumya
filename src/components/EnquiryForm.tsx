import { useState } from 'react';
import { Send, CircleCheck as CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const services = [
  'General Dentistry',
  'Teeth Cleaning',
  'Dental Implants',
  'Root Canal Treatment',
  'Orthodontics & Braces',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Pediatric Dentistry',
  'Emergency Dental Care',
  'Other',
];

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  service_interested: string;
  message: string;
}

const INITIAL: FormData = { full_name: '', phone: '', email: '', service_interested: '', message: '' };

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.phone.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    const { error: dbError } = await supabase.from('enquiries').insert([form]);
    setSubmitting(false);
    if (dbError) { setError('Something went wrong. Please try again.'); return; }
    setSuccess(true);
    setForm(INITIAL);
  };

  if (success) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
        border: '2px solid #86efac',
        borderRadius: 20,
        padding: '48px 32px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: 16 }}>
          <CheckCircle size={52} color="#16a34a" style={{ margin: '0 auto' }} />
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#0d1b2e', marginBottom: 10 }}>
          Enquiry Sent Successfully!
        </h3>
        <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>
          Thank you for reaching out! Our team will get back to you within 2–4 hours during business hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="btn-primary"
          style={{ background: 'linear-gradient(135deg, #16a34a, #0d9488)' }}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-container" style={{
      background: 'white',
      borderRadius: 24,
      padding: '36px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
      border: '1px solid #e5e7eb',
    }}>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#0d1b2e', marginBottom: 8 }}>
        Send Us an Enquiry
      </h3>
      <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>
        Fill out the form below and we'll get back to you shortly.
      </p>

      {error && (
        <div style={{
          background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 10,
          padding: '10px 14px', color: '#dc2626', fontSize: 14, marginBottom: 20,
        }}>{error}</div>
      )}

      <div className="enquiry-form-grid">
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
            Full Name <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            name="full_name" value={form.full_name} onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
            Phone <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            name="phone" value={form.phone} onChange={handleChange}
            placeholder="+91 XXXXX XXXXX" type="tel"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
          Email Address <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <input
          name="email" value={form.email} onChange={handleChange}
          placeholder="your@email.com" type="email"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
          Service Interested In
        </label>
        <select name="service_interested" value={form.service_interested} onChange={handleChange} style={inputStyle}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
          Message <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about your dental concerns or questions..."
          rows={4}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
        />
      </div>

      <button type="submit" className="btn-primary" disabled={submitting} style={{
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        opacity: submitting ? 0.75 : 1,
        cursor: submitting ? 'wait' : 'pointer',
      }}>
        {submitting ? 'Sending...' : (<><Send size={16} /> Send Enquiry</>)}
      </button>

      <style>{`
        .enquiry-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        @media (max-width: 640px) {
          .enquiry-form-grid {
            grid-template-columns: 1fr;
          }
          .form-container {
            padding: 20px !important;
          }
        }
      `}</style>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  border: '1.5px solid #e5e7eb',
  borderRadius: 10,
  fontSize: 14,
  color: '#1a202c',
  background: '#f9fafb',
  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
  boxSizing: 'border-box',
};
