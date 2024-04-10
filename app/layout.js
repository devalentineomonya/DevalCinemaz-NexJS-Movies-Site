import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevalCinemaz | Discover the best Series and movies ",
  description: "Discover your favorite movies and series at DevalCinemaz, A free and interesting movies site that gives you entertainment t the palm if your hand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
