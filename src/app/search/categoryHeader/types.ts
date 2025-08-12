import { Ref, RefObject, SetStateAction } from "react";

export type CategoryHeaderProps = {
  filterTarget: string;
  setFilterTarget: React.Dispatch<SetStateAction<string>>;
};

export type UseCategoryHeaderProps = {
  filterCategory: string[];
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
