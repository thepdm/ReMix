import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remix",
  description: "AI music remix — create, remix, share",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 430, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
