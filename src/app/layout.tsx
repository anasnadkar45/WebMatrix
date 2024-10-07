import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import { Inter, Lato, Urbanist, Titillium_Web, Amaranth } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import { SocialHandles } from "./components/SocialHandles";

// Load custom fonts

const lato = Lato({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });
const titillium_Web = Titillium_Web({ weight: "400", subsets: ["latin"] });
export const amaranth = Amaranth({ weight: "400", subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(titillium_Web.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            {/* Navbar */}
            <Navbar />
            <SocialHandles />
            {/* Page Content */}
            <main className="pt-16">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
