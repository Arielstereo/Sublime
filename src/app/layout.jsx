import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import ScrollToTop from "./components/ScrollToTop";
import Background from "./components/Background";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://sublime.empren.dev",
);

export const metadata = {
  title: "Sublime by Emprendev",
  description: "Personalizá todo lo que imagines",
  keywords: [
    "Sublime",
    "personalizados",
    "regalos",
    "corporativos",
    "productos personalizados",
    "sublimación",
    "tazas personalizadas",
    "camisetas personalizadas",
    "merchandising",
    "artículos promocionales",
    "regalos empresariales",
  ],
  authors: [{ name: "Sublime by Emprendev" }],
  openGraph: {
    title: "Sublime by Emprendev",
    description: "Personalizá todo lo que imagines",
    siteName: "Sublime",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "qGCnmT790OHmqDOzts3TDjYJ0jSRQRscQHJHb_hSeIM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${rubik.variable} antialiased pt-20 text-fg`}>
        <ScrollToTop />
        <Header />
        <Brand />
        <Background>{children}</Background>
        <Footer />
      </body>
    </html>
  );
}
