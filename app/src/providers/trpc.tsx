import { trpc } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState<QueryClient>(() => new QueryClient());
  const [trpcClient] = useState<ReturnType<typeof trpc.createClient>>(() =>
    trpc.createClient({
      links: [
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
