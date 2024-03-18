import React, { useState } from 'react'
import './index.css'
import { DialogDefault } from '../common/DilogBox'
import BirthDayGift from './BirthDayGift'
const MenuCard = () => {
    const [openGift , setOpenGift] = useState(false)
  return (
    <div className='menu-container'>
       <button className="menuButton" onClick={()=> setOpenGift(true)}>Send BirthDay Gift</button>
       <button className="menuButton">Send Customized Offer</button>
       <button className="menuButton">Send Target Promotions</button>
       <button className="menuButton">Awared Free Bonus</button>
          <button className="menuButton">Send Special Event Invite</button>
          <DialogDefault open={openGift} handleOpen={setOpenGift}>
            <BirthDayGift  handleOpen={setOpenGift}/>
        </DialogDefault>
    </div>
  )
}

export default MenuCard
