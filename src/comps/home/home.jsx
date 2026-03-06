import Hero from "./hero/hero";
import { menuData } from "../resturant/resData";
import MenuGrid from "../resturant/resGrid";
import { useNavigate } from "react-router-dom";
import CatSec from "../home/cats/catSec.jsx"
import { categories } from "../home/cats/cats.js"
import PopRest from "../home/popRest/pop";
import Ads from "./ads/ads.jsx";
import PartnerSection from "./promo/pCard.jsx";
import KnowMoreSection from "./knowmore/KnowMoreSection.jsx";
import StatsSection from "./stat/StatsSection.jsx";

export default function Home() {

const navigate = useNavigate();

 const randomMenus = [...menuData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="flex flex-col items-center w-full">
        <Hero/>
        {/* menufrag */}
      <section className="px-6 md:px-12 py-10 flex flex-col items-center w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 w-full">
        <h2 className="text-xl md:text-2xl font-semibold">
          Up to -40% 🎉 Order.uk exclusive deals
        </h2>

        <div className="gap-6 text-sm hidden lg:flex">
          <button className="text-gray-500 hover:text-black">Vegan</button>
          <button className="text-gray-500 hover:text-black">Sushi</button>
          <button className="px-4 py-2 rounded-full border border-orange-400 text-orange-500">
            Pizza & Fast food
          </button>
          <button className="text-gray-500 hover:text-black">Others</button>
        </div>
      </div>

      <div className="w-full overflow-x-auto md:overflow-x-visible">
        <MenuGrid menus={randomMenus} />
      </div>
    </section>
    {/* categories  */}
    <div className="w-full">
      <CatSec
        title="Order.uk Popular Categories 😋"
        categories={categories}
        limit={6}
        showViewAll={true}
        onViewAll={() => navigate("/categories")}
      />
    </div>
    {/* popular resturants */}
    <div>
      <PopRest/>
    </div>
    {/* <div className="py-6">
      <Ads/>
    </div> */}
    <div className="">
      <PartnerSection/>
    </div>
    <div className="">
      <KnowMoreSection/>
    </div>
    <div className="">
      <StatsSection/>
    </div>
    </div>
  );
}