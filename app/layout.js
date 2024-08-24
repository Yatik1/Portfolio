import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yatik Srivastava",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header 
          title="Yatik Srivastava"
          textColor="text-[#d4d3d3] hover:text-stone-400 cursor-pointer"
        />
        {children}
      </body>
    </html>
  );
}
