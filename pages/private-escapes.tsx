import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>private escapes | Kayla Williams</title>
      </Head>

      {/* private escapes */}
      <section
        title="private escapes"
        className="relative container/@private-escapes w-full mx-auto overflow-hidden"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[40%_60%]">
            <div className="image-block relative min-h-96 h-full bg-[url(/images/km/1.jpg)] bg-no-repeat bg-cover bg-top bg-1" />
            <div className="p-container-padding md:p-container-padding-md 2xl:p-container-padding-xl 3xl:p-container-padding-xxl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                Private Escapes
              </h2>
              <div className="list-items-container my-section-padding-sm text-fluid-body-5-guided leading-fluid-body-5-guided">
                <p className="pb-section-sm">{`Time, unrushed and intimately yours.`}</p>
                <p className="pb-section-padding-sm">
                  {`For the discerning gentleman who desires moments beyond the ordinary, I offer Private Escapes—carefully curated companionship designed to transcend distance and routine. Whether a weekend away to a city of your choosing, an intimate business retreat, or simply an extended day to fully unwind together, these experiences are crafted with intention, discretion, and grace.`}
                </p>
              </div>
              <Link
                href="/investment#packages"
                className="transition-all duration-300 uppercase inline-block text-center py-5 px-8 text-fluid-base font-medium tracking-wide self-start bg-primary-color text-white border border-primary-color hover:cursor-pointer hover:bg-transparent hover:text-primary-color mt-section-padding-sm"
              >
                info on rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* fly me to you */}
      <section
        title="fly me to you"
        className="relative w-full mx-auto overflow-hidden"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[40%_60%] ">
            <div className="p-container-padding md:p-container-padding-md 2xl:p-container-padding-xl 3xl:p-container-padding-xxl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                fly me to you
              </h2>
              <div className="list-items-container my-section-padding-sm text-fluid-body-5-guided leading-fluid-body-5-guided">
                <ul className="list-disc list-inside">
                  <li className="pb-section-padding-sm">
                    <span>{`I am passport-ready and available for travel within Canada and internationally by special arrangement.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`A minimum booking of 12 hours is requested for all travel engagements.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`Travel costs and accommodations are kindly covered by the gentleman.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`First-time friends will be asked to complete light screening to ensure comfort and trust.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`Preferred travel class is business or first, with private accommodations.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`Together, we’ll create a private world—where your company, and only your company, is the focus.`}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="image-block relative min-h-96 h-full bg-[url(/images/km/2.jpg)] bg-no-repeat bg-cover bg-top bg-1" />
          </div>
        </div>
      </section>

      {/* local extended engagements */}
      <section
        title="local extended engagements"
        className="relative w-full mx-auto overflow-hidden"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[60%_40%] ">
            <div className="image-block relative min-h-96 h-full bg-[url(/images/km/3.jpg)] bg-no-repeat bg-cover bg-top bg-1" />
            <div className="p-container-padding md:p-container-padding-md 2xl:p-container-padding-xl 3xl:p-container-padding-xxl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                local extended engagements
              </h2>
              <p>{`For gentlemen seeking longer, immersive time closer to home, I offer day-long or overnight escapes.`}</p>
              <div className="list-items-container my-section-padding-sm text-fluid-body-5-guided leading-fluid-body-5-guided">
                <ul className="list-disc list-inside">
                  <li className="pb-section-padding-sm">
                    <span>{`A minimum of 12 hours is suggested for local extended experiences.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`Travel time is factored into the arrangement to ensure every moment is savored.
`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`Whether a quiet retreat or a full day of connection and ease, our time will be crafted with care.
`}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* the experience */}
      <section
        title="the experience"
        className="relative w-full mx-auto overflow-hidden"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[60%_40%] ">
            <div className="p-container-padding md:p-container-padding-md 2xl:p-container-padding-xl 3xl:p-container-padding-xxl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                the experience
              </h2>
              <div className="list-items-container my-section-padding-sm text-fluid-body-5-guided leading-fluid-body-5-guided">
                <ul className="list-disc list-inside">
                  <li className="pb-section-padding-sm">
                    <span>{`These escapes are more than just time—they are an opportunity to slow down, indulge, and connect deeply.`}</span>
                  </li>
                  <li className="pb-section-padding-sm">
                    <span>{`I invite you to reach out with your vision and desires so we can shape an experience uniquely yours—timeless, discreet, and unforgettable.`}</span>
                  </li>
                </ul>
              </div>
              <p className="font-medium">{`To inquire about Private Escapes, please contact me directly.`}</p>
              <p className="font-medium">{`Your discretion and thoughtful approach will always be met with the same.`}</p>
            </div>
            <div className="image-block relative min-h-96 h-full bg-[url(/images/km/4.jpg)] bg-no-repeat bg-cover bg-top bg-1" />
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/km/7.jpg">{page}</Layout>;
};
