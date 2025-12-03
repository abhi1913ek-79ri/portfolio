import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://your-domain.com"), // ← jab deploy ho jaye, domain daal dena
  
  title: {
    default: "Abhishek Giri | MERN & Next.js Developer Portfolio",
    template: "%s | Abhishek Giri"
  },

  description:
    "Portfolio of Abhishek Giri — MERN Stack Developer, React & Next.js Specialist, and AI/ML Enthusiast. Explore projects, skills, and contact details.",

  keywords: [
    "Abhishek Giri",
    "MERN Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Web Developer Portfolio",
    "USICT Developer",
    "JavaScript Developer"
  ],

  authors: [{ name: "Abhishek Kumar Giri" }],
  creator: "Abhishek Giri",

  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Abhishek Giri | Full-Stack Developer Portfolio",
    description:
      "Modern portfolio of Abhishek Giri — MERN Stack & Next.js Developer. Explore projects, skills and connect.",
    url: "https://portfolio-abhi1913ek-79ri.vercel.app",
    siteName: "Abhishek Giri Portfolio",
    images: [
      {
        url: "/og-image.png", // bana ke daal dena, 1200x630 recommended
        width: 1200,
        height: 630,
        alt: "Abhishek Giri Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Giri | MERN & Next.js Developer",
    description:
      "Explore the interactive portfolio of Abhishek Giri — MERN Stack Developer and AI/ML Learner.",
    images: ["/og-image.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
