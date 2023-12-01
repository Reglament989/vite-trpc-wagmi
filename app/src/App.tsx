import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/Home";
import { TRPCProvider } from "@/providers/trpc";
import { WagmiProvider } from "@/providers/wagmi";

const router = createBrowserRouter([
  {
    path: "/:name?",
    element: <HomePage />,
  },
  {
    path: "/wallet",
    lazy: () => import("./pages/Wallet"),
  },
]);

function App() {
  return (
    <WagmiProvider>
      <TRPCProvider>
        <RouterProvider router={router} />
      </TRPCProvider>
    </WagmiProvider>
  );
}

export default App;
