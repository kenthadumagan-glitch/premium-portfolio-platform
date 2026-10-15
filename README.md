# Premium Portfolio Platform

This project is a premium portfolio and private workspace scaffold built for a cinematic dark aesthetic with gold accents and a secure dashboard.

## Features
- Public portfolio homepage with hero, about, skills, projects, education, experience, resume, and contact form
- Secure auth flow using Supabase Auth (Sign In, Sign Up, Forgot Password)
- Protected dashboard routes for private pages
- Dashboard overview with profile, files, notes, messages, and settings
- File management interface and persistent storage patterns using Supabase Storage
- Message system with server-side validation and database insert logic
- Responsive dark design inspired by your existing CSS aesthetic

## Tech stack
- Next.js 14
- React 18
- TypeScript
- Supabase Auth + PostgreSQL + Storage

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```
3. Fill in your Supabase project values in `.env.local`.
4. Run the app:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`

## Required environment variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
```

## Supabase setup
1. Create a Supabase project.
2. In the SQL editor, run the SQL from `supabase/schema.sql`.
3. Enable Row Level Security on the public tables.
4. Create a private storage bucket called `private-files`.
5. Add at least one profile row using a signed-in user.

## Database schema
See `supabase/schema.sql` for the core tables and policies.

## Notes
- The service role key must never be exposed in browser code.
- Dashboard authentication is protected with route checks and Supabase session cookies.
- You can extend the portfolio content and dashboard data by editing the mock data in `lib/data.ts` and replacing it with real database queries later.
