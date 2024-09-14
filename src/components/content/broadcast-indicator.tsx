"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import { useEffect } from "react";
import { usePortfolio } from "@/context/portfolio-context";
import { getUserGeoLocation } from "@/actions/geo-location";
import { debounce } from "@/hooks/use-debounce";

import { socket } from "./../../socket";

interface CursorData {
  id: string;
  x: number;
  y: number;
}

const DEBOUNCE_MS = 20; // Debounce time in milliseconds

export const BroadcastIndicator = () => {
  const { state, dispatch } = usePortfolio();
  const { currentUserLocation, isBroadcastConnected, usersCursor } = state;

  useEffect(() => {
    const fetchGeoLocation = async () => {
      const userLocation = await getUserGeoLocation();
      dispatch({ type: "UPDATE_USER_LOCATION", payload: userLocation });
    };
    fetchGeoLocation();
  }, []);

  useEffect(() => {
    function onConnect() {
      console.log('connected !')
      dispatch({ type: "UPDATE_BROADCAST_CONNECTION", payload: true });
    }
    
    function onDisconnect() {
      console.log('disconnected !')
      dispatch({ type: "UPDATE_BROADCAST_CONNECTION", payload: false });
    }
    
    const debouncedCursorUpdate = debounce((data: CursorData) => {
      dispatch({
        type: "UPDATE_USERS_CURSOR",
        payload: {
          ...usersCursor,
          [data.id]: {
            x: data.x,
            y: data.y,
            userName: usersCursor[data.id]?.userName || "Anonymous",
          },
        },
      });
    }, DEBOUNCE_MS);
    
    function onCursorUpdate(data: CursorData) {
      console.log('cursor updated !')
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
    function handleMouseMove(event: MouseEvent) {
      const { clientX, clientY } = event;
      socket.emit("cursor-move", {
        x: clientX,
        y: clientY,
        userName: `You(${currentUserLocation?.city + ", " + currentUserLocation?.country})`,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="h-auto w-auto cursor-none bg-transparent hover:bg-transparent">
          <div
            className="absolute left-3 top-3 h-4 w-4 animate-ping rounded-full"
            style={{
              backgroundColor: isBroadcastConnected
                ? "bg-green-400"
                : "bg-red-600",
            }}
          />
          <div
            className="absolute left-3 top-3 h-4 w-4 rounded-full"
            style={{
              backgroundColor: isBroadcastConnected
                ? "bg-green-400"
                : "bg-red-600",
            }}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={2} className="ml-1 mt-1">
        <p>
          Broadcast server {isBroadcastConnected ? "connected" : "disconnected"}
          ...
        </p>
      </TooltipContent>
    </Tooltip>
  );
};
