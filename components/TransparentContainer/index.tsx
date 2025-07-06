import React, { FC, ReactNode } from "react";

type TransparentPropTypes = {
  children: ReactNode;
  bgUrl: string;
};

const TransparentContainer: FC<TransparentPropTypes> = (props) => {
  const { children, bgUrl } = props;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 drop-shadow-xl group">
      <style jsx>{`
        .bg-image::before {
          background-image: url(${bgUrl});
          background-repeat: no-repeat;
          background-position: center;
        }
        .inner-container {
          backdrop-filter: blur(8px);
        }
      `}</style>
      <div className="relative before:content-[''] before:transition-all before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-cover before:opacity-10 overflow-hidden bg-image group-hover:before:scale-150 group-hover:before:opacity-15 before:duration-1000 ease-linear before:origin-top">
        <div className="relative z-10 bg-white/30 drop-shadow-xl inner-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TransparentContainer;
