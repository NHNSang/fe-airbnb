import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import ListingPage from "../pages/listingPage";
import DetailListing from "../pages/detailListing";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<ListingPage   />} />
      <Route path="/detail-listing" element={<DetailListing />} />

      
    </Routes>
  );
};