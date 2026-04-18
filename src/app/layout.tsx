import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Алина Нурмамедова — Product Designer",
  description:
    "Портфолио Алины Нурмамедовой: продуктовый дизайн, UX-исследования, web-сервисы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
