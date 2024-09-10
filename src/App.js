import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Nav } from "./components/nav/nav";
import { ShopContextProvider } from "./context/shopContext";
import{RestaurantInformation} from "./components/Restaurant information"
import { Burger } from "./components/burger";
import { Pizza } from "./components/pizza";
import { Toast } from "./components/toast";
import { Appetizer } from "./components/appetizer";
import { Salad } from "./components/salad";
import { Drink } from "./components/drink";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurantInformation" element={<RestaurantInformation />}/>
            <Route path="/burger" element={<Burger/>} />
            <Route path="/pizza" element={<Pizza/>} />
            <Route path="/toast" element={<Toast/>} />
            <Route path="/salad" element={<Salad/>} />
            <Route path="/appetizer" element={<Appetizer/>} />
            <Route path="/drink" element={<Drink/>} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
