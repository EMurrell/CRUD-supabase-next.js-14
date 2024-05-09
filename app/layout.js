import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD app",
  description: "With Next.js 14 and Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` text-zinc-300 bg-gradient-to-br from-zinc-950 to-zinc-900 via-gray-800 pb-20 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
