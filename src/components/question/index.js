import { Collapse } from 'antd';
import React from 'react'
import style from './style.css'
import { SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const genExtra = () => (
    <SettingOutlined
        onClick={(event) => {
            event.stopPropagation();
        }}
    />
);
const items = [
    {
        key: '1',
        label: 'How can i do if i want to cancel my booking?',
        children:
            <>
                <Link to={''}>
                    <p className='text-black mb-3'>1. What is the cancellation policy?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>2. Are there any fees for cancelling a booking?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>3. How do I initiate the cancellation process?</p>
                </Link>
            </>,
        extra: genExtra(),
    },
    {
        key: '2',
        label: 'Do i need to pay down before check-in date?',
        children:
            <>
                <Link to={''}>
                    <p className='text-black mb-3'>1. What is the cancellation policy?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>2. Are there any fees for cancelling a booking?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>3. How do I initiate the cancellation process?</p>
                </Link>
            </>,
        extra: genExtra(),

    },
    {
        key: '3',
        label: 'How long can i update my reservation before check-in date?',
        children:
            <>
                <Link to={''}>
                    <p className='text-black mb-3'>1. What is the cancellation policy?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>2. Are there any fees for cancelling a booking?</p>
                </Link>
                <Link to={''}>
                    <p className='text-black mb-3'>3. How do I initiate the cancellation process?</p>
                </Link>
            </>,
        extra: genExtra(),

    },
];
const Question = () => {
    const onChange = (key) => {
        // console.log(key);
    };
    return (
        <div className='container mx-auto mt-8'>
            <div className='text-center'>
                <p className=' text-[40px] font-medium'>Frequent question and answered</p>
            </div>
            <div className='w-[40%] mx-auto mt-5'>
                <Collapse items={items} defaultActiveKey={['key']} onChange={onChange} className={style} />
            </div>
            <div className='flex justify-center text-black text-[20px] gap-3 mt-7 font-medium 	'>
                    <h3>Are you being some trouble? </h3>
                    <Link to={''}>
                        <p className='text-black underline'>Let’s Visit our support center</p>
                    </Link>
                    </div>
        </div>
    )
}

export default Question
