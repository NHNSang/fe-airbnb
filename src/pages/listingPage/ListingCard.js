import React from "react";
import FavoriteButton from '../../components/favoriteButton/FavoriteButton'

const ListingCard = () => {
  return (
    <div className="  w-[270px] h-auto">
      <div className="relative">
      <img 
      className="rounded-lg"
      alt="list-card"
      src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />
      <div className='absolute right-10 top-1'><FavoriteButton /></div>
      
      </div>
      
      
      <p>Studio Apartment son Tra Da ...</p>
      <p>
        Luxury apartment for vacation near beach and mountain, easy to reach ...
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="flex flex-row items-center">
            <p>1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423Q5.154 7 6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577Q20 8.154 20 9v2.3q.488.252.744.754T21 13v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9zm-1 4h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center">
            <p>1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423Q5.154 7 6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577Q20 8.154 20 9v2.3q.488.252.744.754T21 13v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9zm-1 4h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center">
            <p>1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3 18v-5q0-.444.256-.946T4 11.3V9q0-.846.577-1.423Q5.154 7 6 7h4.5q.517 0 .883.213q.365.212.617.587q.252-.375.617-.587Q12.983 7 13.5 7H18q.846 0 1.423.577Q20 8.154 20 9v2.3q.488.252.744.754T21 13v5h-1v-2H4v2zm9.5-7H19V9q0-.425-.288-.712T18 8h-4.5q-.425 0-.712.288T12.5 9zM5 11h6.5V9q0-.425-.288-.712T10.5 8H6q-.425 0-.712.288T5 9zm-1 4h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row items-center">
          {/* rating  */}
          <p>5</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="#ddf335" d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.122 3.572l1.24 5.313L12 16.102z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
