import Layout from "@/theme/Layout";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";
import fs from "fs";
import path from "path";
import { GetServerSideProps } from "next/types";

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
        <title>about | Kayla Williams</title>
      </Head>

      {/* the experience begins here */}
      <section
        title="the experience begins here"
        className="relative container/@investment w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl flex items-center justify-center text-center"
      >
        <div className="content-container grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16">
          <div className="col-span-6">
            <div className="image-container relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={"/images/km/2.jpg"}
                alt="kayla williams"
                className="block max-w-full object-cover object-top hover:scale-200 transition-all duration-700"
                fill
              />
            </div>
          </div>
          <div className="col-span-6 lg:p-container-padding-lg place-content-center">
            <div className="title-container pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
              <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color">
                {"The experience begins here"}
              </h2>
              <p className="font-medium font-lora text-fluid-body-5-guided">
                {"Intimacy begins where the ordinary end."}
              </p>
            </div>
            <div className="text-primary-color">
              <div className="card-wrapper relative">
                <div className="content-container">
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    {`A bit about me...`}
                  </p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    {`I am Kayla Williams - your private indulgence wrapped in elegance, intellect, and irresistible curves.`}
                  </p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    {`A full time college student with a deep passion for science-genetics is my area of studies, and an abstract painter who sees beauty in everything. especially pleasure. I live with intention, and I choose to keep my circle intimate. I'm a low-volume companion because I believe real desire is cultivated, not rushed. "Refined pleasure for refined taste"`}
                  </p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    {`With me, It's never just about the physical-it's about energy, chemistry, eye contact, and those moments that leave you thinking about me long after we part.`}
                  </p>
                  <p className="text-fluid-body-5-guided leading-fluid-body-4">
                    <em>{`A luxury so personal it can't be repeated`}</em>
                  </p>
                  <div className="keywords-container pt-section-padding-sm md:pt-section-padding-md 2xl:pt-section-padding-lg">
                    <span className="italic font-medium text-fluid-body-4">
                      Discretion
                    </span>
                    <span className="relative italic font-medium text-fluid-body-4 before:content-['.'] after:content-['.'] before:mx-2 after:mx-2 before:text-fluid-body-3 after:text-fluid-body-3">
                      Desire
                    </span>
                    <span className="italic font-medium text-fluid-body-4">
                      Devotion
                    </span>
                  </div>
                </div>
              </div>
            </div>
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

      {/* booking disclaimer */}
      <section
        title="booking disclaimer"
        className="relative overflow-hidden w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl flex items-center justify-center text-center"
      >
        <div className="content-container max-w-container-width-2xl">
          <div className="title-container pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color">
              {"booking disclaimer"}
            </h2>
          </div>

          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p className="text-fluid-body-5-guided leading-fluid-body-4">
                  {`Please note that all services offered are strictly limited to companionship and personal engagement. Any activities beyond this are at the discretion of consenting adults and remain private matters between parties. I uphold the highest standards of discretion, respect, and professionalism in all interactions. Thank you for understanding and honoring these boundaries.`}
                </p>
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
