import type { Metadata } from "next";
import { Space_Grotesk, Inter, Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kabir Varsha Amin — BTech CSE Student & Aspiring Developer",
  description:
    "Award-worthy portfolio of Kabir Varsha Amin — BTech CSE Student & Aspiring Developer crafting premium digital experiences with React, Next.js, Three.js, and cutting-edge technology.",
  keywords: [
    "Kabir Varsha Amin",
    "BTech CSE Student",
    "Aspiring Developer",
    "Full Stack Developer",
    "Creative Engineer",
    "Creative Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Kabir Varsha Amin" }],
  openGraph: {
    title: "Kabir Varsha Amin — BTech CSE Student & Aspiring Developer",
    description:
      "Crafting premium digital experiences with clean code and bold design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabir Varsha Amin — BTech CSE Student & Aspiring Developer",
    description:
      "Crafting premium digital experiences with clean code and bold design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} ${josefinSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-void text-cloud overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
