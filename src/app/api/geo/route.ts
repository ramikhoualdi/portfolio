import { geolocation } from "@vercel/functions";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const details = geolocation(request);
  console.log("details => ", details);
  return Response.json(details);
}
