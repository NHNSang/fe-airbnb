import React from 'react'

const HeadingCard = ({
  title,
  subtitle,
}) => {
  return (
    <div className='text-left' >
    <h3 className="font-medium text-black text-base" >
      {title}
      </h3>
    <p className='font-light text-neutral-500 text-base' >
      {subtitle}
      </p>
    </div>
  )
}

export default HeadingCard;