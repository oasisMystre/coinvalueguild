import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

import "./globals.css";

import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Services to assist upcoming and existing project to scale to new heights | Coin Value",
  description: "We are a professional team of experts that specialises in project development, growth, community management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "fixed inset-0 bg-black text-white")}
      >
        <div className="w-full h-full relative flex flex-col bg-gradient-to-r from-black to-primary/10">
          <div className="absolute -right-24 top-1/6 w-1/2 h-2/3 p-2 bg-gradient-to-r from-primary/10 to-primary/10 rounded-full blur-2xl -z-10" />
          <div className="w-full h-full flex flex-col space-y-8 overflow-y-scroll">
            <LayoutHeader />
            {children}
            <LayoutFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
