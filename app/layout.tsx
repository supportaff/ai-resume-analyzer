import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResumeIQ - AI Resume Analyzer | LinkedIn Optimizer | Cover Letter Generator",
  description: "Get your resume analyzed by AI in 60 seconds. LinkedIn optimization, cover letter templates, and career roadmap for just ₹20. No signup required.",
  keywords: ["resume analyzer", "AI resume", "LinkedIn optimizer", "cover letter generator", "ATS resume", "career tools India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
