"use client";

import AboutMe from "@/components/content/about-me";
import { AppsPreview } from "@/components/content/apps-preview";
import { BroadcastIndicator } from "@/components/content/broadcast-indicator";
import Me from "@/components/content/me";
import ScrollTrigger from "@/components/content/scroll-trigger";
import { UsersCursors } from "@/components/content/users-cursors";
import TextCursor from "@/components/ui/text-cursor";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { usePortfolio } from "@/context/portfolio-context";
import { useEffect } from "react";

export default function IndexPage() {
  const { state } = usePortfolio();
  const { currentUserLocation } = state;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        <Me />
        <AboutMe />
        <AppsPreview />
        <BroadcastIndicator />
        <UsersCursors />
        <TextCursor />
        <ScrollTrigger />
      </div>
    </FollowerPointerCard>
  );
}
