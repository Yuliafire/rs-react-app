// "use client";

// import { useTheme } from "@/shared/hooks/useTheme";
// import { ReactNode, useEffect, useState } from "react";

// interface AboutWrapperProps {
//   serverTheme: "light" | "dark";
//   children: ReactNode; // Add this line
// }

// export default function AboutWrapper({
//   serverTheme,
//   children, // Destructure children
// }: AboutWrapperProps) {
//   const { theme } = useTheme();
//   const [currentTheme, setCurrentTheme] = useState(serverTheme);

//   useEffect(() => {
//     setCurrentTheme(theme);
//   }, [theme]);

//   return (
//     <div className={`theme-${currentTheme}`} data-theme={currentTheme}>
//       {children} {/* Render children instead of About component */}
//     </div>
//   );
// }

"use client";

import { useTheme } from "@/shared/hooks/useTheme";
import { ReactNode, useEffect, useState } from "react";

interface AboutWrapperProps {
  serverTheme: "light" | "dark";
  children: ReactNode;
}

export default function AboutWrapper({
  serverTheme,
  children,
}: AboutWrapperProps) {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    serverTheme,
  );

  // Sync with both ThemeProvider and server-side initial theme
  useEffect(() => {
    // First, check if we have a theme from the ThemeProvider
    if (theme) {
      setCurrentTheme(theme);
      return;
    }

    // Fallback to localStorage if ThemeProvider context isn't available
    if (typeof window !== "undefined") {
      const localTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      if (localTheme) {
        setCurrentTheme(localTheme);
      }
    }
  }, [theme, serverTheme]);

  // Apply theme to the root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className={`theme-${currentTheme}`} data-theme={currentTheme}>
      {children}
    </div>
  );
}
