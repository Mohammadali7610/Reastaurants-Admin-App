import  { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  const [search, setSearch] = useState("");

  const handleDeleteRestaurant = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants.splice(index, 1);
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  const filteredRestuarant = useMemo(() => {
    const filteredList = restaurants.filter((restaurant) => {
      const searchLc = search.toLowerCase();
      const currentWordLC = restaurant.name.toLowerCase();
      return currentWordLC.includes(searchLc);
    });

    return filteredList;
  }, [search, restaurants]);

  return (
    <div>
      <h2 className="font-semibold text-2xl flex justify-center">
        Restaurant List
      </h2>
      <div className="flex justify-center align-middle">
        <input
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            backgroundColor: "#e9e9e9",
          }}
          className="flex justify-center align-middle"
          type="search"
          placeholder="Search Restaurant"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="restaurant-cards flex justify-center align-middle ">
        {filteredRestuarant.map((restaurant, index) => (
          <div className="restaurant-card m-2" key={index}>
            <h3>
              {index + 1}.<strong>Restaurant Name:</strong>
              {restaurant.name}
            </h3>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{ height: "200px" }}
            />
            <p>
              <strong>Restaurant id:</strong> {restaurant.id}
            </p>
            <div className="m-2">
              <Link
                to={`/addproduct/${restaurant.id}`}
                className="text-blue-400 hover:text-blue-300 bg-slate-300 hover:bg-slate-600 p-2 mx-2 rounded-xl"
              >
                Add Products
              </Link>
              <button
                onClick={() => handleDeleteRestaurant(index)}
                className="text-red-500 hover:text-red-400 bg-gray-200 hover:bg-gray-400 p-2 mx-2 rounded-xl"
              >
                Delete Restaurant
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
