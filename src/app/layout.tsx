import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpotCat",
  description: "Listen to music with your cat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-linear-to-t from-zinc-900 from-65% to-cyan-950 text-zinc-50" >
        {children}
      </body>
    </html>
  );
}
