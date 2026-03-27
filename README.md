# ClientFlow Portal

ClientFlow Portal is a production-style SaaS demo for service-based businesses that want a premium, white-label customer portal. The demo includes a strong marketing landing page, role-based client/admin workspaces, Supabase-ready auth and schema assets, seeded demo data, branding controls, exports, and a polished UI built for sales demos.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style component setup
- Lucide icons
- Supabase auth/database/storage-ready schema
- React Hook Form + Zod
- TanStack Table
- Recharts
- Framer Motion

## Highlights

- Premium responsive landing page with hero, feature grid, testimonials, and CTA flow
- Public auth pages with sign in, sign up, forgot password, and demo login buttons
- Client portal with dashboard, requests, projects, documents, invoices, messages, knowledge base, and settings
- Admin portal with KPIs, client management, request board, project oversight, invoice management, document management, knowledge base controls, branding settings, and audit log
- Cookie-backed demo auth and branding so the UI can be demonstrated even before Supabase is wired
- Supabase schema with foreign keys, timestamps, RLS policies, and storage bucket creation
- Seed script that provisions demo users and populates realistic records

## Demo Credentials

- Client
  - Email: `sarah.chen@amandelstudio.com`
  - Password: `ClientFlow123!`
- Admin
  - Email: `olivia.morris@clientflowportal.com`
  - Password: `AdminFlow123!`

## Getting Started

1. Install Node.js 18.18+ or 20+.
2. Copy `.env.example` to `.env.local`.
3. Fill in your Supabase values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Install dependencies:

```bash
npm install
```

5. Start the app:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000).

## Supabase Setup

1. Create a new Supabase project.
2. Run the SQL in [`supabase/schema.sql`](./supabase/schema.sql).
3. Ensure your `.env.local` includes the service role key.
4. Seed demo data:

```bash
npm run seed:demo
```

The seed script creates auth users for the demo accounts when they do not already exist, then upserts companies, profiles, requests, projects, invoices, documents, articles, notifications, activity logs, and branding defaults.

## Render Deployment

This repo now includes a ready-to-use Render blueprint in [`render.yaml`](./render.yaml).

Recommended Render setup:

- Service type: `Web Service`
- Runtime: `Node`
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Health check path: `/api/health`
- Node version: `20.20.2`

Important note:

- The blueprint is set to `plan: free` so it is safe to create without forcing a paid tier.
- For a public demo embedded or linked from your site, `Starter` is usually the better choice because it avoids the cold-start behavior common on free web services.

Suggested Render env vars:

- `NEXT_PUBLIC_PORTAL_NAME`
- `NEXT_PUBLIC_COMPANY_NAME`
- `NEXT_PUBLIC_LOGO_PLACEHOLDER`
- `NEXT_PUBLIC_ACCENT_HSL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` if you want live Supabase auth/data
- `SUPABASE_SERVICE_ROLE_KEY` only if you plan to run the seed script against Render-side jobs or protected server tasks

## Branding

The demo supports fast rebranding through:

- `NEXT_PUBLIC_PORTAL_NAME`
- `NEXT_PUBLIC_COMPANY_NAME`
- `NEXT_PUBLIC_LOGO_PLACEHOLDER`
- `NEXT_PUBLIC_ACCENT_HSL`

Admin users can also update branding in the UI. In demo mode those changes persist through cookies so you can showcase white-label flexibility without needing database persistence first.

## Folder Guide

```text
clientflow-portal/
  app/
    (marketing)/        public marketing pages
    (auth)/             login, signup, forgot password
    (portal)/portal/    protected client/admin application routes
    api/                auth, exports, branding, request submission, downloads
  components/
    dashboard/          KPIs, charts, activity widgets
    forms/              validated forms with RHF + Zod
    layout/             headers, sidebar, shell, search, notifications
    marketing/          landing page sections
    shared/             status badges, timelines, browsers, helpers
    tables/             TanStack Table wrappers
    ui/                 reusable UI primitives
  lib/
    auth.ts             demo session helpers and guards
    branding.ts         white-label config reader
    demo-data.ts        seeded front-end demo content
    navigation.ts       portal navigation models
    supabase/           client/server helpers
  scripts/
    seed-demo.ts        Supabase seed script
  supabase/
    schema.sql          SQL schema + RLS policies
```

## Notes

- Request submission, branding changes, exports, downloads, impersonation, and demo auth all work in demo mode.
- To convert the app from demo-backed UI to live persistence, start by wiring the API routes in `app/api/*` to Supabase inserts/updates and fetching data from Supabase inside the portal pages.
- The document download route intentionally returns lightweight placeholder content unless you connect real storage files.

## Suggested Next Steps

1. Replace demo reads in `lib/demo-data.ts` with Supabase queries for your target deployment.
2. Wire request creation, invoice updates, and document uploads to live tables/storage.
3. Add real invoice PDF generation if you need downloadable artifacts instead of print view.
4. Expand auth flows with email confirmation and password recovery redirects in production.
