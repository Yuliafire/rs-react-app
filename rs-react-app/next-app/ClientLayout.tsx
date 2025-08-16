"use client";

import { useEffect } from "react";
import ClientProviders from "./src/app/ClientProviders";

export default function ClientLayout({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: "light" | "dark";
}) {
  // Sync theme with document and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, [initialTheme]);

  return (
    <ClientProviders initialTheme={initialTheme}>{children}</ClientProviders>
  );
}
