"use client";

import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext, AuthInfo } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useContext(AuthContext) as AuthInfo | null;
  const user = auth?.user;
  const loding = auth?.loding ?? true;   // fallback to true while context is loading

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loding && !user) {
      router.push(`/signin?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [user, loding, router, pathname]);

  // Show loading spinner while checking auth state
  if (loding) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // If user is not logged in, don't render anything (redirect will happen)
  if (!user) return null;

  return <>{children}</>;
};

export default PrivateRoute;