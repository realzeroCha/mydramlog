import React from "react";
import { CategoryHeaderViewProps } from "./types";

const CategoryHeaderView = ({ props, hook }: CategoryHeaderViewProps) => {
  return (
    <div
      ref={hook.scrollbarRef}
      className="relative flex gap-3 overflow-x-auto no-scrollbar sm:flex-wrap px-[4%]"
      onMouseDown={hook.onMouseDown}
      onMouseLeave={hook.onMouseLeave}
      onMouseUp={hook.onMouseUp}
      onMouseMove={hook.onMouseMove}
    >
      {hook.filterCategory.map((item, index) => (
        <button
          key={item}
          ref={(el) => {
            hook.itemRefs.current[index] = el;
          }}
          className={`p-2 w-28 sm:w-auto flex-shrink-0`}
          onClick={() => hook.onClickItem(item, index)}
        >
          <span
            className={`text-[1rem]/[1.75rem] sm:text-[1.25rem]/[2rem] ${
              hook.checkFilterTarget(item) ? `text-[#e9a42e]` : `text-[#cecece]`
            }`}
          >
            {item}
          </span>
        </button>
      ))}
      {hook.indicatorX && (
        <div
          className={`absolute bottom-0 left-0 w-28 h-0.5 inline sm:hidden bg-[#e9a42e] transition-transform-[0.3s]`}
          style={{ transform: `translateX(${hook.indicatorX}px)` }}
        />
      )}
    </div>
  );
};

export default CategoryHeaderView;
