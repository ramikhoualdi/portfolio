"use client";

import { getUserGeoLocation } from "@/actions/geo-location";
import AboutMe from "@/components/content/about-me";
import Me from "@/components/content/me";
import MobileApps from "@/components/content/mobile-apps";
import { WebApps } from "@/components/content/web-apps";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Suspense, useEffect, useState } from "react";

type LocationInfo = {
  city?: string;
  country?: string;
  flag?: string;
  countryRegion?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
} | null;

export default function IndexPage() {
  const [currentUseLocation, setCurrentUserLocation] =
    useState<LocationInfo>(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      const userLocation = await getUserGeoLocation();
      setCurrentUserLocation(userLocation);
    };
    fetchGeoLocation();
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FollowerPointerCard
        title={
          currentUseLocation?.city && currentUseLocation?.city?.length > 0
            ? `You(${currentUseLocation?.city + ", " + currentUseLocation?.country})`
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
          {/* <div className="min-h-[2000px] w-screen" /> */}
        </div>
      </FollowerPointerCard>
    </Suspense>
  );
}
