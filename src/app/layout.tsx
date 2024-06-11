import type { Metadata } from "next";
import "./styles/globals.css";
import { font } from "./styles/fonts";

export const metadata: Metadata = {
  title: {
    absolute: "breno.me",
    template: "%s | breno.me",
    default: "breno.me",
  },
  description: "breno.me personal website, a web developer portfolio and future blog",
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
  icons: {
    icon: "/icon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={font.display.style}>
      <body>{children}</body>
    </html>
  );
}
