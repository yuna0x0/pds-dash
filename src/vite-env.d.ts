/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PDS_URL?: string;
  readonly VITE_THEME?: string;
  readonly VITE_FRONTEND_URL?: string;
  readonly VITE_MAX_POSTS?: string;
  readonly VITE_FOOTER_TEXT?: string;
  readonly VITE_SHOW_FUTURE_POSTS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
