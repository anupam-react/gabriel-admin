import React, { useRef, useState } from 'react'
import './index.scss'
import { DialogDefault } from '../common/DilogBox'
import { formatTime2, getDateFromISOString } from '../../utiils'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
const TransactionDetails = ({handleOpen , isButton= true , userData , brandData, data}) => {

  const [openDownload , setOpenDownload] = useState(false)
  const [openShare , setOpenShare] = useState(false)

  const receiptRef = useRef();

  const generatePDF = () => {
    const input = receiptRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('receipt.pdf');
    });
  };
  return (
     <div className='details-container' ref={receiptRef}>
     <p className="details-title pb-8">Transaction Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
      />
      <div className='h-[60vh] overflow-y-scroll no-scrollbar'>
      <div className='flex items-center justify-center gap-2'>
          <img src={brandData?.image || "../Ellipse 9.png" } alt="" className='w-[75px] h-[75px]'/>
          <div>
            <p className='text-[#121212] font-semibold text-[24px]'>{brandData?.fullName}</p>
            <p className='text-[#121212]'>{brandData?.fullName}</p>
          </div>

      </div>
          <p className='text-[#8F8F8F] text-center pb-2'>Address :  23-10
         <p> Contact : {brandData?.phone}</p>
          </p>
         <div className='border border-[#000000] border-dashed w-[400px]'></div>
         <p className='text-[#121212] text-[24px] font-[500] text-center'>RECEIPT</p>
         <div className='border border-[#000000] border-dashed w-[400px]'></div>
      <div className='details-info text-[#8F8F8F]'>
        <div className='info2'>
          <p>Receipt No</p>
          <p>{data?._id}</p>
        </div>
        <div className='info2'>
          <p>Date & Time</p>
          <p>{data?.dateUploaded || getDateFromISOString(data?.createdAt)+ " , " + formatTime2(data?.createdAt)}</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Name</p>
          <p className='text-[#121212] font-semibold'>{userData?.fullName || userData?.firstName + " " + userData?.lastName}</p>
        </div>
        <div className='info2'>
          <p className='text-[#121212]'>Items</p>
          <p className='text-[#121212]'>Price</p>
        </div>
        <div className='info2'>
          <p>{data?.productId?.name}</p>
          <p>£{data?.price} * {data?.quantity}</p>
        </div>
        {/* <div className='info2'>
          <p>Lorem</p>
          <p>£15</p>
        </div>
        <div className='info2'>
          <p>Lorem</p>
          <p>£15</p>
        </div> */}
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Total</p>
          <p className='text-[#121212] font-semibold'>£{data?.total}</p>
        </div>
        <div className='info2'>
          <p>Discount</p>
          <p>£{data?.offerDiscount}</p>
        </div>
        <div className='info2'>
          <p>VAT(Registration No)</p>
          <p>1234567</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p className='text-[#121212] font-semibold'>Rewards</p>
          <p className='text-[#121212] font-semibold'>01</p>
        </div>
        <div className='info2'>
          <p>Points</p>
          <p>00</p>
        </div>
        <div className='info2'>
          <p>Stamps</p>
          <p>01</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
        <div className='info2'>
          <p >Payment Method</p>
          <p >Linked Card</p>
        </div>
        <div className='border border-[#000000] border-dashed w-[400px]'></div>
          </div>
          <div className='flex flex-col items-center gap-2'>
 <p className='text-center text-[24px] text-[121212] font-semibold'>THANK YOU !</p>
 <img src="../Frame 38456.png" alt="" />

          </div>
      </div>
          <hr className='w-full bg-[#000000] my-6' />
         
        {isButton && <div className='button-container3'>
              <button className='menuButton4' onClick={()=>{
                generatePDF()
                setOpenDownload(true)

                setTimeout(()=>{
                  setOpenDownload(false)
                },2000)
                }}>Download Reciept</button>
              <button className='menuButton4' onClick={()=>{
                setOpenShare(true)
                setTimeout(()=>{
                  setOpenShare(false)
                },2000)
                }}>Share Reciept</button>
          </div>}
          <DialogDefault open={openDownload} handleOpen={setOpenDownload}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Transaction receipt downloaded
          </p>
        </div>
        </DialogDefault>
          <DialogDefault open={openShare} handleOpen={setOpenShare}>
           <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-[24px] font-bold">
          Transaction receipt  Shared
          </p>
        </div>
        </DialogDefault>
    </div>
  )
}

export default TransactionDetails
