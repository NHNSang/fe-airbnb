import { Col, Row } from 'antd'
import React from 'react'
import ImgFindApart from '../../assets/img/findapartment.jpg'
import { Link } from 'react-router-dom'

const FindApart = () => {
  return (
    <div className='bg-[#007882] dark:bg-white mt-8'>
      <div className='container mx-auto py-10'>
        <Row>
          <Col xs={24} xl={12} className='flex justify-center'>
            <div className='w-[400px] mx-auto'>
              <img src={ImgFindApart} alt='find-apartment' className='w-full h-[480px] rounded-xl' />
            </div>
          </Col>
          <Col xs={24} xl={12}>
            <div className='text-center lg:text-left'>
              <h1 className='text-white dark:text-black text-[24px] md:text-[35px] lg:text-[50px] font-semibold mb-1	lg:mb-7 mt-5 lg:mt-0'>Find ideal apartment for vacation</h1>
              <p className='text-white dark:text-black text-[20px] md:text-[25px] lg:text-[30px] italic'>Free cost for commision</p>
              <p className='text-white dark:text-black text-[20px] md:text-[25px] lg:text-[30px] italic'>Safe payment</p>
              <p className='text-white dark:text-black text-[20px] md:text-[25px] lg:text-[30px] italic'>Find guest quickly</p>
              <p className='text-white  dark:text-black text-[18px] md:text-[22px] lg:text-[25px] italic mt-7'> Place not as promised? Tell us within 48 hours of moving in, and we'll help you.</p>
              <div className='flex text-white dark:text-black text-[20px] md:text-[25px] lg:text-[30px] gap-3 mt-7 font-medium	justify-center lg:justify-start'>
                <h3>Are you looking for room? </h3>
                <Link to={''}>
                  <p className='text-white dark:text-black underline'>Sign up</p>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FindApart
