import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "KureGhar",
  description: "Pure organic products straight from nature",
};

export default function RootLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}