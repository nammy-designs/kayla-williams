import Link from "next/link";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Icon from "../Icon";
import { useRouter } from "next/router";

const navigationLinks = [
  { label: "home", path: "/introduction" },
  { label: "teaser", path: "/teaser" },
  { label: "investment", path: "/investment" },
  { label: "book kayla", path: "/book-kayla" },
  { label: "spoil me", path: "/spoil-me" },
  { label: "fmty", path: "/fmty" },
];

const Header = () => {
  const router = useRouter();
  const [isNavigationOpen, setIsNavigation] = useState(false);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start start", "end start"], // from top to end of the target
  });
  // Scale from 1.5 to 0.6 as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  const toggleNavigation = useCallback(() => {
    setIsNavigation((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsNavigation(false);
  }, [router.pathname]);

  return (
    <div id="global-header" className="relative h-dvh overflow-hidden">
      <div className="relative z-50">
        <header className="h-full">
          <div className="min-h-[110px] grid grid-cols-1 gap-5 items-center">
            <div className="flex justify-center">
              <button
                onClick={toggleNavigation}
                className="hover:cursor-pointer"
              >
                <Icon icon="menu" size={40} className="stroke-white stroke-2" />
              </button>
            </div>
          </div>
          {!isNavigationOpen && (
            <div className="parallax-container relative text-white left-0 right-0 top-fluid-h1 bottom-0 uppercase flex flex-col justify-center">
              <motion.h1
                style={{ scale }}
                className="text-fluid-large leading-fluid-large tracking-widest font-bold text-center drop-shadow-2xl"
              >
                meet <br /> kyla williams
              </motion.h1>
            </div>
          )}
          <div className={`menu-container absolute left-0 right-0`}>
            {isNavigationOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=" bg-black h-[calc(100vh-110px)]"
              >
                <nav className="h-[calc(100vh-150px)]">
                  <ul className="flex flex-col gap-4 justify-between h-[inherit] w-full relative overflow-hidden lg:flex-row lg:gap-0">
                    {navigationLinks.map((link, index) => {
                      return (
                        <li className="flex-1" key={index}>
                          <div className="relative h-full m-2 p-3.5 shadow-[0_5px_5px_rgba(0,0,0,0.3)] transition-all group">
                            <span
                              className="bg-[url(/images/background2.jpg)] absolute top-0 left-0 right-0 bottom-0 bg-cover bg-fixed bg-[position:center_top] group-hover:bottom-[-5px] group-hover:top-[-5px] group-hover:left-[-10px] group-hover:right-[-10px] transition-all"
                              aria-hidden="true"
                            />
                            <span className="absolute transition-all top-0 left-0 right-0 bottom-0 z-20 bg-[rgba(0,0,0,0.30)] group-hover:bottom-[-5px] group-hover:top-[-5px] group-hover:left-[-10px] group-hover:right-[-10px] group-hover:bg-[rgba(0,0,0,0.40)]" />
                            <Link
                              href={link.path}
                              className="flex flex-1 items-center justify-center h-full w-full uppercase absolute top-0 left-0 right-0 bottom-0 z-30 font-libre-baskerville  text-white transition-all tracking-widest font-semibold"
                            >
                              {link.label}
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </motion.div>
            )}
          </div>
        </header>
      </div>
      <section title="hero" className="absolute top-0 left-0 right-0 bottom-0">
        <div
          aria-hidden={true}
          className="absolute bg-amber-950 left-0 right-0 top-0 bottom-0 opacity-30"
        />
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source
            src="https://demo.secretred.com/1/wp-content/uploads/vs.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default Header;
