import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./components/button-sign-out";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h1> Olá {session?.user?.name} </h1>
      <h1> E-mail: {session?.user?.email} </h1>

      <SignOutButton />
    </div>
  );
};

export default Dashboard;
