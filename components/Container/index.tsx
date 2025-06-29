import React, { FC, ReactNode } from "react";

type ContainerPropTypes = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerPropTypes> = (props) => {
  const { children, className = "" } = props;
  return (
    <div className={`@container/main-container ${className} px-9`}>
      {children}
    </div>
  );
};

export default Container;
