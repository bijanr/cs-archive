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
  title: "The Alchemist's Shelf",
  description: "Every book and PYQs you need, meticulously organized.",
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