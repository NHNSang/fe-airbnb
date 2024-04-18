import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import ListingPage from "../pages/listingPage";
import DetailListing from "../pages/detailListing";
import ListingPageSearch from "../pages/listingPageSearch/listingPageSearch";

export default function User() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<ListingPage   />} />
      <Route path="/detail-listing" element={<DetailListing />} />
      <Route path="/listing-search" element={<ListingPageSearch />} />

      
    </Routes>
  );
};