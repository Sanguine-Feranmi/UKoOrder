import React from "react";
import { ArrowRight } from "lucide-react";

export default function PromoCard({
  image,
  tag,
  subtitle,
  title,
  buttonText = "Get Started",
  align = "left",
  onClick,
}) {
  return (
    <div 
      className="relative w-full h-[320px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          align === "left"
            ? "bg-gradient-to-r from-black/80 via-black/50 to-transparent"
            : "bg-gradient-to-l from-black/80 via-black/50 to-transparent"
        }`}
      />

      {/* Floating Top Label */}
      {tag && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-sm font-semibold px-6 py-2 rounded-b-xl shadow-md z-20 animate-slideDown">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {tag}
          </span>
        </div>
      )}

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center px-8 md:px-12 ${
          align === "right" ? "items-end text-right" : "items-start text-left"
        } text-white space-y-4`}
      >
        {subtitle && (
          <p className="text-orange-400 font-semibold text-sm md:text-base uppercase tracking-wide animate-fadeIn">
            {subtitle}
          </p>
        )}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-md animate-fadeIn animation-delay-100">
          {title}
        </h2>

        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group/btn animate-fadeIn animation-delay-200">
          {buttonText}
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}