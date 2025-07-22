import React from "react";

import { ReactComponent as MenuSvg } from "./icons/menu.svg";
import { ReactComponent as ArrowSvg } from "./icons/arrow.svg";
import { ReactComponent as InstagramSvg } from "./icons/instagram.svg";
import { ReactComponent as TwitterSvg } from "./icons/twitter.svg";
import { ReactComponent as LoveBagSvg } from "./icons/love-bag.svg";
import { ReactComponent as DinnerSvg } from "./icons/dinner.svg";
import { ReactComponent as OverNightSvg } from "./icons/overnight.svg";
import { ReactComponent as BottleSvg } from "./icons/bottle.svg";
import { ReactComponent as LoveClockSvg } from "./icons/love-clock.svg";
import { ReactComponent as HeartFlowerSvg } from "./icons/heart-flower.svg";
import { ReactComponent as WineSvg } from "./icons/wine.svg";

type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type IconType = {
  menu: IconSvgComponent;
  arrow: IconSvgComponent;
  instagram: IconSvgComponent;
  twitter: IconSvgComponent;
  loveBag: IconSvgComponent;
  dinner: IconSvgComponent;
  overNight: IconSvgComponent;
  bottle: IconSvgComponent;
  loveClock: IconSvgComponent;
  heartFlower: IconSvgComponent;
  wine: IconSvgComponent;
};

// Mapping SVG component to Icon
export const ICON_MAPPING: IconType = {
  menu: MenuSvg,
  arrow: ArrowSvg,
  instagram: InstagramSvg,
  twitter: TwitterSvg,
  loveBag: LoveBagSvg,
  dinner: DinnerSvg,
  overNight: OverNightSvg,
  bottle: BottleSvg,
  loveClock: LoveClockSvg,
  heartFlower: HeartFlowerSvg,
  wine: WineSvg,
};

export type IconTypeProp =
  | "menu"
  | "arrow"
  | "instagram"
  | "twitter"
  | "loveBag"
  | "dinner"
  | "overNight"
  | "bottle"
  | "loveClock"
  | "heartFlower"
  | "wine";

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
