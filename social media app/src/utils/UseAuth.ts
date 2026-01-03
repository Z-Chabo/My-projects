import { useContext } from "react";
import type { AuthContextType } from "../types/AuthContextType";
import { AuthContext } from "../context/AuthContextContxt";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
