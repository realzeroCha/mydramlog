import React from "react";
import TypeFilterView from "./TypeFilterView";
import { TypeFilterProps, UseTypeFilterProps } from "./types";
import { useTypeFilter } from "./useTypeFilter";

function TypeFilter(props: TypeFilterProps) {
  const hook: UseTypeFilterProps = useTypeFilter(props);

  return <TypeFilterView props={props} hook={hook} />;
}
export default React.memo(TypeFilter);
