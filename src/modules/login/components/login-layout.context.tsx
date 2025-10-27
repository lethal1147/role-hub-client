"use client";

import {
  LoginFormData,
  OTPFormData,
  RegisterFormData,
} from "@/lib/schemas/auth.schema";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { AUTH_VIEW } from "../constants/login.constant";

type ILoginContext = {
  view: AUTH_VIEW;
  setView: React.Dispatch<React.SetStateAction<AUTH_VIEW>>;
  direction: 1 | -1;
  setDirection: React.Dispatch<React.SetStateAction<1 | -1>>;
  registeredEmail: string;
  handleLogin: (data: LoginFormData) => void;
  handleRegister: (data: RegisterFormData) => void;
  handleOTPVerify: (data: OTPFormData) => void;
  handleSocialLogin: (provider: string) => void;
  handleResendOTP: () => void;
  navigateToRegister: () => void;
  navigateToLogin: () => void;
  navigateBackFromOTP: () => void;
};

export const LoginContext = React.createContext<ILoginContext>(
  {} as ILoginContext
);

export function LoginContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { login, register: authRegister } = useAuth();
  const [view, setView] = useState<AUTH_VIEW>(AUTH_VIEW.login);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [registeredEmail, setRegisteredEmail] = useState("");

  //   Handlers
  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        await login(data.email, data.password);
        // Redirect to chat page after successful login
        router.push("/chat");
      } catch (error) {
        console.error("Login failed:", error);
        // TODO: Show error message to user
      }
    },
    [login, router]
  );

  const handleRegister = useCallback(async (data: RegisterFormData) => {
    try {
      setRegisteredEmail(data.email);
      // Navigate to OTP view
      setDirection(1);
      setView(AUTH_VIEW.otp);
      // TODO: Send OTP to email via API
    } catch (error) {
      console.error("Registration failed:", error);
      // TODO: Show error message to user
    }
  }, []);

  const handleOTPVerify = useCallback(
    async (data: OTPFormData) => {
      try {
        // TODO: Verify OTP via API
        // After successful OTP verification, complete registration
        await authRegister({
          name: "User", // This should come from registration form
          email: registeredEmail,
          password: "", // This should come from registration form
        });
        // Redirect to chat page
        router.push("/chat");
      } catch (error) {
        console.error("OTP verification failed:", error);
        // TODO: Show error message to user
      }
    },
    [authRegister, registeredEmail, router]
  );

  const handleSocialLogin = useCallback((provider: string) => {
    console.log("Social login:", provider);
    // TODO: Implement social login logic
  }, []);

  const handleResendOTP = useCallback(() => {
    console.log("Resend OTP to:", registeredEmail);
    // TODO: Implement resend OTP logic
  }, []);

  const navigateToRegister = () => {
    setDirection(1);
    setView(AUTH_VIEW.register);
  };

  const navigateToLogin = () => {
    setDirection(-1);
    setView(AUTH_VIEW.login);
  };

  const navigateBackFromOTP = () => {
    setDirection(-1);
    setView(AUTH_VIEW.register);
  };

  console.log(view);

  const contextValue = useMemo(
    () => ({
      view,
      setView,
      direction,
      setDirection,
      registeredEmail,
      handleLogin,
      handleRegister,
      handleOTPVerify,
      handleSocialLogin,
      handleResendOTP,
      navigateToRegister,
      navigateToLogin,
      navigateBackFromOTP,
    }),
    [
      view,
      setView,
      direction,
      setDirection,
      registeredEmail,
      handleLogin,
      handleRegister,
      handleOTPVerify,
      handleSocialLogin,
      handleResendOTP,
      navigateToRegister,
      navigateToLogin,
      navigateBackFromOTP,
    ]
  );
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
