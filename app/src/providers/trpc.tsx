import { trpc } from "@/utils/trpc";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { useState } from "react";

export function TRPCProvider({ children }: { children: React.ReactNode }) {
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
  const [trpcClient] = useState<ReturnType<typeof trpc.createClient>>(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: "http://localhost:3000" as string,
          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuth(),
          //   };
          // },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
