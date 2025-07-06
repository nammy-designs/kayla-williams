import React, { FC } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { HeaderPropTypes } from "@/@types/header2";
import { CommonHeader } from "..";

const Header: FC<HeaderPropTypes> = (props) => {
  const { bannerImageUrl } = props;
  const { scrollYProgress: imageScrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const scaleImage = useTransform(imageScrollY, [0, 1], [1, 2]);

  return (
    <div id="global-header" className="relative overflow-hidden h-dvh">
      <CommonHeader bannerImageUrl={bannerImageUrl} />
      <section title="hero" className="absolute top-0 left-0 right-0 bottom-0">
        <motion.div
          style={{ scale: scaleImage }}
          aria-hidden={true}
          className="relative bg-black w-full h-full bg-no-repeat bg-center bg-cover after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-50 overflow-hidden"
        >
          <Image
            src={bannerImageUrl}
            alt="kyla williams"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Header;
