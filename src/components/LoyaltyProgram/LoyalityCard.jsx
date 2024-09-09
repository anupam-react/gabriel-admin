import React from 'react'

const LoyalityCard = ({image , text , key}) => {
  return (
    <div key={key}>
      <div className='relative'>
          <img src={image} alt="" className='w-[320px] h-[150px] rounded-lg'/>
          <div className='absolute top-[30px] left-[30px]'>
          <div className='bg-[#FFFF] w-[30px] h-[30px] rounded-full relative'>
            <img src="../img/mdi_tick-circle.png" alt="" className='absolute top-[5px] left-[5px] w-[20px] h-[20px]'/>
          </div>

          </div>
      </div>
          <p className='text-[#646464] font-semibold w-[320px]'>{text}</p>
    </div>
  )
}

export default LoyalityCard
