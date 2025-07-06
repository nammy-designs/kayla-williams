import { cn } from "@/helpers/tailwind-utility";
import React, { FC, ReactNode } from "react";

type ContainerPropTypes = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerPropTypes> = (props) => {
  const { children, className = "" } = props;
  return (
    <div
      className={cn(
        `@container/common-container px-container-padding sm:px-container-padding-sm md:px-container-padding-md lg:px-container-padding-lg 2xl:px-container-padding-xl 3xl:px-container-padding-xxl  ${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
