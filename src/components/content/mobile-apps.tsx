import { mobileApps } from "@/components/constants/mobile-apps";
import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const Cube = ({ nb }: { nb: string }) => {
  return (
    <div className="absolute left-0 top-0 flex h-3 w-3 items-end justify-end bg-[#222] p-1">
      <p className="text-[hsl(0, 11%, 81%)] m-0 p-0 text-3xl uppercase">{nb}</p>
    </div>
  );
};

export default function MobileApps() {
  return (
    <>
      {mobileApps.map((app) => (
        <section
        key={app.name}  
        className="relative flex w-full"
        //   data-scroll-section
          id={`app-${app.imagesFolder}`}

        >
          <div
            className="flex h-screen w-1/2 flex-col"
            // data-scroll
            // data-scroll-sticky
            // data-scroll-target={`#app-${app.imagesFolder}`}
            // data-scroll-repeat
          >
            <Cube nb={app.nb} />
            <div className="flex h-full flex-nowrap items-center">
              <div className="w-full">
                <div className="pb-12 text-7xl capitalize">{app.name}</div>
                <div className="pb-5 text-3xl font-semibold">
                  {app.position}
                </div>
                <div className="pb-5 text-2xl font-semibold">{app.tech}</div>
                <div className="text-lg">{app.desc}</div>
              </div>
            </div>
            <div className="flex flex-row items-center p-4 text-2xl uppercase">
              {app.ios.isShown ? (
                app.ios.link ? (
                  <Link
                    href={app.ios.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {app.ios.text}
                  </Link>
                ) : (
                  <p>{app.ios.text}</p>
                )
              ) : null}
              {app.android.isShown ? (
                app.android.link ? (
                  <>
                    <p>&nbsp;•&nbsp;</p>
                    <Link
                      href={app.android.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {app.android.text}
                    </Link>
                  </>
                ) : (
                  <p>&nbsp;•&nbsp;{app.android.text}</p>
                )
              ) : null}
              {app.web.isShown ? (
                app.web.link ? (
                  <>
                    <p>&nbsp;•&nbsp;</p>
                    <Link
                      href={app.web.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {app.web.text}
                    </Link>
                  </>
                ) : (
                  <p>&nbsp;•&nbsp;{app.web.text}</p>
                )
              ) : null}
            </div>
          </div>
          {/* <div className={styles.sectionRight}>
            <div
              className={styles.imageContainer}
              data-scroll
              data-scroll-speed="2"
              data-scroll-offset="40%"
            >
              <div data-scroll data-scroll-speed="1" data-scroll-repeat>
                <img
                  src={`/images/${app.imagesFolder}/s1.png`}
                  alt={`${app.imagesFolder}1`}
                  className={styles.imgStyle1}
                />
              </div>
              <div data-scroll data-scroll-speed="2" data-scroll-repeat>
                <img
                  src={`/images/${app.imagesFolder}/s2.png`}
                  alt={`${app.imagesFolder}2`}
                  className={styles.imgStyle2}
                />
              </div>
              <div data-scroll data-scroll-speed="4" data-scroll-repeat>
                <img
                  src={`/images/${app.imagesFolder}/s3.png`}
                  alt={`${app.imagesFolder}3`}
                  className={styles.imgStyle3}
                />
              </div>
              <div data-scroll data-scroll-speed="1" data-scroll-repeat>
                <img
                  src={`/images/${app.imagesFolder}/s4.png`}
                  alt={`${app.imagesFolder}4`}
                  className={styles.imgStyle4}
                />
              </div>
              <div data-scroll data-scroll-speed="2" data-scroll-repeat>
                <img
                  src={`/images/${app.imagesFolder}/s5.png`}
                  alt={`${app.imagesFolder}5`}
                  className={styles.imgStyle5}
                />
              </div>
            </div>
          </div> */}
        </section>
      ))}
    </>
  );
}
