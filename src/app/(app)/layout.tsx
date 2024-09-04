"use client";

import { SiteFooter } from "@/components/site-footer";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { usePathname } from "next/navigation";
import * as React from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const containerRef = React.useRef(null);
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   watch={[pathname, children]}
    //   location={pathname}
    //   containerRef={containerRef}
    //   onLocationChange={(scroll: {
    //     scrollTo: (
    //       arg0: number,
    //       arg1: { duration: number; disableLerp: boolean },
    //     ) => any;
    //   }) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
    // >
    <>
    <FollowerPointerCard>
      <main data-scroll-container ref={containerRef} className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </FollowerPointerCard>
    </>
    // </LocomotiveScrollProvider>
  );
}
