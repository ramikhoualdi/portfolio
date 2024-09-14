import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import { cn } from "@/lib/utils";

export default function Me() {
  return (
    <div className="relative flex max-h-dvh min-h-dvh w-full flex-col items-start justify-center px-4 md:items-center lg:px-20">
      <div className="mb-[20px]">
        <FadeText
          className="font-['Valencia'] text-[9rem] leading-[140px] md:text-[9rem] lg:text-[12rem]"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.6 } },
          }}
          text="Rami Khoualdi"
        />
      </div>
      <div className="w-full text-center">
        <FadeText
          className="text-xl font-extralight md:text-2xl lg:text-4xl"
          direction="left"
          framerProps={{
            show: { transition: { delay: 0.7 } },
          }}
          text="Software Engineer"
        />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={3}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
