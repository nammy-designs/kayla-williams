import Layout from "@/theme/LayoutV2";
import { useInView, motion } from "framer-motion";
import React, { ReactElement, useRef } from "react";

export default function Page() {
  const howToBookRef = useRef<HTMLDivElement>(null);
  const isHowToBookInView = useInView(howToBookRef, {
    once: true,
    amount: 0.3,
  });

  const bookingHoursRef = useRef<HTMLDivElement>(null);
  const isBookingHoursInView = useInView(bookingHoursRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <>
      {/* how to book */}
      <section
        title="how to book"
        className={`container/@how-to-book w-full mx-auto before:content-[''] before:absolute before:inset-0 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl flex items-center justify-center text-center relative`}
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <motion.div
          className="content-container relative z-[2] max-w-container-width-2xl"
          ref={howToBookRef}
          initial={{ opacity: 0, y: 100 }}
          animate={
            isHowToBookInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color">
            how to book
          </h2>
          <p className="pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            Please read the following guidelines ♥️
          </p>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p
                  className="text-fluid-body-5-guided leading-fluid-body-4 font-medium underline-offset-3"
                  dangerouslySetInnerHTML={{
                    __html: `As a low-volume provider with a hectic school schedule, my availability is limited, and I prioritize longer dates. Therefore, I kindly ask that you plan ahead and prebook our time together in advance to avoid disappointment and help me manage my schedule effectively. Please note that same-day bookings are not guaranteed, though I will try to accommodate them when possible. I also have a strict cancellation policy: <u>any cancellations or reschedules made within 24 hours of your scheduled appointment will incur a 50% missed-appointment fee.</u> No-shows will be charged the full 100% appointment fee, which must be paid before booking any future appointments. Thank you for your understanding and cooperation.`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* contact us */}
      <section
        title="contact us"
        className="relative container/@how-to-book w-full mx-auto before:content-[''] before:absolute before:inset-0 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl flex flex-col items-center justify-center text-center"
      >
        <div className="bg-bg-color absolute inset-0 opacity-90" aria-hidden />
        <div className="content-container relative z-[2] max-w-[840px] w-full">
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color ">
            {"get in touch"}
          </h2>
          <p>{`For a faster reply, message me at 587-930-2215. Otherwise use the form below.`}</p>
          <div className="spacer-container w-auto grid place-content-center py-4">
            <div className="h-24 w-0.5 bg-primary-color" />
          </div>
          <div className="text-primary-color">
            <div className="form-wrapper">
              <form className="form w-full">
                <div className="grid grid-cols-6 lg:grid-cols-12 w-full gap-4">
                  <div className="input-group col-span-6 lg:col-span-12">
                    <label htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="input-group col-span-6 lg:col-span-6">
                    <label htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="input-group col-span-6 lg:col-span-6">
                    <label htmlFor="phone-number">
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="Enter your phone number"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="input-group col-span-6 lg:col-span-12">
                    <label htmlFor="message">
                      <textarea
                        id="phone-number"
                        name="phone-number"
                        rows={6}
                        placeholder="Enter your phone number"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="col-span-6 lg:col-span-12">
                    <button
                      type="submit"
                      className="transition-all duration-300 uppercase inline-block text-center py-5 px-8 text-fluid-base font-medium tracking-wide self-start w-full bg-primary-color text-white border border-primary-color hover:cursor-pointer hover:bg-transparent hover:text-primary-color"
                    >
                      send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <motion.div
          className="content-container relative z-[2] my-section-padding-md lg:my-section-padding-lg 2xl:my-section-padding-2xl 3xl:my-section-padding-3xl max-w-[840px] w-full"
          ref={bookingHoursRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isBookingHoursInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-fluid-h5 uppercase font-lora font-semibold text-primary-color ">
            booking hours
          </h2>
          <div className="text-primary-color">
            <div className="card-wrapper relative">
              <div className="content-container">
                <p
                  className="text-fluid-body-5-guided leading-fluid-body-4 font-medium underline-offset-3"
                  dangerouslySetInnerHTML={{
                    __html: `I'll try my best to accommodate your schedule if you've prebooked 3 or more days in advance. For same day bookings, please read the 'HOW TO BOOK' section above, and my hours for same day bookings are from 9am-6pm based on availability. ***Time may change when on TOUR***`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model6.jpeg">{page}</Layout>;
};
