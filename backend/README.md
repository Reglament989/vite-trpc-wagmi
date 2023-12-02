# TRPC Cheatsheet

## Defining a public query

```ts
export const newRoute = router({
  greet: publicProcedure.input(z.string()).query((opts) => {
    const name = opts.input;
    return `Hello, ${name}`;
  }),
});
```

## Defining a protected query

```ts
export const newRoute = router({
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
```

## Defining a mutation

```ts
export const greeting = router({
  updateUser: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation((opts) => {
      const { name } = opts.input;
      // Here some update stuff would happen
      return `${name} moded`;
    }),
});
```

## [Per-request context](./src/context.ts)

```ts
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
```

## Throwing errors

```ts
const appRouter = t.router({
  hello: protectedProcedure.query(() => {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred, please try again later.",
      // optional: pass the original error to retain stack trace
      cause: theError,
    });
  }),
});
```

### [Official documentation](https://trpc.io/docs/server/introduction)

### [Vitest](https://vitest.dev/guide/)
