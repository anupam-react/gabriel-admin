import React from 'react'
import './index.scss'
const TransactionDetails = ({handleOpen}) => {
  return (
     <div className='details-container'>
     <p className="details-title">Transaction details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
          <img src="" alt="" style={{height:"100px"}} />
          <p>Your payment was successfully completed</p>
          <p style={{color:"#000000" , fontWeight:600}}>Reference Number : 123456789</p>
          <p>Mon, 19 Dec 2023 at 7:30 PM</p>
      <div className='details-info'>
        <div className='info2'>
          <p>To</p>
          <p>Dunkins  store London</p>
        </div>
        <div className='info2'>
          <p>To UPI ID</p>
          <p>Dunkins@1234</p>
        </div>
        <div className='info2'>
          <p>Amount</p>
          <p>£15</p>
        </div>
        <div className='info2'>
          <p>From Account</p>
          <p>abcdef</p>
        </div>
        <div className='info2'>
          <p>From UPI ID</p>
          <p>abcdef@1234</p>
        </div>
          </div>
          <hr style={{ width: "100%" }} />
          <div className='details-info'>
               <div className='info2'>
          <p>Remarks</p>
          <p>No</p>
        </div>
          </div>
          <div className='button-container3'>
              <button className='menuButton4'>Download Reciept</button>
              <button className='menuButton4'>Share Reciept</button>
          </div>
    </div>
  )
}

export default TransactionDetails
