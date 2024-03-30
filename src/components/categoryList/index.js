import React from 'react'

const categoryData = [
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"/></svg>,
        title: "forest"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M24 6.5c-.329 0-.659.07-.937.245C21.5 7.733 21.5 9.08 21.5 10v.5H17m-8 3h15m-7.5 0V24m-4.5-.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-8v-.25l1.922-7.495A3 3 0 0 1 6.328 6.5H7.5l1.447 2.894a2 2 0 0 0 1.79 1.106H15m-7.65-6s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C9.246 3.5 7.65 4.5 7.65 4.5z"/></svg>,
        title: "Co-working"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.5v3m2-13l-8.5 13h13L5 .5"/></svg>,
        title: "Camping"
    },
    {
       src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05"><circle cx="4" cy="4" r="2"/><path d="m14 5l3-3l3 3m-6 5l3-3l3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8l5 8"/></g></svg>,
        title: "Tree house"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05"><path d="M17.553 16.75a7.5 7.5 0 0 0-10.606 0M18 3.804A6 6 0 0 0 9.804 6l10.392 6A6 6 0 0 0 18 3.804"/><path d="M16.732 10C18.39 7.13 18.957 4.356 18 3.804C17.043 3.252 14.925 5.13 13.268 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 0 1 4 19a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 1 .25"/></g></svg>,
        title: "Beach"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="currentColor" d="m14 6l-3.75 5l2.85 3.8l-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22z"/></svg>,
        title: "forest"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M24 6.5c-.329 0-.659.07-.937.245C21.5 7.733 21.5 9.08 21.5 10v.5H17m-8 3h15m-7.5 0V24m-4.5-.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-8v-.25l1.922-7.495A3 3 0 0 1 6.328 6.5H7.5l1.447 2.894a2 2 0 0 0 1.79 1.106H15m-7.65-6s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C9.246 3.5 7.65 4.5 7.65 4.5z"/></svg>,
        title: "Co-working"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 10.5v3m2-13l-8.5 13h13L5 .5"/></svg>,
        title: "Camping"
    },
    {
       src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05"><circle cx="4" cy="4" r="2"/><path d="m14 5l3-3l3 3m-6 5l3-3l3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8l5 8"/></g></svg>,
        title: "Tree house"
    },
    {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05"><path d="M17.553 16.75a7.5 7.5 0 0 0-10.606 0M18 3.804A6 6 0 0 0 9.804 6l10.392 6A6 6 0 0 0 18 3.804"/><path d="M16.732 10C18.39 7.13 18.957 4.356 18 3.804C17.043 3.252 14.925 5.13 13.268 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 0 1 4 19a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 1 .25"/></g></svg>,
        title: "Beach"
    },
]

const CategoryList = () => {
  return (
    <div className='flex flex-row justify-start items-center gap-8'>
        {categoryData.map((cate,index) => {
            return(
                <div key={index}
                className='flex flex-col justify-center items-center text-neutral-500 hover:text-neutral-800 hover:scale-110  cursor-pointer transition duration-300'
                >
                    <div>
                        {cate.src}
                    </div>
                    <p className='text-sm'>{cate.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryList