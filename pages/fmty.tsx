import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>book kayla</title>
      </Head>

      {/* fmty */}
      <section
        title="fmty"
        className="relative container/@investment w-full mx-auto"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[40%_60%] ">
            <div className="image-block relative min-h-96 h-full bg-[url(/images/km/3.jpeg)] bg-no-repeat bg-cover bg-center bg-1" />
            <div className="p-container-padding md:p-container-padding-md 2xl:p-container-padding-xl 3xl:p-container-padding-xxl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                fmty
              </h2>
              <div className="list-items-container my-section-padding-sm text-fluid-body-5-guided leading-fluid-body-5-guided">
                <p className="pb-section-padding-sm">
                  {`I'm hoping to rekindle our fireworks of an encounter or to
                  spark one with new suitors. I'll be offering fly me to you as I take a break from touring. I would love to join you on a wonderful escape in your city or the city of your choice. Here are some important information about booking a fly-me-to-you.`}
                </p>
                <ul className="list-disc list-inside pb-section-padding-sm">
                  <li>{`Minimum overnight booking.`}</li>
                  <li>{`Flights, hotel and activities done will be generously paid by the suitor`}</li>
                  <li>{`Flight fee, hotel and 50% of the total donation must be sent during the booking process.`}</li>
                </ul>
                <p className="pb-section-padding-sm">{`If you would like to plan the night or the weekend, I would be more than happy to oblige to that. I also love to plan an extraordinary escape, so feel free to leave the planning to me. `}</p>
                <p>{`I'm very excited for us to escape in to the world of laughter, lust and the most memorable intimate times.`}</p>
              </div>
              <Link
                href="/investment"
                className="transition-all duration-300 uppercase inline-block text-center py-5 px-8 text-fluid-base font-medium tracking-wide self-start bg-primary-color text-white border border-primary-color hover:cursor-pointer hover:bg-transparent hover:text-primary-color mt-section-padding-sm"
              >
                info on rates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model8.jpeg">{page}</Layout>;
};
