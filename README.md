# Abroad Business

Responsive web app for property and rental management, based on the [Figma design](https://www.figma.com/design/LyePDcDk2OMMTA0OssC4eo/Untitled?node-id=0-1) and built with **SvelteKit** and **Tailwind CSS**.

## Design

The app replicates the flows from the Figma file:

- **Auth:** Login, Sign up, Forgot password
- **Onboarding:** Welcome, Tutorial, Ready
- **Property:** Type (Housing/Commercial/Land), housing type, confirmation, value/commission, details
- **Owner / Tenant:** Data forms and documents
- **Contract & inventory:** Preview, generate contract, inventory
- **Calendar, Notifications, Settings**

## Stack

- [SvelteKit](https://kit.svelte.dev/) (SSR + SPA)
- [Tailwind CSS](https://tailwindcss.com/) (styling and responsiveness)
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

## Main routes

| Route | Description |
|-------|-------------|
| `/` | Home (login / sign up / onboarding) |
| `/login` | Log in |
| `/registro` | Sign up |
| `/onboarding` | Welcome → Tutorial → Ready |
| `/propiedad` | Property type selection |
| `/propiedad/vivienda` | Housing type (House, Apartment, Other) |
| `/propiedad/confirmar` | Property available |
| `/propiedad/valor` | Sale value and commission |
| `/propiedad/detalles` | Property details |
| `/propietario` | Owner details |
| `/arrendatario` | Tenant details |
| `/documentos` | Owner documents |
| `/contrato` | Lease contract |
| `/inventario` | Inventory |
| `/calendario` | Calendar |
| `/notificaciones` | Notifications |
| `/configuracion` | Settings (language, timezone, currency) |
