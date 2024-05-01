import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scribblix",
  description: "Streamline productivity with our intuitive note-taking app. Organize effortlessly!",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.png",
      href: "/logo.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo.png",
      href: "/logo.png",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="scribblix-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
