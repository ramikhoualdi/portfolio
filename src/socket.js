"use client";

import { io } from "socket.io-client";

export const socket = io("https://portfolio-backend-83ux.onrender.com", {
  transports: ["websocket"],
});

