import type { Metadata } from "next";
import { Inter, Convergence, Poppins } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/context/UserContext";
import { Navbar } from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const convergence = Convergence({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-convergence",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PortFolio",
  description: "My Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${convergence.variable} ${poppins.variable} font-poppins `}>
        <UserContextProvider >
         <Navbar />
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
