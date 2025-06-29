import React from "react";

import { ReactComponent as MenuSvg } from "./icons/menu.svg";
import { ReactComponent as ArrowSvg } from "./icons/arrow.svg";
import { ReactComponent as InstagramSvg } from "./icons/instagram.svg";
import { ReactComponent as TwitterSvg } from "./icons/twitter.svg";

type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type IconType = {
  menu: IconSvgComponent;
  arrow: IconSvgComponent;
  instagram: IconSvgComponent;
  twitter: IconSvgComponent;
};

// Mapping SVG component to Icon
export const ICON_MAPPING: IconType = {
  menu: MenuSvg,
  arrow: ArrowSvg,
  instagram: InstagramSvg,
  twitter: TwitterSvg,
};

export type IconTypeProp = "menu" | "arrow" | "instagram" | "twitter";

export type IconSizes =
  | 8
  | 16
  | 18
  | 20
  | 24
  | 26
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80;

export type IconProps = {
  ariaHidden?: boolean;
  icon: IconTypeProp;
  rotation?: number;
  size?: IconSizes;
  className?: string;
  title?: string;
  ariaLabel?: string;
  role?: string;
};

const Icon = ({
  ariaHidden = true,
  className,
  icon,
  ariaLabel,
  role,
  size = 24,
  rotation,
}: IconProps) => {
  const CodePoint = ICON_MAPPING[icon];
  if (!CodePoint) {
    return null;
  }

  const rotationDeg = rotation ? `rotate-[${rotation}deg]` : "";
  const classes = className ?? "";

  return (
    <CodePoint
      style={{ height: `${size}px`, width: `${size}px` }}
      className={`transition-all duration-150 ease-linear ${rotationDeg} ${classes}`}
      focusable={false}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
    />
  );
};

Icon.displayName = "Icon";

export default Icon;
