import React from 'react'
import ListingCard from '../../components/listingCard/ListingCard'


const ListingList = ({
  src,
  alt,
  title,
  subtitle,
  numberOfRoom,
  numberofGuest,
  numberOfBath,
  starOfListing,
  priceOfRoom
}) => {
  return (
    
      
      <ListingCard 
      src={src}
      alt={alt}
      title={title}
      subtitle={subtitle}
      numberOfRoom={numberOfRoom}
      numberofGuest={numberofGuest}
      numberOfBath={numberOfBath}
      starOfListing={starOfListing}
      priceOfRoom={priceOfRoom}
      
      />
    
  )
}

export default ListingList