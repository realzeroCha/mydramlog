import React from "react";
import CategoryHeaderView from "./CategoryHeaderView";
import { useCategoryHeader } from "./useCategoryHeader";
import { CategoryHeaderProps, UseCategoryHeaderProps } from "./types";

function CategoryHeader(props: CategoryHeaderProps) {
  const hook: UseCategoryHeaderProps = useCategoryHeader(props);

  return <CategoryHeaderView props={props} hook={hook} />;
}
export default React.memo(CategoryHeader);
