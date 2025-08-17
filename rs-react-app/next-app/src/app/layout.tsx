import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Rick and Morty App",
  description: "My App is a Rick and Morty API Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
