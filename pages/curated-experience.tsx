import Icon from "@/components/Icon";
import { packages } from "@/data/investment";
import Layout from "@/theme/LayoutV2";
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
        <title>curated experience | Kayla Williams</title>
      </Head>

      {/* package & arrangements */}
      <section
        id="packages"
        title="packages & arrangements"
        className="relative container/@pricing w-full mx-auto grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 py-container-padding sm:py-container-padding-sm md:py-container-padding-md lg:py-container-padding-lg 2xl:py-container-padding-xl 3xl:py-container-padding-xxl 3xl:max-w-container-width-2xl"
      >
        <div className="col-span-6 lg:col-span-8">
          <h2 className="text-fluid-body-3 uppercase font-bold font-lora text-center pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">{`packages & arrangements`}</h2>

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
              src={"/images/km/18.jpg"}
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

      {/* booking requirements */}
      <section
        title="booking requirements"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/2.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            booking requirements
          </h2>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p className="text-fluid-body-4 capitalize pb-3 font-lora font-semibold tracking-wider">
                  To confirm our time together, a 50% deposit is kindly
                  requested in advance.
                </p>
                <p className="text-fluid-body-5-guided leading-fluid-body-4 pb-2 font-medium">{`The remaining gesture of appreciation is presented at the start of our time—placed in an unsealed envelope and offered with the same thoughtfulness and discretion you bring to everything else.`}</p>
                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium pb-3">
                  {`To spend time with me is to embrace moments of genuine connection, refined elegance, and whispered seduction. Every encounter is approached with intention, grace, and utmost discretion. For those who appreciate sophistication wrapped in a touch of irresistible allure—I await you. — Kayla`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* note on timing */}
      <section
        title="a note on timing"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/2.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            a note on timing
          </h2>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p className="text-fluid-body-4 capitalize pb-3 font-lora font-semibold tracking-wider">
                  {`I value ease, intention, and the space to prepare thoughtfully for our time.`}
                </p>
                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">{`While I do my best to accommodate all requests, bookings made on shorter notice require a bit more energy and flexibility.`}</p>

                <ul className="list-disc list-inside">
                  <li className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">{`Same-day bookings are welcomed with a $400 premium`}</li>
                  <li className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">{`1–3 days' notice will carry a modest adjustment to reflect the effort involved`}</li>
                </ul>

                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">
                  {`Advance planning is always appreciated—it allows us to fully relax into the experience, unhurried and beautifully present.`}
                </p>

                <p className="text-fluid-body-5-guided leading-fluid-body-4 font-medium">{`Thank you for your warmth and understanding. I look forward to the pleasure of our meeting.`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/km/15.jpg">{page}</Layout>;
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
