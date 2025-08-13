"use client";

import { RootState } from "@/store/store";
import { WhiskyRegion } from "@/types/WhiskyType";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import CategoryHeader from "./categoryHeader";
import RegionFilter from "./regionFilter";
import PriceFilter from "./priceFilter";
import TypeFilter from "./typeFilter";
import FlavorFilter from "./flavorFilter";
import AppearanceFilter from "./appearanceFilter";
import AbvFilter from "./abvFilter";
import MaturationFilter from "./maturationFilter";
import FilterationFilter from "./filterationFilter";

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
          {filterTarget === "origin" && <RegionFilter />}
          {filterTarget === "maturation" && <MaturationFilter />}
          {filterTarget === "abv" && <AbvFilter />}
          {filterTarget === "appearance" && <AppearanceFilter />}
          {filterTarget === "filteration" && <FilterationFilter />}
          {filterTarget === "flavor" && <FlavorFilter />}
          {filterTarget === "type" && <TypeFilter />}
          {filterTarget === "price" && <PriceFilter />}
        </div>
      </div>
      <button className="rounded-md py-4 text-center bg-white">
        <span>Result!!</span>
      </button>
    </div>
  );
}
