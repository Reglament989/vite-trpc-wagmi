import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const greeting = router({
  byName: publicProcedure.input(z.string()).query((opts) => {
    const name = opts.input;
    return `Hello, ${name}`;
  }),
});
