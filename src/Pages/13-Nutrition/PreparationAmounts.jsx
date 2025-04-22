import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
function PreparationAmounts() {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state
  return (
    <div className="mx-auto overflow-hidden p-4 text-right font-sans" style={{paddingBottom:'300px'}} dir="rtl">
    <div className="relative">
        <img
          src={`/public/images/${data.img}`}
          alt="healthy food"
          className="w-full object-cover rounded-lg" style={{height:'250px'}}
        />
        <button className="absolute top-2 left-2 text-lg font-bold" style={{fontSize:'45px'}}
        onClick={() => navigate(`/Home/Nutrition`)}
        > ← </button>
      </div>
      
      <div>
        <h2 style={{fontSize:'30px'}}>المقادير لتحضير</h2>
        <h1 style={{color:'#664500', fontSize:'25px'}}>{data.title}</h1>
      </div>
    </div>
  )
}

export default PreparationAmounts
