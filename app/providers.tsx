"use client";

import { ThemeProvider } from "next-themes";
// import { AuthContextProvider } from "./auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <AuthContextProvider>
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
    // </AuthContextProvider>
  );
}
