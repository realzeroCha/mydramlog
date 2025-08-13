import React from "react";
import CategoryHeaderView from "./AbvFilterView";
import { AbvFilterProps, UseAbvFilterProps } from "./types";
import { useAbvFilter } from "./useAbvFilter";

function AbvFilter(props: AbvFilterProps) {
  const hook: UseAbvFilterProps = useAbvFilter(props);

  return <CategoryHeaderView props={props} hook={hook} />;
}
export default React.memo(AbvFilter);
