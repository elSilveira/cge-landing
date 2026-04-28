import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CGE - Capability Graph Engine",
  description:
    "CGE scores candidates by proven code capability, transfer learning, and role fit instead of CV keywords.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
