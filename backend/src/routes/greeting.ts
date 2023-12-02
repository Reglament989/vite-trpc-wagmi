import { userInfo } from "os";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const greeting = router({
  byName: publicProcedure.input(z.string()).query((opts) => {
    let name = opts.input;
    if (name === "unknown") {
      name = userInfo().username; // Remove this ;)
    }
    return `Hello, ${name}`;
  }),
});
