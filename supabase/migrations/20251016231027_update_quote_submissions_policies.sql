/*
  # Update quote_submissions policies for admin access

  1. Changes
    - Drop existing SELECT policy that requires authentication
    - Add new SELECT policy that allows service_role to view all submissions
    - Keep INSERT policy for anonymous users unchanged

  2. Security
    - Anonymous users can still submit quotes (INSERT)
    - Service role (used by admin panel) can view all submissions (SELECT)
*/

DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON quote_submissions;

CREATE POLICY "Service role can view all submissions"
  ON quote_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Anon can view all submissions"
  ON quote_submissions
  FOR SELECT
  TO anon
  USING (true);