import { MenuOutlined, MinusOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Style from './style.css'




const DropdownSearch = () => {
    const [visible, setVisible] = useState(false);
    const [numAdoult, setNumAdoult] = useState(0)
    const [numChildren, setNumChildren] = useState(0)
    const [numBaby, setNumBaby] = useState(0)
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        setNumAdoult(numAdoult);
        setNumChildren(numChildren);
        setNumBaby(numBaby);
    }, [numAdoult, numChildren, numBaby])

    const handleDropdownVisibleChange = (flag) => {
        setVisible(flag);
    };

    const handleAddMoreClick = () => {
        setShowButton(true);
        setVisible(true);
    };
    const items = [
        {
            key: '1',
            label: (
                <Row>
                    <Col xs={24} xl={16}>
                        <div className='text-start'>
                            <p className='font-bold text-lg'>Người lớn</p>
                            <p>Từ 13 tuổi trở lên</p>
                        </div>
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className='flex items-center gap-3 pt-3'>
                            <button onClick={() => {
                                if (numAdoult > 0) {
                                    setNumAdoult(numAdoult - 1);
                                }
                            }}
                                className='border rounded-full border-black w-6 h-6'>
                                <MinusOutlined />
                            </button>
                            <p className='text-xl'>{numAdoult}</p>
                            <button onClick={() => { setNumAdoult(numAdoult + 1) }} className='border rounded-full border-black w-6 h-6'>
                                <PlusOutlined />
                            </button>
                        </div>
                    </Col>
                </Row>
            ),
        },
        {
            key: '2',
            label: (
                <Row >
                    <Col xs={24} xl={16}>
                        <div className='text-start'>
                            <p className='font-bold text-lg'>Trẻ em</p>
                            <p>Độ tuổi 2 – 12</p>
                        </div>
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className='flex items-center gap-3 pt-3'>
                            <button onClick={() => {
                                if (numChildren > 0) {
                                    setNumChildren(numChildren - 1);
                                }
                            }}
                                className='border rounded-full border-black w-6 h-6'>
                                <MinusOutlined />
                            </button>
                            <p className='text-xl'>{numChildren}</p>
                            <button onClick={() => { setNumChildren(numChildren + 1) }} className='border rounded-full border-black w-6 h-6'>
                                <PlusOutlined />
                            </button>
                        </div>
                    </Col>
                </Row>
            ),
        },
        {
            key: '3',
            label: (
                <Row >
                    <Col xs={24} xl={16}>
                        <div className='text-start'>
                            <p className='font-bold text-lg'>Em bé</p>
                            <p>Dưới 2 tuổi</p>
                        </div>
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className='flex items-center gap-3 pt-3'>
                            <button onClick={() => {
                                if (numBaby > 0) {
                                    setNumBaby(numBaby - 1);
                                }
                            }}
                                className='border rounded-full border-black w-6 h-6'>
                                <MinusOutlined />
                            </button>
                            <p className='text-xl'>{numBaby}</p>
                            <button onClick={() => { setNumBaby(numBaby + 1) }} className='border rounded-full border-black w-6 h-6'>
                                <PlusOutlined />
                            </button>
                        </div>
                    </Col>
                </Row>
            ),
        },

    ];
    return (
        <div>
            <Dropdown className={Style} menu={{ items }} placement="bottomRight" trigger={['click']} visible={visible}
                onVisibleChange={handleDropdownVisibleChange}>
                {showButton ? (
                    <button onClick={handleAddMoreClick} className='bg-[#f3f4f5] h-[50px] text-[15px] rounded-md px-3 w-full md:lg:w-[180px] lg:w-[180px]'>
                        <p className='line-clamp-1'>{numAdoult} adult, {numChildren} Children, {numBaby} baby</p>
                    </button>
                ) : (
                    <button onClick={handleAddMoreClick} className='bg-[#f3f4f5] h-[50px] text-[#d9d9d9] text-[15px] rounded-md px-3 w-full md:lg:w-[133px] lg:w-[133px]'>Thêm khách</button>
                )}
            </Dropdown>
        </div>
    )
}

export default DropdownSearch
