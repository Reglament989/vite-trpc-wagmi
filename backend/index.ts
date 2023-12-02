// Export type router type signature,
/// <reference types="vite/client" />

import { env } from "@acme/frontend/src/env";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { createContext } from "./src/context";
import { appRouter } from "./src/router";

// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  createContext,
  router: appRouter,
});

console.log(`Server running on ${env.HOST}:${env.PORT}`);
server.listen(env.PORT, env.HOST);
