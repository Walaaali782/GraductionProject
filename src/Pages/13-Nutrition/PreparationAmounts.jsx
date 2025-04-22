import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import edge from '../../assests/svgs/edge.svg';

function PreparationAmounts() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state
  return (
    <div className="mx-auto overflow-hidden p-4 text-right font-sans" style={{paddingBottom:'300px'}} dir="rtl">


   
<div className="relative p-4">
  {/* الزر */}

  <h1 style={{color:'#664500', fontSize:'35px'}}>{data.title}</h1>
  <button
    className="absolute top-4 left-4 rounded-full p-2  text-xl z-10"
    onClick={() => navigate('/Home/Nutrition')}
  >
    <img src={edge} alt="xmark"    style={{cursor: "pointer",    position: "relative", top:"-15px", padding: "20px", backgroundColor:"rgb(210 243 238)" , width:"28px",
    borderRadius:"50%"
        }} 
       
          
          /> 
  </button>

  {/* الصورة */}
  <div className="flex justify-center">
    <img
      src={`/images/${data.img}`}
      alt="healthy food"
      className="object-cover rounded-lg w-2/5"
      style={{  marginTop:"80px" }}
    />
  </div>
</div>
      



      <div>
        <h2 style={{fontSize:'30px'}}>المقادير لتحضير</h2>
       
      </div>
    </div>
  )
}

export default PreparationAmounts

