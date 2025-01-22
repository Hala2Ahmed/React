import React from 'react'

export default function Card(props) {
  let img = props?.img 
  return (                                 
    <div onClick={()=>{props.changeImgSrc(img.src)}}  className='col-md-4 'data-bs-toggle="modal" data-bs-target={"#"+img.id}>
      <div className='position-relative'>
        <img src={img?.src} alt="logo" className='w-100 rounded-1'/>
      <div className="layer position-absolute top-0 end-0 start-0 bottom-0 bg-light-green rounded-1 d-flex align-items-center justify-content-center">
        <i className='icon fa fa-plus text-white fa-6x'></i>
      </div>
      </div>
      
    </div>
  )
}
