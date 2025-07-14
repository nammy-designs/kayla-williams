import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Introduction from "@/components/Introduction";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>introduction</title>
      </Head>
      <Introduction />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model2.jpg">{page}</Layout>;
};

export default Page;
