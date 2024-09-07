"use client";

import React, { Fragment } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { webApps } from "@/components/constants/mobile-apps";

interface IPlatform {
  isShown: boolean;
  text: string;
  link: string | null;
}

interface IMobile {
  nb: string;
  name: string;
  position: string;
  tech: string[];
  desc: string;
  platform: string;
  imagesFolder: string;
  ios: IPlatform;
  android: IPlatform;
  web: IPlatform;
}

interface MobileAppDetailsProps {
  app: IMobile | undefined;
}

export const MobileAppDetails: React.FC<MobileAppDetailsProps> = ({ app }) => {
  if (!app) return null;
  const { position, desc, platform } = app;
  return (
    <div className="relative flex h-full flex-col items-start justify-between pb-20 pr-6 pt-10">
      <p className="text-body-medium-bold text-2xl font-medium">{position}</p>
      <p className="text-body-medium-bold text-5xl font-extralight">{desc}</p>
      <p className="text-heading-medium text-2xl">{platform}</p>
    </div>
  );
};

export function WebApps() {
  const appNames = [
    "esg-suite",
    // "Impulsive"
  ];
  const imageCount = 13;

  const webAppsImages = appNames.map((appName) =>
    Array.from(
      { length: imageCount },
      (_, i) => `/images/${appName}/s${i}.png`,
    ),
  );

  const createCards = (images: string[]): JSX.Element[] =>
    images.map((card, index) => (
      <Card
        key={index}
        index={index}
        cardImg={card}
        layout={true}
        isMobile={false}
      />
    ));

  const allCards = webAppsImages.map(createCards);

  const cardSets = Object.fromEntries(
    appNames.map((name, index) => [`${name}Cards`, allCards[index]]),
  );

  const entries = Object.entries(cardSets);

  const getAppDetails = (name: string): IMobile | undefined => {
    return webApps.find(
      (item) => item.imagesFolder.toLowerCase() === name.toLowerCase(),
    );
  };

  return (
    <div className="h-full w-full py-20 pl-14">
      {entries.map(([appName, cards]) => {
        console.log("appName => ", appName);
        const appInfo = getAppDetails(appName.replace("Cards", ""));
        return (
          <Fragment key={appName}>
            <div className="scrollbar-none relative -mx-12 -my-4 overflow-x-scroll px-12 py-4 md:mx-0 md:px-0">
              <div className="flex gap-4">
                <Image
                  src={`/images/${appInfo?.imagesFolder}/logo.png`}
                  width={50}
                  height={50}
                  alt={`${appInfo?.name}-logo`}
                />
                <h2 className="text-heading-large underline underline-offset-4">
                  {appInfo?.name}
                </h2>
              </div>
              <div className="flex h-24 w-full items-center gap-x-1 pt-4">
                <p className="text-heading-medium mr-2 min-w-28 text-xl">
                  Tech Stack
                </p>
                <Separator orientation="vertical" className="mx-2 h-8" />
                {appInfo?.tech.map((option) => (
                  <LinkPreview key={option} url="https://nextjs.org">
                    <Button className="text-body-medium-bold mr-2 rounded-full border bg-transparent hover:bg-black">
                      {option}
                    </Button>
                  </LinkPreview>
                ))}
              </div>
            </div>
            <div className="mb-1 flex">
              <div className="z-0 h-[689px] w-full">
                <MobileAppDetails app={appInfo} />
              </div>
              <div className="z-10 w-full">
                <Carousel key={appName} items={cards} />
              </div>
            </div>
            <Separator className="my-8 pr-[40px]" />
          </Fragment>
        );
      })}
    </div>
  );
}
