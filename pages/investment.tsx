import Card from "@/components/Card/Card";
import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>Investment</title>
      </Head>
      <main className="py-10">
        <section
          title="investments"
          className="container/@investment w-full max-w-7xl mx-auto px-8 md:px-12 2xl:px-0"
        >
          <h2 className="text-center text-fluid-h4 tracking-wide pb-16 font-libre-baskerville">
            Rendez-vous
          </h2>
          <div className="sections flex flex-col gap-8 lg:gap-12">
            <Card />
            {/* vip container */}
            <div className="table-container">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <caption className="p-5 text-fluid-micro-guided text-left rtl:text-right bg-white">
                    <span className="font-medium text-fluid-body-4">VIP</span>
                    <p className="mt-1 text-fluid-base">
                      {`The divine royalty treatment... Let's treat each other to a
                    great sensual time. GFE`}
                    </p>
                  </caption>
                  <tbody className="font-montserrat text-fluid-micro-guided">
                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        {`1hr`}
                      </th>
                      <td className="px-6 py-6">{`$500`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        {`2hr`}
                      </th>
                      <td className="px-6 py-6">{`$1000`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        {`4hr`}
                      </th>
                      <td className="px-6 py-6">{`$2000`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        {`Note`}
                      </th>
                      <td className="px-6 py-6">{`Extras are available`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <td className="px-6 py-6">{`A trip to Greece - $150/trip`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <td className="px-6 py-6">{`NURU- $150`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* package & arrangements */}
            <div className="table-container">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <caption className="p-5 text-fluid-micro-guided text-left rtl:text-right bg-white">
                    <span className="font-medium text-fluid-body-4">
                      Packages & Arrangements
                    </span>
                    <p className="mt-1 text-fluid-base">
                      {`A night to remember`}
                    </p>
                  </caption>
                  <tbody className="font-montserrat text-fluid-micro-guided">
                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        <p>{`Dinner and Bliss`}</p>
                        <p>{`Dinner date and relaxation afterwards. `}</p>
                      </th>
                      <td className="px-6 py-6">{`$3000+`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        <p>{`Overnight`}</p>
                        <p>{`Dinner and Overnight`}</p>
                      </th>
                      <td className="px-6 py-6">{`$4500+`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        <p>{`Longer Engagements`}</p>
                        <p>{`Inquire for longer bookings like weekend or week long bookings`}</p>
                      </th>
                      <td className="px-6 py-6">{`Ask me`}</td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-6 font-medium whitespace-nowrap"
                      >
                        <p>{`Let's enjoy a full day of exploration.`}</p>
                        <p>{`This will be a curated experience for maximum enjoyment. `}</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout bannerImageUrl="/images/model2.jpg">
      <div>{page}</div>
    </Layout>
  );
};
