import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import SystemStores from "./pages/SystemStores/SystemStores";
import InstallmentPayment from "./pages/Instructions/InstallmentPayment";
import BuyingOldMachines from "./pages/Instructions/BuyingOldMachines";
import News from "./pages/News/News";
import ShoppingOnline from "./pages/Instructions/ShoppingOnline";
import ProductsDetail from "./pages/Products/ProductsDetail";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Cart from "./pages/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "products/hot", element: <Products /> },
        { path: "system-stores", element: <SystemStores /> },
        {
          path: "buying-old-machines",
          element: <BuyingOldMachines />,
        },
        {
          path: "installment-payment-instructions",
          element: <InstallmentPayment />,
        },
        {
          path: "shopping-guide-online",
          element: <ShoppingOnline />,
        },
        { path: "products/detail/:id", element: <ProductsDetail /> },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
