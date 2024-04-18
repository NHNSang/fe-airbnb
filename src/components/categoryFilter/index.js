import React from 'react'
import Button from '../button'
import { useDevice } from '../../hook/useDevice';

const CategoryFilter = () => {
  const { isMobile } = useDevice();

  return (
    <>
      {isMobile ? <div className='flex justify-end items-center gap-1'>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light  dark:text-white'>
            Price
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6" /></svg>
        </button>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light dark:text-white'>
            Guests
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6" /></svg>
        </button>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light dark:text-white'>
            Filter
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3" /></svg>
        </button>
      </div> : <div className='flex justify-end items-center gap-3'>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light  dark:text-white'>
            Price
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6" /></svg>
        </button>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light dark:text-white'>
            Guests
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 9l6 6l6-6" /></svg>
        </button>
        <button className='border bg-white dark:bg-[#007882] flex justify-center p-2 items-center rounded-xl'>
          <p className='font-light dark:text-white'>
            Filter
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3" /></svg>
        </button>
      </div>}

    </>

  )
}

export default CategoryFilter