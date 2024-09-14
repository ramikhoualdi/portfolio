import { Separator } from "@/components/ui/separator";

const companies = [
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
  "Google",
  "Microsoft",
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
  "Google",
  "Microsoft",
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
  "Google",
  "Microsoft",
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
  "Google",
  "Microsoft",
];


export function Skills() {
  return (
    <>
      <div className="w-full py-6">
        <div>
          <h3 className="text-center text-sm font-semibold text-gray-500">
            SKILLS & TECHNOLOGIES
          </h3>
          <div className="relative mt-8">
            {/* {Array(6)
              .fill(0)
              .map((_, index) => ( */}
                <div className="flex flex-wrap grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-10 xl:gap-4">
                  {companies.map((logo, idx) => (
                    <img
                      key={idx}
                      src={`https://cdn.magicui.design/companies/${logo}.svg`}
                      className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                      alt={logo}
                    />
                  ))}
                </div>
              {/* ))} */}
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-[var(--background)]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-[var(--background)]"></div>
          </div>
        </div>
      </div>
      <Separator className="my-8 pr-[40px]" />
    </>
  );
}
