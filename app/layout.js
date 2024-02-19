import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Survey App",
  description: "simple Survey form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Head>
        <title>Survey App</title>
      </Head>
        {children}</body>
    </html>
  );
}
