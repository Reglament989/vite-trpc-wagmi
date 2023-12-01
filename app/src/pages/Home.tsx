import { useParams } from "react-router-dom";
import { trpc } from "../utils/trpc";

function HomePage() {
  const { name } = useParams();
  const { data } = trpc.greeting.byName.useQuery(name ?? "unknown");
  return <h1>{data}</h1>;
}

export default HomePage;
