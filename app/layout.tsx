import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'amour Flower Boutique",
  description: "Luxury flower webshop Beograd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  );
}