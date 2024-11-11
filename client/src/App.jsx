import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./component/auth/AuthLayout";
import AuthLogin from "./component/auth/login/AuthLogin";
import Registration from "./component/auth/registration/Registration";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/dashboard/Dashboard";
import AdminProducts from "./pages/admin-view/products/Products";
import AdminOrders from "./pages/admin-view/order/Orders";
import AdminFeatures from "./pages/admin-view/features/Features";
import NotFoundPage from "./pages/notFound";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import CheckOutPage from "./pages/shopping-view/checkoutPage";
import AccountPage from "./pages/shopping-view/accountPage";
import ShoppingLayout from "./components/shopping-view/Layout";


function App() {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path="/" element={<AuthLayout></AuthLayout>}>   </Route> */}
          <Route path="/auth" element={<AuthLayout></AuthLayout>}>
            <Route path="login" element={<AuthLogin></AuthLogin>}></Route>
            <Route
              path="register"
              element={<Registration></Registration>}
            ></Route>
          </Route>

          <Route path="/admin" element={<AdminLayout></AdminLayout>}>


            <Route
              path="dashboard"
              element={<AdminDashboard></AdminDashboard>}
            ></Route>
            <Route
              path="products"
              element={<AdminProducts></AdminProducts>}
            ></Route>
            <Route path="orders" element={<AdminOrders></AdminOrders>}></Route>
            <Route
              path="features"
              element={<AdminFeatures></AdminFeatures>}
            ></Route>



          </Route>


          <Route path="/shop"  element={<ShoppingLayout></ShoppingLayout>}>
          
       
          <Route
              path="home"
              element={<ShoppingHome></ShoppingHome>}
            ></Route>
          
          <Route
              path="listen"
              element={<ShoppingListing></ShoppingListing>}
            ></Route>
          
          <Route
              path="account"
              element={<AccountPage></AccountPage>}
            ></Route>
          
          <Route
              path="checkOutPage"
              element={<CheckOutPage></CheckOutPage>}
            ></Route>
          
          <Route
              path="*"
              element={<NotFoundPage></NotFoundPage>}
            ></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
