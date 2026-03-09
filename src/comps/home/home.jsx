import Hero from "./hero/hero";
import { menuData } from "../resturant/resData";
import MenuGrid from "../resturant/resGrid";
import CatSec from "../home/cats/catSec.jsx"
import { categories } from "../home/cats/cats.js"
import PopRest from "../home/popRest/pop";
import Ads from "./ads/ads.jsx";
import PartnerSection from "./promo/pCard.jsx";
import KnowMoreSection from "./knowmore/KnowMoreSection.jsx";
import StatsSection from "./stat/StatsSection.jsx";

export default function Home({ onNavigate }) {

 const randomMenus = [...menuData]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full">
        <Hero onNavigate={onNavigate} />
        {/* menufrag */}
      <section className="px-4 md:px-8 lg:px-12 py-10 flex flex-col items-center w-full max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 w-full">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Up to -40% 🎉 Order.uk exclusive deals
        </h2>

        <div className="flex gap-3 md:gap-6 text-xs md:text-sm overflow-x-auto pb-2 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          <button className="text-gray-500 hover:text-black whitespace-nowrap">Vegan</button>
          <button className="text-gray-500 hover:text-black whitespace-nowrap">Sushi</button>
          <button className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-orange-400 text-orange-500 whitespace-nowrap">
            Pizza & Fast food
          </button>
          <button className="text-gray-500 hover:text-black whitespace-nowrap">Others</button>
        </div>
      </div>

      <div className="w-full">
        <MenuGrid menus={randomMenus} onMenuClick={() => onNavigate?.('restaurants')} />
      </div>
    </section>
    {/* categories  */}
    <div className="w-full">
      <CatSec
        title="Order.uk Popular Categories 😋"
        categories={categories}
        limit={6}
        showViewAll={true}
        onViewAll={() => onNavigate?.('restaurants')}
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
      <PartnerSection onNavigate={onNavigate} />
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