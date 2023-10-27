import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "../Features/Admin/Restuarant/AddProduct/AddProduct.Layout.jsx";
import ProductList from "../Features/Admin/Restuarant/ProductList/ProductList.Layout.jsx";
import AddRestaurant from "../Features/Admin/Restuarant/RestaurantForm/AddRestaurant.Layout.jsx";
import RestaurantList from "../Features/Admin/Restuarant/RestaurantList/RestaurantList.Layout.jsx";


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <AddRestaurant />
      </>
    ),
  },
  {
    path: '/restaurantList',
    element: (
      <>
        <RestaurantList />
      </>
    ),
  },
  {
    path: '/addproduct',
    element: (
      <>
        <AddProduct />
      </>
    ),
  },
  {
    path: '/productList',
    element: (
      <>
        <ProductList />
      </>
    ),
  },
]);


const Navigation = () => {
  return <RouterProvider router={myRouter} />;
};

export default Navigation;
