import React from 'react'
import './index.scss'
const InventoryCard = ({data}) => {
  return (
    <div className='card-container'>
          <div className='flex justify-between items-center'>
              <div className='activity'>
                  <p className='dots'></p>
                  <p className='text-[#121212] font-semibold'>Available Instore</p>
              </div>
              <img src="./solar_menu-dots-bold.png" alt="" className='h-fit' />
          </div>
          <div className='image'>
          <img src={data?.image} alt="" />
          </div>
          <p className='text'>{data?.price}</p>
          <p className='text'>{data?.name}</p>
    </div>
  )
}

export default InventoryCard
