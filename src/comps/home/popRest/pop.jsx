import { popData } from "./popData";

export default function PopRest({ restaurants = popData }) {
    return (
        <section className="w-full py-10">
            <div className="flex items-center justify-between mb-6 px-4 md:px-8 lg:px-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    Popular Restaurants
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 px-4 md:px-8 lg:px-10">
                {restaurants.map((restaurant) => (
                    <div
                        key={restaurant.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4 bg-orange-400">
                            <h3 className="font-semibold text-center text-lg text-white">
                                {restaurant.name}
                            </h3>
                            {restaurant.cuisine && (
                                <p className="text-sm opacity-80">
                                    {restaurant.cuisine}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}