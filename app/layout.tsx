import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/common/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
