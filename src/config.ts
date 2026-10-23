// Web app URL for the "Get started" links. Set VITE_APP_URL in .env or the host's env settings
// (e.g. https://staging-app.soulify.chat on staging); baked in at build time.
export const APP_URL: string = import.meta.env.VITE_APP_URL || 'https://app.soulify.chat';
