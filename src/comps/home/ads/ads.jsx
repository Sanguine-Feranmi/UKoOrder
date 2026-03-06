import React from "react";
import ads from "/ad1.png";
import logo from "/logo.png";
import appstore from "/app.png";
import playstore from "/play.png";

export default function Ads() {
  return (
    <section className="w-full bg-[#ECECEC] rounded-2xl overflow-hidden px-6 md:px-12 py-10 my-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 z-40">
          <img
            src={ads}
            alt="Advertisement"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6">

          {/* Title */}
          <div className="flex items-center flex-wrap gap-2">
            <img src={logo} alt="Order Logo" className="h-10" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1023]">
              ing is more
            </h2>
          </div>

          {/* Highlight Banner */}
          <div className="inline-block bg-[#0B1023] px-6 py-3 absolute w-[60%] left-72 rounded-full text-right z-0">
            <h3 className="text-xl md:text-3xl font-bold">
              <span className="text-orange-500 underline">
                Personalised
              </span>{" "}
              <span className="text-white">& Instant</span>
            </h3>
          </div>

          {/* Subtitle */}
          <p className="text-gray-700 text-lg">
            Download the Order.uk app for faster ordering
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4 flex-wrap">
            <img
              src={appstore}
              alt="App Store"
              className="h-12 cursor-pointer hover:scale-105 transition"
            />
            <img
              src={playstore}
              alt="Google Play"
              className="h-12 cursor-pointer hover:scale-105 transition"
            />
          </div>

        </div>
      </div>
    </section>
  );
}