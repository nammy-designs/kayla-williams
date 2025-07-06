import TransparentContainer from "@/components/TransparentContainer";
import Layout from "@/theme/LayoutV2";
import Head from "next/head";
import { ReactElement } from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>Investment</title>
      </Head>
      {/* render vous */}
      <section
        title="Rendez-vous"
        className="relative container/@investment w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl     before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/model4.jpeg')] before:bg-fixed min-h-screen before:bg-cover py-section-padding-md md:py-section-padding-lg 2xl:py-section-padding-2xl"
      >
        <div className="bg-black opacity-30 z-[2] absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(64,1,1,1)_100%)]" />
        <div className="content-container relative z-[3]">
          <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold text-white pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            Rendez-vous
          </h2>
          <div className="grid text-white pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            <div className="flex items-center justify-center">
              <div className="card-wrapper relative">
                <div className="content-container grid grid-cols-1 lg:grid-cols-12 3xl:gap-4">
                  <div className="col-span-8">
                    <h3 className="text-fluid-body-4 capitalize pb-3 font-libre-baskerville font-semibold tracking-wider">
                      social and date - $1000
                    </h3>
                    <p className="text-fluid-body-5-guided leading-fluid-body-4 pb-2">{`Whether it be dinner or drinks. Or a trip to the art gallery which I love, let's make it a moment to remember...`}</p>
                    <p className="text-fluid-body-5-guided leading-fluid-body-4">
                      {`Social meeting outdoor, great for business events or shopping trips or dinner dates (up to 4 hours) ... Or $300 hourly when accompanied with a rendezvous afterwards. Great for lunch and fun meetings.... `}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="details grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 2xl:gap-10 text-white">
            <TransparentContainer bgUrl="">
              <div className="panel p-4">
                <div className="panel-header">
                  <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                    vip
                  </p>
                  <p className="text-fluid-base">
                    {`The divine royalty treatment... Let's treat each other to a
                  great sensual time. GFE`}
                  </p>
                </div>
                <div className="panel-content text-fluid-body-5-guided">
                  <div className="flex flex-col justify-between items-center gap-4">
                    <div className="details flex justify-between items-center w-full">
                      <span>{"1hr"}</span>
                      <span>{"$500"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"2hr"}</span>
                      <span>{"$1000"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"4hrs"}</span>
                      <span>{"$2000"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"Note"}</span>
                      <span>{"Extras are available"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span className="text-fluid-base">
                        {"A trip to Greece - $150/trip"}
                      </span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span className="text-fluid-base">{"NURU- $150"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TransparentContainer>
            <TransparentContainer bgUrl="">
              <div className="panel p-4">
                <div className="panel-header">
                  <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                    packages & arrangements
                  </p>
                  <p className="text-fluid-base">{`A night to remember`}</p>
                </div>
                <div className="panel-content text-fluid-body-5-guided">
                  <div className="flex flex-col justify-between items-center gap-4">
                    <div className="details flex justify-between items-center w-full">
                      <p>
                        {"Dinner and Bliss"} <br />
                        <span className="text-fluid-base">{`Dinner date and relaxation afterwards. `}</span>
                      </p>
                      <span>{"$3000+"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <p>
                        {"Overnight"} <br />
                        <span className="text-fluid-base">{`Dinner and Overnight`}</span>
                      </p>
                      <span>{"$4500+"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <p>
                        {"Longer Engagements"} <br />
                        <span className="text-fluid-base">{`Inquire for longer bookings like weekend or week long bookings`}</span>
                      </p>
                      <span>{"Ask me"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"Note"}</span>
                      <span>{"Extras are available"}</span>
                    </div>
                    <div className="details flex justify-between items-start w-full flex-col gap-2">
                      <p className="text-fluid-base">
                        {"Let's enjoy a full day of exploration."}
                      </p>
                      <p className="text-fluid-base">
                        {
                          "This will be a curated experience for maximum enjoyment."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TransparentContainer>
          </div>
        </div>
      </section>

      {/* my submission */}
      <section
        title="my submission"
        className="relative container/@investment w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl     before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/km/1.jpeg')] before:bg-fixed before:bg-cover py-section-padding-md md:py-section-padding-lg 2xl:py-section-padding-2xl"
      >
        <div className="bg-black opacity-30 z-[2] absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(64,1,1,1)_100%)]" />
        <div className="content-container relative z-[3]">
          {/* submission */}
          <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold text-white pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            MY SUBMISSION
          </h2>
          <div className="grid text-white">
            <div className="flex items-center justify-center">
              <div className="card-wrapper relative">
                <div className="content-container grid grid-cols-1 lg:grid-cols-12 3xl:gap-4">
                  <div className="col-span-10">
                    <h3 className="text-fluid-body-4 capitalize pb-3 font-libre-baskerville font-semibold tracking-wider">
                      A taste of my submission
                    </h3>
                    <p className="text-fluid-body-5-guided leading-fluid-body-4 pb-2">{`Whether it be dinner or drinks. Or a trip to the art gallery which I love, let's make it a moment to remember...`}</p>
                    <p className="text-fluid-body-5-guided leading-fluid-body-4">
                      {`If you're a new suite your mile may vary as to how much I choose to let my self submit to you. There will be rules and limits within the first few times until trust is gained For long-time suitors the world is your oyster (to a limit of safe same and legal play) but with that being said, I'm probably the most kinky and obedient sub you'd ever meet. My submission does not come cheap so please budget accordingly to have the experience of a lifetime`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fetish encounters */}
      <section
        title="fetish encounters"
        className="relative container/@investment w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl     before:content-[''] before:absolute before:inset-0 before:bg-[url('/images/model5.jpeg')] before:bg-fixed before:bg-cover py-section-padding-md md:py-section-padding-lg 2xl:py-section-padding-2xl"
      >
        <div className="bg-black opacity-30 z-[2] absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(64,1,1,1)_100%)]" />
        <div className="content-container relative z-[3]">
          {/* submission */}
          <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold text-white pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            fetish encounters
          </h2>
          <div className="details grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 2xl:gap-10 text-white">
            <TransparentContainer bgUrl="">
              <div className="panel p-4">
                <div className="panel-header">
                  <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                    {`Beginner's Kink`}
                  </p>
                  <p className="text-fluid-base">
                    {`Prostate massage, pegging, light dom , light submissive, light bdsm. Add fs for $100`}
                  </p>
                </div>
                <div className="panel-content text-fluid-body-5-guided py-section-padding-base md:py-section-padding-md">
                  <div className="flex flex-col justify-between items-center gap-4">
                    <div className="details flex justify-between items-center w-full">
                      <span>{"60 minutes"}</span>
                      <span>{"$500"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"90 minutes"}</span>
                      <span>{"$750"}</span>
                    </div>
                    <div className="details flex justify-between items-center w-full">
                      <span>{"120 minutes"}</span>
                      <span>{"$1000"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </TransparentContainer>
            <TransparentContainer bgUrl="">
              <div className="panel p-4">
                <div className="panel-header">
                  <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                    Fetish package
                  </p>
                  <p className="text-fluid-base">{`As a bdsm switch ,I'm very sensual and always open to fetish encounters.`}</p>
                </div>
                <div className="panel-content text-fluid-body-5-guided py-section-padding-base md:py-section-padding-md">
                  <div className="flex flex-col justify-between items-center gap-4">
                    <div className="details flex justify-between items-center w-full">
                      <p>
                        {
                          "Starts at $600/hr and up depending on what fetish is booked"
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TransparentContainer>
          </div>
        </div>
      </section>

      {/* information block */}
      <section
        title="please note"
        className="relative container/@investment w-full mx-auto px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl before:content-[''] before:absolute before:inset-0 before:bg-fixed before:bg-cover before:bg-[url('/images/model6.jpeg')] py-section-padding-md md:py-section-padding-lg 2xl:py-section-padding-2xl"
      >
        <div className="bg-black opacity-30 z-[2] absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_10%,rgba(64,1,1,1)_100%)]" />
        <div className="content-container relative z-[3]">
          {/* submission */}
          <h2 className="text-fluid-h5 uppercase tracking-widest font-libre-baskerville font-semibold text-white text-center pb-section-padding-sm md:pb-section-padding-md 2xl:pb-section-padding-lg">
            please note
          </h2>
          <div className="details grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 2xl:gap-10 text-white">
            {/* deposit */}
            <div className="panel flex flex-col gap-4">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                  {`deposit`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`a deposit is required for all bookings`}</p>
                <p>{`50% of Booking total + 100% of Travel fee (if applicable) is required at the time of booking. `}</p>
                <p>{`There are NO exceptions! `}</p>
              </div>
            </div>

            {/* short notice booking */}
            <div className="panel flex flex-col gap-4">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                  {`short notice bookings`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`There will be an extra charge for short notice bookings between 0-3 days. 
I like to plan ahead as I'm a University student with a busy life. Booking in advance is appreciated but I will try to accommodate short notice bookings with a FEE. `}</p>
              </div>
            </div>

            {/* out-call bookings */}
            <div className="panel flex flex-col gap-4">
              <div className="panel-header text-center">
                <p className="uppercase text-fluid-body-4 font-libre-baskerville">
                  {`outcall bookings`}
                </p>
              </div>
              <div className="panel-content text-center text-fluid-body-5-guided capitalize leading-fluid-body-5">
                <p>{`All Outcall bookings will be subject to a charge of $100/hour,
                  excluding bookings from 8+ hours. There will also be a one
                  time charge for the travel fee depending on the location and
                  distance to me. Please keep this in mind when making a
                  booking.`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout bannerImageUrl="/images/model2.jpg">{page}</Layout>;
};
