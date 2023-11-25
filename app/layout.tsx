import Head from "next/head";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Kohare | Mern Stack developer",
  description: "Aman Kohare, a passionate Mern stack developer from India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />

        {/* Open Graph meta tags for better sharing on social media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:image" content="https://your-website-url.com/og-image.jpg" />

        {/* Twitter meta tags for better Twitter card presentation */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://your-website-url.com/twitter-card-image.jpg" />
      </Head>

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f1eaf0] absolute top-[-1rem] -z-20 right-[5rem] h-[40rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] dark:bg-[#362424]"></div>
        <div className="bg-[#faf8fa] absolute top-[-1rem] -z-20 left-[-35rem] h-[40rem] w-[55rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2c294d]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
