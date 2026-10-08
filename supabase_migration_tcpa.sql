-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- Adds TCPA consent fields to the leads table

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS tcpa_consent boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS consent_timestamp timestamptz,
  ADD COLUMN IF NOT EXISTS tcpa_text text;

-- Verify
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'leads'
  AND column_name IN ('tcpa_consent', 'consent_timestamp', 'tcpa_text');
