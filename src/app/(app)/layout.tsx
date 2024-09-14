"use client";

import * as React from "react";
import { SiteFooter } from "@/components/site-footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
