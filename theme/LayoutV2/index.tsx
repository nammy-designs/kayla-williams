import React, { FC, ReactElement, ReactNode } from "react";
import { Montserrat, Libre_Baskerville } from "next/font/google";
import Header from "@/components/Header/Header2";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fontConfig = `${montserrat.variable} ${libreBaskerville.variable} font-[family-name:var(--font-montserrat)]`;

type LayoutPropTypes = {
  children: ReactNode;
  bannerImageUrl?: string;
};

const Layout: FC<LayoutPropTypes> = (props): ReactElement => {
  const { children, bannerImageUrl } = props;

  return (
    <div id="page" className={`${fontConfig} max-w-[1920px] mx-auto`}>
      <Header bannerImageUrl={bannerImageUrl} />
      <main className="container/@main-page-container main-page-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
