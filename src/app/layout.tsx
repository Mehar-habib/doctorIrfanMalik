import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Navbar";
import Footer from "@/Footer";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dr. Irfan Malik - Top Pulmonologist in Lahore",
  description:
    "Dr. Irfan Malik is a leading pulmonologist in Lahore specializing in asthma and allergic conditions. Book your appointment today for expert care.",
  openGraph: {
    title: "Dr. Irfan Malik - Expert Pulmonologist in Lahore",
    description:
      "Consult Dr. Irfan Malik, one of Lahore's top pulmonologists specializing in treating respiratory conditions such as asthma and allergies.",
    url: "https://yourwebsiteurl.com",
    siteName: "Dr. Irfan Malik",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-7xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
