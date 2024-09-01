import { FadeText } from "@/components/magicui/fade-text";

export default function Me() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <FadeText
        className="xs:text-[10rem] font-['Valencia'] text-[4rem] leading-[14rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem]"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text="Rami Khoualdi"
      />
      <FadeText
        className="text-4xl font-normal"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.7 } },
        }}
        text="Frontend Engineer"
      />
    </div>
  );
}
