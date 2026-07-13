<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AIQEN Development Standards

Mission:
Build a world-class AI Consulting & Automation platform that matches the quality of Stripe, Vercel, Linear and OpenAI.

Technology
- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- No unnecessary dependencies

Design Principles
- Modern enterprise SaaS
- Mobile first
- Responsive
- Accessible
- Marketing site (public, pre-sign-in pages): light, minimal theme — warm
  paper background, near-black text, a single restrained purple accent.
  Design language references Notion, Anthropic, and InterServer: flat
  surfaces, low decoration, editorial typography, generous whitespace.
  Avoid gradients, glow/blur effects, and glassmorphism here.
- Authenticated app (dashboard, workforce, admin): dark theme, unchanged.
  Theme is applied via a `dark` class added to `<html>` for those route
  prefixes only (see the beforeInteractive script in app/layout.tsx) —
  do not hardcode `dark` on the root layout again.
- Consistent spacing
- Consistent typography
- Large whitespace
- Excellent visual hierarchy

Code Standards
- Small reusable components
- No duplicated code
- Prefer composition
- Strong typing
- Clean imports
- No unused code
- No console logs in production

Performance
- Optimize images
- Avoid unnecessary re-renders
- Keep components lightweight
- Use Server Components whenever possible

Before every task
Claude should:
1. Understand the existing code.
2. Reuse components.
3. Explain its plan.
4. Implement the solution.
5. Verify there are no TypeScript errors.

Never:
- Delete working code without approval.
- Install packages without approval.
- Break existing functionality.
