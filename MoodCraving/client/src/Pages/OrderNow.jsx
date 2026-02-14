import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/Api";

const OrderNow = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch All Restaurants
  const fetchAllRestaurant = async () => {
    setLoading(true);
    try {
      const res = await api.get("/public/allRestaurants");

      console.log("API Full Response:", res);
      console.log("Restaurant Data:", res?.data?.data);

      setRestaurants(res?.data?.data || []);
    } catch (error) {
      console.log("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRestaurant();
  }, []);

  const handleResturantClick = (restaurantID) => {
    console.log("Restaurant Clicked:", restaurantID);
    navigate(`/restaurant/${restaurantID}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Order Now</h1>
        <p className="text-gray-500 mt-2">
          Browse our restaurants and place your order!
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-600 text-lg">
          Loading restaurants...
        </div>
      )}

      {/* Restaurant Grid */}
      {!loading && restaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, idx) => (
            <div
              key={idx}
              onClick={() => handleResturantClick(restaurant._id)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
            >
              {/* Restaurant Image */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={
                    restaurant.photo.url
                  }
                  alt="restaurant"
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Name + Rating */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {restaurant.restaurantName}
                  </h2>

                  <div className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                    ⭐ {restaurant.rating || "4.2"}
                  </div>
                </div>

                {/* Cuisine */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {restaurant.cuisine
                    ?.split(", ")
                    .slice(0, 2)
                    .map((cusine, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full capitalize"
                      >
                        {cusine.toLowerCase()}
                      </span>
                    ))}
                </div>

                {/* Location */}
                <div className="mt-3 text-sm text-gray-600">
                  📍 {restaurant.city} - {restaurant.pin}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <div className="text-center text-gray-500 mt-10">
            No restaurants available
          </div>
        )
      )}
    </div>
  );
};

export default OrderNow;
