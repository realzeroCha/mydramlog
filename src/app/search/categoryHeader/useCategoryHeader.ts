import React, { useRef, useState } from "react";
import { CategoryHeaderProps } from "./types";

export const useCategoryHeader = (props: CategoryHeaderProps) => {
  const scrollbarRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [indicatorX, setIndicatorX] = useState<number | null>(null);

  const checkFilterTarget = (category: string) => {
    return props.filterTarget === category;
  };

  // 카테고리 마우스 드래그 이벤트
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollbarRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollbarRef.current.offsetLeft);
    setScrollLeft(scrollbarRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollbarRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollbarRef.current.offsetLeft;
    const walk = x - startX;
    scrollbarRef.current.scrollLeft = scrollLeft - walk;
  };

  // 카테고리 클릭 이벤트
  const onClickItem = (item: string, index: number) => {
    if (!scrollbarRef.current || !itemRefs.current[index]) return;

    const container = scrollbarRef.current;
    const target = itemRefs.current[index]!;

    // scroll 이동 위치 (화면 중앙)
    const scrollTo = target.offsetLeft - container.clientWidth / 2 + 56;
    container.scrollTo({ left: scrollTo, behavior: "smooth" });

    // 하단 바 이동 위치
    setIndicatorX(target.offsetLeft);
    props.setFilterTarget(item);
  };

  return {
    indicatorX,
    scrollbarRef,
    itemRefs,
    checkFilterTarget,
    onMouseDown,
    onMouseLeave,
    onMouseMove,
    onMouseUp,
    onClickItem,
  };
};
