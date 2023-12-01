import WalletConnectButton from "@/components/WalletConnectButton";
import { useAccount } from "wagmi";

export function Component(): JSX.Element {
  const { address } = useAccount();
  return (
    <div>
      <h1>{address}</h1>
      <WalletConnectButton />
    </div>
  );
}

Component.displayName = "Wallet page";
