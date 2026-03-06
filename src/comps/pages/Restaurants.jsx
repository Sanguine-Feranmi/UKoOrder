import { useState } from 'react';
import RestaurantList from '../restaurant/RestaurantList';
import RestaurantMenu from '../restaurant/RestaurantMenu';
import Cart from '../restaurant/Cart';
import Checkout from './Checkout';

export default function Restaurants() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return <Checkout onBack={() => setShowCheckout(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedRestaurant ? (
        <RestaurantMenu
          restaurant={selectedRestaurant}
          onBack={() => setSelectedRestaurant(null)}
        />
      ) : (
        <RestaurantList onSelectRestaurant={setSelectedRestaurant} />
      )}
      <Cart onCheckout={() => setShowCheckout(true)} />
    </div>
  );
}
