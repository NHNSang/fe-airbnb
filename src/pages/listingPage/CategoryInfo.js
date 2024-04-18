import React from 'react'
import { Link } from "react-router-dom";

const CategoryInfo = () => {
  return (
    <div>
      <p className='md:text-[15px] lg:md:text-[16px] text-center md:text-start lg:text-start mt-2 md:mt-0 lg:mt-0'>Save your favorites for later to easily get back to your search. 
       <Link href="/" className='font-bold underline mx-2'>Log In?</Link>
        </p>
      <p className='text-center md:text-start lg:text-start mt-2 md:mt-0 lg:mt-0'> <span className='font-bold'>456 co-working</span> places in <span className='font-bold'>Son Tra, Da Nang</span> </p>
    </div>
  )
}

export default CategoryInfo