/* eslint-disable @next/next/no-img-element */
import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import React, { ReactElement } from "react";
import fs from "fs";
import path from "path";
import { NextPageWithLayout } from "./_app";

type TeaserPagePropTypes = {
  images: Array<string>;
};

const TeaserPage: NextPageWithLayout<TeaserPagePropTypes> = (props) => {
  const { images } = props;

  return (
    <>
      <Head>
        <title>Teaser</title>
      </Head>
      <section title="gallery" className="relative">
        <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 3xl:columns-5 gap-4 p-4 relative gallery-container">
          {images.map((src, idx) => {
            return (
              <div key={idx} className="image-block relative overflow-hidden">
                <img
                  src={`/images/km/${src}`}
                  className="mb-4 rounded-lg w-full"
                  alt="kayla williams"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TeaserPage;

TeaserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model3.jpeg">{page}</Layout>;
};

export async function getStaticProps() {
  const dirPath = path.join(process.cwd(), "public/images/km");
  const filenames = fs.readdirSync(dirPath);

  return {
    props: {
      images: filenames,
    },
  };
}
