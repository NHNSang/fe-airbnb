import { Breadcrumb, Col, Row } from 'antd'
import React from 'react'
import seocategory from '../../assets/img/seocategory.jpg'

const Accommodation = () => {
    return (
        <div className='mt-5 px-2 md:px-0 lg:px-0'>
            {/*  */}
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: <a href="/"   >Home  </a>,
                    },
                    {
                        title: <a href="" >Da Nag</a>,
                    },
                    {
                        title: <a href="" >Son Tra</a>,
                    },
                    {
                        title: <p className='text-[#007882] dark:text-white font-normal'>Studio Son Tra</p>,
                    },
                ]}
            />
            {/*  */}
            <div className='mt-5 border border-black dark:border-white rounded-xl'>
                <Row>
                    <Col xs={24} xl={10}>
                        <div className='m-8'>
                            <img src={seocategory} alt='img-seocategory' className='w-full h-[200px] md:h-[400px]  lg:h-[700px] object-cover rounded-xl shadow-[0_0_10px_0_rgba(0,0,0,0.5)]' />
                        </div>
                    </Col>
                    <Col xs={24} xl={14}>
                        <div className='mt-8 px-4 lg:px-0'>
                            <h1 className='font-bold text-xl md:text-2xl lg:text-3xl dark:text-white'>Accommodation in Son Tra, Da Nang</h1>
                            <div className='mt-8'>
                                <p className='text-base md:text-lg lg:text-lg'>If you're looking to rent accommodation in Berlin, then you've come to the right place. Due to rising demand, houses for rent in Berlin remain the most searched ones on HousingAnywhere. You can easily find new rental homes in Berlin near you and find more information about their size, price, availability, services and amenities.</p>
                                <p className='font-bold text-lg mt-8'>What is the average rent in Son Tra, Da Nang?</p>
                                <p className='text-base md:text-lg lg:text-lg mt-3'>The average rent price in Berlin is 1,150 EUR (1,245 USD). You will find rental prices to range between 11,400 to 16,200 EUR (12,400 to 17,600 USD) per year.</p>
                                <p className='font-bold text-lg mt-8'>How much is house rent in Son Tra, Da Nang per month?</p>
                                <p className='text-base md:text-lg lg:text-lg mt-3'>The average house rent in Berlin is EUR 1150 per month. However, this is just the average, you will find rental prices to range from EUR 950 to EUR 1,350 per month.</p>
                                <p className='font-bold text-lg mt-8'>How to find an accommodation in Son Tra, Da Nang?</p>
                                <p className='text-base md:text-lg lg:text-lg mt-3'>If you are looking for accommodation in Berlin, then look online for accommodation rental sites like HousingAnywhere. It’s an easy and secure way of finding housing in Berlin.</p>
                            </div>
                            <p className='font-bold text-lg mt-8'>How to find an accommodation in Son Tra, Da Nang?</p>
                            <p className='text-base md:text-lg lg:text-lg mt-3'>If you are looking for accommodation in Berlin, then look online for accommodation rental sites like HousingAnywhere. It’s an easy and secure way of finding housing in Berlin.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Accommodation
