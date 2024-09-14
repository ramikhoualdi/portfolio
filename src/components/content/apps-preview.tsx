"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/button";
import { mobileApps, webApps } from "@/components/constants/mobile-apps";
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

interface IApp {
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
  isMobile: boolean;
  neonColors: INeonColors;
  company: string;
}

interface AppDetailsProps {
  app: IApp;
}

const AppDetails: React.FC<AppDetailsProps> = ({ app }) => {
  const { position, desc, platform } = app;
  return (
    <div className="relative flex h-full flex-col items-start justify-between pb-8 pl-4 pr-12 pt-10 md:pb-20">
      <p className="text-xl font-semibold md:text-2xl">{position}</p>
      <p className="my-10 text-xl font-extralight md:text-5xl">{desc}</p>
      <p className="text-xl font-semibold md:text-2xl">{platform}</p>
    </div>
  );
};

export function AppsPreview() {
  const size = useWindowSize();
  const isDesktopWindow = size.width && size.width > 1280;

  const allApps = [...webApps, ...mobileApps].sort(
    (a, b) => parseInt(a.nb) - parseInt(b.nb),
  );

  const [openApps, setOpenApps] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const initialOpenState = allApps.reduce(
      (acc, app) => {
        acc[app.imagesFolder] = [1, 3, 4, 5].includes(parseInt(app.nb));
        return acc;
      },
      {} as { [key: string]: boolean },
    );
    setOpenApps(initialOpenState);
  }, []);

  const toggleApp = (appName: string) => {
    setOpenApps((prev) => ({ ...prev, [appName]: !prev[appName] }));
  };

  return (
    <div className="h-full w-full overflow-hidden">
      {allApps.map((app) => {
        const isOpen = openApps[app.imagesFolder] ?? false;
        const imageCount = app.isMobile ? 6 : 13;
        const images = Array.from(
          { length: imageCount },
          (_, i) => `/images/${app.imagesFolder}/s${i}.png`,
        );

        return (
          <Fragment key={app.imagesFolder}>
            <Separator className="ml-[40px]" />
            <div className="relative py-8 transition-all delay-200 duration-500 ease-in md:pl-14">
              <div className="relative z-10 flex items-center justify-between pr-8">
                <div className="flex items-center gap-4 pl-4">
                  <NeonGradientCard
                    className="h-[60px] w-[60px] items-center justify-center !p-0 text-center"
                    neonColors={app.neonColors}
                    borderSize={1}
                  >
                    <Image
                      className="overflow-hidden object-contain"
                      src={`/images/${app.imagesFolder}/logo.png`}
                      width={60}
                      height={60}
                      alt={`${app.name}-logo`}
                    />
                  </NeonGradientCard>
                  <h2 className="md:text-heading-large text-xl font-bold underline underline-offset-4">
                    {app.name}
                  </h2>
                  <p className="text-2xl text-muted-foreground">
                    @ {app.company}
                  </p>
                </div>
                <Button
                  onClick={() => toggleApp(app.imagesFolder)}
                  className="h-[50px] w-[50px] rounded-full border border-white bg-transparent p-4 pb-5 text-xl font-thin text-white hover:bg-transparent md:text-[44px] md:leading-[48px] md:tracking-[-0.024em]"
                >
                  {isOpen ? "-" : "+"}
                </Button>
              </div>
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: isOpen ? "2000px" : "0px",
                }}
              >
                <div className="scrollbar-none relative z-20 -my-4 max-w-full overflow-x-scroll pl-4 md:mx-0 md:px-12">
                  <div className="flex h-24 w-full items-center gap-x-1 pt-4">
                    <p className="mr-2 min-w-24 text-base font-semibold md:min-w-28 md:text-xl">
                      Tech Stack
                    </p>
                    <Separator orientation="vertical" className="mx-2 h-8" />
                    {app.tech.map(({ name, url }) => (
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
                    <AppDetails app={app} />
                    {isDesktopWindow ? (
                      <div className="pointer-events-none absolute -right-8 bottom-0 top-0 w-[80px] bg-transparent">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-100"></div>
                        <div className="opacity-99 absolute inset-0 bg-gradient-to-r from-transparent to-transparent backdrop-blur-lg"></div>
                      </div>
                    ) : null}
                  </div>
                  <div className="relative z-0 w-full">
                    <Carousel
                      key={app.imagesFolder}
                      items={images.map((image, index) => (
                        <Card
                          key={index}
                          index={index}
                          cardImg={image}
                          isMobile={app.isMobile}
                        />
                      ))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
      <Separator className="ml-[40px]" />
    </div>
  );
}
