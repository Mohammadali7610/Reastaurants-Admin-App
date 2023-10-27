import { useState, useMemo } from "react";

const ProductList = () => {
    const restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];
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
        <h2  className="font-semibold text-2xl flex justify-center">Product List</h2>
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
        <div className="product-cards">
          {filteredRestuarant.map((restaurant, Index) => (
            <div className="restaurant-card m-2" key={Index}>
              <h2>
                {Index + 1}. <strong>Restaurant Name:</strong>{" "}
                {restaurant.name}
              </h2>
              {restaurant.products && restaurant.products.map((product, productIndex) => (
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
                  <p><strong style={{marginRight:"4px"}}>Quantity:</strong>{product.foodQuantity} </p>
                  <p>
                    <strong>Price:</strong> Rs.{product.foodPrice}
                  </p>
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;
  