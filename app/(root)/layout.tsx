import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body className={`${inter.className} bg-[#EDFEEE] px-32`}>
        <NavBar />
        <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
      </body>
    </html>
  );
}
