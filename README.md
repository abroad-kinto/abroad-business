# Abroad Business — KYB Onboarding

Responsive web app for business verification (KYB — Know Your Business), built with **SvelteKit** and **Tailwind CSS**.

## KYB Onboarding Flow

Multi-step business verification process:

```
/  →  /welcome  →  /kyb-verification/welcome  →  Business Details
  →  Documents  →  Ownership & Management  →  Regulatory & Compliance
  →  Business Activities  →  Confirmation  →  Submitted
```

### Features

- **Business Details** — company name, registration, country, website, business model
- **Document Uploads** — certificate of incorporation, articles of association, tax certification, proof of address
- **Ownership & Management** — add individuals (directors, shareholders, UBOs), KYC verification links
- **Regulatory & Compliance** — penalty history, KYC flow, AML policy, license requirements
- **Business Activities** — high-risk jurisdictions, transaction volume, financial statements
- **Form Validation** — Zod schemas with inline error display
- **Global State** — Svelte store persists form data across steps
- **Responsive Design** — adapts to mobile, tablet, and desktop

## Stack

- [SvelteKit](https://kit.svelte.dev/) (SSR + SPA)
- [Tailwind CSS](https://tailwindcss.com/) (styling and responsiveness)
- [Zod](https://zod.dev/) (form validation)
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```
