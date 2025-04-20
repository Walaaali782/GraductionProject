import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import xmark from '../../assests/svgs/xmark.svg';
const routineTypes = [
  "روتين الصباح",
  "روتين الليل",
  "روتين دراسي",
  "روتين رياضي",
  "روتين العناية بالبشرة",
  "روتين العمل",
  "روتين ضوء الشمس",
];

function Routine() {
  const [selectedRoutine, setSelectedRoutine] = useState("");
  const [details, setDetails] = useState(["", ""]);
  const [allRoutines, setAllRoutines] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const navigate = useNavigate(); 

  const handleAddDetail = () => {
    setDetails([...details, ""]);
  };

  const handleChangeDetail = (index, value) => {
    const updated = [...details];
    updated[index] = value;
    setDetails(updated);
  };

  const handleClose = () => {
    navigate("/Home"); 
  };

  const handleViewAllRoutines = () => {
    navigate("/Home/routine/routin2"); 
  };

  return (
    <div className="font-cairo flex items-center justify-center p-4">
      <div className="bg-white min-h-[90vh]  p-6 rounded-lg overflow-visible w-full">
        <div className="flex justify-between items-center mb-4" style={{marginBottom:"5rem"}}>

<img src={xmark} alt="xmark"    style={{cursor: "pointer"}} 
      onClick={handleClose}
      
      /> 

          <h2 className=" font-bold" style={{fontSize:"40px"}}>الروتين</h2>
        </div>

        <div className="mb-4 relative">
          <div
            className="border p-2 rounded cursor-pointer bg-white flex justify-between items-center text-right"    
            style={{marginBottom:"4rem",height:"60px"}}
          
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="text-l font-bold ">
              {dropdownOpen ? "˄" : "˅"} 
            </span>

            <span className="text-[#7E7E7E] ml-2">
              {selectedRoutine || "اختر نوع الروتين بتاعك"}
            </span>
          </div>
          {dropdownOpen && (
            <div className="border mt-1 rounded bg-white absolute w-full z-10 shadow text-right">
              {routineTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedRoutine(type);
                    setDropdownOpen(false);
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {dropdownOpen && <div className="h-72"></div>}

        <h3 className="text-right mb-2" style={{fontSize:"22px",marginBottom:"1.2rem"}}>تفاصيل الروتين</h3>

        {details.map((d, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input
              className="flex-1 border p-2 rounded text-right"
              placeholder="..."
              value={d}
              onChange={(e) => handleChangeDetail(i, e.target.value)}
            />
            <span className="text-black font-bold" style={{fontSize:"22px"}}>{i + 1}</span>
          </div>
        ))}

        <div className="flex justify-between mt-4 gap-4" style={{marginTop:"5rem"}}>
          <button
            style={{
              backgroundColor: "#75D6C6",
              padding: "8px 16px",
              borderRadius: "13.52px",
              width: "100px",
              textAlign: "center",
              fontSize:"22px"
            }}
            onClick={handleAddDetail}
          >
            إضافة +
          </button>

          <button
            style={{
              backgroundColor: "#75D6C6",
              padding: "8px 16px",
              borderRadius: "13.52px",
              width: "100px",
              textAlign: "center",
              fontSize:"22px"
            }}
          >
            حفظ
          </button>
        </div>

        <button
          style={{
            backgroundColor: "#75D6C6",
            width: "200px",
            borderRadius: "13.52px",
            fontSize:"22px"
          }}
          className="mt-6 py-2 text-center mx-auto block font-semibold"
          onClick={handleViewAllRoutines}
        >
          عرض كل الروتين
        </button>
      </div>
    </div>
  );
}

export default Routine;
