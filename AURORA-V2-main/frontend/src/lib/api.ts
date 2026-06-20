// Central place for the backend API base URL.
// Set NEXT_PUBLIC_API_URL in your environment (e.g. on Render) to your
// deployed backend URL, such as https://aurora-backend-2f4v.onrender.com
// Falls back to localhost for local development.
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';