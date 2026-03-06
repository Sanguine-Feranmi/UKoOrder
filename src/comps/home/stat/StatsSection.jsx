import { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Simulate CMS/API call
    async function fetchStats() {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            {
              id: 1,
              value: 546,
              suffix: "+",
              label: "Registered Riders",
            },
            {
              id: 2,
              value: 789900,
              suffix: "+",
              label: "Orders Delivered",
            },
            {
              id: 3,
              value: 690,
              suffix: "+",
              label: "Restaurants Partnered",
            },
            {
              id: 4,
              value: 17457,
              suffix: "+",
              label: "Food items",
            },
          ]);
        }, 500)
      );

      setStats(response);
    }

    fetchStats();
  }, []);

  return (
    <section className="px-4 md:px-10 my-10">
      <div className="bg-orange-500 text-white rounded-xl py-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/40">
          {stats.map((stat) => (
            <div key={stat.id} className="py-6 sm:py-0">
              <h3 className="text-4xl font-bold">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}