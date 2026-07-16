/*
# Dental Clinic Database Schema

## Summary
Creates two tables to handle patient inquiries and appointment requests for Dr. Soumya's Dental Clinic.

## New Tables

### appointments
Stores online appointment booking requests submitted by patients.
- id: unique identifier
- patient_name: full name of the patient
- phone: contact phone number
- email: patient email address
- preferred_date: requested appointment date
- preferred_time: preferred time slot
- service: dental service required
- message: additional notes or instructions
- status: appointment status (pending / confirmed / cancelled)
- created_at: timestamp of submission

### enquiries
Stores general enquiry/lead form submissions from website visitors.
- id: unique identifier
- full_name: visitor's full name
- phone: contact phone number
- email: visitor email address
- service_interested: dental service they're interested in
- message: detailed enquiry message
- created_at: timestamp of submission

## Security
- RLS enabled on both tables.
- Public (anon) can INSERT (submit forms) but not SELECT (to protect patient data).
- Anon users can insert so the clinic's website (using anon key) can accept submissions without auth.
*/

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  service text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_appointments" ON appointments;
CREATE POLICY "auth_select_appointments" ON appointments FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_appointments" ON appointments;
CREATE POLICY "auth_update_appointments" ON appointments FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_interested text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries" ON enquiries FOR SELECT
  TO authenticated USING (true);
