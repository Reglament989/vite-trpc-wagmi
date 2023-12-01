import { greeting } from "@/routes/greeting";
import { router } from "./trpc";

export const appRouter = router({
  greeting,
});
