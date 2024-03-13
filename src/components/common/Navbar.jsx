import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
          <p className='text-2xl font-semibold' style={{ color: "#343C6A" }}>Welcome!</p>
          <div className='flex gap-8 mr-4'>
              <img src="./Ellipse 965.svg" alt="profile-image" className='rounded-full w-14 h-14' />
          </div>
    </div>
  )
}

export default Navbar
