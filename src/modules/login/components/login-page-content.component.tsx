"use client";

import { Card } from "@/components/ui/card";
import { GridBeams } from "@/components/ui/grid-beams";
import { Particles } from "@/components/ui/particles";
import { AnimatePresence } from "motion/react";
import React from "react";
import { useLogin } from "../hooks/useLogin.hook";
import { AUTH_VIEW } from "../constants/login.constant";
import { LoginForm } from "./login-form.component";
import { RegisterForm } from "./register-form.component";
import { OtpForm } from "./otp-form.component";

export function LoginPageContent() {
  const { view, direction } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={15}
        rayOpacity={0.4}
        raySpeed={1.2}
        rayLength="30vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="absolute inset-0"
      >
        <Particles
          className="absolute inset-0"
          quantity={60}
          ease={80}
          color="#ffffff"
          refresh
        />
      </GridBeams>

      <Card className="w-full max-w-md relative z-10 shadow-xl overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {view === AUTH_VIEW.login && <LoginForm />}
          {view === AUTH_VIEW.register && <RegisterForm />}
          {view === AUTH_VIEW.otp && <OtpForm />}
        </AnimatePresence>
      </Card>
    </div>
  );
}
