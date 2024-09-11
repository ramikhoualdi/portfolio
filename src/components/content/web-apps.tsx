"use client";

import React, { Fragment } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { webApps } from "@/components/constants/mobile-apps";
import { useWindowSize } from "@/hooks/use-window-size";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

interface IPlatform {
  isShown: boolean;
  text: string;
  link: string | null;
}

interface ITech {
  name: string;
  url: string;
}

interface INeonColors {
  firstColor: string;
  secondColor: string;
}

interface IMobile {
  nb: string;
  name: string;
  position: string;
  tech: ITech[];
  desc: string;
  platform: string;
  imagesFolder: string;
  ios: IPlatform;
  android: IPlatform;
  web: IPlatform;
  neonColors: INeonColors;
}

interface MobileAppDetailsProps {
  app: IMobile | undefined;
}

export const MobileAppDetails: React.FC<MobileAppDetailsProps> = ({ app }) => {
  if (!app) return null;
  const { position, desc, platform } = app;
  return (
    <div className="relative flex h-full flex-col items-start justify-between pb-8 pl-4 pr-12 pt-10 md:pb-20">
      <p className="text-xl font-semibold md:text-2xl">{position}</p>
      <p className="my-10 text-xl font-extralight md:text-5xl">{desc}</p>
      <p className="text-xl font-semibold md:text-2xl">{platform}</p>
    </div>
  );
};

export function WebApps() {
  const size = useWindowSize();

  const isDesktopWindow = size.width && size.width > 1280;

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
      <Card key={index} index={index} cardImg={card} isMobile={false} />
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
    <div className="h-full w-full md:pl-14">
      {entries.map(([appName, cards]) => {
        const appInfo = getAppDetails(appName.replace("Cards", ""));
        return (
          <Fragment key={appName}>
            <div className="flex items-center gap-4 pl-4">
              <NeonGradientCard
                className="h-[60px] w-[60px] items-center justify-center !p-0 text-center"
                neonColors={appInfo?.neonColors}
                borderSize={1}
              >
                <Image
                  className="object-contain"
                  src={`/images/${appInfo?.imagesFolder}/logo.png`}
                  width={60}
                  height={60}
                  alt={`${appInfo?.name}-logo`}
                />
              </NeonGradientCard>
              <h2 className="md:text-heading-large text-xl font-bold underline underline-offset-4">
                {appInfo?.name}
              </h2>
            </div>
            <div className="scrollbar-none relative z-20 -my-4 max-w-full overflow-x-scroll pl-4 md:mx-0 md:px-12">
              <div className="flex h-24 w-full items-center gap-x-1 pt-4">
                <p className="mr-2 min-w-24 text-base font-semibold md:min-w-28 md:text-xl">
                  Tech Stack
                </p>
                <Separator orientation="vertical" className="mx-2 h-8" />
                {appInfo?.tech.map(({ name, url }) => (
                  <LinkPreview key={name} url={url}>
                    <Button className="md:text-body-medium-bold mr-2 rounded-full border bg-transparent text-sm text-[--forground] hover:bg-black">
                      {name}
                    </Button>
                  </LinkPreview>
                ))}
              </div>
            </div>
            <div className="relatove mb-1 flex flex-col items-center xl:flex-row">
              <div className="relative z-10 h-full w-full md:h-[689px]">
                <MobileAppDetails app={appInfo} />
                {isDesktopWindow ? (
                  <div className="pointer-events-none absolute -right-8 bottom-0 top-0 w-[80px] bg-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-100"></div>
                    <div className="opacity-99 absolute inset-0 bg-gradient-to-r from-transparent to-transparent backdrop-blur-lg"></div>
                  </div>
                ) : null}
              </div>
              <div className="relative z-0 w-full">
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
