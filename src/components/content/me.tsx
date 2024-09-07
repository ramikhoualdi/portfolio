import { FadeText } from "@/components/magicui/fade-text";

export default function Me() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-start justify-center md:items-center">
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
    </div>
  );
}
