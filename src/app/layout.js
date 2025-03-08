import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Liam's Quality Meats",
  description: "Premium Quality Butchers in Costa del Sol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="font-montserrat">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
