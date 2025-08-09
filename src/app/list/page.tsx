"use client";

import { WhiskyList } from "@/types/WhiskyDataList";
import { Whisky } from "@/types/WhiskyType";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ItemList() {
  // const [filter, setFilter] = useState<Whisky | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(20);

  const filteredList = WhiskyList;
  const visibleList = filteredList.slice(0, visibleCount);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      setVisibleCount((prev) => Math.min(prev + 20, filteredList.length));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filteredList]);

  return (
    <div className="relative w-full h-screen p-[4%]">
      <div className="grid grid-cols-5 gap-[2vw]">
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
