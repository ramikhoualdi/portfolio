"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function WebApps() {
  const appNames = ["esg-suite"];
  const imageCount = 12;

  const webAppsImages = appNames.map((appName) =>
    Array.from(
      { length: imageCount },
      (_, i) => `/images/${appName}/s${i + 1}.png`,
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

  return (
    <div className="h-full w-full py-20">
      <h2 className="max-w-7xl pl-12 font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-5xl">
        Web
      </h2>
      {entries.map(([appName, cards]) => (
        <Carousel key={appName} items={cards} />
      ))}
    </div>
  );
}
