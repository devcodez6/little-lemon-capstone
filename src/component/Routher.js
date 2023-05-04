import { Routes, Route } from "react-router-dom";
import Homepage from "./component/HomePage";
import About from "./component/About";
import Reservation from "./pages/BookingPage";
import Order from "./component/Order";
import Login from "./component/Login";
import Nav from "./component/Nav";
sss
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservations" element={<Reservation />} />

      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />

      <Route path="Nav" element={<Nav />} />
    </Routes>
  );
}