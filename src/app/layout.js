import { Inter, Homemade_Apple } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Layouts/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-homemade",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${homemadeApple.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
