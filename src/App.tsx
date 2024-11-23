import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Preloader } from "./components/preloader"; // Corrected casing
import Home from "./pages/home"; // Ensure correct casing for file imports
import Product from "./pages/products"; // Ensure correct casing for file imports
import { Footer } from "./components/Footer";
import Sector from "./pages/sectors"; // Ensure correct casing for file imports
import { ScrollToTop } from "./components/ScrollToTop";
import Api from "./pages/api";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/sector" element={<Sector />} />
            <Route path="/api" element={<Api/>} />
             <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </Router>
  );
}

export default App;