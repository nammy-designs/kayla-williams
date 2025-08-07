import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import React, { ReactElement, useState } from "react";
import fs from "fs";
import path from "path";
import { NextPageWithLayout } from "./_app";
import Lightbox from "@/components/Lightbox";
import { motion } from "framer-motion";

type GalleryPagePropTypes = {
  images: Array<string>;
};

const GalleryPage: NextPageWithLayout<GalleryPagePropTypes> = (props) => {
  const { images } = props;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const handlePrev = () => setSelectedIdx((idx) => idx! - 1);
  const handleNext = () => setSelectedIdx((idx) => idx! + 1);

  return (
    <>
      <Head>
        <title>gallery | Kayla Williams</title>
      </Head>
      <section title="gallery" className="relative">
        <div className="columns-2 sm:columns-3 md:columns-3 lg:columns-4 3xl:columns-5 gap-4 p-4 relative gallery-container">
          {images.map((imageSrd, idx) => {
            return (
              <div key={idx} className="image-block relative overflow-hidden">
                <motion.img
                  src={imageSrd}
                  className="mb-4 rounded-lg w-full hover:cursor-pointer"
                  alt={`Thumb ${idx}`}
                  layoutId={`image-${idx}`}
                  onClick={() => setSelectedIdx(idx)}
                />
              </div>
            );
          })}
        </div>
        <Lightbox
          isOpen={selectedIdx !== null}
          imageUrl={selectedIdx !== null ? images[selectedIdx] : ""}
          layoutId={selectedIdx !== null ? `image-${selectedIdx}` : undefined}
          onClose={() => setSelectedIdx(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={selectedIdx! > 0}
          hasNext={selectedIdx! < images.length - 1}
        />
      </section>
    </>
  );
};

export default GalleryPage;

GalleryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/km/21.jpg">{page}</Layout>;
};

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), "public/images/km");
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(imagesDirectory);
  } catch (error) {
    console.error("Error reading image directory:", error);
  }

  const images = filenames
    .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map((file) => `/images/km/${file}`);

  return {
    props: {
      images,
    },
  };
}
