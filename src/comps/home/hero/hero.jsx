import { ChevronRight, Check } from "lucide-react";
import i1 from '/1.png'
import i2 from '/2.png'
import i3 from '/3.png'

export default function Hero({ onNavigate }) {

  
  const cards = [
    {
      step: i1,
      title: "We've Received your order!",
      text: "Awaiting Restaurant acceptance",
    },
    {
      step: i2,
      title: "Order Accepted!",
      text: "Your order will be delivered shortly",
      success: true,
    },
    {
      step: i3,
      title: "Your rider’s nearby 🎉",
      text: "They’re almost there — get ready!",
    },
  ];

  return (
    <section className="w-full flex justify-center">
      <div className="relative w-[95%] md:w-full min-h-[520px] bg-[#0b1020] rounded-2xl overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="
            absolute inset-0 z-[1]
            bg-[linear-gradient(to_right,rgba(11,16,32,0.95),rgba(11,16,32,0.7),rgba(11,16,32,0.3)),url('/Hunder.png')]
            bg-cover bg-bottom bg-no-repeat
          "
        />

        {/* FOREGROUND IMAGE */}
        <img
          src="/Hover.png"
          alt="Customer"
          className="
            hidden lg:block
            absolute bottom-0 right-[34%]
            h-[95%] max-h-[520px]
            z-[4]
            pointer-events-none
          "
        />

        {/* LEFT CONTENT (VERTICALLY CENTERED) */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2
            left-0
            z-[5]
            lg:max-w-[560px] w-[80%]
            px-6 lg:px-10
            text-white mx-auto items-center
          "
        >
          <p className="text-[17px] text-gray-400">
            Order Restaurant food, takeaway and groceries.
          </p>

          <h1 className="text-4xl md:text-[42px] font-bold leading-tight mt-4">
            Feast Your Senses,{" "}
            <span className="text-[#ff8a00]">Fast and Fresh</span>
          </h1>

          <p className="mt-3">
            Enter a postcode to see what we deliver
          </p>

          {/* SEARCH */}
          <div className="relative mt-8 max-w-[420px]">
            <input
              type="search"
              placeholder="e.g. EC4R 3TE"
              className="w-full h-[64px] rounded-full pl-6 pr-[72px] text-black bg-white outline-none"
            />
            <button
              onClick={() => onNavigate?.('restaurants')}
              className="
                absolute right-0 top-0
                h-[64px] w-[64px]
                rounded-full md:hidden
                bg-[#ff8a00] cursor-pointer
                flex items-center justify-center
                hover:bg-[#ff8a00]/90
              "
            >
              <ChevronRight className="text-white" />
            </button>
            <button
              onClick={() => onNavigate?.('restaurants')}
              className="
                absolute right-0 top-0
                h-[64px] hidden
                rounded-full px-10
                bg-[#ff8a00] cursor-pointer
                md:flex items-center justify-center
                hover:bg-[#ff8a00]/90
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="
            hidden lg:flex
            absolute top-0 right-0
            h-full w-[40%]
            bg-[url('/heroSec.png')] bg-no-repeat bg-cover
            z-[2]
            flex-col justify-center
            gap-14
            px-8
          "
        >
          {cards.map((card, index) => (
            <div key={card.step} className={index === 1 ? "ml-[60px] " : ""}>
              <OrderCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ORDER CARD */
function OrderCard({ step, title, text, success }) {
  return (
    <div className="relative bg-white rounded-xl p-5 shadow-xl w-[90%]">
      <span className="absolute -right-10 -top-7 text-5xl font-bold text-white/50">
        <img src={step} alt="" />
      </span>

      <div className="text-gray-900">
        <div className="flex items-center gap-1 font-semibold">
          Order
          {success && <Check className="w-4 h-4 text-green-500" />}
        </div>

        <p className="mt-1 font-medium">{title}</p>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}
