import ProductByCategory from "./components/ProductByCategory";
import CartPage from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/Signup', element: <Signup /> },
    { path: '/product/:pid', element: <Products /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/category/:cid', element: <ProductByCategory /> }
]