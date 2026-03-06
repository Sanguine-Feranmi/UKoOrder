import { Link } from "react-router-dom";

export default function MenuCard({ menu }) {
  return ( 
    <Link
      to={`/menu/${menu.id}`}
      className="relative min-w-[320px] h-[220px] rounded-xl overflow-hidden group shadow-md"
    >
      {/* Image */}
      <img
        src={menu.image}
        alt={menu.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Discount */}
      {menu.discount && (
        <div className="absolute top-4 right-4 bg-[#0B1020] text-white text-sm font-semibold px-3 py-1 rounded-lg">
          -{menu.discount}%
        </div>
      )}

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm text-orange-400 font-medium">Restaurant</p>
        <h3 className="text-lg font-semibold leading-tight">
          {menu.name}
        </h3>
      </div>
    </Link>
  );
}
