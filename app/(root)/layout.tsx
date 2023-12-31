import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "University of Nigeria College of Medicine Alumni Association- North America (UNCOMA-NA)",
  description:
    "Supporting healthcare, education, and research for alumni of the University of Nigeria College of Medicine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white overflow-x-hidden`}>
        <NavBar />
        <section>
          <div className="w-full">{children}</div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
