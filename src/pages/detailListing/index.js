import { Breadcrumb, Col, DatePicker, Divider, Progress, Row } from 'antd'
import img_house from '../../assets/img/listingcard1.jpg'
import ShareModal from '../../components/shareModal';
import LongText from '../../components/longText';
import Person from '../../assets/img/feeback1.jpg';
import ReserveForm from '../../components/reserveForm';
import './style.css'
import ExploreApart from '../../components/exploreApart';
import ListHotel from '../../components/listHotel';
import ReviewGuest from '../../components/reviewGuest';

const DetailListing = () => {

    const text_1 = 'Merry Land Hotel Da Nang is just a 2-minute drive to Song Han Bridge and offers rooms in Da Nang City. The hotel has a year-round outdoor pool, sun terrace and an on-site bar. Guests can enjoy free WiFi access in all areas and free private parking on site.'
    const text_2 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    const text_3 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    const text_4 = 'Every room at this hotel is air conditioned and features a flat-screen TV. You will find a kettle in the room. Every room is equipped with a private bathroom fitted with a bidet. For your comfort, you will find slippers and free toiletries.'
    const { RangePicker } = DatePicker;

    return (
        <div >
            <Divider />
            <div className='container mx-auto'>
                <Row className='items-center'>
                    <Col xs={24} xl={14} >
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
                    </Col>
                    <Col xs={24} xl={10}>
                        <div className='flex items-center justify-end gap-3'>
                            <button type="button" className='border rounded-lg border-black dark:border-white px-4 py-2 flex items-center gap-2'>
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
                    {/* left */}
                    <Row >
                        <Col xs={24} xl={15} className=''>
                            <p className='flex text-xl'>Apartment in <span className='underline ml-1'> Son Tra, Da Nang</span></p>
                            <p className='text-3xl font-medium mt-3'>Stylish Urban Retreat: West LDN!</p>
                            <div className='flex text-lg mt-2'>
                                <p>• 2 bedrooms</p>
                                <p>• 2 beds  </p>
                                <p>• 2 bathroom     </p>
                                <p>• 2 guests  </p>
                                <p>• 711 ft²  </p>
                                <p>• 2. floor  </p>
                            </div>
                            <Divider />
                            <p className='text-2xl font-medium mb-3'>About This Place</p>
                            <LongText text_1={text_1} text_2={text_2} text_3={text_3} text_4={text_4} />
                            <Divider />
                            <p className='text-2xl font-medium'>Overview</p>
                            <p className='text-lg mt-2'>Property Information</p>
                            <Row className='mt-5' >
                                <Col xs={24} xl={6}>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1408 1792"><path fill="currentColor" d="M1344 0q26 0 45 19t19 45v1664q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0zM512 288v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m0 256v64q0 14 9 23t23 9h64q14 0 23-9t9-23v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23m-128 320v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m512 1280v-192q0-14-9-23t-23-9H544q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m0-512v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m256 1024v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23m0-256v-64q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v64q0 14 9 23t23 9h64q14 0 23-9t9-23" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>2 floor</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><defs><mask id="ipTElevator0"><g fill="none"><path fill="#555" d="M42 41V7H6v34z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 7v34m0-34H4h2v34M42 7h2m-2 34h2m-2 0H6m0 0H4M24 7v34m9-21v8m-3-5l3-3l3 3m-21 5v-8" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 25l3 3l3-3" /></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTElevator0)" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>No elevator</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 4h10a2 2 0 0 1 2 2v10m-.582 3.41A1.99 1.99 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.056.59-1.418" /><path d="M9 16V9m3-1h1a2 2 0 0 1 1.817 2.836M12 12H9M3 3l18 18" /></g></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>No parking</p>
                                    </div>
                                </Col>
                                <Col xs={24} xl={6}>
                                    {/*  */}
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.53 2.22a.75.75 0 0 0-1.06 0L7.22 4.47a.75.75 0 0 0 1.06 1.06l.97-.97v2.69a.75.75 0 0 0 1.5 0V4.56l.97.97a.75.75 0 1 0 1.06-1.06zM2.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h2.69a.75.75 0 0 0 0-1.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06zm8.31 8.31l2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97v-2.69a.75.75 0 0 0-1.5 0v2.69l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0m5-10.56l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.69a.75.75 0 0 1 0-1.5h2.69l-.97-.97a.75.75 0 0 1 1.06-1.06" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>711 ft²</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="currentColor" d="M20.373 19.85c0 4.08-3.318 7.397-7.398 7.397S5.577 23.93 5.577 19.85a7.39 7.39 0 0 1 3.073-5.997l-.25-2.21c-2.876 1.61-4.826 4.684-4.826 8.207c0 5.184 4.217 9.4 9.4 9.4c4.396 0 8.094-3.03 9.118-7.11l-1.722-2.41zM11.768 6.534a2.392 2.392 0 1 0 0-4.784a2.392 2.392 0 0 0 0 4.784m15.42 16.143l-5.367-7.505c-.28-.393-.748-.58-1.225-.538c-.035-.003-.07-.006-.106-.006h-6.133l-.152-1.335h4.557a.96.96 0 0 0 0-1.918h-4.776l-.25-2.192a2.335 2.335 0 1 0-4.641.527L9.8 15.9a2.331 2.331 0 0 0 2.33 2.07l.013.002h8.023l4.603 6.436c.438.615 1.337.727 2.006.248c.666-.478.852-1.364.412-1.98z" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>711 ft²</p>
                                    </div>
                                </Col>
                            </Row>
                            <p className='text-xl mt-5'>Rooms & Sleeping Arrangements</p>
                            <Row gutter={16} className='mt-5'>
                                <Col xs={24} xl={5} >
                                    <div className='flex justify-around items-center border border-gray-400 rounded-lg p-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2h6zm-8 0c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v2h6zm8 4H5c-.55 0-1 .45-1 1v2h16v-2c0-.55-.45-1-1-1" opacity="0.3" /><path fill="currentColor" d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M13 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2h-6zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5zm15 7H4v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z" /></svg>
                                        <div>
                                            <p className='text-lg font-medium'>Bedroom 1</p>
                                            <p className='text-lg'>1 King bed</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} xl={5} >
                                    <div className='flex justify-around items-center border border-gray-400 rounded-lg p-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 14v1c0 1.91-1.07 3.57-2.65 4.41L19 22h-2l-.5-2h-9L7 22H5l.65-2.59A4.987 4.987 0 0 1 3 15v-1H2v-2h18V5a1 1 0 0 0-1-1c-.5 0-.88.34-1 .79c.63.54 1 1.34 1 2.21h-6a3 3 0 0 1 3-3h.17c.41-1.16 1.52-2 2.83-2a3 3 0 0 1 3 3v9zm-2 0H5v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" /></svg>
                                        <div>
                                            <p className='text-lg font-medium'>Bathroom</p>
                                            <p className='text-lg'>shower</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={24} xl={5} >
                                    <div className='flex justify-around items-center border border-gray-400 rounded-lg p-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10V7c0-1.66-1.34-3-3-3s-3 1.34-3 3h2c0-.55.45-1 1-1s1 .45 1 1v3H8c1.1 0 2-.9 2-2V4H4v4c0 1.1.9 2 2 2H2v2h2v8h16v-8h2v-2zm-5 8h-2v-6h2z" /></svg>
                                        <div>
                                            <p className='text-lg font-medium'>Kitchen area</p>
                                            <p className='text-lg'>Full funiture</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Divider />
                            <p className='text-2xl font-medium'>Amenities</p>
                            <Row className='mt-5' >
                                <Col xs={24} xl={6}>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2zm0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c2.03 0 3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>wifi / Internet</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><path d="M36 18H4v8h32z" /><path d="M36 12v20a4 4 0 0 1-4 4H12m0 0H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4z" /></g></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Towels and sheets</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Fridge</p>
                                    </div>
                                </Col>
                                <Col xs={24} xl={6}>
                                    {/*  */}
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14h2l3 3H9zM4 4h1V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2v1h-3v-1H7v1H4v-1a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m14 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6-1H4v4h16zM4 19h16v-7H4zM6 7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 7h2l3 3h-2z" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Stove</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 28 28"><path fill="currentColor" d="M4.754 4a2.75 2.75 0 0 0-2.75 2.75v13.5A3.75 3.75 0 0 0 5.754 24h4.496A3.75 3.75 0 0 0 14 20.25V10.5h10.5v12.75a.75.75 0 0 0 1.5 0V6.75A2.75 2.75 0 0 0 23.25 4zm-1.25 6.5H12.5v9.75a2.25 2.25 0 0 1-2.25 2.25H5.754a2.25 2.25 0 0 1-2.25-2.25zm0-1.5V6.75c0-.69.56-1.25 1.25-1.25H23.25c.69 0 1.25.56 1.25 1.25V9zm2.746 4a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5z" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Working desk</p>
                                    </div>
                                    {/*  */}
                                    <div className='flex mt-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M73 41v78h110V41zm128 0v78h238V41zm199 23a16 16 0 0 1 16 16a16 16 0 0 1-16 16a16 16 0 0 1-16-16a16 16 0 0 1 16-16m-176 7h48v18h-48zm80 0h48v18h-48zM73 137v350h366V137zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150s-150-67.3-150-150s67.3-150 150-150m0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51a94.02 94.02 0 0 1-94-94a94.02 94.02 0 0 1 94-94a94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69m-6.9 62c-50.1 1.1-76.9 51-62 93.9c-.7-37.8 30.1-78 62-93.9m130.6 23.9l-32 25.6A94.02 94.02 0 0 1 350 317a94.02 94.02 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Washing machine</p>
                                    </div>
                                </Col>
                                <Col xs={24} xl={6}>
                                    {/*  */}
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 8467 8467"><path fill="currentColor" d="M3314 7170c-26-42-26-47 18-146c107-237 96-480-32-755c-125-267-150-500-81-745c62-223 148-312 226-235c38 40 37 50-39 259a838 838 0 0 0 62 643c150 299 159 647 25 920c-40 78-52 91-98 96c-41 4-60-4-80-38Zm855 17c-38-38-30-77 20-200a707 707 0 0 0 50-260c10-173-6-245-103-467c-90-206-110-292-108-472c0-230 90-501 172-522c60-15 110 18 110 70c0 24-20 93-45 153c-40 98-45 129-45 307c0 190 2 204 55 322c140 316 140 312 147 514c10 215-16 344-92 485c-37 70-53 85-96 90c-30 3-60-5-70-20Zm840-2c-29-30-20-76 40-240a669 669 0 0 0 42-256c0-158-19-235-103-422a1844 1844 0 0 1-90-239a1113 1113 0 0 1 1-470c28-114 96-266 128-287a88 88 0 0 1 120 30c26 40 25 47-27 177a816 816 0 0 0 32 702a1000 1000 0 0 1 122 500a810 810 0 0 1-43 310c-53 161-95 220-158 220c-26 0-56-10-67-25ZM50 4746a181 181 0 0 1-42-70a64400 64400 0 0 1-4-1518l4-1480l55-110a544 544 0 0 1 295-278c90-33 110-33 3875-33c3766 0 3786 0 3876 33a550 550 0 0 1 295 277l54 110l5 1481c3 814 0 1497-4 1518a181 181 0 0 1-42 70c-33 33-73 33-4184 33c-4110 0-4150-6-4183-39Zm366-633c5-381 8-404 45-480a355 355 0 0 1 120-132l78-53h7160l77 53a360 360 0 0 1 116 133c37 75 40 98 44 480l6 400h130V3134c0-1490 2-1445-87-1526l-40-38l-10 115c-17 176-86 285-217 340c-54 23-443 26-3600 26c-3158 5-3546 4-3602-19c-130-54-200-163-214-339l-10-114l-40 38c-90 80-88 37-88 1525v1380h130Zm3354-877c-58-29-65-114-13-150c32-23 101-27 476-27c495 0 520 5 510 105c-9 87-40 93-510 93c-306 0-433-6-463-20Zm3200-35c-30-46-14-96 43-126c75-40 156 85 94 146c-34 35-109 24-138-20Zm431 3c-53-80 36-173 117-120c43 28 54 103 20 137s-110 24-137-17m454 1236v-74H612v148h7243Zm0-347v-91H612v182h7243Zm0-327c0-43-43-100-94-126c-26-13-989-19-3528-19s-3500 6-3527 19c-50 26-93 83-94 126v37h7243Zm-50-1946c45-45 50-57 50-173v-127H611v126c0 116 3 128 48 173l50 49h7044Z" /></svg>
                                        <p className='text-lg pt-[2px] pl-[5px]'>Air conditioned</p>
                                    </div>

                                </Col>
                            </Row>
                            <Divider />
                            <p className='text-2xl font-medium mb-3'>Availability calendar</p>
                            <RangePicker size='large' />
                            <Divider />
                            <p className='text-2xl font-medium mb-3'>Location</p>
                            <p className='text-lg mt-2 flex'><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44s15-12 15-25c0-8.284-6.716-15-15-15c-8.284 0-15 6.716-15 15c0 13 15 25 15 25Z" /><path d="M24 25a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" /></g></svg> <span className='ml-2 underline'>Son tra, Da Nang</span></p>
                            <div className='mt-3'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1189.3859948653621!2d108.24168406962242!3d16.06593758776486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142171a9709735f%3A0x3a58c2a4eeb2a8a!2sLem's%20Apartment%20%26%20Coffee!5e1!3m2!1svi!2s!4v1711787647186!5m2!1svi!2s" width="100%" height={450} style={{ border: '20px', borderRadius: '10px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                            <Divider />
                            <p className='text-2xl font-medium mb-3'>Infomation about host</p>
                            <Row gutter={16} className='items-center'>
                                <Col xs={24} xl={5} >
                                    <div className='flex justify-center'>
                                        <img src={Person} alt='person' className='rounded-full w-[80%]' />
                                    </div>
                                </Col>
                                <Col xs={24} xl={8} >
                                    <p className='text-lg font-medium'>Start date: <span className=' font-normal'> since nov 12 2024</span></p>
                                    <p className='text-lg font-medium mt-3'>Number of listings:  <span className=' font-normal'> 10</span></p>
                                    <p className='text-lg font-medium mt-3'>Response rate: <span className=' font-normal'> good</span></p>
                                </Col>
                                <Col xs={24} xl={8} >
                                    <p className='text-lg font-medium'>Level:  <span className=' font-normal'>Professional host</span></p>
                                    <p className='text-lg font-medium mt-3'>Review from guests:<span className=' font-normal'> 4.96</span></p>
                                    <p className='text-lg font-medium mt-3'>Languages:  <span className=' font-normal'>English</span></p>
                                </Col>

                            </Row>



                        </Col>
                        {/* right */}
                        <Col xs={24} xl={9} className=''>
                            <ReserveForm />
                        </Col>
                    </Row>
                </div>
                <Divider />
                <p className='text-2xl font-medium mb-3'>Reviews from guests</p>
                <div className='w-[60%] mx-auto'>
                    <Row>
                        <Col xs={24} xl={8}>
                            <div className='mt-[80px]'>
                                <Progress type="circle" percent={60} format={() => '4.2 \n reviews'} strokeColor="#007882" />
                            </div>
                        </Col>
                        <Col xs={24} xl={16}>
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium flex items-center'>5 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f4e543" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" /></svg></p>
                                <p className='text-lg font-medium'>(105 reviews)</p>
                            </div>
                            <Progress percent={70} strokeColor="#007882" showInfo={false} />
                            {/*  */}
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium flex items-center'>4 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f4e543" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" /></svg></p>
                                <p className='text-lg font-medium'>(105 reviews)</p>
                            </div>
                            <Progress percent={70} strokeColor="#007882" showInfo={false} />
                            {/*  */}
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium flex items-center'>3 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f4e543" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" /></svg></p>
                                <p className='text-lg font-medium'>(105 reviews)</p>
                            </div>
                            <Progress percent={50} strokeColor="#007882" showInfo={false} />
                            {/*  */}
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium flex items-center'>2 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f4e543" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" /></svg></p>
                                <p className='text-lg font-medium'>(105 reviews)</p>
                            </div>
                            <Progress percent={80} strokeColor="#007882" showInfo={false} />
                            {/*  */}
                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-medium flex items-center'>1 <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f4e543" d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z" /></svg></p>
                                <p className='text-lg font-medium'>(105 reviews)</p>
                            </div>
                            <Progress percent={30} strokeColor="#007882" showInfo={false} />
                            {/*  */}
                        </Col>
                    </Row>

                </div>
                <Divider />
                <ReviewGuest/>
                <Divider />
                <ListHotel/>

                


            </div>
        </div>

    )
}

export default DetailListing
