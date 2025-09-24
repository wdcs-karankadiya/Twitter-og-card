import "./globals.css";
import { Metadata } from "next";
import { appUrl } from "./services/config";

const userId = "3758";
const baseUrl = appUrl;
const imageUrl = `${baseUrl}/api/og?user_id=${userId}`;

export const metadata: Metadata = {
  title: "Twitter Share Demo",
  description: "Generated shareable image",
  openGraph: {
    title: "Twitter Share Demo",
    description: "Generated shareable image",
    images: [imageUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check out this image!",
    description: "Generated shareable image",
    images: [imageUrl],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
