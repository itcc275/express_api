import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Payment from "./components/Payment";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
