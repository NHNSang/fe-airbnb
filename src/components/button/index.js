import React from 'react'
// import { Button } from 'antd'

const Button = ({
    onClick,
    children
}) => {
  return (
    <button
    className='flex flex-row gap-3 justify-center items-center text-center border-neutral-400 hover:border-neutral-700 transition cursor-pointer border-solid border-2 rounded-lg bg-white py-3 px-4'
    onClick={onClick}
    >{children}</button>
  )
}

export default Button