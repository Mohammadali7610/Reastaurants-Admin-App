import { useState } from "react";
import { Link } from "react-router-dom";

const AddRestaurant = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    foodType: "",
    image:"",
    latitude: "",
    longitude: "",
    openingHours: "",
    closingHours:"",
    helpLineNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    discriptionAboutRestaurant: "",
  });

  const [restaurantsData, setRestaurantsData] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  console.log(restaurantsData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "address", "foodType", "city", "state", "country", "pincode", "discriptionAboutRestaurant"];
    const isEmptyField = requiredFields.some(field => !formData[field]);
  
    if (isEmptyField) {
      alert("Please fill out all required fields");
      return;
    }
    const newRestaurant = {
      name: formData.name,
      address: formData.address,
      foodType: formData.foodType,
      image:formData.image,
      latitude: formData.latitude,
      longitude: formData.longitude,
      openingHours: formData.openingHours,
      closingHours: formData.closingHours,
      helpLineNumber: formData.helpLineNumber,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      pincode: formData.pincode,
      discriptionAboutRestaurant: formData.discriptionAboutRestaurant,
    };

    const existingRestaurants =
      JSON.parse(localStorage.getItem("restaurants")) || [];
    const updatedRestaurants = [...existingRestaurants, newRestaurant];
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));

    setRestaurantsData(updatedRestaurants);
    setFormData({
      name: "",
      address: "",
      foodType: "",
      image:"",
      latitude: "",
      longitude: "",
      openingHours: "",
      closingHours:"",
      helpLineNumber: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      discriptionAboutRestaurant: "",

    });

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 30000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/2 m-4">
        <h2 className="text-3xl mb-6">Add Restaurant</h2>
        <form  onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Restaurant Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              required
            />
          </div>
            
         

          <div className="mb-4">
            <label
              htmlFor="latitude"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Latitude
            </label>
            <input
              type="Number"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

         

          <div className="mb-4">
            <label
              htmlFor="longitude"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Longitude
            </label>
            <input
              type="Number"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="openingHours"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Opening Hours
            </label>
            <input
              type="time"
              id="openingHours"
              name="openingHours"
              value={formData.openingHours}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="closingHours"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Closing Hours
            </label>
            <input
              type="time"
              id="closingHours"
              name="closingHours"
              value={formData.closingHours}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Image Url
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="helpLineNumber"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Help Line Number
            </label>
            <input
              type="Number"
              id="helpLineNumber"
              name="helpLineNumber"
              value={formData.helpLineNumber}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Pincode
            </label>
            <input
              type="Number"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Food Type
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="veg"
                  name="foodType"
                  value="Only veg"
                  checked={formData.foodType === "Only veg"}
                  onChange={handleInputChange}
                />
                <span className="text-sm">Veg</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="nonveg"
                  name="foodType"
                  value="Only nonveg"
                  checked={formData.foodType === "Only nonveg"}
                  onChange={handleInputChange}
                />
                <span className="text-sm">Nonveg</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="both"
                  name="foodType"
                  value="Veg/NonVeg"
                  checked={formData.foodType === "Veg/NonVeg"}
                  onChange={handleInputChange}
                />
                <span className="text-sm">Both (Veg & NonVeg)</span>
              </label>
            </div>
          

          <div className="mb-4">
            <label
              htmlFor="discriptionAboutRestaurant"
              className="block text-sm font-medium text-gray-400 mb-1"
            >
              Description
            </label>
            <textarea
              id="discriptionAboutRestaurant"
              name="discriptionAboutRestaurant"
              value={formData.discriptionAboutRestaurant}
              onChange={handleInputChange}
              className="p-2 w-full bg-gray-700 rounded-md"
              rows="4"
            />
          </div>
          </div>


          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-green-400"
          >
            Submit
          </button>
        </form>

        {showSuccessMessage && (
          <div className="text-green-500 mt-4">
            Form submitted successfully!
          </div>
        )}

        <div className="mt-6">
          <Link
            to="/restaurantList"
            className="text-blue-400 hover:text-blue-300"
          >
            View Restaurant List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
