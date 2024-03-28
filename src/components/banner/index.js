// lệnh tạo nhanh rafce
import React, { useState } from 'react';
import ImgBanner from '../../assets/img/Banner_homepage.jpg';
import { DatePicker, Input, Space } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import DropdownBanner from './dropdownBanner';
import { Link } from 'react-router-dom';
const Banner = () => {
  const { RangePicker } = DatePicker;
  const [numAdoult, setNumAdoult] = useState(0)
  useState(() => {
    setNumAdoult(numAdoult)
  }, [])
  return (
    <div className=''>
        <div className="mt-[7px] container mx-auto relative ]">
      <div className='relative'>
        <img src={ImgBanner} alt='img-banner' className='border rounded-3xl w-full h-[830px] object-fill mt' />
      </div>

      <div className='absolute text-center top-[22%] left-[25%] z-10 w-[49.3%]'>
        <p className='text-[55px] font-extrabold mb-4 text-white'>LET'S STAY LET'S ENJOY</p>
        <div className='flex justify-center gap-2 bg-white border border-black rounded-lg py-1'>
          <div className='w-[25%]'>
            <Input placeholder="Where are you go?" style={{height: '50px', fontSize: '16px' , border: 'none', backgroundColor:'#f3f4f5'}} prefix={<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSLocal0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path stroke="#fff" stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243" /><path fill="#fff" stroke="#fff" d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z" /><path fill="#000" stroke="#000" d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" /></g></mask></defs><path fill="black" d="M0 0h48v48H0z" mask="url(#ipSLocal0)" /></svg>} />
          </div>
          <RangePicker style={{height: '50px', fontSize: '16px' , border: 'none', backgroundColor:'#f3f4f5'}} />
          <DropdownBanner style={{height: '50px', fontSize: '16px'}}/>
          <div className='bg-[#007882] px-8 py-[9px] rounded-lg 	'>
            <Link to={''} >
              <p className='font-sans text-white dark:text-gray-200 duration-100 font-bold'>Search</p>
            </Link>
          </div>
        </div>
        <p className='text-[50px] font-medium mt-[9rem] text-white'>FIND YOUR APARTMENT FOR VACATION IN DA NANG</p>
      </div>
    </div>
    </div>
    
  )
}

export default Banner
