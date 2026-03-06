import { useParams } from "react-router-dom";
import { menuData } from "../resturant/resData";

export default function MenuDetail() {
  const { id } = useParams();
  const menu = menuData.find((item) => item.id === id);

  if (!menu) return <div className="p-10">Menu not found</div>;

  return (
    <section className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[420px]">
        <img
          src={menu.image}
          alt={menu.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-10 text-white">
          <span className="text-orange-400 text-sm mb-2">
            {menu.category}
          </span>
          <h1 className="text-4xl font-bold mb-2">{menu.name}</h1>
          {menu.discount && (
            <span className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm font-semibold w-fit">
              {menu.discount}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-12">
        <h2 className="text-2xl font-semibold mb-4">About this restaurant</h2>
        <p className="text-gray-600 leading-relaxed">
          {menu.description}
        </p>
      </div>
    </section>
  );
}
