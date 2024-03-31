import React from "react";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ImgCard = ({ 
  src,
  alt
 }) => {
  return (
    <div className="relative">
      <div className="relative ascpect-ratio-16/9 w-[270px] h-[192px] " >
        <img src={src} alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="absolute right-8 top-1">
        <FavoriteButton />
      </div>
    </div>
  );
};

export default ImgCard;
