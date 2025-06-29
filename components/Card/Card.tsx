import React, { FC } from "react";

const Card: FC = () => {
  return (
    <div className="card-wrapper relative">
      <div className="content-container grid grid-cols-1 lg:grid-cols-12 3xl:gap-4">
        <div className="col-span-4 relative min-h-[320px]">
          <div className="bg-[url(/images/modal1.png)] bg-contain bg-center bg-no-repeat w-full h-full absolute lg:-top-16"></div>
        </div>
        <div className="col-span-8 py-8 md:py-12 lg:py-24">
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
  );
};

export default Card;
