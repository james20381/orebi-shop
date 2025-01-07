import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import PageBtn from "@/components/PageBtn/PageBtn";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
    subsets: ["latin"], 
    display: 'swap',
    weight: ['500', '900'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Orebi Shop || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Navbar />
        <PageBtn />
        {children}
        <Footer />
    </body>
    </html>
  );
}
