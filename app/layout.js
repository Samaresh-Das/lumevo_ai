import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lumevo AI — AI Cover Letter Generator & Automated Social Media Posting",
  description:
    "CovGen writes ATS-ready cover letters in seconds. DailyContent posts to LinkedIn & Instagram for you. Meet your AI productivity suite — Lumevo AI.",
  keywords: [
    "AI cover letter generator",
    "AI cover letter writer",
    "cover letter AI",
    "automated social media posting",
    "AI social media manager",
    "agentic AI social media",
    "cover letter generator free",
    "AI cover letter from job description",
    "ATS optimized cover letter AI",
    "social media automation tool",
    "Lumevo AI",
    "CovGen AI",
    "DailyContent AI",
  ],
  openGraph: {
    title: "Lumevo AI — AI Cover Letter Generator & Automated Social Media Posting",
    description:
      "CovGen writes ATS-ready cover letters in seconds. DailyContent posts to LinkedIn & Instagram for you.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumevo AI — AI Cover Letters & Automated Social Posting",
    description:
      "CovGen writes ATS-ready cover letters in seconds. DailyContent posts for you. Meet Lumevo AI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
