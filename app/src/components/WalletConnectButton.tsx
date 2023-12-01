import { useConnect } from "wagmi";

function WalletConnectButton() {
  const { connect, connectors } = useConnect();
  return (
    <div>
      <ul>
        {connectors.map((connector) => (
          <li key={connector.id}>
            <button onClick={() => connect({ connector })}>
              {connector.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WalletConnectButton;
