'use client';
// doesnt work!! saved for later on
import { ThemeProvider } from 'next-themes';

export default function MyThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}