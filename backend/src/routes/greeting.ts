import { publicProcedure, router } from "@/trpc";
import { z } from "zod";

export const greeting = router({
  byName: publicProcedure.input(z.string()).query(async (opts) => {
    const name = opts.input;
    return `Hello, ${name}`;
  }),
});
