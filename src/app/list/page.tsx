"use client";

import Logo from "@/components/Logo";
import { WhiskyList } from "@/types/WhiskyDataList";
import { Whisky } from "@/types/WhiskyType";
import { motion, AnimatePresence } from "framer-motion";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function ItemList() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // const [filter, setFilter] = useState<Whisky | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(20);

  const filteredList = WhiskyList;
  const visibleList = filteredList.slice(0, visibleCount);

  const handleScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScroll = throttle(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

      console.log("window.inner", scrollTop, scrollHeight, clientHeight);

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setVisibleCount((prev) => Math.min(prev + 20, filteredList.length));
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
    <div className="relative w-full h-screen bg-[#101010]">
      {/* FilterMenu */}
      <header
        className={`sticky flex items-center justify-between top-0 px-[4%] bg-[#101010] h-16 sm:h-18`}
      >
        <button onClick={handleScrollTop}>
          <Logo />
        </button>
        <button>
          <AiOutlineSearch size={30} />
        </button>
      </header>
      {/* ItemListView */}
      <div id="top" />
      <div
        className={`grid gap-[2vw] px-[4%] py-[2%] overflow-y-auto grid-cols-4 sm:grid-cols-5 h-[calc(100dvh-64px)] sm:h-[calc(100dvh-72px)]`}
        ref={scrollRef}
      >
        <AnimatePresence>
          {visibleList.map((item) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <img
                className="w-full aspect-square object-cover bg-white rounded-md"
                src={item.img_url}
                alt={`${item.name}_img`}
              />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
