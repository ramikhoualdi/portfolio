import Marquee from "@/components/magicui/marquee";
import TweetCard from "@/components/magicui/tweet-card";

const tweets = [
  "https://x.com/chronark_/status/1754781648262967323",
  "https://x.com/pkp_io/status/1684561895481802753",
  "https://x.com/devcagatay/status/1684573935466328065",
  "https://x.com/KanishkKhurana_/status/1684613797984800768",
  "https://x.com/WhopIO/status/1722690049374830639",
  "https://x.com/steventey/status/1722659583464968612",
  "https://x.com/AwesomAmri/status/1668432554842619906",
  "https://x.com/taishik_/status/1668510585926066176",
  "https://x.com/SullyOmarr/status/1668506160620769280",
  "https://x.com/sup_nim/status/1668525144409624578",
  "https://x.com/JakeDuth/status/1668442365625790465",
  "https://x.com/0xRaduan/status/1668557577985179648",
  "https://x.com/yazinsai/status/1668617800934641672",
  "https://x.com/wes_walke/status/1668612106696941570",
  "https://x.com/DevAlien/status/1668618017528479745",
  "https://x.com/fredmaiaarantes/status/1684676668445622272",
  "https://x.com/DesignSumu/status/1668559314272022528",
  "https://x.com/commandodev/status/1668640878225764354",
  "https://x.com/SandBoxSo/status/1668570645741948930",
  "https://x.com/sxndrao/status/1668634137547399168",
  "https://x.com/jordienr/status/1681389309037772820",
  "https://x.com/beneverman/status/1681477151042797568",
].map((t) => t.split("/").slice(-1)[0]);

const tweetsThatMightComeTrue = [
  {
    name: "Elon Musk",
    profileImg: "https://twitter.com/elonmusk/profile_image", // Example placeholder
    quote: "Mars needs memes. Let’s colonize it with dankness.",
  },
  {
    name: "Donald Trump",
    profileImg: "https://twitter.com/realDonaldTrump/profile_image", // Example placeholder
    quote: "This tweet is the best tweet. Everyone says so. Believe me!",
  },
  {
    name: "Jeff Bezos",
    profileImg: "https://twitter.com/JeffBezos/profile_image", // Example placeholder
    quote: "Alexa, laugh at the competition.",
  },
  {
    name: "Mark Zuckerberg",
    profileImg: "https://twitter.com/finkd/profile_image", // Example placeholder
    quote: "Why make friends in real life when you can add them on Facebook?",
  },
  {
    name: "MOM",
    profileImg: "https://twitter.com/mom/profile_image", // Example placeholder
    quote: "Remember to call me. Love you!",
  },
  {
    name: "DAD",
    profileImg: "https://twitter.com/dad/profile_image", // Example placeholder
    quote: "Back in my day, we didn’t tweet—we yelled across the room.",
  },
  {
    name: "Bill Gates",
    profileImg: "https://twitter.com/BillGates/profile_image", // Example placeholder
    quote: "Ctrl + Alt + Delete your bad habits and reboot your life.",
  },
  {
    name: "The Rock",
    profileImg: "https://twitter.com/TheRock/profile_image", // Example placeholder
    quote: "Can you smell what The Rock is tweeting?",
  },
  {
    name: "Kanye West",
    profileImg: "https://twitter.com/kanyewest/profile_image", // Example placeholder
    quote: "I’m not tweeting for the followers. I’m tweeting for the culture.",
  },
  {
    name: "LeBron James",
    profileImg: "https://twitter.com/KingJames/profile_image", // Example placeholder
    quote: "Just a kid from Akron tweeting like a king.",
  },
  {
    name: "Steve Jobs",
    profileImg: "https://twitter.com/stevejobs/profile_image", // Example placeholder
    quote: "Stay hungry, stay foolish, stay tweeting.",
  },
  {
    name: "Snoop Dogg",
    profileImg: "https://twitter.com/SnoopDogg/profile_image", // Example placeholder
    quote: "Fo' shizzle, my tweet’s off the hizzle.",
  },
  {
    name: "Cristiano Ronaldo",
    profileImg: "https://twitter.com/Cristiano/profile_image", // Example placeholder
    quote: "Rami’s code? Simply the GOAT of development. SIUUU!",
  },
  {
    name: "Lionel Messi",
    profileImg: "https://twitter.com/TeamMessi/profile_image", // Example placeholder
    quote: "Rami’s code: just like the perfect assist, always on target.",
  },
];

export default async function Testimonials() {
  const firstRow = tweets.slice(0, tweets.length / 2);
  const secondRow = tweets.slice(tweets.length / 2);

  return (
    <section id="testimonials" className="container py-14">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don't just take our word for it. Here's what{" "}
        <strong>real people</strong> are saying about <strong>Me</strong> on
        Twitter.
      </h3>
      <div className="relative flex flex-col">
        <Marquee className="max-w-screen [--duration:120s]" pauseOnHover>
          {firstRow.map((id, idx) => (
            <TweetCard id={id} className="max-h-32 w-72 min-w-72" key={idx} />
          ))}
        </Marquee>
        <Marquee
          className="max-w-screen [--duration:120s]"
          reverse
          pauseOnHover
        >
          {secondRow.map((id, idx) => (
            <TweetCard id={id} className="max-h-32 w-72 min-w-72" key={idx} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}
