"use client";

import { RootState } from "@/store/store";
import { WhiskyRegion } from "@/types/WhiskyType";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CategoryHeader from "./categoryHeader";

const whiskyRegions: WhiskyRegion[] = [
  "Scotland",
  "Ireland",
  "USA",
  "Japan",
  "Canada",
  "Taiwan",
  "India",
  "Other",
];

export default function SearchPage() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  const [name, setName] = useState<string>("");
  const [filterTarget, setFilterTarget] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-between py-[4%]">
      <div className="flex flex-col flex-1">
        <h1 className="text-[1.25rem] sm:text-[1.5rem] font-bold px-[4%]">
          Search your Whisky!
        </h1>
        <div className="flex items-center p-[4%]">
          <label className="w-full flex items-center gap-2 p-1 sm:p-2 bg-[#333] rounded-md">
            <AiOutlineSearch size={30} color={"#fff"} />
            <input
              className={`w-full outline-none text-[1rem] sm:text-[1.25rem] text-[#cecece] caret-[#C19A6B]`}
              value={name}
              onChange={onChangeName}
            ></input>
          </label>
        </div>
        <CategoryHeader
          filterTarget={filterTarget}
          setFilterTarget={setFilterTarget}
        />
        <div className="p-[4%] flex-1">
          {filterTarget === "origin" && (
            <div>
              <h3 className="text-[1.5rem] pb-3 font-semibold">Country</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-4">
                {whiskyRegions.map((region) => (
                  <label
                    key={`${region}`}
                    htmlFor={`${region}`}
                    className="flex justify-between hover:brightness-90"
                  >
                    <p>{region}</p>
                    <input
                      id={`${region}`}
                      className="w-5 accent-[#c19a6b]"
                      type="checkbox"
                      onChange={() => {}}
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="rounded-md py-4 text-center bg-white">
        <span>Result!!</span>
      </button>
    </div>
  );
}
