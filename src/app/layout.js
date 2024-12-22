import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { lato } from "@/utility/fonts-utility";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.className}>
      <head>
        {/* Basic SEO */}
        <title>Medi Impact - Dose of Hope</title>
        <meta
          name="description"
          content="Medi Impact provides high-quality pharmaceutical exports with WHO GMP certification. Your trusted partner for global healthcare solutions, offering safe and reliable manufacturing medicines. Together, we provide a 'Dose of Hope' worldwide."
        />
        <meta name="author" content="Medi Impact" />
        <meta
          name="keywords"
          content="Pharmacy, Pharmaceutical, Health, Medicine, Pharmaceutical manufacturing, Global Health"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Medi Impact - Dose of Hope" />
        <meta
          property="og:description"
          content="Medi Impact provides high-quality pharmaceutical exports with WHO GMP certification. Your trusted partner for global healthcare solutions, offering safe and reliable manufacturing medicines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Medi Impact" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medi Impact - Dose of Hope" />
        <meta
          name="twitter:description"
          content="Medi Impact provides high-quality pharmaceutical exports with WHO GMP certification."
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://yourwebsite.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
