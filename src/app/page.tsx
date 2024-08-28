import Home from "@/components/screens/Home";
import { getRandomUsers } from "@/http/apiUser";

export default async function HomePage() {
  const users = await getRandomUsers();

  return <Home users={users} />;
}
