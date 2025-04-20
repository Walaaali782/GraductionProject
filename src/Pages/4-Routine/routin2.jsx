import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Routin2() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/Home/routine"); 
  };

  return (
    <div className="font-cairo flex items-center justify-center p-4">
              <div className="bg-white min-h-[90vh]  p-6 rounded-lg overflow-visible w-full">

      <div className="flex justify-between items-center mb-4">
        <button className="text-4xl" onClick={handleReturn}>
          ← 
        </button>
        <h2 className="text-xl font-bold">جميع الروتين الخاص بك</h2>
      </div>
    </div>    </div>

    
  );
}

export default Routin2;
