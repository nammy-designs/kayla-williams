import Icon from "@/components/Icon";
import { gentlemanRules } from "@/data/investment";
import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>{`a gentleman's guide | Kayla Williams`}</title>
      </Head>

      {/* gentleman's guide */}
      <section
        title="gentleman's guide"
        className="relative container/@pricing w-full mx-auto grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 3xl:px-0 py-container-padding sm:py-container-padding-sm md:py-container-padding-md lg:py-container-padding-lg 2xl:py-container-padding-xl 3xl:py-container-padding-xxl 3xl:max-w-container-width-2xl"
      >
        <div className="col-span-6 lg:col-span-8">
          <h2 className="text-fluid-body-3 uppercase font-bold font-lora text-center pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">{`A Gentleman's guide`}</h2>

          <div className="services grid grid-cols-6 2xl:grid-cols-12 gap-4 md:gap-8">
            {gentlemanRules.map((service, idx) => {
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
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/km/17.jpg">{page}</Layout>;
};
