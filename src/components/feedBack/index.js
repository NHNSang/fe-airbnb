import { Rate } from 'antd'
import React from 'react'
import Person1 from '../../assets/img/feeback1.jpg';
import Person2 from '../../assets/img/feedback2.jpg';
import Person3 from '../../assets/img/feedback3.jpg';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './style.css'



const listData = [
  {
    image: Person1,
  },
  {
    image: Person2,
  },
  {
    image: Person3,
  },
]
const Feedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: true,
  };
  return (
    <div className='bg-[#007882] dark:bg-white mt-8'>
      <div className='container mx-auto py-10 text-center text-white dark:text-black w-[90%] md:w-[80%] lg:w-[60%]' >
        <Slider {...settings} className={style}>
          {listData.map((data, index) => {
            return (
              <div key={index}>
                <h1 className='text-[18px] lg:text-[25px] font-bold'>Lem apartment</h1>
                <p className='mt-2'>Moved to VietNam in June 2022</p>
                <h4 className='my-3 w-[80%] md:w-[70%] lg:w-[50%] mx-auto line-clamp-2 lg:line-clamp-4'>
                  “The filters and map were the most user-friendly we found on any site. Plus, the messaging and booking system were easy to navigate. Here was the only site we used consistently throughout our housing search.”
                </h4>
                <Rate allowHalf defaultValue={4.5} style={{ color: 'white' }} />
                <div className='flex justify-center gap-3 mt-5'>
                  <img src={data.image} alt='person-feedback' className='w-[60px] h-[60px] rounded-full object-cover' />
                  <img src={Person2} alt='person-feedback' className='w-[60px] h-[60px] rounded-full object-cover' />
                  <img src={Person3} alt='person-feedback' className='w-[60px] h-[60px] rounded-full object-cover' />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Feedback
