import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useWindowSize } from "@/hooks/use-window-size";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

const PROJECT_NAME = "My Folder Structure";

export function AdaptativeSheet({ children }: AppLayoutProps) {
  const size = useWindowSize();
  const isDesktopWindow = size.width && size.width > 1280;
  const [open, setOpen] = useState(false);

  function ToggleButton() {
    return (
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="fixed right-7 top-4 z-50 flex h-[56px] w-[56px] items-center justify-center rounded-full border bg-black/50 backdrop-blur-md hover:bg-black/95"
      >
        <SlidersHorizontal size={18} />
      </Button>
    );
  }

  if (isDesktopWindow)
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <ToggleButton />
        </SheetTrigger>
        <SheetContent className="min-w-[500px]" >
          <SheetHeader>
            <SheetTitle className="sr-only">{PROJECT_NAME}</SheetTitle>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ToggleButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="sr-only">{PROJECT_NAME}</DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
