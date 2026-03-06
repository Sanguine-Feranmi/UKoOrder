import { useState } from 'react';
import { Search, Clock } from 'lucide-react';
import { ukRestaurants, cuisineTypes } from '../../data/ukRestaurants';
import Rating from '../shared/Rating';
import Button from '../shared/Button';

export default function RestaurantList({ onSelectRestaurant }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const filteredRestaurants = ukRestaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="w-full py-10 px-4 md:px-10">
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search restaurants or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {cuisineTypes.map((cuisine) => (
            <Button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              variant={selectedCuisine === cuisine ? 'primary' : 'secondary'}
              size="sm"
              className="whitespace-nowrap"
            >
              {cuisine}
            </Button>
          ))}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => onSelectRestaurant?.(restaurant)}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-4 space-y-2">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
              <p className="text-sm text-primary font-semibold">{restaurant.cuisine}</p>

              <div className="flex items-center justify-between pt-2">
                <Rating rating={restaurant.rating} />

                <div className="flex items-center gap-1 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm">{restaurant.deliveryTime} min</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No restaurants found</p>
          <p className="text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
