"use client";

import * as React from "react";
import { SiteFooter } from "@/components/site-footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const containerRef = React.useRef(null);
  return (
    <>
      <main data-scroll-container ref={containerRef} className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
