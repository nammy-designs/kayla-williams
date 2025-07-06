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

      {/* how to book */}
      <section
        title="how to book"
        className="relative container/@investment w-full mx-auto"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[50%_50%] ">
            <div className="image-block relative min-h-96 h-full">
              <Image
                src={"/images/km/1.jpeg"}
                alt="contact kayla williams"
                fill
                className="object-cover w-full object-top"
              />
            </div>
            <div className="bg-white p-section-padding-sm md:p-section-padding-md lg:p-section-padding-lg 2xl:p-section-padding-2xl 3xl:p-section-padding-3xl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                how to book
              </h2>
              <p className="text-fluid-base">
                Please read the following guidelines ♥️
              </p>
              <div className="list-items-container my-section-padding-sm">
                <ul className="flex flex-col gap-4">
                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `<b>Note:</b> Being a low-volume provider as well as the hectic schedule of school, my availability is limited and I prioritize longer dates. `,
                    }}
                  />

                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `<b>Cancellation Policy:</b> Any cancellation or reschedule. made within 24 hours of your appointment time will incur a 50% missed-appointment fee. NO-SHOWS will be a 100% appointment fee prior to your next booking. `,
                    }}
                  />

                  <li
                    className="text-fluid-body-5-guided leading-fluid-body-5-guided"
                    dangerouslySetInnerHTML={{
                      __html: `<b>When Booking:</b> Any cancellation or reschedule. made within 24 hours of your appointment time will incur a 50% missed-appointment fee. NO-SHOWS will be a 100% appointment fee prior to your next booking. `,
                    }}
                  />
                </ul>
              </div>
              <p className="text-fluid-body-5-guided">
                ***Please plan ahead and prebook our date in advance, this will
                prevent disappointment and help me organize my schedule and
                guarantee our time together. Same day bookings are NOT
                guaranteed and will try to be accommodated.
              </p>
              <div className="booking-container py-section-padding-sm md:py-section-padding-md">
                <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                  booking hours
                </h2>
                <p className="text-fluid-body-5-guided leading-fluid-body-5-guided">
                  {`I'll try my best to accommodate your schedule if you've
                  prebooked 3 or more days in advance.`}
                </p>
                <p className="text-fluid-body-5-guided leading-fluid-body-5-guided">{`For same day bookings, please read the 'HOW TO BOOK' section above, and my hours for same day bookings are from 9am-6pm based on availability.  

***Time may change when on TOUR***`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section
        title="contact us"
        className="relative container/@investment w-full mx-auto"
      >
        <div className="content-container relative z-[3]">
          <div className="details grid grid-cols-1 lg:grid-cols-[50%_50%] ">
            <div className="bg-white p-section-padding-sm md:p-section-padding-md lg:p-section-padding-lg 2xl:p-section-padding-2xl 3xl:p-section-padding-3xl">
              <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold">
                contact us
              </h2>
              <p className="text-fluid-base">
                For a faster reply, message me at 587-930-2215. Otherwise use
                the form below.
              </p>
              <div className="form-container my-section-padding-sm">
                <form className="w-full">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3 mb-6 md:mb-4">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white  border border-gray-300 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-4">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-white  border border-gray-300 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="email@gmail.com"
                      />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-4">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-city"
                      >
                        Phone Number
                      </label>
                      <input
                        className="appearance-none block w-full bg-white  border border-gray-300 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city"
                        type="tel"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-4">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-state"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          rows={8}
                          cols={6}
                          className="block appearance-none w-full bg-white  border border-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="transition-all duration-300 uppercase mt-4 inline-block text-center border w-full py-5 text-fluid-base hover:bg-black hover:text-white font-medium tracking-wide hover:cursor-pointer"
                  >
                    send message
                  </button>
                </form>
              </div>
            </div>
            <div className="image-block hidden lg:block">
              <div className="relative min-h-96 h-full">
                <Image
                  src={"/images/km/2.jpeg"}
                  alt="contact kayla williams"
                  fill
                  className="object-cover w-full h-full object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model6.jpeg">{page}</Layout>;
};
