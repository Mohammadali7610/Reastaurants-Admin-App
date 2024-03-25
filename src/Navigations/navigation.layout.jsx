import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddProduct from "../Features/Admin/Restuarant/AddProduct/AddProduct.Layout.jsx";
import ProductList from "../Features/Admin/Restuarant/ProductList/ProductList.Layout.jsx";
import AddRestaurant from "../Features/Admin/Restuarant/AddRestaurant/AddRestaurant.Layout.jsx";
import RestaurantList from "../Features/Admin/Restuarant/RestaurantList/RestaurantList.Layout.jsx";
import LogInPageForAdmin from "../Features/Admin/Restuarant/LogInPageForAdmin/LogInPageForAdmin.Layout.jsx";
import AdminButton from "../Features/Admin/Restuarant/AdminButtonPage/AdminButtonPage.Layout.jsx";
import SignUpPage from "../Features/Admin/Restuarant/SignUpPageForAdmin/SignUpPageForAdmin.Layout.jsx";


const myRouter = createBrowserRouter([
  {
    path:'/',
    element:(
    <>
      <AdminButton/>
    </>
    ),
  },
  {
    path:'/loginpage',
    element:(
    <>
      <LogInPageForAdmin/>
    </>
    ),
  },
  {
    path:'/signupPage',
    element:(
    <>
      <SignUpPage/>
    </>
    ),
  },
  {
    path: '/addrestaurant',
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
    path: '/addproduct/:id',
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
