import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";
import { db } from "../db/index";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema,
  }),

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    modelName: "usersTable",
  },

  account: {
    modelName: "accountsTable",
  },

  session: {
    modelName: "sessionsTable",
  },

  verification: {
    modelName: "verificationsTable",
  },

  emailAndPassword: {
    enabled: true,
  },
});
