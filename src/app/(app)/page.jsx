"use client";

import { getUserGeoLocation } from "@/actions/geo-location";
import AboutMe from "@/components/content/about-me";
import Me from "@/components/content/me";
import MobileApps from "@/components/content/mobile-apps";
import { WebApps } from "@/components/content/web-apps";
import {
  FollowerPointerCard,
  FollowPointer,
} from "@/components/ui/following-pointer";
import { Suspense, useEffect, useState } from "react";
import { socket } from "./../../socket";
import { cn } from "@/lib/utils";

const DEBOUNCE_MS = 20; // Debounce time in milliseconds

export default function IndexPage() {
  const [currentUseLocation, setCurrentUserLocation] = useState(null);
  const [cursors, setCursors] = useState({});
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      const userLocation = await getUserGeoLocation();
      setCurrentUserLocation(userLocation);
    };
    fetchGeoLocation();
  }, []);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    const debouncedCursorUpdate = debounce((data) => {
      setCursors((prevCursors) => ({
        ...prevCursors,
        [data.id]: { x: data.x, y: data.y },
      }));
    }, DEBOUNCE_MS);

    function onCursorUpdate(data) {
      debouncedCursorUpdate(data);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("cursor-update", onCursorUpdate);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("cursor-update", onCursorUpdate);
    };
  }, []);

  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX, clientY } = event;
      socket.emit("cursor-move", {
        x: clientX,
        y: clientY,
        userName: `You(${currentUseLocation?.city + ", " + currentUseLocation?.country})`,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Utility function for debouncing
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FollowerPointerCard
        title={
          currentUseLocation?.city && currentUseLocation?.city?.length > 0
            ? `You(${currentUseLocation?.city + ", " + currentUseLocation?.country})`
            : "You"
        }
      >
        <p>{isConnected ? "connected" : "disconnected"}</p>
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
          {/* other users mouse */}
          {Object.entries(cursors).map(([id, position]) => (
            <FollowPointer
              key={id}
              x={position.x}
              y={position.y}
              title={position.userName}
              className={`duration-[${DEBOUNCE_MS * 1.5}ms] transition-all`}
            />
          ))}
        </div>
      </FollowerPointerCard>
    </Suspense>
  );
}
