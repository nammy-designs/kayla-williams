import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Introduction: FC = () => {
  return (
    <section
      className="introduction grid grid-cols-12"
      title="introduction"
      id="introduction"
    >
      <div className="col-span-12 lg:col-span-5 xl:col-span-5 p-container-padding sm:p-container-padding-sm md:p-container-padding-md lg:p-container-padding-lg 2xl:p-container-padding-xl 3xl:p-container-padding-xxl order-2 lg:order-0">
        <p className="relative capitalize text-center text-fluid-h6 font-medium after:content[''] after:absolute after:top-[calc(100%+10px)] after:bg-[url(/images/divider.png)] after:h-11 after:w-full after:bg-no-repeat after:bg after:left-0 mt-5 mb-20 after:bg-center after-bg-size-custom font-libre-baskerville after:mix-blend-multiply">
          introduction
        </p>
        <p className="text-fluid-micro-lg leading-fluid-body-4">
          Hi Gents and Couples, My name is Kayla Williams. I am a college
          student and an abstract painter. In this adult-industry, I am a
          LOW-VOLUME elite companion. I am classy, sexy and best of all,
          intellectual. Science especially Genetics is my feild of interest and
          college study. A time spent with me is one that you will remember. Our
          laughs and giggles, our conversations and intimacy will be ones that I
          will hold dearly. I look forward to creating life-long memories of
          pleasure and happiness
        </p>
        <Link
          href="/investment"
          className="transition-all duration-300 uppercase mt-8 inline-block text-center border w-full py-5 text-fluid-base hover:bg-black hover:text-white font-medium tracking-wide"
        >
          date me
        </Link>
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-7 hidden lg:block">
        <div className="relative before:content-[''] h-full">
          <Image
            src="/images/km/1.jpeg"
            fill={true}
            alt="kyla williams"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
