"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const login = () => {
  redirect("/authentication");
};

const page = () => {
  return (
    <div className="dark">
      <Button onClick={() => login()}>Click me</Button>
    </div>
  );
};

export default page;
