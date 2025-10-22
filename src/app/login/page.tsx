"use client";

import {
  LoginContextProvider,
  LoginPageContent,
} from "@/modules/login/components";

export default function LoginPage() {
  return (
    <LoginContextProvider>
      <LoginPageContent />
    </LoginContextProvider>
  );
}
