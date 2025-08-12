"use client";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function FilterHeader() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  const filterList = filter
    ? Object.entries(filter).map(([key, value]) => ({
        [key]: value,
      }))
    : [];

  return filter ? (
    <div className="flex items-center gap-2">
      {filterList.map((item) => (
        <div
          key={`${Object.keys(item)[0]}_${Object.values(item)[0]}`}
          className="px-4 py-2 rounded-sm bg-white"
        >
          <p>{Object.values(item)[0]}</p>
        </div>
      ))}
    </div>
  ) : (
    <div />
  );
}
