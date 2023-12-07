// components/AuthGuard.tsx
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import Loading from "../Input/Loading";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  return <>{children}</>;
}
