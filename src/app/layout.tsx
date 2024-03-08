import Header from "@/components/Header";
import "@/styles/styles.scss";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Ana",
  description: "Ana. Portfolio",
};

const nunito = Nunito_Sans({
  subsets: ["cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={nunito.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
