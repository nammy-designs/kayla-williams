import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>book kayla</title>
      </Head>

      {/* spoil me */}
      <section
        title="spoil me"
        className="relative container/@investment w-full mx-auto"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[40%_60%] ">
            <div className="image-block relative min-h-96">
              <Image
                src={"/images/km/1.jpeg"}
                alt="contact kayla williams"
                fill
                className="object-cover w-full object-top"
              />
            </div>
            <div className="bg-white p-section-padding-sm md:p-section-padding-md lg:p-section-padding-lg 2xl:p-section-padding-2xl 3xl:p-section-padding-3xl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                spoil me
              </h2>
              <p className="text-fluid-body-5-guided py-section-padding-sm">{`A  gift isn't necessary BUT its always appreciated. For those who go above and beyond to put a smile on my face, your kind gestures doesn't go unnoticed.`}</p>
              <div className="list-items-container my-section-padding-sm">
                <p className="text-fluid-body-5-guided pb-section-padding-sm">
                  Here are some gifts ideas:
                </p>
                <ul className="flex flex-col gap-4 list-disc">
                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `Red wine: Long time wine enthusiast and recent wine collector`,
                    }}
                  />
                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `Flowers are always appreciated`,
                    }}
                  />
                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `Gift cards:  Visa, Amazon, Audible audiobooks`,
                    }}
                  />
                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `Bubble tea lover, you can't go wrong`,
                    }}
                  />
                </ul>
              </div>

              {/* further container */}
              <div className="">
                <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold pt-section-padding-sm md:pt-section-padding-md">
                  a step further
                </h2>
                <div className="my-section-padding-sm">
                  <p className="text-fluid-body-5-guided pb-section-padding-sm">
                    WANT TO SEND ME A LITTLE TLC?
                  </p>
                  <p className="text-fluid-body-5-guided">{`Perhaps a day at the spa, or a set of mani-pedi. Or even a donation for my college education and books. Your gifts and support are deeply appreciated!!`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model7.jpeg">{page}</Layout>;
};
