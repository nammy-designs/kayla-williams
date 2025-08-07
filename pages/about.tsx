import Layout from "@/theme/Layout";
import Head from "next/head";

import { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>about | Kayla Williams</title>
      </Head>

      {/* the experience begins here */}
      <section
        title="the experience begins here"
        className="relative container/@investment w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/9.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
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
      </section>

      {/* booking disclaimer */}
      <section
        title="booking disclaimer"
        className="relative overflow-hidden w-full mx-auto before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/9.jpeg')] before:bg-fixed before:bg-cover px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl min-h-lvh flex items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-container-width-2xl">
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
