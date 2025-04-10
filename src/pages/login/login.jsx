import LoginForm from "@/components/shared/login-form";
import { Label } from "@/components/ui/label";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
