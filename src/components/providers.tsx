"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PortfolioProvider } from "@/context/portfolio-context";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <PortfolioProvider>
      <NextThemesProvider {...props}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </NextThemesProvider>
    </PortfolioProvider>
  );
}
