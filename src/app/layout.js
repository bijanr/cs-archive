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