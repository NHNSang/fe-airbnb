import { DatePicker, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownSearch from './dropdown'
import { useDevice } from '../../hook/useDevice'
import { Button, Modal } from 'antd';

const SearchInput = () => {
  const { RangePicker } = DatePicker;
  const { isMobile } = useDevice();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      {isMobile ?
        <>
          <div className='flex justify-center'>
            <button onClick={showModal} className='border rounded-[2rem] border-white px-4 py-1 bg-white text-black flex items-center w-[80%] shadow-2xl'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" /></svg>
              <div className='text-left ml-2 text-[15px]'>
                <p>Search your location</p>
                <p className='text-[13px]'>Date - Guest</p>
              </div>
            </button>
          </div>
          <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <h1 className='text-[20px] font-semibold '>Where are you go?</h1>
            <div className='w-[100%] mt-3'>
              <Input placeholder="Where are you go?" style={{ height: '50px', fontSize: '15px', border: 'none', backgroundColor: '#f3f4f5' }} prefix={<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 48 48"><defs><mask id="ipSLocal0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path stroke="#fff" stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243" /><path fill="#fff" stroke="#fff" d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z" /><path fill="#000" stroke="#000" d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" /></g></mask></defs><path fill="black" d="M0 0h48v48H0z" mask="url(#ipSLocal0)" /></svg>} />
            </div>
            <div className='mt-3'>
              <RangePicker style={{ height: '50px', fontSize: '16px', border: 'none', backgroundColor: '#f3f4f5' }} className='w-[100%]' />
            </div>
            <div className='mt-3'>
              <DropdownSearch style={{ height: '50px', fontSize: '16px' }} />
            </div>
            <div className='bg-[#007882] md:px-4 lg:px-8 py-[9px] rounded-lg w-[35%] mt-3 mx-auto'>
              <Link to={'/listing-search'} >
                <p className='font-sans text-white dark:text-gray-200 duration-100 font-bold text-center'>Search</p>
              </Link>
            </div>


          </Modal>
        </>
        :
        <> <div className='flex justify-center gap-2 bg-white border border-gray-400 rounded-lg py-1'>
          <div className='w-[25%]'>
            <Input placeholder="Where are you go?" style={{ height: '50px', fontSize: '16px', border: 'none', backgroundColor: '#f3f4f5' }} prefix={<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSLocal0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path stroke="#fff" stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243" /><path fill="#fff" stroke="#fff" d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z" /><path fill="#000" stroke="#000" d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" /></g></mask></defs><path fill="black" d="M0 0h48v48H0z" mask="url(#ipSLocal0)" /></svg>} />
          </div>
          <RangePicker style={{ height: '50px', fontSize: '16px', border: 'none', backgroundColor: '#f3f4f5' }} />
          <DropdownSearch style={{ height: '50px', fontSize: '16px' }} />
          <div className='bg-[#007882] md:px-4 lg:px-8 py-[9px] rounded-lg'>
            <Link to={'/listing-search'} >
              <p className='font-sans text-white dark:text-gray-200 duration-100 font-bold'>Search</p>
            </Link>
          </div>
        </div>
        </>
      }
    </>


  )
}

export default SearchInput
