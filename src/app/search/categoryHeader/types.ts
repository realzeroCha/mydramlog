import { Ref, RefObject, SetStateAction } from "react";

export const filterCategory = [
  "origin",
  "maturation",
  "abv",
  "appearance",
  "filtration",
  "flavor",
  "type",
  "price",
  "etc",
];

export type CategoryHeaderProps = {
  filterTarget: string;
  setFilterTarget: React.Dispatch<SetStateAction<string>>;
};

export type UseCategoryHeaderProps = {
  indicatorX: number | null;
  scrollbarRef: Ref<HTMLDivElement | null>;
  itemRefs: RefObject<(HTMLButtonElement | null)[]>;
  checkFilterTarget: (category: string) => boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
  onClickItem: (item: string, index: number) => void;
};

export type CategoryHeaderViewProps = {
  props: CategoryHeaderProps;
  hook: UseCategoryHeaderProps;
};
