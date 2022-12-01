import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Home/LandingPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import FaqHeader from "../src/Components/FAQ/FaqHeader";
import Blog from "./Components/Blog/Blog";
import ProductHeader from "./Components/Product/ProductHeader";
import OrderService from "./Components/OrderService/OrderService";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<FaqHeader />} />
          <Route path="/product" element={<ProductHeader />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/orderservice" element={<OrderService />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
