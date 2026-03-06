import React from "react";

export default function Accordion({
  items,
  activeIndex,
  setActiveIndex,
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => setActiveIndex(index)}
          className={`block w-full text-left px-6 py-4 rounded-full transition ${
            activeIndex === index
              ? "bg-orange-500 text-black font-semibold"
              : "hover:bg-white/10 text-white"
          }`}
        >
          {item.question}
        </button>
      ))}
    </div>
  );
}