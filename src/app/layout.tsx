import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const helveticaNeueArabic = localFont({
  src: [
    {
      path: '../assets/fonts/alfont_com_AlFont_com_helveticaneueltarabicroman1.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-helvetica-neue-arabic',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "ميادين - Mayadeen",
  description: "منصة ميادين لسباقات الخيل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={helveticaNeueArabic.className}>
      <body
        className={`${helveticaNeueArabic.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
