import React from 'react'

const Uploadfile = ({text=""}) => {
  return (
   <div className="flex items-center justify-center w-full">
          <label for="dropzone-file" className="flex bg-white items-center shadow rounded-md justify-center ">
              <div className='w-64 pl-6'>{text}</div>
        <div className="flex items-center justify-center py-2 px-4 rounded-md text-white gap-2" style={{backgroundColor:"#00AAEA"}}>
          <img src="./Mask group (5).svg" alt="" className='w-6 h-6'/>
          <p className='text-sm'>UPLOAD</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
  )
}

export default Uploadfile
