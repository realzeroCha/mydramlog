import React from "react";
import { MaturationFilterProps, UseMaturationFilterProps } from "./types";
import { useMaturationFilter } from "./useMaturationFilter";
import MaturationFilterView from "./MaturationFilterView";

function MaturationFilter(props: MaturationFilterProps) {
  const hook: UseMaturationFilterProps = useMaturationFilter(props);

  return <MaturationFilterView props={props} hook={hook} />;
}
export default React.memo(MaturationFilter);
