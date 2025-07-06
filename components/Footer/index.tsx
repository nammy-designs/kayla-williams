import { navigationData } from "@/data/navigation";
import React, { memo } from "react";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer className="w-full text-white bg-black relative overflow-hidden px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl">
      {/* Footer */}
      <div className="text-center flex flex-col justify-between items-center footer-wrapper relative overflow-hidden min-h-72 before:content-[''] before:bg-[url(/images/background3.jpeg)] before:bg-cover before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:opacity-30 ">
        <div className="relative z-[1] flex items-center justify-center flex-1 flex-col gap-8">
          <p className="text-fluid-body-5 italic tracking-wider font-libre-baskerville font-semibold uppercase">
            {navigationData.title}
          </p>
          <div className="social-media-container flex gap-6">
            <a
              href="https://www.instagram.com/Kayla_w012"
              aria-label="instagram"
              className="inline-flex bg-white p-2 rounded-full"
              target="_blank"
            >
              <Icon icon="instagram" className="stroke-white" size={32} />
            </a>
            <a
              href="https://www.x.com/KaylaWilliamsGF"
              aria-label="twitter"
              className="inline-flex bg-white p-2 rounded-full"
              target="_blank"
            >
              <Icon icon="twitter" className="stroke-white" size={32} />
            </a>
          </div>
          <div>
            <a
              href="https://www.eurogirlsescort.com/"
              className="inline-flex text-fluid-base"
              style={{ wordBreak: "break-word" }}
            >
              https://www.eurogirlsescort.com/
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-container text-center">
        <p className="py-4 text-fluid-base">
          Copyright © {new Date().getFullYear()} KaylaWilliams - All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
