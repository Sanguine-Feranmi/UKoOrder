import { ShoppingBag, Truck, CheckCircle } from "lucide-react";

const iconMap = {
  shopping: ShoppingBag,
  truck: Truck,
  check: CheckCircle,
};

export default function InfoCards({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <div
            key={item.id}
            className="bg-white text-black rounded-xl p-6 text-center shadow-md hover:scale-105 transition cursor-pointer"
          >
            <div className="flex justify-center mb-4">
              <Icon size={48} className="text-orange-500" />
            </div>

            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}