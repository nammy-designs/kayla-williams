import Layout from "@/theme/LayoutV2";
import { useInView, motion } from "framer-motion";
import Head from "next/head";
import React, { ReactElement, useRef } from "react";

export default function Page() {
  const howToBookRef = useRef<HTMLDivElement>(null);
  const isHowToBookInView = useInView(howToBookRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <>
      <Head>
        <title>book kayla | Kayla Williams</title>
      </Head>
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
                  className="text-fluid-body-5-guided leading-fluid-body-4 underline-offset-3"
                  dangerouslySetInnerHTML={{
                    __html: `Every memorable encounter begins with a thoughtful introduction. If you value warmth, elegance, and discretion, I’d love to hear from you. Please share a few details about yourself, your desired experience, and preferred date. I respond personally to respectful, well-considered messages.`,
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
          <p
            dangerouslySetInnerHTML={{
              __html: `For a faster reply, message me at <b>587-930-2215</b>. Otherwise use the form below.`,
            }}
          />
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

                  <div className="input-group col-span-6 lg:col-span-6">
                    <label htmlFor="date-time">
                      <input
                        type="datetime-local"
                        id="date-time"
                        name="date-time"
                        placeholder="Enter your preferred date time"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="input-group col-span-6 lg:col-span-6">
                    <label htmlFor="duration">
                      <input
                        type="number"
                        min={1}
                        id="duration"
                        name="duration"
                        placeholder="Enter date duration (hours)"
                        className="border border-primary-color w-full p-[15px_25px_15px_25px] focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="input-group col-span-6 lg:col-span-12">
                    <label htmlFor="message">
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about yourself"
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
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/km/25.jpg">{page}</Layout>;
};
