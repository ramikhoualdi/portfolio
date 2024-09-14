import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { absoluteUrl, cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Portfolio",
    "Frontend engineer",
    "Software engineer",
    "Rami Khoualdi",
    "React",
    "Next js",
    "Typescript",
  ],
  authors: [
    {
      name: "Rami Khoualdi",
      url: "https://ramikhoualdi.com",
    },
  ],
  creator: "Rami Khoualdi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@Rami_HimSelf",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: absoluteUrl("/site.webmanifest"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                {children}
              </div>
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
