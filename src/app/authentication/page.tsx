import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { auth } from "@/lib/auth";
import React from "react";

import SignUpForm from "./components/sign-up-form";
import SignInForm from "./components/sign-in-form";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const login = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Entrar</TabsTrigger>
          <TabsTrigger value="register">Criar Conta</TabsTrigger>
        </TabsList>

        {/* screen of login */}
        <TabsContent value="login">
          <SignInForm />
        </TabsContent>

        {/* screen of register */}
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default login;
