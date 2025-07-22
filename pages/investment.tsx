import Icon from "@/components/Icon";
import { fetishServices, packages, vipServices } from "@/data/investment";
import Layout from "@/theme/Layout";
import gsap from "gsap";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useEffect, useRef } from "react";
import fs from "fs";
import path from "path";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { images } = props;
  const imageRef = useRef<HTMLImageElement>(null);
  const contentDivRef = useRef<HTMLDivElement>(null);
  const gallery1Ref = useRef<HTMLDivElement>(null);
  const gallery2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const contentDiv = contentDivRef.current;
    const mm = gsap.matchMedia();

    gsap.to(gallery1Ref.current, {
      x: "-100%",
      scrollTrigger: {
        trigger: gallery1Ref.current,
        scrub: 0.5,
      },
    });

    gsap.to(gallery2Ref.current, {
      x: 0,
      scrollTrigger: {
        trigger: gallery2Ref.current,
        scrub: 0.5,
      },
    });

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isDesktop } = context.conditions;
        if (isDesktop) {
          gsap.from(image, {
            x: "-100%",
            scrollTrigger: {
              trigger: image,
              scrub: 0.4,
              end: "top center",
            },
          });

          gsap.from(contentDiv, {
            x: "100%",
            scrollTrigger: {
              trigger: contentDiv,
              scrub: 0.4,
              end: "top center",
            },
          });
        }
      }
    );
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>investment | Kayla Williams</title>
      </Head>

      {/* render vous */}
      <section
        title="Rendez-vous"
        className="relative container/@rendez-vous overflow-hidden w-full"
      >
        <style jsx>{`
          .image-highlight {
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
              rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
        `}</style>
        <div className="px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 3xl:max-w-container-width-2xl py-section-padding-md lg:py-section-padding-lg 2xl:py-section-padding-2xl 3xl:py-section-padding-3xl grid grid-cols-6 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-14 3xl:gap-18 mx-auto">
          <div className="image-block col-span-6 relative">
            <div
              className="pb-[100%] relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-bg-color before:z-[2] before:opacity-20 image-highlight will-change-transform"
              ref={imageRef}
            >
              <Image
                src={"/images/model2.jpg"}
                alt="kayla williams"
                fill
                className="object-cover object-center rounded-2xl mix-blend-multiply"
              />
            </div>
          </div>
          <div
            className="col-span-6 lg:py-section-padding-lg 2xl:py-section-padding-2xl 3xl:py-section-padding-3xl flex flex-col justify-center will-change-transform"
            ref={contentDivRef}
          >
            <h2 className="text-fluid-h5 uppercase font-bold font-lora pb-4 2xl:pb-8">
              Rendez-vous
            </h2>
            <div className="flex items-center justify-center">
              <div className="card-wrapper relative">
                <div className="content-container">
                  <p className="text-fluid-body-4 capitalize font-semibold tracking-wider">
                    social and date - $1000
                  </p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4 pb-2">{`Whether it be dinner or drinks. Or a trip to the art gallery which I love, let's make it a moment to remember...`}</p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    {`Social meeting outdoor, great for business events or shopping trips or dinner dates (up to 4 hours) ... Or $300 hourly when accompanied with a rendezvous afterwards. Great for lunch and fun meetings.... `}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* introduction */}
      <section
        title="introduction"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/9.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            introduction
          </h2>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">
                  {`Hi Gents and Couples, My name is Kayla Williams. I am a college student and an abstract painter. In this adult-industry, I am a LOW-VOLUME elite companion. I am classy, sexy and best of all, intellectual. Science especially Genetics is my feild of interest and college study. A time spent with me is one that you will remember. Our laughs and giggles, our conversations and intimacy will be ones that I will hold dearly. I look forward to creating life-long memories of pleasure and happiness`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* package & arrangements */}
      <section
        id="packages"
        title="packages & arrangements"
        className="relative container/@pricing w-full mx-auto grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 py-container-padding sm:py-container-padding-sm md:py-container-padding-md lg:py-container-padding-lg 2xl:py-container-padding-xl 3xl:py-container-padding-xxl 3xl:max-w-container-width-2xl"
      >
        <div className="col-span-6 lg:col-span-8">
          <h2 className="text-fluid-body-3 uppercase font-bold font-lora text-center">{`packages & arrangements`}</h2>
          <p className="text-fluid-body-5-guided leading-fluid-h5 text-center max-w-4xl pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg capitalize">
            {`A night to remember`}
          </p>
          <div className="services grid grid-cols-6 2xl:grid-cols-12 gap-4 md:gap-8">
            {packages.map((service, idx) => {
              if (!service.label) {
                return null;
              }
              return (
                <div
                  className="col-span-6 md:col-span-3 lg:col-span-6 h-full"
                  key={idx}
                >
                  <div className="p-[20px_30px_20px_30px] 2xl:p-[40px_50px_40px_50px] border border-border-color relative h-full group">
                    <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-3">
                      <Icon
                        icon={service.icon}
                        size={48}
                        className="group-hover:scale-105"
                      />
                      <p className="relative text-fluid-body-5 capitalize font-lora tracking-wide font-semibold pt-4">
                        {service.label}
                      </p>
                      <p>{service.subTitle}</p>
                      {service.description && (
                        <p className="font-lora text-fluid-body-5 font-semibold mt-4 capitalize tracking-wide">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 max-lg:hidden">
          <div className="pb-[100%] overflow-hidden relative h-full">
            <Image
              src={"/images/banner1.jpeg"}
              alt="kayla williams"
              fill
              className="object-cover object-center image-highlight rounded-md opacity-80"
            />
          </div>
        </div>
      </section>

      {/* gallery animation */}
      <section
        title="image gallery"
        className="gallery-wrapper relative py-section-padding-md lg:py-section-padding-lg 2xl:py-section-padding-2xl 3xl:py-section-padding-3xl 2xl:min-h-lvh"
      >
        <div className="gallery-container overflow-hidden">
          <div className="images flex gallery-1" ref={gallery1Ref}>
            {images.slice(0, 10).map((imageSrc, idx) => (
              <div
                className="image-block aspect-square pb-[20%] relative w-[200px] lg:w-[300px] 3xl:w-[450px] shrink-0"
                key={idx}
              >
                <Image
                  src={imageSrc}
                  alt="kayla williams"
                  fill
                  className="object-cover object-center block"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-container overflow-hidden">
          <div
            className="images flex gallery-2 -translate-x-full"
            ref={gallery2Ref}
          >
            {images.slice(10, 19).map((imageSrc, idx) => (
              <div
                className="image-block aspect-square pb-[20%] relative w-[200px] lg:w-[300px] 3xl:w-[450px] shrink-0"
                key={idx}
              >
                <Image
                  src={imageSrc}
                  alt="kayla williams"
                  fill
                  className="object-cover object-center block"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vip */}
      <section
        title="vip"
        className="relative container/@pricing w-full mx-auto grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 py-container-padding sm:py-container-padding-sm md:py-container-padding-md lg:py-container-padding-lg 2xl:py-container-padding-xl 3xl:py-container-padding-xxl 3xl:max-w-container-width-2xl"
      >
        <div className="col-span-6 lg:col-span-4 max-lg:hidden">
          <div className="pb-[100%] overflow-hidden relative h-full">
            <Image
              src={"/images/model3.jpeg"}
              alt="kayla williams"
              fill
              className="object-cover object-center image-highlight rounded-md opacity-80"
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-8">
          <h2 className="text-fluid-body-3 uppercase font-bold font-lora text-center">{`vip`}</h2>
          <p className="text-fluid-body-5-guided leading-fluid-h5 text-center max-w-4xl pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg capitalize">
            {`The divine royalty treatment... Let's treat each other to a great sensual time. GFE`}
          </p>
          <div className="services grid grid-cols-6 2xl:grid-cols-12 gap-4 md:gap-8">
            {vipServices.map((service, idx) => {
              if (!service.label) {
                return null;
              }
              return (
                <div
                  className="col-span-6 md:col-span-3 lg:col-span-6 h-full"
                  key={idx}
                >
                  <div className="p-[20px_30px_20px_30px] 2xl:p-[40px_50px_40px_50px] border border-border-color relative h-full group">
                    <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-3">
                      <Icon
                        icon={service.icon}
                        size={48}
                        className="group-hover:scale-105"
                      />
                      <p className="relative text-fluid-body-5 capitalize font-lora tracking-wide font-semibold pt-4">
                        {service.label}
                      </p>
                      <p>{service.subTitle}</p>
                      {service.description && (
                        <p className="font-lora text-fluid-body-5 font-semibold mt-4 capitalize tracking-wide">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* my submission */}
      <section
        title="my submission"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/2.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            MY SUBMISSION
          </h2>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p className="text-fluid-body-4 capitalize pb-3 font-lora font-semibold tracking-wider">
                  A taste of my submission
                </p>
                <p className="text-fluid-body-5-guided leading-fluid-body-4 pb-2 font-medium">{`Whether it be dinner or drinks. Or a trip to the art gallery which I love, let's make it a moment to remember...`}</p>
                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">
                  {`If you're a new suite your mile may vary as to how much I choose to let my self submit to you. There will be rules and limits within the first few times until trust is gained For long-time suitors the world is your oyster (to a limit of safe same and legal play) but with that being said, I'm probably the most kinky and obedient sub you'd ever meet. My submission does not come cheap so please budget accordingly to have the experience of a lifetime`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner's Kink & Fetish package */}
      <section
        title="Beginner's Kink & Fetish package"
        className="relative container/@pricing w-full mx-auto grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 py-container-padding sm:py-container-padding-sm md:py-container-padding-md lg:py-container-padding-lg 2xl:py-container-padding-xl 3xl:py-container-padding-xxl 3xl:max-w-container-width-2xl"
      >
        <div className="col-span-6 lg:col-span-8">
          <h2 className="text-fluid-body-3 uppercase font-bold font-lora text-center">{`Beginner's Kink & Fetish package`}</h2>
          <p className="text-fluid-body-5-guided text-center max-w-4xl capitalize pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            {`Prostate massage, pegging, light dom , light submissive, light bdsm. Add fs for $100, as a bdsm switch ,I'm very sensual and always open to fetish encounters.`}
          </p>
          <div className="services grid grid-cols-6 2xl:grid-cols-12 gap-4 md:gap-8">
            {fetishServices.map((service, idx) => {
              if (!service.label) {
                return null;
              }
              return (
                <div
                  className="col-span-6 md:col-span-3 lg:col-span-6 h-full"
                  key={idx}
                >
                  <div className="p-[20px_30px_20px_30px] 2xl:p-[40px_50px_40px_50px] border border-border-color relative h-full group">
                    <div className="transition-all duration-300 ease-in-out group-hover:-translate-y-3">
                      <Icon
                        icon={service.icon}
                        size={48}
                        className="group-hover:scale-105"
                      />
                      <p className="relative text-fluid-body-5 capitalize font-lora tracking-wide font-semibold pt-4">
                        {service.label}
                      </p>
                      <p>{service.subTitle}</p>
                      {service.description && (
                        <p className="font-lora text-fluid-body-5 font-semibold mt-4 capitalize tracking-wide">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 max-lg:hidden">
          <div className="pb-[100%] overflow-hidden relative h-full">
            <Image
              src={"/images/model6.jpeg"}
              alt="kayla williams"
              fill
              className="object-cover object-center image-highlight rounded-md opacity-80"
            />
          </div>
        </div>
      </section>

      {/* information block */}
      <section
        title="please note"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/4.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl py-section-padding-md lg:py-section-padding-lg 2xl:py-section-padding-2xl 3xl:py-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-center pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            please note
          </h2>
          <div className="details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 2xl:gap-10">
            <div className="panel flex flex-col gap-4 border border-border-color p-[20px_30px_20px_30px] 2xl:p-[30px_40px_30px_40px]">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-lora">
                  {`deposit`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`a deposit is required for all bookings`}</p>
                <p>{`50% of Booking total + 100% of Travel fee (if applicable) is required at the time of booking. `}</p>
                <p>{`There are NO exceptions! `}</p>
              </div>
            </div>

            <div className="panel flex flex-col gap-4 border border-border-color p-[20px_30px_20px_30px] 2xl:p-[30px_40px_30px_40px]">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-lora">
                  {`short notice bookings`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`There will be an extra charge for short notice bookings between 0-3 days. 
I like to plan ahead as I'm a University student with a busy life. Booking in advance is appreciated but I will try to accommodate short notice bookings with a FEE. `}</p>
              </div>
            </div>

            <div className="panel flex flex-col gap-4 border border-border-color p-[20px_30px_20px_30px] 2xl:p-[30px_40px_30px_40px]">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-lora">
                  {`outcall bookings`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`All Outcall bookings will be subject to a charge of $100/hour,
                  excluding bookings from 8+ hours. There will also be a one
                  time charge for the travel fee depending on the location and
                  distance to me. Please keep this in mind when making a
                  booking.`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<{
  images: string[];
}> = async () => {
  const imagesDirectory = path.join(process.cwd(), "public/images/km");

  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(imagesDirectory);
  } catch (error) {
    console.error("Error reading image directory:", error);
  }

  const images = filenames
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map((file) => `/images/km/${file}`);

  return {
    props: {
      images,
    },
  };
};
