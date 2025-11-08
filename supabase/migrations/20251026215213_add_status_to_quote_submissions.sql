/*
  # Add Status Column to Quote Submissions

  1. Changes
    - Add `status` column to `quote_submissions` table
      - Type: text
      - Default: 'Beklemede'
      - Options: 'Beklemede', 'Görüşülüyor', 'Tamamlandı'
  
  2. Security
    - Add policy for authenticated users to update status
    - Add policy for authenticated users to delete submissions
*/

-- Add status column
ALTER TABLE quote_submissions 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'Beklemede';

-- Add policy for authenticated users to update submissions
CREATE POLICY "Authenticated users can update submissions"
  ON quote_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add policy for authenticated users to delete submissions
CREATE POLICY "Authenticated users can delete submissions"
  ON quote_submissions
  FOR DELETE
  TO authenticated
  USING (true);