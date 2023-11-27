import { useState, useMemo } from "react";

const ProductList = () => {
  const [restaurants, setRestaurants] = useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  const [search, setSearch] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteProduct = (index) => {
    setDeleteIndex(index);
    setShowConfirmationModal(true);
  };

  const confirmDelete = () => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants[deleteIndex].products.splice(deleteIndex, 1);
    setRestaurants(updatedRestaurants);
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
    setShowConfirmationModal(false);
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setShowConfirmationModal(false);
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
      <h2 className="font-semibold text-2xl flex justify-center">Product List</h2>
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
      <div className="product-cards">
        {filteredRestuarant.map((restaurant, restaurantIndex) => (
          <div className="restaurant-card m-2" key={restaurantIndex}>
            <h2>
              {restaurantIndex + 1}. <strong>Restaurant Name:</strong> {restaurant.name}
            </h2>
            {restaurant.products &&
              restaurant.products.map((product, productIndex) => (
                <div className="product-card m-2" key={productIndex}>
                  <h3>
                    <strong>Product Name:</strong> {product.foodName}
                  </h3>
                  <img
                    src={product.foodImage}
                    style={{ width: "200px" }}
                    alt={product.name}
                    className="product-image"
                  />
                  <p>
                    <strong style={{ marginRight: "4px" }}>Quantity:</strong>
                    {product.foodQuantity}{" "}
                  </p>
                  <p>
                    <strong>Price:</strong> Rs.{product.foodPrice}
                  </p>
                  <button
                    onClick={() => handleDeleteProduct(restaurantIndex, productIndex)}
                    className="text-red-500 hover:text-red-400 bg-gray-200 hover:bg-gray-400 p-2 mx-2 rounded-xl"
                    >
                    Delete Product
                  </button>
                  <hr />
                </div>
              ))}
          </div>
        ))}
      </div>
      {showConfirmationModal && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-white">Are you sure you want to delete this product?</p>
            <button
              onClick={confirmDelete}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 mr-4 rounded focus:outline-none focus:ring focus:border-gray-400"
            >
              Yes
            </button>
            <button
              onClick={cancelDelete}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 mr-4 rounded focus:outline-none focus:ring focus:border-gray-400"
            >
              No
            </button>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default ProductList;
