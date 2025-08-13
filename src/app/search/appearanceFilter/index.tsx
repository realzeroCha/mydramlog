import React from "react";
import AppearanceFilterView from "./AppearanceFilterView";
import { AppearanceFilterProps, UseAppearanceFilterProps } from "./types";
import { useAppearanceFilter } from "./useAppearanceFilter";

function AppearanceFilter(props: AppearanceFilterProps) {
  const hook: UseAppearanceFilterProps = useAppearanceFilter(props);

  return <AppearanceFilterView props={props} hook={hook} />;
}
export default React.memo(AppearanceFilter);
