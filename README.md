# React + TypeScript + Vite + Wagmi + TRPC

This template provides a advanced setup to get React + TRPC + Wagmi working in Vite with HMR, ESLint rules and precommit hook.

## Overall Project structure

├── app <=== React
│ ├── index.html
│ ├── src
├── backend <=== TRPC
│ ├── src
├── package.json

## React structure

├── App.tsx
├── assets
├── components
├── env.ts <=== Enforcing environment variables at build time for both frontend and backend [more](https://github.com/t3-oss/t3-env)
├── main.tsx
├── pages
├── providers
│ ├── trpc.tsx
│ └── wagmi.tsx
├── utils
│ └── trpc.ts <=== Magic of TRPC here

## TRPC structure

├── index.ts
├── package.json
├── src
│ ├── router.ts <=== "Routing table"
│ ├── routes <=== Similar to express

### Cheatsheets avaliabe under coresponding folders [app](./app/README.md) [backend](./backend/README.md)
