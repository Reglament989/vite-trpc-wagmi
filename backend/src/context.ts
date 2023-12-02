import * as trpcNext from "@trpc/server/adapters/next";
export function createContext({ req }: trpcNext.CreateNextContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  function getUserFromHeader() {
    if (req.headers.authorization) {
      //   const user = await decodeAndVerifyJwtToken(
      //     req.headers.authorization.split(" ")[1]
      //   );
      //   return user;
    }
    return null;
  }
  const user = getUserFromHeader();
  return {
    user,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
