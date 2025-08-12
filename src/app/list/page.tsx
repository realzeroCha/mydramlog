"use client";

import { useExchangeRate } from "@/api/exchangeRate";
import FilterHeader from "@/components/FilterHeader";
import Logo from "@/components/Logo";
import { WhiskyList } from "@/types/WhiskyDataList";
import { convertLocaleStringToNumber } from "@/utils/convertLocaleStringToNumber";
import { AnimatePresence, motion } from "framer-motion";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function ItemListPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const filteredList = WhiskyList;
  const visibleList = filteredList.slice(0, visibleCount);

  const { USDToKRWRate } = useExchangeRate();
  const KRWRate = convertLocaleStringToNumber(USDToKRWRate?.value || "");

  const navigateSearch = () => {
    window.location.assign("/search");
  };

  const handleScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScroll = throttle(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setVisibleCount((prev) => Math.min(prev + 24, filteredList.length));
      }
    }
  }, 500);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [filteredList]);

  return (
    <div className="relative w-full h-screen">
      {/* FilterMenu */}
      <header className={`sticky top-0 px-[4%] py-2 sm:py-4`}>
        <div className="flex items-center justify-between">
          <button onClick={handleScrollTop}>
            <Logo />
          </button>
          <button onClick={navigateSearch}>
            <AiOutlineSearch size={30} color={"#fff"} />
          </button>
        </div>
        <FilterHeader />
      </header>
      {/* ItemListView */}
      <div
        className={`grid gap-[2vw] px-[4%] py-[2%] overflow-y-scroll grid-cols-3 sm:grid-cols-4 h-[calc(100dvh-64px)] sm:h-[calc(100dvh-72px)] items-start`}
        ref={scrollRef}
      >
        <AnimatePresence>
          {visibleList.map((item) => (
            <motion.div
              className="h-auto"
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-full aspect-square object-cover bg-white rounded-md"
                src={item.img_url}
                alt={`${item.name}_img`}
              />
              <p className="text-[0.75rem]/[1.25rem] text-nowrap text-ellipsis overflow-hidden sm:text-[1rem]/[1.75rem]">
                {item.name}
              </p>
              <p className="text-[0.75rem]/[0.75rem] sm:text-[1rem]/[1rem]">
                ${item.price.value.toLocaleString()}
                {KRWRate && (
                  <span className="pl-1 text-[0.6rem]/[0.75rem] text-gray-200 sm:text-[0.75rem]/[1rem]">
                    (₩{(item.price.value * KRWRate).toLocaleString()})
                  </span>
                )}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
