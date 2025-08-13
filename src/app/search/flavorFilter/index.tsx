import React from "react";
import FlavorFilterView from "./FlavorFilterView";
import { FlavorFilterProps, UseFlavorFilterProps } from "./types";
import { useFlavorFilter } from "./useFlavorFilter";

function FlavorFilter(props: FlavorFilterProps) {
  const hook: UseFlavorFilterProps = useFlavorFilter(props);

  return <FlavorFilterView props={props} hook={hook} />;
}
export default React.memo(FlavorFilter);
