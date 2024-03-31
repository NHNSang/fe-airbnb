import React from 'react'

const HeadingCard = ({
  title,
  subtitle,
}) => {
  return (
    <div className='text-left' >
    <h3 className="font-medium text-black text-base line-clamp-1 " >
      {title}
      </h3>
    <p className='font-light text-neutral-500 text-base line-clamp-2' >
      {subtitle}
      </p>
    </div>
  )
}

export default HeadingCard;