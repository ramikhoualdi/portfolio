import { getUserGeoLocation } from "@/actions/geo-location";
import AboutMe from "@/components/content/about-me";
import Me from "@/components/content/me";
import MobileApps from "@/components/content/mobile-apps";
import { WebApps } from "@/components/content/web-apps";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Suspense } from "react";

export default async function IndexPage() {
  const userLocation = await getUserGeoLocation();

  console.log("userLocation => ", userLocation);

  return (
    <Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
  );
}
