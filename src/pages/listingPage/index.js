import React from "react";
import CategoryList from "../../components/categoryList";
import CategoryFilter from "../../components/categoryFilter";
import CategoryInfo from "./CategoryInfo";

import SortButton from "./SortButton";
import './style.css'
import DisplayListing from "./DisplayListing";
import MapView from "./MapView";
import ListingList from "./ListingList";

const ListingPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center border-y-2 border-neutral-300 py-2">
        <CategoryList />
        <CategoryFilter />
      </div>
        <div className="flex flex-row justify-between items-center py-2">
          <CategoryInfo />
          <div className="flex flex-row justify-center items-center gap-8">
            <SortButton />
            <DisplayListing />
            <MapView />
          </div>
        </div>

        {/* rendering listing list */}

        <ListingList />
    </div>
  );
};

export default ListingPage;
