const packages = [
  {
    label: "Dinner and Bliss",
    subTitle: "Dinner date and relaxation afterwards.",
    description: "$3000+",
    icon: "dinner",
  },
  {
    label: "Overnight",
    subTitle: "Dinner and Overnight",
    description: "$4500+",
    icon: "overNight",
  },
  {
    label: "Longer Engagements",
    subTitle: "Inquire for longer bookings like weekend or week long bookings",
    description: "ask me",
    icon: "loveBag",
  },
  {
    label: "Note",
    subTitle: "Extras are available",
    description: "",
    icon: "bottle",
  },
] as const;

const vipServices = [
  {
    label: "1hr",
    subTitle: "",
    description: "$500",
    icon: "loveClock",
  },
  {
    label: "2hr",
    subTitle: "",
    description: "$1000",
    icon: "heartFlower",
  },
  {
    label: "4hrs",
    subTitle: "",
    description: "$2000",
    icon: "wine",
  },
  {
    label: "Note",
    subTitle: "Extras are available",
    description: "",
    icon: "bottle",
  },
] as const;

const fetishServices = [
  {
    label: "60 minutes",
    subTitle: "",
    description: "$500",
    icon: "loveClock",
  },
  {
    label: "90 minutes",
    subTitle: "",
    description: "$750",
    icon: "heartFlower",
  },
  {
    label: "120 minutes",
    subTitle: "",
    description: "$1000",
    icon: "wine",
  },
  {
    label: "fetish package",
    subTitle: "Starts at $600/hr and up depending on what fetish is booked",
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

export { vipServices, investmentsDictionaries, packages, fetishServices };
