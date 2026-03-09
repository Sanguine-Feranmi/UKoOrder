import { useState } from 'react';
import { Plus, Clock, ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Rating from '../shared/Rating';
import Button from '../shared/Button';

export default function RestaurantMenu({ restaurant, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const filteredMenu = selectedCategory === 'All'
    ? restaurant.menu
    : restaurant.menu.filter((item) => item.category === selectedCategory);

  const categories = ['All', ...restaurant.menuCategories];

  return (
    <div className="w-full py-6 md:py-10 px-4 md:px-8 lg:px-10">
      {/* Header */}
      <Button
        onClick={onBack}
        variant="secondary"
        size="sm"
        className="mb-6"
      >
        <ArrowLeft size={20} />
        Back to restaurants
      </Button>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="h-64 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-gray-600 mb-4">{restaurant.location}</p>

          <div className="flex items-center gap-6">
            <Rating rating={restaurant.rating} size={20} />

            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={20} />
              <span>{restaurant.deliveryTime} min</span>
            </div>

            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {restaurant.cuisine}
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            size="sm"
            className="whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.category}</p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">£{item.price.toFixed(2)}</span>

                <button
                  onClick={() => addToCart({ ...item, restaurantName: restaurant.name })}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 hover:scale-110 transition-all"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
