# pds-dash

a frontend dashboard with stats for your ATProto PDS.

forked from: https://git.witchcraft.systems/scientific-witchery/pds-dash

## setup

### prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation)

### installing

clone the repo, copy `.env.example` to `.env` and edit it to your liking.

then, install dependencies using pnpm:

```sh
pnpm install
```

### development server

local development server with hot reloading:

```sh
pnpm dev
```

### building

to build the optimized bundle run:

```sh
pnpm build
```

the output will be in the `dist/` directory.

## deploying

we use our own CI/CD workflow at [`.forgejo/workflows/deploy.yaml`](.forgejo/workflows/deploy.yaml), but it boils down to building the project bundle and deploying it to a web server. it'll probably make more sense to host it on the same domain as your PDS, but it doesn't affect anything if you host it somewhere else.

## configuring

Configuration is done via environment variables in a `.env` file. Copy `.env.example` to `.env` and modify the values:

- `VITE_PDS_URL` - The base URL of your PDS (required)
- `VITE_THEME` - Theme directory name (default: `default`)
- `VITE_FRONTEND_URL` - Frontend service URL for links (default: `https://deer.social`)
- `VITE_MAX_POSTS` - Maximum posts per request (default: `20`)
- `VITE_FOOTER_TEXT` - Footer HTML text
- `VITE_SHOW_FUTURE_POSTS` - Show posts with future timestamps (default: `false`)

You can also edit [`config.ts`](config.ts) directly to change the default fallback values.

## theming

themes are located in the `themes/` directory, you can create your own theme by copying one of the existing themes and modifying it to your liking.

currently, the name of the theme is determined by the directory name, and the theme itself is defined in `theme.css` inside that directory.

you can switch themes by changing the `VITE_THEME` environment variable in your `.env` file.

the favicon is located at [`public/favicon.ico`](public/favicon.ico)

## license

MIT
