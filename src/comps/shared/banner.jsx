import { BaggageClaim, MapPin, Phone, Download, ShoppingCart  } from 'lucide-react';
import { useState } from 'react';
import Bimg from '/Bimg.png'

export default function Banner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const bannerData = {
    offer: {
      text: "Get 5% Off your first order,",
      promo: "ORDERS"
    },
    location: {
      address: "Regent Street, A4, A4201, London",
      changeText: "Change location"
    },
    location2: {
      address: "Lution Street, N4G-0000 A4201, Europe",
      changeText: "Change location"
    },
    actions: [
      { icon: BaggageClaim, label: "Orders" },
      { icon: Phone, label: "Contact" },
      { icon: MapPin, label: "Location" },
      { icon: Download, label: "Download" }
    ]
  };

  return (
    <>
    <div className="h-full bg-gray-100 text-white pl-6 py- justify-between items-center lg:w-[95%] md:w-full mx-auto rounded-b-lg gap-4 hidden md:flex relative">
      <div className="flex items-center gap-2">
        <p className="text-sm text-secondary font-bold">
          {bannerData.offer.text}
          <span className="font-semibold text-primary ml-1">Promo: {bannerData.offer.promo}</span>
        </p>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <MapPin size={16} className='text-secondary font-bold' />
        <span className='text-secondary font-bold' >{bannerData.location.address}</span>
        <button className="ml-2 underline text-primary  hover:no-underline">
          {bannerData.location.changeText}
        </button>
      </div>
      
      <div className="bg-secondary rounded-br-lg p-2 h-full">
        <div className="grid grid-cols-4 gap-1">
          {bannerData.actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div 
                key={index}
                className={`flex justify-center items-center p-2 hover:bg-gray-50 transition-colors ${
                  index > 0 ? 'border-l border-gray-200' : ''
                }`}
                title={action.label}
              >
                <IconComponent size={20} className="text-white" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center text-white h-[100px]  bg-primary md:hidden">
      <div className="flex justify-center items-center w-1/2 mx-auto bg-tet h-full px-4 py-">
        <img src={Bimg} alt="" />
        <span className="ml-2 font-bold text-lg">Aycan</span>
      </div>
      <div className="bg-secondary flex justify-center items-center w-1/2 mx-auto h-full px-4 py-2">
          <ShoppingCart size={32} />
          <span className="ml-2 font-bold text-lg">GBP79.89</span>
      </div>
    </div>
    <div className="flex items-center justify-end gap-2 text-sm max-w-md ml-auto px-4 py-4">
        <MapPin size={32} className='text-secondary font-bold' />
        <span 
          className='text-secondary font-medium text-[17px] cursor-pointer hover:text-primary transition-colors'
          onClick={() => setIsExpanded(!isExpanded)}
          title="Click to expand"
        >
          {isExpanded 
            ? bannerData.location2.address 
            : `${bannerData.location2.address.slice(0, 23)}...`
          }
        </span>
        {isExpanded && (
          <button 
            className="ml-2 underline text-primary hover:no-underline whitespace-nowrap"
            onClick={() => setIsExpanded(false)}
          >
            {bannerData.location2.changeText}
          </button>
        )}
    </div>
    </>
  );
}