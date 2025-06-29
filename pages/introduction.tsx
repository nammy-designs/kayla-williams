import Introduction from "@/components/Introduction";
import Layout from "@/theme/Layout";
import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

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
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default Page;
