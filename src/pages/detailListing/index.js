import { Breadcrumb, Button, Col, Divider, Input, Modal, Row, message } from 'antd'
import img_house from '../../assets/img/listingcard1.jpg'
import ShareModal from '../../components/shareModal';
import { useState } from 'react';
import LongText from '../../components/longText';

const DetailListing = () => {

    const text_1 =  'Merry Land Hotel Da Nang is just a 2-minute drive to Song Han Bridge and offers rooms in Da Nang City. The hotel has a year-round outdoor pool, sun terrace and an on-site bar. Guests can enjoy free WiFi access in all areas and free private parking on site.'
    const text_2 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    const text_3 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    const text_4 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    return (
        <div >
            <Divider />
            <div className='container mx-auto'>
                <Row className='items-center'>
                    <Col xs={24} xl={14}>
                        <Breadcrumb
                            separator=">"
                            items={[
                                {
                                    title: <a href="/">Home</a>,
                                },
                                {
                                    title: <a href="">Da Nag</a>,
                                },
                                {
                                    title: <a href="">Son Tra</a>,
                                },
                                {
                                    title: <p className='text-[#007882] font-normal'>Studio Son Tra</p>,
                                },
                            ]}
                        />
                    </Col>
                    <Col xs={24} xl={10}>
                        <div className='flex items-center justify-end gap-3'>
                            <button type="button" className='border rounded-lg border-black px-4 py-2 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62" /></svg>
                                Save
                            </button>
                            <ShareModal />
                        </div>
                    </Col>
                </Row>
                <div className='mt-5'>
                    <Row gutter={16}>
                        <Col xs={24} xl={12} className=''>
                            <img src={img_house} alt="img" className='object-cover rounded-tl-xl rounded-bl-xl h-[766px] w-full' />
                        </Col>
                        <Col xs={24} xl={12} className=''>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} xl={12}><img src={img_house} alt="img" className='object-cover w-full h-[375px] ' /></Col>
                                <Col xs={24} xl={12}><img src={img_house} alt="img" className='object-cover w-full h-[375px]' /></Col>
                                <Col xs={24} xl={12}><img src={img_house} alt="img" className='object-cover w-full h-[375px] ' /></Col>
                                <Col xs={24} xl={12}><img src={img_house} alt="img" className='object-cover w-full h-[375px]' /></Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
                <div className='mt-5'>
                    <Row >
                        <Col xs={24} xl={15} className=''>
                            <p className='flex text-base'>Apartment in <span className='underline ml-1'> Son Tra, Da Nang</span></p>
                            <p className='text-3xl font-medium mt-3'>Stylish Urban Retreat: West LDN!</p>
                            <div className='flex text-base mt-2'>
                                <p>• 2 bedrooms</p>
                                <p>• 2 beds  </p>
                                <p>• 2 bathroom     </p>
                                <p>• 2 guests  </p>
                                <p>• 711 ft²  </p>
                                <p>• 2. floor  </p>
                            </div>
                            <Divider />
                            <p className='text-2xl font-medium'>About This Place</p>
                            <LongText text_1={text_1} text_2={text_2} text_3={text_3} text_4={text_4}/>
                            <Divider />
                            <p className='text-2xl font-medium'>Overview</p>
                            <p className='text-xl font-medium'>Property Information</p>

                        </Col>
                        <Col xs={24} xl={9} className=''>

                        </Col>
                    </Row>
                </div>

            </div>
        </div>

    )
}

export default DetailListing
