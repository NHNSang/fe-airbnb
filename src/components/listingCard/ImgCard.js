import React from "react";
import FavoriteButton from "../favoriteButton/FavoriteButton";

import img1 from "../../assets/img/listingcard1.jpg";
import img2 from "../../assets/img/listingcard2.jpg";
import img3 from "../../assets/img/listingcard3.jpg";
import img4 from "../../assets/img/listingcard4.jpg";

import './style.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
const imgList = [
  {
    src: img1,
    alt: "img card 1",
  },
  {
    src: img2,
    alt: "img card 2",
  },
  {
    src: img3,
    alt: "img card 3",
  },
  {
    src: img4,
    alt: "img card 4",
  },
];

const ImgCard = ({ cardImg }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
        <button
          type="button"
          className='deleteprev'
          onClick={() => setCurrentSlide(currentSlide - 1)}
        >
          Prev
        </button>
      ),
      nextArrow: (
        <button
          type="button"
          style={{display:"none"}}
          className=''
          onClick={() => setCurrentSlide(currentSlide + 1)}
        >
          Next
        </button>
      ),
  };
  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };
  return (
    <div className="relative">
      <Slider {...settings} afterChange={handleAfterChange} >
        {imgList.map((item,index)=>{
            return(
                <div className="relative ascpect-ratio-16/9 w-[270px] h-[192px] " >
                    <img key={index} src={item.src} 
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                
                    />
                </div>
            )
        })}
      </Slider>

      {}

      <div className="absolute right-8 top-1">
        <FavoriteButton />
      </div>
    </div>
  );
};

export default ImgCard;
