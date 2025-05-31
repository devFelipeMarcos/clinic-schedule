import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./components/button-sign-out";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { userToClinicTable } from "@/db/schema";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.warn(session);

  if (!session) {
    redirect("/authentication");
  }

  const clinics = await db.query.userToClinicTable.findMany({
    where: eq(userToClinicTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <h1>Página inicial</h1>
      <h1> Olá {session?.user?.name} </h1>
      <h1> E-mail: {session?.user?.email} </h1>

      <SignOutButton />
    </div>
  );
};

export default Dashboard;
