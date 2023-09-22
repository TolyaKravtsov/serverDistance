import React from "react";

interface CountryFlagProps {
  country: string;
}

const CountryFlagEnum = {
  Japan: "🇯🇵",
  "United Kingdom": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Germany: "🇩🇪",
  Lithuania: "🇱🇹",
  Singapore: "🇸🇬",
  "United States": "🇺🇸",
  Latvia: "🇱🇻",
};

export const CountryFlag = ({ country }: CountryFlagProps) => {
  return <span className="text-3xl">{CountryFlagEnum[country as keyof typeof CountryFlagEnum]}</span>;
};
