import React from "react";
import RegionFilterView from "./RegionFilterView";
import { RegionFilterProps, UseRegionFilterProps } from "./types";
import { useRegionFilter } from "./useRegionFilter";

function RegionFilter(props: RegionFilterProps) {
  const hook: UseRegionFilterProps = useRegionFilter(props);

  return <RegionFilterView props={props} hook={hook} />;
}
export default React.memo(RegionFilter);
