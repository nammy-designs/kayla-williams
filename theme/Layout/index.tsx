import React, { FC, ReactElement, ReactNode } from "react";
import { Montserrat, Libre_Baskerville, Lora } from "next/font/google";
import Header from "@/components/Header";
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

const lora = Lora({
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontConfig = `${montserrat.variable} ${libreBaskerville.variable} ${lora.variable} font-[family-name:var(--font-montserrat)]`;

type LayoutPropTypes = {
  children: ReactNode;
};

const Layout: FC<LayoutPropTypes> = (props): ReactElement => {
  const { children } = props;

  return (
    <div id="page" className={`${fontConfig} max-w-[1920px] mx-auto`}>
      <Header />
      <main className="container/@main-page-container main-page-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
