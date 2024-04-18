import { Col, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style.css'

const ExploreApart = () => {
    const { Search } = Input;
      const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className='container mx-auto mt-8'>
      <div className='text-center'>
        <p className=' text-[24px]  md:text-[35px] lg:text-[40px] font-medium'>Explore apartment by Top city</p>
        <p className=' text-[20px] text-[#727171] dark:text-white'>Here are trust listing reviewed by tourists</p>
      </div>
      <div className='w-[70%] mx-auto mt-8'>
        <Row>
            <Col xs={12} xl={6}>
                <Link to={''}><p className='text-black text-xl mb-2'>Đà Nẵng</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ho Chi Minh</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ha Noi</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Hạ Long</p></Link>
            </Col>
            <Col xs={12} xl={6}>
                <Link to={''}><p className='text-black text-xl mb-2'>Đà Nẵng</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ho Chi Minh</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ha Noi</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Hạ Long</p></Link>
            </Col>
            <Col xs={12} xl={6}>
                <Link to={''}><p className='text-black text-xl mb-2'>Đà Nẵng</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ho Chi Minh</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ha Noi</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Hạ Long</p></Link>
            </Col>
            <Col xs={12} xl={6}>
                <Link to={''}><p className='text-black text-xl mb-2'>Đà Nẵng</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ho Chi Minh</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Ha Noi</p></Link>
                <Link to={''}><p className='text-black text-xl mb-2'>Hạ Long</p></Link>
            </Col>
        </Row>
      </div>
      <div className='mt-8 text-center'>
        <p className='font-bold text-lg'>Check out other areas</p>
        <div className='w-[75%] md:w-[50%] lg:w-[25%] mx-auto mt-3'>
        <Search placeholder="Search for city, neighborhood" onSearch={onSearch} enterButton addonBg='black' className={`${Style} dark:border-black`} style={{borderColor: 'black'}}/>
        </div>
      </div>
    </div>
  )
}

export default ExploreApart
