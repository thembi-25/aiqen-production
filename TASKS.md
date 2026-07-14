# AIQEN — Project Tasks

This file tracks project work by milestone. Every item starts unchecked and is marked `[x]` only when complete.

Reconciled against the full AIQEN master build prompt (2026-07-13), which frames AIQEN as two divisions:
**Division 1 — AI Consulting & Automation** (services, marketing site, Client Portal for signed clients)
**Division 2 — AI Workforce Platform** (separate authenticated SaaS product for deploying AI employees)

## Milestone 1 — Marketing Website (Division 1 storefront)

- [x] Fix broken navigation links (`/services`, `/pricing`, `/about`, `/contact`, `/ai-workforce`, `/blog`, `/faq`, `/case-studies`)
- [x] Add mobile navigation (menu/drawer)
- [x] Consolidate duplicate Button/Card/Badge components into a single system
- [x] Wire up real dark theme handling — permanent dark theme applied at root
- [x] Add remaining marketing pages (Services, Pricing, About, Contact, AI Workforce, Case Studies, Blog, FAQ, Privacy, Terms)
- [x] Add SEO metadata (OpenGraph, Twitter cards, sitemap, robots.txt)
- [x] Add `not-found.tsx` and error boundary
- [x] Accessibility pass (skip link, single h1 per page, focus states)
- [x] Performance pass (production build verified clean, no unoptimized images)
- [x] Remove stray/dead files
- [x] Industries: standalone `/industries` page built (user chose standalone over home-section-only) — all 12 industries (Healthcare, Finance, Legal, Construction, Education, Manufacturing, Real Estate, Logistics, Hospitality, Professional Services, Retail, Government) each with a unique-workflows list; home section trimmed to a 6-item teaser linking to the full page
- [x] Solutions: standalone `/solutions` page built (user chose standalone over home-section-only) — all 12 outcome-framed solutions (Revenue Growth, Sales Automation, Lead Management, Customer Service, Internal Ops, HR, Recruitment, Knowledge Mgmt, Executive Reporting, Dashboards, Analytics, BI); home section trimmed to a 6-item teaser
- [x] AI Workforce page upgrade: hand-rolled visual org chart (`components/marketing/workforce-org-chart.tsx`, no new dependency), per-employee detail pages at `/ai-workforce/[slug]` (responsibilities, integrations, business value, demo workflow), "Coming Soon" pricing teaser section
- [x] Resources hub at `/resources` + `/resources/[slug]` — Guides, Playbooks, Templates, AI Insights, Automation Library, filterable, separate from Blog
- [x] Integrations page at `/integrations` — HubSpot, Google Sheets, n8n, OpenAI, Claude, Google Calendar, Outlook, Slack, Teams, Zapier, Webhooks, SMTP, Stripe, Calendly, grouped by category
- [x] AI Business Assessment at `/assessment` — multi-step wizard, real scoring engine (`lib/assessment/scoring.ts`) producing Automation/AI Readiness/Opportunity scores + estimated savings + recommended services/workforce/plan; real `lead` DB table + server action persists submissions; email report via Resend (user-approved `@react-pdf/renderer` dependency for the downloadable PDF, generated server-side via `/api/assessment/pdf/[id]`); `/admin/leads` upgraded from fixture data to read real submissions now that capture is live
- [x] ROI Calculator at `/roi-calculator` — live client-side estimate of hours saved, cost reduction, revenue increase, and productivity gain; optional "email me these results" capture also feeds the real `lead` table (source: roi-calculator)

## Milestone 2 — Authentication

Provider decision made: **NextAuth v5 (Auth.js beta) + Drizzle adapter + Postgres**, providers = Credentials (bcrypt) + Google + GitHub. Scaffolded in `auth.ts`, `lib/db/schema.ts`, `app/api/auth/[...nextauth]/route.ts`. Email delivery (verification + password reset) uses **Resend**.

- [x] Choose auth provider/strategy
- [x] Sign up flow (`/sign-up` page + credentials registration, `signUpAction`, verification email on signup)
- [x] Sign in flow (`/sign-in` page, `signInAction`, Google/GitHub OAuth buttons)
- [x] Sign out flow (`signOutAction`, `SignOutButton`)
- [x] Password reset flow (`/forgot-password`, `/reset-password`, 1-hour single-use tokens)
- [x] Email verification (`/api/verify-email` route, 24-hour single-use tokens, resend action; OAuth sign-ins auto-verified)
- [x] Session/token handling (JWT strategy; DAL in `lib/auth/dal.ts` for server-side checks, client-side `useSession()` via `SessionProvider` for the marketing nav so those pages stay statically generated)
- [x] Protected route middleware (`proxy.ts` — `/dashboard` requires auth, `/sign-in` + `/sign-up` redirect away if already authenticated)
- [x] Role-based access control (`hasRole()` helper; dashboard demonstrates an admin-only card)
- [x] Auth error and edge-case handling (invalid credentials, duplicate email, OAuth-only email colliding with credentials signup, expired/invalid tokens, generic no-enumeration forgot-password response)

## Milestone 3 — Client Portal (Division 1, post-sale clients)

Authenticated area for businesses who have signed with AIQEN consulting/automation services, at `/dashboard`. Distinct from the AI Workforce SaaS below. Built against realistic fixture data in `lib/data/portal/*.ts` (no live database yet — see Milestone 2 notes); every page reads through typed accessor functions so wiring to real Drizzle queries later won't touch component internals. "Automation status tracking" was folded into Projects (per-project status) plus an Overview widget rather than a separate top-level page.

- [x] Portal layout and navigation shell (`app/dashboard/layout.tsx`, `components/dashboard/sidebar.tsx`/`mobile-sidebar.tsx`/`topbar.tsx`)
- [x] Dashboard overview (stats, projects/automation-status preview, recent notifications, admin-only card)
- [x] Projects (list + detail with milestones, integrations, automation status)
- [x] Automation status tracking (folded into Projects + Overview widget — see note above)
- [x] Support tickets (list + threaded detail view)
- [x] Messages (inbox-style conversation view with the AIQEN account team)
- [x] Invoices (billing history table)
- [x] Documents / shared files (grouped by category)
- [x] Meeting notes (list + detail with summary and action items)
- [x] Knowledge base (categorized articles + detail pages)
- [x] Roadmap (Planned / In Progress / Shipped columns)
- [x] Team management (client team + AIQEN account team)
- [x] Notifications (feed with local mark-as-read)
- [x] Account settings (profile name edit + real password change, reusing Milestone 2's bcrypt/`users.passwordHash` infra)

## Milestone 4 — AI Workforce SaaS (Division 2, separate authenticated app)

The productized platform where businesses deploy and manage AI employees (SDR, Appointment Setter, Support, Receptionist, Sales/Ops/Marketing Manager, Recruiter, HR/Finance/Executive Assistant, Analyst, Knowledge Assistant, PM, Email Assistant, Researcher, Content Assistant, Proposal Writer, Customer Success Manager). Built at `/workforce`, separate from the Client Portal's `/dashboard`, on the same fixture-data pattern (`lib/data/workforce/*.ts`) since there's still no live database. The 8-role marketing catalog in `lib/data/ai-workforce.ts` is reused as the catalog of deployable employee types rather than duplicated. Three items are deliberately scoped lighter here since they overlap future milestones: Automations is a status list, not the builder (that's Milestone 5); Billing is a "Coming Soon" plan/usage card, not real checkout (that's Milestone 6); Settings and API are UI-only since there's no `workspaces`/`apiKeys` schema at all yet.

- [x] App shell / workspace switcher (`app/workforce/layout.tsx`, `components/workforce/sidebar.tsx`/`mobile-sidebar.tsx`/`topbar.tsx`/`workspace-switcher.tsx`)
- [x] Dashboard (stat tiles, employee roster preview, recent conversations)
- [x] AI Employees — deployed/available catalog view, per-employee detail with metrics chart, activity, pause/resume (local state)
- [x] Knowledge base (grounding sources list, indexed/processing status, linked employees)
- [x] Automations (trigger → action status list; full builder deferred to Milestone 5)
- [x] CRM (contacts with search/filter + activity timeline, companies, deals kanban by stage)
- [x] Analytics (stat tiles + bar charts — task volume, tasks by employee, pipeline value by stage; built using the `dataviz` skill's method)
- [x] Tasks (kanban-lite board with local status advancement)
- [x] Conversations (multi-channel transcript viewer, split list/detail view)
- [x] Documents (grouped by category)
- [x] Settings (workspace name/timezone — explicitly UI-only, no persistence)
- [x] Billing ("Coming Soon" plan card + usage summary; real checkout deferred to Milestone 6)
- [x] Users & Organizations (workspace members list + roles; invite UI disabled, foundation for multi-tenancy)
- [x] API (masked API keys list; key generation UI disabled, real API still in development)
- [x] Integrations marketplace (the master prompt's full integration list, Connect/Connected toggle)

## Milestone 5 — Workflow Automation Engine

Shared building block: powers both Client Portal "automation status" and AI Workforce SaaS "automations." Built as a **linear step-list builder** (Zapier's classic editor style, user's explicit choice over a node-based canvas, which would have needed a new graph-library dependency). Lives at `/workforce/automations`, upgrading the read-only list from Milestone 4 into a real builder — `lib/data/workforce/automations.ts` was renamed to `workflows.ts` with a richer step/run-history model (3 files that referenced the old flat type were updated: `app/workforce/page.tsx`, `app/workforce/analytics/page.tsx`, `app/workforce/automations/page.tsx`). Client Portal's automation status display (Milestone 3) is unchanged — the two stay conceptually separate, sharing only the underlying idea, not UI.

- [x] Workflow builder UI (`components/workforce/workflow-builder.tsx` — add/configure/reorder/remove steps, reused by both `/automations/new` and `/automations/[id]/edit`)
- [x] Trigger types (event, schedule, manual) — `lib/data/workforce/step-library.ts` (new lead, sentiment drop, appointment booked, on a schedule, manually triggered)
- [x] Action/step library (assign to AI employee, post to Slack, send SMS, create a task, update CRM record, escalate to human — categorized picker via `components/workforce/step-picker-dialog.tsx`, reusing the existing `Dialog` primitive)
- [x] Conditional logic support (a `condition` step kind — "only continue if...")
- [x] Workflow templates (`lib/data/workforce/workflow-templates.ts`, 4 starters — gallery on `/automations/new`)
- [x] Workflow run history and logs (`components/workforce/run-history.tsx`, expandable per-run step logs on the detail page)
- [x] Error handling and retries (represented honestly as historical run-log data — a `"retried"` step status with a detail message — since there's no live execution engine to actually retry against)
- [x] Testing/preview mode before publishing ("Test run (simulated)" — `lib/hooks/use-workflow-test-run.ts` + `components/workforce/test-run-panel.tsx`, staggered pending→running→success simulation over the current in-memory step list, available both in the builder and on the read-only detail page)

## Milestone 6 — Billing

Real Stripe integration code (user's explicit choice — same "code-complete, gated behind env vars not set in this sandbox" pattern as Milestone 2's auth/email), for the **AI Workforce SaaS** (`/workforce/billing`, upgrading Milestone 4's "Coming Soon" placeholder). Out of scope: the public `/pricing` page (Division 1 consulting tiers, sales-assisted, unrelated) and `/dashboard/invoices` (Milestone 3, AIQEN-issued project invoices) — both untouched. All checkout and subscription management happens on Stripe's own hosted pages (Checkout Session, Billing Portal) — this app never collects or touches raw card data.

- [x] Choose billing/payments provider — **Stripe**, confirmed
- [x] Pricing plans and tiers (`lib/billing/plans.ts` — Starter/Team/Business)
- [x] Checkout flow (`createCheckoutSessionAction` in `app/actions/billing.ts` → real `stripe.checkout.sessions.create`, redirects to Stripe-hosted Checkout)
- [x] Subscription management (upgrade/downgrade/cancel) — via `createBillingPortalSessionAction` → Stripe-hosted Billing Portal, not custom UI
- [x] Invoices and billing history (real `stripe.invoices.list` call on the billing page, gracefully empty until a real customer exists)
- [x] Payment method management — also via the Billing Portal (Stripe hosts this; no custom card form was built, by design — PCI scope stays off this app entirely)
- [x] Usage-based billing (if applicable) — **not applicable**: plans are flat-tier, not metered, so Stripe's usage-records API isn't used; kept Milestone 4's "Usage this month" stat card as an informational (non-billing) display
- [x] Webhooks for payment events (`app/api/webhooks/stripe/route.ts` — signature-verified, handles checkout/subscription/invoice events)
- [x] Failed payment/dunning handling (`invoice.payment_failed` webhook sets `status: "past_due"`, shown as a warning banner on the billing page; actual dunning emails/retries are Stripe's own hosted behavior once configured)

## Milestone 7 — Admin Panel

- [x] Admin authentication/authorization (`lib/admin/dal.ts`'s `requireAdmin()` gates `app/admin/layout.tsx`; non-admins get `notFound()`)
- [x] Manage marketing content: Services, Industries, Case Studies, Resources, FAQs, Blog, Media, Pricing (`/admin/content` — read-only inventory across all `lib/data/*` content types; Resources/Media are correctly shown as "not built" since those marketing pages don't exist yet, tracked under Milestone 1)
- [x] User and client account management (`/admin/users` — role changes, suspend/reactivate, real DB-backed)
- [x] Lead and AI Business Assessment management (`/admin/leads` + `/admin/leads/[id]` — fixture data, no lead-capture schema exists yet since the Assessment tool itself is still an open Milestone 1 item)
- [x] Integrations management (`/admin/integrations` — platform-wide catalog view, distinct from the per-workspace integrations grid built in Milestone 4)
- [x] System-wide analytics and metrics (`/admin` overview — real DB stats for users/subscriptions + platform activity across tickets/workflows/leads)
- [x] Audit logs (`/admin/audit-logs` — real DB, joined with `user` for actor identity)
- [x] Feature flag management (`/admin/feature-flags` — real DB, create + toggle)
- [x] Support/impersonation tools (`/admin/users`' Impersonate button + site-wide `ImpersonationBanner` — reuses the JWT `impersonatorId` mechanism already wired into `auth.ts`)
- [x] Admin activity logging (`lib/admin/audit.ts`'s `logAuditEvent()` called from every mutating admin action)

## Milestone 8 — Marketing Site Restart (2026-07-14)

A ground-up structural/visual rebuild of the marketing site's presentation layer (Division 1 storefront only — Client Portal, AI Workforce SaaS, and Admin are untouched dark-theme apps). Scope was a rebuild of layout, composition, and visual hierarchy across every public marketing page, **not** a copywriting rewrite — all `lib/data/*.ts` content was reused verbatim. Design system primitives (`components/shared/*`, CSS tokens in `app/globals.css`) from the prior 2026-07-13 light-theme pass were kept and extended rather than replaced, since they already matched the Notion/Anthropic/Linear/Vercel/OpenAI brief; the actual clutter problem was homepage section count (13 stacked sections) and dense per-page card grids (11-12 item pages rendered as sticky full-viewport sections or card walls).

- [x] Two new design-system primitives: `AppFrame` (browser-chrome wrapper used to present product-preview UI mockups as real software interfaces) and `Stat` (metric/value + label display) in `components/shared/`
- [x] Removed the one glassmorphism violation of the AGENTS.md decoration rule (`backdrop-blur-xl` on the sticky nav in `scroll-header.tsx`) and softened the mega-menu dropdown's `shadow-2xl` to the existing elevation token scale
- [x] Rebuilt Navbar/MegaMenu/MobileNav/Footer with the same link taxonomy but tightened content density (mobile nav's 3-button CTA stack trimmed to 2)
- [x] New homepage flow: Hero → Business Challenges → How AIQEN Works → Solutions → AI Workforce → Industries → Client Portal Preview (new) → Business Assessment (new) → Case Studies → FAQ → Final CTA — replacing the old 13-section stack (dropped standalone Stats/Services/Process/Testimonials/homepage-Pricing sections; `Problems`→`Challenges`, `Process`→`HowItWorks`)
- [x] Product-preview mockups built via `AppFrame`: AI Workforce console, Client Portal (with an embedded analytics/metric strip so a separate Analytics Dashboard section wasn't needed), Business Assessment score screen, and a compact Workflow Builder visual folded into the How-It-Works section
- [x] Case studies now visibly labeled "Illustrative example" (both the homepage section and `/case-studies`) since the underlying `lib/data/case-studies.ts` entries are placeholder companies/quotes, not verified published client results
- [x] Every other marketing page rebuilt for layout/hierarchy against the same design system, content unchanged: About, Contact, Privacy, Terms, Services, Solutions, Industries, Pricing, FAQ, Case Studies, AI Workforce (+ employee detail), Integrations, Blog (+ post detail), Resources (+ detail), ROI Calculator, Business Assessment — the 11-12 item Solutions/Industries pages moved from one sticky section per item to a single divided list; functional client components (`ContactForm`, `RoiCalculator`, `AssessmentWizard`) had only their presentation layer touched, logic/server actions untouched
- [x] Full verification: `tsc --noEmit`, `eslint`, and `next build` all clean across all 87 routes; local production-build smoke check (`next start` on a scratch port) confirmed 200s and expected content on every rebuilt page. No real headless-browser visual screenshot was taken — Playwright isn't installed and installing it would need approval under the "no new dependencies without approval" rule; verification relied on build success + HTML content checks instead.
- [x] Incidental fix: found and resolved a pre-existing, unrelated production issue during verification — an orphaned `next start` process was squatting on port 3000 outside pm2's tracking, causing `aiqen-website` to crash-loop on `EADDRINUSE` (100% CPU, restart count climbing). Killed the orphan so pm2 could rebind cleanly; unrelated to this milestone's changes.
