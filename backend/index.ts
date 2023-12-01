// Export type router type signature,

import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./src/router";
import cors from "cors";

// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

console.log("Server running on http://localhost:3000");
server.listen(3000);
