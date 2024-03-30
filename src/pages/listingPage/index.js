import React from 'react'
import CategoryList from '../../components/categoryList'
import CategoryFilter from '../../components/categoryFilter'

const ListingPage = () => {
  return (
<div className='
container mx-auto
'>
    <div className='flex flex-row justify-evenly items-center border-y-2 border-neutral-300 py-2' >
<CategoryList />
<CategoryFilter />

    </div>
</div>

    )
}

export default ListingPage