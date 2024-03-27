import React from 'react'
import ImgCard1 from '../../assets/img/listingcard1.jpg'
import ImgCard2 from '../../assets/img/listingcard2.jpg'
import ImgCard3 from '../../assets/img/listingcard3.jpg'
import ImgCard4 from '../../assets/img/listingcard4.jpg'
import ImgCard5 from '../../assets/img/listingcard5.jpg'
import { HeartOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'

const listData = [
  {
    image: ImgCard1,
  },
  {
    image: ImgCard2,
  },
  {
    image: ImgCard3,
  },
  {
    image: ImgCard4,
  },
  {
    image: ImgCard5,
  },

]

const ListHotel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
  };
  return (
    <div className='container mx-auto mt-8'>
      <div className='text-center'>
        <p className=' text-[40px] font-medium'>Explore some feature our listings in Da Nang</p>
        <p className=' text-[20px] text-[#727171]'>Here are trust listing reviewed by tourists</p>
      </div>

      <Slider {...settings}>
        {listData.map((data, index) => {
          return (
            <div key={index} className='mt-5'>
              <div className='relative w-[350px]'>
                <div className='relative'>
                  <img src={data.image} alt={'img-card'} className='w-[100%] h-[220px] object-cover rounded-[15px]' />
                </div>
                <div className='absolute top-2 right-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="white"><path d="M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54" opacity="0.9" /><path d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8" /></g></svg>
                </div>
                <p className='text-lg text-black font-medium line-clamp-1 dark:text-white'>Studio Apartment My Khe, Son Tra, Da Nang</p>
                <p className='text-base	text-[#727171] line-clamp-2'>Luxury apartment for vacation near beach and mountain, easy to reach airport have air-condition</p>
                <div  >
                  <Row>
                    <Col xs={24} xl={18}>
                      <div className='flex  gap-3'>
                        <div className=' flex items-center gap-1 '>
                          <p className='text-xl font-bold text-[#727171]'>1</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 24 24"><path fill="gray" d="M19.25 11a2.75 2.75 0 0 1 2.745 2.582l.005.168v6.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-6.5a2.75 2.75 0 0 1 2.582-2.745L4.75 11zM6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75V10h-3l-.007-.117a1 1 0 0 0-.876-.876L16 9h-2a1 1 0 0 0-.993.883L13 10h-2l-.007-.117a1 1 0 0 0-.876-.876L10 9H8a1 1 0 0 0-.993.883L7 10H4V6.75a2.75 2.75 0 0 1 2.582-2.745z" /></svg>
                        </div>
                        <div className=' flex items-center gap-1 '>
                          <p className='text-xl font-bold text-[#727171]'>1</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 512 512"><path fill="gray" d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32C44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32zM256 352a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m0-128a32 32 0 1 0 0-64a32 32 0 1 0 0 64m64 64a32 32 0 1 0-64 0a32 32 0 1 0 64 0m32-32a32 32 0 1 0 0-64a32 32 0 1 0 0 64" /></svg>
                        </div>
                        <div className=' flex items-center gap-1 '>
                          <p className='text-xl font-bold text-[#727171]'>1</p>
                          <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 24 24"><path fill="gray" d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z" /></svg>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24} xl={6}>
                      <div className=' flex items-center justify-end gap-1 '>
                        <p className='text-xl font-bold text-[#727171]'>5</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 24 24"><path fill="gray" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" /></svg>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div>
                  <p className='text-lg text-[#727171]'>$<span className='font-bold'>300</span>/night</p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>

      <div className='mt-10 w-[8%] mx-auto text-center py-2 cursor-pointer border rounded-lg border-black dark:border-white shadow-xl'>
        <Link to={''}>Explore more</Link>
      </div>
    </div>
  )
}

export default ListHotel
