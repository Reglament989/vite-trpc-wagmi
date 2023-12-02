import HomePage from "@/pages/Home";
import { TRPCProvider } from "@/providers/trpc";
import { WagmiProvider } from "@/providers/wagmi";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { I18NProvider } from "./providers/i18n";

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
    <I18NProvider>
      <WagmiProvider>
        <TRPCProvider>
          <RouterProvider router={router} />
        </TRPCProvider>
      </WagmiProvider>
    </I18NProvider>
  );
}

export default App;
