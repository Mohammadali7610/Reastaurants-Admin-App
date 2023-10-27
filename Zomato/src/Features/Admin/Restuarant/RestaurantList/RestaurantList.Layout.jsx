import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    const [search, setSearch] = useState("");
    
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
      <h2 className="font-semibold text-2xl flex justify-center">Restaurant List</h2>
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
          placeholder="Search Restuarant"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="restaurant-cards flex justify-center align-middle ">
        {filteredRestuarant.map((restaurant, index) => (
          <div className="restaurant-card m-2" key={index}>
            <h3>{index + 1}.<strong>Restaurant Name:</strong>{restaurant.name}</h3>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: "200px" }} />
            <p><strong>Address:</strong> {restaurant.address},{restaurant.city},{restaurant.state},{restaurant.country}</p>
            <p><strong>Food Type:</strong> {restaurant.foodType}</p>
            <p><strong>Latitude:</strong> {restaurant.latitude}</p>
            <p><strong>Longitude:</strong>{restaurant.longitude}</p>
            <p><strong>Open Time :</strong>{restaurant.openingHours} to {restaurant.closingHours}</p>
            <p><strong>Enter Your Help Line Number</strong>{restaurant.helpLineNumber}</p>
            <p>{restaurant.discriptionAboutRestaurant}</p>
        
            <div className='m-2'>
            <Link to="/addproduct" className="text-blue-400 hover:text-blue-300 bg-slate-300 hover:bg-slate-600 p-2 mx-2 rounded-xl">
                Add Products
            </Link>
        </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
