const packages = [
  {
    label: "A Quick Hello",
    subTitle:
      "A fleeting pause - soft, intimate and delicately composed. Just enough to intrigue, enchant...and leave you wanting more",
    description: "$650.1hr",
    icon: "dinner",
  },
  {
    label: "The Introduction",
    subTitle: `A brief escape into softness, laughter, and irresistible energy. Perfect for those who crave connection—but prefer to keep it sweet and succinct.`,
    description: "$1200/2hours",
    icon: "overNight",
  },
  {
    label: "The Interlude",
    subTitle: `Unhurried and intimate. Ideal for drinks, deep conversation, and the kind of warmth that lingers just beneath the surface.`,
    description: "$2200/4 hours",
    icon: "loveBag",
  },
  {
    label: "The Soirée",
    subTitle: `An elegant evening of indulgence—perhaps dinner, a favorite bottle, and the quiet thrill of good company. Designed for those who savor every moment.`,
    description: "$3200/~6 hours",
    icon: "bottle",
  },
  {
    label: "The Overnight Affair",
    subTitle: `Our night begins when the world quiets. Time to relax, connect, and fall into a rhythm all our own. Wake up slow, wrapped in ease and laughter soft between us.`,
    description: "$5000",
    icon: "loveClock",
  },
] as const;

const gentlemanRules = [
  {
    label: "Warmth & Respect",
    subTitle:
      "I welcome kindness, genuine interest, and quiet confidence. Your thoughtfulness is the foundation of every meaningful moment we share.",
    description: "",
    icon: "dinner",
  },
  {
    label: "Discretion is Shared Grace",
    subTitle: `Our time together is private and protected—a space where we both feel safe and valued. Your discretion honors this sacred trust.`,
    description: "",
    icon: "overNight",
  },
  {
    label: "Graceful Timing",
    subTitle: `Please be mindful of our agreed time. Should life’s unpredictability arise, a simple note is appreciated. Our moments are crafted carefully, and I cherish punctuality.`,
    description: "",
    icon: "loveBag",
  },
  {
    label: "Generosity Beyond Measure",
    subTitle: `True luxury is in the spirit of giving. Gifts and thoughtful gestures are always welcomed but never expected.`,
    description: "",
    icon: "bottle",
  },
] as const;

const investmentsDictionaries = {
  full_day: `Let's enjoy a full day of exploration.`,
  maximum_enjoy: `This will be a curated experience for maximum enjoyment.`,
  greece: "A trip to Greece - $150/trip",
  nuru: "NURU- $150",
} as const;

export { investmentsDictionaries, packages, gentlemanRules };
