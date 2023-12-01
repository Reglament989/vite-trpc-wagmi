// Export type router type signature,

import { env } from "@frontend/env";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { appRouter } from "./src/router";

// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

console.log(`Server running on ${env.HOST}:${env.PORT}`);
server.listen(env.PORT, env.HOST);
