import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Joinus from "./pages/Joinus";
import Navbar from "./components/Navbar";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowToUse from "./pages/HowToUse";
import ComplaintForm from "./pages/ComplaintForm";


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <NavItems />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/howtouse" element={<HowToUse/>} />
        <Route path="/complain" element={<ComplaintForm/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
