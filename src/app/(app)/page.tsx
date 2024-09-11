"use client";

import AboutMe from "@/components/content/about-me";
import { BroadcastIndicator } from "@/components/content/broadcast-indicator";
import Me from "@/components/content/me";
import MobileApps from "@/components/content/mobile-apps";
import { UsersCursors } from "@/components/content/users-cursors";
import { WebApps } from "@/components/content/web-apps";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { usePortfolio } from "@/context/portfolio-context";
import { useEffect } from "react";

export default function IndexPage() {
  const { state } = usePortfolio();
  const { currentUserLocation } = state;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enables smooth scrolling
    });
  }, []);

  return (
    <FollowerPointerCard
      title={
        currentUserLocation?.city && currentUserLocation?.city?.length > 0
          ? `You(${currentUserLocation?.city + ", " + currentUserLocation?.country})`
          : "You"
      }
    >
      <div className="max-w-screen relative">
        <div className="px-4 lg:px-20">
          <Me />
        </div>
        <AboutMe />
        <WebApps />
        <MobileApps />
        {/* <FeaturedWork /> */}
        {/* <Testimonials /> */}
        <BroadcastIndicator />
        <UsersCursors />
      </div>
    </FollowerPointerCard>
  );
}
