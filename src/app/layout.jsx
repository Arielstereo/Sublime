import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import ScrollToTop from "./components/ScrollToTop";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sublime by Emprendev",
  description: "Personalizá todo lo que imagines",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${rubik.className} antialiased`}>
        <ScrollToTop />
        <Header />
        <Brand />
        {children}
        <Footer />
      </body>
    </html>
  );
}
