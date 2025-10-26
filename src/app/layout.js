import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/NavBar";
// import MyThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});




export const metadata = {
  title: "CSArchive", 
  description: "The Alchemist's Shelf.", 
  metadataBase: new URL("https://csarchive.vercel.app"), 
  openGraph: {
    title: "The Alchemist's Shelf",
    description: "Every book and resouce you need, meticulously organized.",
    url: "https://csarchive.vercel.app",
    siteName: "The Alchemist's Shelf",
    images: [
      {
        url: "/icon.svg", 
        width: 1200,    
        height: 630,      
        alt: "The Alchemist's Shelf Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {/* <MyThemeProvider> */}
          <Navbar/>
          <main>
            {children}
          </main>
        {/* </MyThemeProvider> */}
      </body>
    </html>
  );
}