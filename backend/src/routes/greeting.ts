import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const greeting = router({
  byName: publicProcedure.input(z.string()).query(async (opts) => {
    const name = opts.input;
    return `Hello, ${name}`;
  }),
});
