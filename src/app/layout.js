import "./globals.css";
import "./style.css";

import Navbar from "../components/navbar.js";

import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  preload: false,
});

export const metadata = {
  title: "Boot.IT",
  description: "Bootcamp IT,Meet Up,and Competition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Bootcamp IT, Meet Up, and Competition" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Boot.IT</title>
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
