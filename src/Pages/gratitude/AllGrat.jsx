import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import CloudShape from "../../components/CloudShape";
import mood from '../../assests/svgs/grattiude.svg';
import edge from '../../assests/svgs/edge2.svg';

const AllGrat = () => {
  const navigate = useNavigate(); // إنشاء الدالة للتوجيه

  const handleEdgeClick = () => {
    navigate('/gratitude'); // التوجيه إلى صفحة GratitudePage عند الضغط
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-auto min-h-[90vh] relative overflow-hidden text-right">

      {/* الكلاود والوجه */}
      <div className="absolute top-0 left-0 w-[120px] h-[120px] z-10">
        <CloudShape />
        <img 
          src={mood} 
          alt="mood face"
          className="w-[100px] absolute top-[5px] left-1/2 transform -translate-x-1/2"
        />
      </div>

      <div className="absolute top-4 right-4 flex flex-col items-center z-10">
        <img 
          src={edge} 
          alt="x" 
          className="w-10 cursor-pointer mb-3"
          onClick={handleEdgeClick} 
        />
        <h2 className="text-xl font-semibold text-gray-700">كل الامتنان</h2>  
      </div>

      <p className="text-gray-500 text-center mt-10 pt-10">لا يوجد امتنانات بعد.</p>
    </div>
  );
};

export default AllGrat;
