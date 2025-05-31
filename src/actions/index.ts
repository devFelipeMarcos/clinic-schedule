"use server";

import { db } from "@/db";
import { clinicsTable, userToClinicTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const createClinic = async (name: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("401 - Unauthorized");
  }

  const [clinic] = await db.insert(clinicsTable).values({ name }).returning();

  await db.insert(userToClinicTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });
};

export const getClinics = async () => {
  const clinics = await db.query.clinicsTable.findMany();

  return clinics;
};
