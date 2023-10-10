import React, { HTMLAttributes } from "react";
import { unitToSymbol } from "../common/constants";
import { useAppSelector } from "../hooks";

type TempDisplayProps = { temp: number; isLoading?: boolean } & Omit<
  HTMLAttributes<HTMLSpanElement>,
  ""
>;
export const TempDisplay: React.FC<TempDisplayProps> = ({
  temp,
  className,
  isLoading,
}) => {
  const unit = useAppSelector((state) => state.weather.units);

  return (
    <span data-testid="temp-display" className={className}>
      {temp}&deg;{unitToSymbol[unit]}
    </span>
  );
};
