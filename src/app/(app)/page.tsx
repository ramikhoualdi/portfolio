import AboutMe from "@/components/content/about-me";
import Me from "@/components/content/me";
import MobileApps from "@/components/content/mobile-apps";
import { WebApps } from "@/components/content/web-apps";

export default function IndexPage() {
  return (
    <div className="relative">
      <div className="px-4 lg:px-20">
        <Me />
      </div>
      <AboutMe />
      {/* <WebApps /> */}
      {/* <MobileApps /> */}
      {/* <FeaturedWork /> */}
      {/* <Testimonials /> */}
      {/* <div className="min-h-[2000px] w-screen" /> */}
    </div>
  );
}
