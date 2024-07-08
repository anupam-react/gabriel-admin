import React from 'react'

const LoyalityCard = ({image , text , key}) => {
  return (
    <div key={key}>
          <img src={image} alt="" />
          <p className='text-[#646464] font-semibold'>{text}</p>
    </div>
  )
}

export default LoyalityCard
