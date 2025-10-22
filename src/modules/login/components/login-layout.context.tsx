"use client";

import {
  LoginFormData,
  OTPFormData,
  RegisterFormData,
} from "@/lib/schemas/auth.schema";
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
  const [view, setView] = useState<AUTH_VIEW>(AUTH_VIEW.login);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [registeredEmail, setRegisteredEmail] = useState("");

  //   Handlers
  const handleLogin = useCallback((data: LoginFormData) => {
    console.log("Login:", data);
    // TODO: Implement login logic
  }, []);

  const handleRegister = useCallback((data: RegisterFormData) => {
    console.log("Register:", data);
    setRegisteredEmail(data.email);
    // TODO: Implement registration logic
    // Navigate to OTP view
    setDirection(1);
    setView(AUTH_VIEW.otp);
  }, []);

  const handleOTPVerify = useCallback((data: OTPFormData) => {
    console.log("OTP:", data);
    // TODO: Implement OTP verification logic
  }, []);

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
