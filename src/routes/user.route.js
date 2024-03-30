import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import ListingPage from "../pages/listingPage";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<ListingPage   />} />

      
      
    </Routes>
  );
};