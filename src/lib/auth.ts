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

  socialProviders: {},
});
