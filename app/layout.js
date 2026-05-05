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
  metadataBase: new URL("https://lumevo.ai"),
  title: {
    default: "Lumevo AI — AI Cover Letter Generator & Automated Social Media Posting",
    template: "%s | Lumevo AI",
  },
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Lumevo AI — AI Cover Letter Generator & Automated Social Media Posting",
    description:
      "CovGen writes ATS-ready cover letters in seconds. DailyContent posts to LinkedIn & Instagram for you.",
    url: "https://lumevo.ai",
    siteName: "Lumevo AI",
    images: [
      {
        url: "/og-image.png", // Assuming this will be added later
        width: 1200,
        height: 630,
        alt: "Lumevo AI — AI Productivity Suite",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumevo AI — AI Cover Letters & Automated Social Posting",
    description:
      "CovGen writes ATS-ready cover letters in seconds. DailyContent posts for you. Meet Lumevo AI.",
    images: ["/og-image.png"],
    creator: "@lumevo_ai",
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
