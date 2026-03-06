import { useState } from "react";
import Tabs from "./tab";
import Accordion from "./Accordion";
import InfoCards from "./InfoCards";
import { tabsData, faqData, stepsData } from "./KnowMoreData.js";

export default function KnowMoreSection() {
  const [activeTab, setActiveTab] = useState("faq");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-4 md:px-10 my-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Know more about us!
        </h2>

        <Tabs
          tabs={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="bg-[#060F2B] rounded-2xl p-6 md:p-10 text-white grid grid-cols-1 md:grid-cols-2 gap-10">
        <Accordion
          items={faqData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <div className="space-y-8">
          <InfoCards items={stepsData} />

          <p className="text-gray-300 text-sm leading-relaxed">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way in no time!
          </p>
        </div>
      </div>
    </section>
  );
}