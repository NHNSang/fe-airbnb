import { Col, Modal, Row, message } from 'antd';
import React, { useState } from 'react'
import img_house from '../../assets/img/listingcard1.jpg'
import { useDevice } from '../../hook/useDevice';

const ShareModal = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isMobile } = useDevice();


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Coppy success',
        });
    };
    return (
        <div>
            {contextHolder}
            {isMobile ? <button onClick={showModal} type="button" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1" /></svg>
            </button> : <button onClick={showModal} type="button" className='border rounded-lg border-black dark:border-white px-4 py-2 flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92M18 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1M6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m12 7.02c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1" /></svg>
                Share
            </button>}

            <Modal title="Share this property" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <div className='mb-5'>
                    <Row>
                        <Col  xs={24} sm={6} xl={6}>
                            <img src={img_house} alt="img" className='w-full md:w-[150px] lg:w-[150px] h-[350px] md:h-[100px] lg:h-[100px] object-cover rounded-lg' />
                        </Col>
                        <Col xs={24} sm={18}  xl={18}>
                            <div className='pl-0 md:pl-4 lg:pl-4 pt-4'>
                                <p className='font-medium'>Studio Son Tra, Da Nang</p>
                                <p>2 rooms, 1 bath</p>
                                <p className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z" /></svg>
                                    4.5
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xs={12} sm={12} xl={12}>
                        <div className='pr-2'>
                            <button onClick={success} className=' border rounded-lg border-black pl-4 py-2 flex items-center gap-2 w-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3-10H5V5h10z" /></svg>
                                Coppy Link
                            </button>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} xl={12}>
                        <div className="pl-2">
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=[https://www.airbnb.com.vn/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2024-04-01&monthly_length=3&monthly_end_date=2024-07-01&price_filter_input_type=0&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A8144]"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border rounded-lg  border-black pl-4 py-2 flex items-center gap-2 w-full"
                            >
                                <p className='text-black flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5z" /></g></svg>
                                    Face Book
                                </p>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Modal>

        </div>
    )
}

export default ShareModal
