import { useState } from 'react';
import CloudShape from "../../components/CloudShape";
import mood from '../../assests/svgs/grattiude.svg';
import edge from '../../assests/svgs/edge2.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';

const GratitudePage = () => {
  const [gratitudeList, setGratitudeList] = useState([""]);
  const navigate = useNavigate();

  const handleAddInput = () => {
    setGratitudeList([...gratitudeList, ""]);
  };

  const handleNavigateToGratefulMood = () => {
    navigate('/Home/grateful-mood');
  };
  const handleShowAllGratitude = () => {
    navigate('/Home/grateful-mood/gratitude/all-grat');
  };
  
  return (
    <div className="bg-white rounded-lg p-6 w-full min-h-[90vh] relative overflow-hidden text-right">
      <div className="absolute top-0 left-0 w-[120px] h-[120px] z-10">
        <CloudShape />
        <img
          src={mood}
          alt="mood face"
          className="w-[100px] absolute top-[5px] left-1/2 transform -translate-x-1/2"
        />
      </div>

      <div className="absolute top-4 right-4 flex flex-col items-center z-10" >
        <img
          src={edge}
          alt="x mark"
          className="w-10 cursor-pointer mb-3"
          onClick={handleNavigateToGratefulMood}
        />
        <h2 className="text-lg font-bold" style={{fontSize:"35px",paddingTop:"15px"}}>الامتنان</h2>
      </div>

      <div className=" space-y-4 text-center" style={{marginTop:"12rem"}}>
        <label className="block text-right font-medium text-gray-800"  style={{fontSize:"25px",paddingBottom:"15px"}}>
          إيه اللي ممتن ليه؟
        </label>

        {gratitudeList.map((gratitude, index) => (
          <div key={index} className="" style={{marginBottom:"2rem"}}>
            <div className="flex gap-2 justify-center items-center"  >
              <input
                type="text"
               
                value={gratitude}
                onChange={(e) => {
                  const updated = [...gratitudeList];
                  updated[index] = e.target.value;
                  setGratitudeList(updated);
                 
                }}
                
                placeholder="أنا ممتن لـ..."
                className="w-full py-2 px-4 text-right focus:outline-none"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize:"20px"
                }}
              />
              <FontAwesomeIcon
                icon={regularHeart}
                className="text-[#75D6C6] text-2xl ml-2"
              />
            </div>

            {index < gratitudeList.length - 1 && (
              <hr className="border-t  my-2" />
            )}
          </div>
        ))}

        <div className="flex flex-col space-y-4 mt-6 justify-center items-center" style={{marginBottom:"5rem"}}>
          <button
            onClick={handleAddInput}
            style={{
              backgroundColor: "#75D6C6",
              padding: "8px 16px",
              borderRadius: "13.52px",
              width: "200px",
              whiteSpace: "nowrap",
              textAlign: "center",
                 fontSize:"22px"
            }}
          >
            إضافة
          </button>

          <button
            style={{
              backgroundColor: "#75D6C6",
              padding: "8px 16px",
              borderRadius: "13.52px",
              width: "200px",
              whiteSpace: "nowrap",
              textAlign: "center",
                 fontSize:"22px"
            }}
          >
            حفظ
          </button>

          <button
  onClick={handleShowAllGratitude}
  style={{
    backgroundColor: "#75D6C6",
    padding: "8px 16px",
    borderRadius: "13.52px",
    width: "200px",
    whiteSpace: "nowrap",
    textAlign: "center",
       fontSize:"22px"
  }}
  className="mt-4"
>
  عرض كل الامتنان
</button>

        </div>
      </div>
    </div>
  );
};

export default GratitudePage;
