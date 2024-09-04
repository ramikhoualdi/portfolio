"use client";
import { featuredWork } from "@/components/constants/featured-work";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function FeaturedWork() {
  return (
    <div>
      <h2 className="text-3xl">Featured Work</h2>
      <Separator className="my-4 h-[2px]" />
      {featuredWork.map(({ appFirstWord, appSecondWord, image }) => (
        <>
          <div
            key={appFirstWord}
            className="group relative flex w-full items-center justify-center pb-2 text-center text-2xl md:text-6xl lg:pb-8 lg:text-8xl 2xl:text-9xl"
          >
            <span className="data-hover-shuffle">{appFirstWord}</span>
            <div className="mt-4">
              <span>
                {image ? (
                  <Image
                    src={image}
                    width={0}
                    height={80}
                    className="h-20 w-0 transition-all duration-700 ease-in-out group-hover:mx-4 group-hover:w-14"
                    alt={`img-${appFirstWord + appSecondWord}`}
                    priority
                  />
                ) : null}
              </span>
            </div>
            <span className="data-hover-shuffle">{appSecondWord}</span>
          </div>
          <Separator className="my-4 h-[2px]" />
        </>
      ))}
      <div className="relative flex w-full items-center justify-center pb-2 text-center text-2xl md:text-6xl lg:pb-8 lg:text-8xl 2xl:text-9xl">
        <span className="data-hover-shuffle">All Works</span>
      </div>
      <Separator className="my-4 h-[2px]" />
    </div>
  );
}
