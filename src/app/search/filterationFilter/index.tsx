import React from "react";
import FilterationFilterView from "./FilterationFilterView";
import { FilterationFilterProps, UseFilterationFilterProps } from "./types";
import { useFilterationFilter } from "./useFilterationFilter";

function FilterationFilter(props: FilterationFilterProps) {
  const hook: UseFilterationFilterProps = useFilterationFilter(props);

  return <FilterationFilterView props={props} hook={hook} />;
}
export default React.memo(FilterationFilter);
