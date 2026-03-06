import React from "react";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm font-medium">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-5 py-2 rounded-full border transition ${
            activeTab === tab.id
              ? "bg-orange-500 text-white border-orange-500"
              : "border-orange-400 text-black hover:bg-orange-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}