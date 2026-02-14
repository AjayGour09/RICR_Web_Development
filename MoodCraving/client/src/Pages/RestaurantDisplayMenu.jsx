import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import { useState } from "react";
import toast from "react-hot-toast";
import { ShoppingCart, Star, MapPin, Clock, Search, X, ChevronLeft, ChevronRight } from "lucide-react";

const RestaurantDisplayMenu = () => {
  const restaurantId = useParams().id;
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const fetchRestaurantMenu = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(`/public/restaurant-menu/${restaurantId}/${page}`);
      const data = res.data.data;
      
      setRestaurantData(data.restaurant || data);
      
      // Map menu items to ensure correct field names and types
      const mappedItems = (data.items || data.menu || []).map((item) => ({
        ...item,
        name: item.itemName || item.name,
        category: item.cuisine || item.category || item.type,
        price: parseFloat(item.price) || 0,
        image: item.itemImages?.[0] || item.image,
      }));
      
      setMenuItems(mappedItems);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(page);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to load menu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurantMenu(1);
  }, [restaurantId]);

  const categories = [
    "all",
    ...new Set(menuItems.map((item) => item.category || item.type || "Other")),
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" ||
      (item.category || item.type || "Other") === selectedCategory;
    const searchMatch =
      !searchQuery ||
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const addToCart = (item) => {
    setCart([...cart, item]);
    toast.success(`${item.name} added to cart!`);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
    toast.success("Item removed from cart");
  };

  const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      fetchRestaurantMenu(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      fetchRestaurantMenu(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading && currentPage === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-24">
      {/* Restaurant Header */}
      {restaurantData && (
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-10 px-4 sm:px-6 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                  {restaurantData.name || "Restaurant"}
                </h1>

                <div className="flex flex-wrap gap-4 mb-4">
                  {restaurantData.rating && (
                    <div className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full font-semibold">
                      <Star className="w-5 h-5 fill-white" />
                      <span>{restaurantData.rating}</span>
                    </div>
                  )}
                  {restaurantData.location && (
                    <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
                      <MapPin className="w-5 h-5" />
                      <span className="text-sm">{restaurantData.location}</span>
                    </div>
                  )}
                  {restaurantData.deliveryTime && (
                    <div className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">{restaurantData.deliveryTime}</span>
                    </div>
                  )}
                </div>

                {restaurantData.description && (
                  <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                    {restaurantData.description}
                  </p>
                )}
              </div>

              <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 text-center min-w-fit border border-white border-opacity-30">
                <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-3xl">{cart.length}</p>
                <p className="text-xs text-blue-100 mt-1">Items in cart</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Search and Filter */}
        <div className="mb-10">
          {/* Search Bar */}
          <div className="mb-6 relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-blue-200 focus:outline-none focus:border-orange-500 transition-colors shadow-sm hover:border-blue-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-white border-2 border-blue-200 text-blue-900 hover:border-orange-500 hover:shadow-md"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
              {filteredItems.map((item) => (
                <div
                  key={item._id || item.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 hover:border-orange-300 group"
                >
                  {/* Item Image */}
                  <div className="h-48 bg-gradient-to-br from-orange-100 via-blue-50 to-blue-100 flex items-center justify-center text-5xl overflow-hidden relative">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="group-hover:scale-125 transition-transform duration-300">
                        🍽️
                      </span>
                    )}
                  </div>

                  {/* Item Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-blue-900 line-clamp-1">
                          {item.name}
                        </h3>
                        {item.category && (
                          <p className="text-xs text-gray-500 capitalize mt-0.5">
                            {item.category}
                          </p>
                        )}
                      </div>
                      {item.rating && (
                        <div className="flex items-center gap-1 bg-orange-50 px-2.5 py-1.5 rounded-lg flex-shrink-0">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                          <span className="text-sm font-bold text-orange-600">
                            {item.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-orange-500">
                          ₹{parseFloat(item.price).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg active:scale-95 flex items-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 py-8 border-t">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-blue-900 text-white hover:bg-blue-800 active:scale-95"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        fetchRestaurantMenu(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        currentPage === page
                          ? "bg-orange-500 text-white scale-110"
                          : "bg-white border-2 border-blue-200 text-blue-900 hover:border-orange-500"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-blue-900 text-white hover:bg-blue-800 active:scale-95"
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Page Info */}
            <div className="text-center text-sm text-gray-500 mt-4">
              Page {currentPage} of {totalPages}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border-2 border-dashed border-blue-200">
            <p className="text-gray-500 text-lg font-medium">
              No items found. Try adjusting your search.
            </p>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-2xl hover:shadow-orange-500/50 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 active:scale-95 border-4 border-white z-30"
        >
          <ShoppingCart className="w-7 h-7" />
          <p className="text-xs font-bold mt-0.5">{cart.length}</p>
        </button>
      )}

      {/* Cart Sidebar */}
      {showCart && cart.length > 0 && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 bottom-0 w-96 bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-blue-50 p-4 rounded-lg border border-blue-200"
                >
                  <div>
                    <p className="font-semibold text-blue-900">{item.name}</p>
                    <p className="text-orange-500 font-bold">₹{parseFloat(item.price).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}

              <div className="border-t-2 border-blue-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4 bg-orange-50 p-4 rounded-lg">
                  <span className="text-lg font-bold text-blue-900">Total:</span>
                  <span className="text-2xl font-bold text-orange-500">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDisplayMenu;