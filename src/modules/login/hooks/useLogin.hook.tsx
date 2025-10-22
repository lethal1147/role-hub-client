import { useContext } from "react";
import { LoginContext } from "../components/login-layout.context";

export const useLogin = () => useContext(LoginContext);
