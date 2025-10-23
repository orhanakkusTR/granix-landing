/*
  # Create Quote Submissions System

  1. New Tables
    - `quote_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `address` (text, required)
      - `zip_code` (text, required)
      - `material` (text, required)
      - `project_type` (text, required)
      - `comments` (text, optional)
      - `attachment_url` (text, optional) - stores Supabase storage URL
      - `created_at` (timestamptz, default now())

  2. Storage
    - Creates `quote-attachments` bucket for file uploads
    - Public access enabled for email links

  3. Security
    - Enable RLS on `quote_submissions` table
    - Allow anonymous inserts (for public form submissions)
    - Allow public reads for authenticated users only
*/

-- Create quote submissions table
CREATE TABLE IF NOT EXISTS quote_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  zip_code text NOT NULL,
  material text NOT NULL,
  project_type text NOT NULL,
  comments text DEFAULT '',
  attachment_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE quote_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit quotes (insert)
CREATE POLICY "Anyone can submit quotes"
  ON quote_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON quote_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create storage bucket for attachments
INSERT INTO storage.buckets (id, name, public)
VALUES ('quote-attachments', 'quote-attachments', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload files
CREATE POLICY "Anyone can upload quote attachments"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'quote-attachments');

-- Allow public read access to attachments
CREATE POLICY "Public read access for quote attachments"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'quote-attachments');