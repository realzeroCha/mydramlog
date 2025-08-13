import React from "react";
import PriceFilterView from "./PriceFilterView";
import { PriceFilterProps, UsePriceFilterProps } from "./types";
import { usePriceFilter } from "./usePriceFilter";

function PriceFilter(props: PriceFilterProps) {
  const hook: UsePriceFilterProps = usePriceFilter(props);

  return <PriceFilterView props={props} hook={hook} />;
}
export default React.memo(PriceFilter);
