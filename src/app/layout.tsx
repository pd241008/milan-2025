import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Adjust the path if Navbar is in another folder

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milan Fest - The Premier College Fest",
  description:
    "Experience the ultimate college fest: culture, innovation, and celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 min-h-screen antialiased font-sans flex flex-col`}
        suppressHydrationWarning>
        {/* Navbar */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-indigo-900 text-white text-center py-6 mt-16 shadow-inner">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Milan Fest | SRM University. All
              Rights Reserved.
            </p>
            <p className="text-xs text-indigo-300 mt-1">
              Connect. Compete. Celebrate.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
