import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import "./globals.css";

import Sidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Separator } from "@/components/ui/separator";
import FloatingActionButton from "@/components/buttons/FloatingActionButton";

export const metadata: Metadata = {
  title: "Rasil Baidar | Full Stack Developer",
  description:
    "Portfolio of Rasil Baidar, a passionate Full Stack Developer specializing in crafting digital experiences through elegant code and innovative solutions.",
  keywords: [
    "Rasil Baidar",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Rasil Baidar" }],
  creator: "Rasil Baidar",
  publisher: "Rasil Baidar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rasil.baidar.co",
    title: "Rasil Baidar | Full Stack Developer",
    description:
      "Portfolio of Rasil Baidar, a passionate Full Stack Developer specializing in crafting digital experiences through elegant code and innovative solutions.",
    siteName: "Rasil Baidar Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "CrAysR8sROdzdv4Gdq-Z8mYJxt1QlBcCFVMOlDbHruQ", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://rasil.baidar.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rasil Baidar",
              url: "https://rasil.baidar.co",
              jobTitle: "Full Stack Developer",
              description:
                "A passionate Full Stack Developer crafting digital experiences through elegant code and innovative solutions.",
              sameAs: [
                "https://github.com/rasil07",
                "https://linkedin.com/in/rasilbaidar",
                // Add your other social media profiles
              ],
            }),
          }}
        />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <SidebarProvider>
              <Sidebar />
              <main className="flex-auto ">
                <div className="flex items-center">
                  <SidebarTrigger />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />

                  <Breadcrumbs />
                </div>

                {children}
              </main>
            </SidebarProvider>
            <FloatingActionButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
