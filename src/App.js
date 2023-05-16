import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";
import { Payment } from "./pages/payment";
import { ProjectDisplay } from "./pages/projectDisplay"


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/project/:id" element={ <ProjectDisplay /> } />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
