import { useEffect, useRef } from "react";

export default function CatSec({
  title,
  categories,
  limit = 6,
  showViewAll = false,
  onViewAll,
}) {
  const scrollRef = useRef(null);

  const displayed = limit ? categories.slice(0, limit) : categories;

  // Infinite auto scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollSpeed = 20;

    const autoScroll = () => {
      if (!container) return;

      scrollAmount += scrollStep;
      container.scrollLeft += scrollStep;

      // Reset to beginning for infinite loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoScroll, scrollSpeed);

    return () => clearInterval(interval);
  }, []);

  // Duplicate items for seamless infinite scroll
  const infiniteItems = [...displayed, ...displayed];

  return (
    <section className="w-full py-10">
      <div className="flex items-center justify-between mb-6 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {title}
        </h2>

        {showViewAll && (
          <button
            onClick={onViewAll}
            className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition"
          >
            View All
          </button>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 md:px-8 lg:px-10"
      >
        {infiniteItems.map((item, index) => (
          <div
            key={index}
            className="min-w-[180px] sm:min-w-[220px] md:min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 cursor-pointer flex-shrink-0"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-black text-white p-4">
              <h3 className="font-bold text-lg text-orange-400">
                {item.name}
              </h3>
              <p className="text-sm opacity-80">
                {item.count} Restaurants
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}