import Image from "next/image";
import { FC } from "react";

const Introduction: FC = () => {
  return (
    <section
      className="introduction grid grid-cols-12"
      title="introduction"
      id="introduction"
    >
      <div className="col-span-12 lg:col-span-5 xl:col-span-4 p-6 md:p-10 lg:p-14 xl:p-16">
        <p className="relative capitalize text-center text-fluid-h6 font-medium after:content[''] after:absolute after:top-[calc(100%+10px)] after:bg-[url(/images/divider.png)] after:h-11 after:w-full after:bg-no-repeat after:bg after:left-0 mt-5 mb-20 after:bg-center after-bg-size-custom font-libre-baskerville">
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
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-8">
        <div className="relative before:content-[''] before:block before:pb-[56.25%] lg:before:pb-[66.66%]">
          <Image
            src="/images/about.jpg"
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
