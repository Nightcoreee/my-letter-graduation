import type { Metadata } from "next";
import { Nunito, Dancing_Script, Shantell_Sans, Agbalumo, Itim } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"],
});

const shantellSans = Shantell_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shantell",
});

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-agbalumo",
});

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
});

const rosellinda = localFont({
  src: "../public/fonts/Rosellinda Alyamore.woff",
  variable: "--font-rosellinda",
});

export const metadata: Metadata = {
  title: "Thiệp Tốt Nghiệp - Đào Ngọc Hà",
  icons: {
    icon: "/img/fav/icon-letter.png",      
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${nunito.variable} 
          ${dancing.variable} 
          ${shantellSans.variable}
          ${agbalumo.variable}
          ${itim.variable}
          ${rosellinda.variable}
          font-nunito antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
