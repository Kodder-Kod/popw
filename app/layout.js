import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./componets/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabatia Eye Hospital",
  description: "Developed by ICT department ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Footer/>
      </body>
    </html>
  );
}
