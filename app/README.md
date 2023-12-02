# React + TypeScript + Vite + Wagmi + TRPC

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# TRPC Cheatsheet

## Calling a query

```ts
const { data, isLoading, error } = trpc.greeting.byName.useQuery(
  name ?? "unknown"
);
```

## Calling a mutation

```ts
const mutation = trpc.login.useMutation();
const handleLogin = () => {
  const name = "John Doe";
  mutation.mutate({ name });
};
```

## Calling a multiply queries at once

```ts
const [post, greeting] = trpc.useQueries((t) => [
  t.post.byId({ id: "1" }, { enabled: false }),
  t.greeting({ text: "world" }),
]);
```

## [Handle errors](./src/providers/trpc.tsx?plain=1#L=11)

```ts
const [queryClient] = useState<QueryClient>(
  () =>
    new QueryClient({
      queryCache: new QueryCache({
        // Global trpc error catching
        onError() {
          // toast.error(`Something went wrong: ${error.message}`),
        },
      }),
    })
);
```

### [Official documentation](https://trpc.io/docs/client/)
