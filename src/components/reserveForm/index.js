import { DatePicker, Divider } from 'antd';
import React from 'react'
import DropdownBanner from '../searchInput/dropdown';
import { Link } from 'react-router-dom';

const ReserveForm = () => {
    const { RangePicker } = DatePicker;

    return (
        <div className=' border-[3px] shadow-inner border-gray-400 rounded-lg w-[70%] mx-auto text-center'>
            <p className='text-3xl font-medium my-5 '>$ 50usd / night</p>
            <div className='md:flex px-4 md:px-0 lg:px-0'>
            <div className='lg:w-[46%] lg: mx-auto lg:pl-4'>
                <RangePicker style={{ height: '50px', fontSize: '16px', backgroundColor: '#f3f4f5' }} />
            </div>
            <div className='lg:w-[56%] lg: mx-auto mt-3 md:mt-0 lg:mt-0'>
                <DropdownBanner style={{ height: '50px', fontSize: '16px' }} />
            </div>
            </div>
            
            <div className=' w-[80%] mx-auto'>
                <Divider />
                <div className='flex justify-between text-lg'>
                    <p>Pay upon booking</p>
                    <p>£7,067.63</p>
                </div>
                <p className='text-center text-lg underline mt-3'>See detail your bill</p>


                <button className='bg-[#007882] px-8 py-[9px] rounded-lg mt-3 mb-5'>
                    <Link to={''} >
                        <p className='font-sans text-white dark:text-gray-200 duration-100 font-bold'>Search</p>
                    </Link>
                </button>
            </div>


        </div>
    )
}

export default ReserveForm
