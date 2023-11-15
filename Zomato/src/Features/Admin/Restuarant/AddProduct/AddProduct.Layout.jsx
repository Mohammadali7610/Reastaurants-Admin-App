import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const AddProduct = () => {
  const currentURL = window.location.href;
  console.log(currentURL);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    foodImage: "",
    foodName: "",
    foodPrice: "",
    foodQuantity: "",
  });

  const [restaurantsData, setRestaurantsData] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  const {id}  = useParams();
  console.log(id)
  const defaultInput = restaurantsData.findIndex((item) => id == item.id);
  console.log(defaultInput)


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const selectRestaurantOption = restaurantsData.map((restaurant, index) => ({
    value: index,
    label: restaurant.name,
  }));

  const handleRestaurantSelection = (restaurantOption) => {
    setFormData({
      ...formData,
      restaurantIndex: restaurantOption.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { restaurantIndex, foodImage, foodName, foodPrice, foodQuantity } =
      formData;

    if (restaurantIndex !== -1) {
      const updatedRestaurants = [...restaurantsData];
      const productData = {
        foodImage,
        foodName,
        foodPrice,
        foodQuantity,
      };

      if (!updatedRestaurants[restaurantIndex].products) {
        updatedRestaurants[restaurantIndex].products = [];
      }

      updatedRestaurants[restaurantIndex].products.push(productData);

      localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
      setRestaurantsData(updatedRestaurants);
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-8 m-4 rounded-lg shadow-lg w-1/4">
        <h2 className="text-3xl mb-6">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {restaurantsData.map((item, index) => {
              if (id == item.id) {
                return (
                  <div key={index}>
                    <label
                      htmlFor="restaurant"
                      className="block text-sm font-medium text-gray-400 mb-1"
                    >
                      Select Restaurant
                    </label>
                    <Select
                      options={selectRestaurantOption}
                      defaultInputValue={item.name}
                      onChange={handleRestaurantSelection}
                      className="p-2 w-full bg-gray-700 rounded-md"
                      placeholder="Search and select restaurant"
                      isSearchable
                      noOptionsMessage={() => "This Restaurant not found..."}
                      styles={{
                        
                        placeholder: (baseStyle) => ({
                          ...baseStyle,
                          color: "#fff",
                        }),
                        singleValue: (baseStyle) => ({
                          ...baseStyle,
                          color: "#fff",
                        }),
                        container: (baseStyle) => ({
                          ...baseStyle,
                          padding: "0",
                        }),
                        control: (baseStyle) => ({
                          ...baseStyle,
                          backgroundColor: "rgb(55 65 81)",
                          color:"#000",
                          boxShadow: "0 0 0 1 white",
                          border: "none",
                          padding: "0",
                        }),
                        menuList: (baseStyle, state) => ({
                          ...baseStyle,
                          backgroundColor: state.isFocused
                            ? "#fff"
                            : "rgb(55 65 81)",
                          borderRadius: "",
                        }),
                        option: (baseStyle, state) => ({
                          ...baseStyle,
                          backgroundColor: state.isFocused
                            ? "white"
                            : "rgb(55 65 81)",
                          color: state.isFocused ? "rgb(55 65 81)" : "white",
                          outlineStyle: "none",
                        }),
                      }}
                      required
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className="mb-4">
            <label
              htmlFor="foodImage"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Food Image URL
            </label>
            <input
              type="text"
              id="foodImage"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="foodName"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="foodPrice"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Food Price
            </label>
            <input
              type="text"
              id="foodPrice"
              name="foodPrice"
              value={formData.foodPrice}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="foodQuantity"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Food Quantity
            </label>
            <input
              type="text"
              id="foodQuantity"
              name="foodQuantity"
              value={formData.foodQuantity}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-400"
          >
            Submit
          </button>
        </form>

        {showSuccessMessage && (
          <div className="text-green-500 mt-4">Product added successfully!</div>
        )}

        <div className="mt-6">
          <Link to="/productList" className="text-blue-400 hover:text-blue-300">
            View Product List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
