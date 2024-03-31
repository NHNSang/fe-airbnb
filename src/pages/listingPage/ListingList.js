import React from 'react'
import ListingCard from '../../components/listingCard/ListingCard'
import CardImg from "../../assets/img/listingcard1.jpg";


const ListingList = () => {
  return (
    <ListingCard 
    cardImg={CardImg}
    title="title"
    subtitle="subtitle"
    />
  )
}

export default ListingList