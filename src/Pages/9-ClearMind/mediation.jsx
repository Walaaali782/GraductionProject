// AddMeditation.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import meditationIcon from '../../assests/svgs/med.svg'; // أيقونة التأمل
import meditationIcon2 from '../../assests/svgs/med2.svg'; // أيقونة التأمل
import meditationIcon3 from '../../assests/svgs/med3.svg'; // أيقونة التأمل



import CloudShape from "../../components/CloudShape";
import edge from '../../assests/svgs/edge.svg';

const Mediation = () => {
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("تم الحفظ:", { date, duration });
    navigate('/meditation-list');
  };

  const handleNavigateToClearMind = () => {
    navigate('/Home/clear-mind');
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full min-h-[90vh] relative overflow-hidden text-right font-cairo">
      
      {/* أيقونة التأمل أعلى اليسار */}
      <div className="absolute top-0 left-0 w-[120px] h-[120px] z-10">
        <CloudShape />
        <img
          src={meditationIcon}
          alt="med face"
          className="w-[100px] absolute top-[5px] left-1/2 transform -translate-x-1/2"
        />
          <img
          src={meditationIcon2}
          alt="med face"
          className="w-[100px] absolute top-[5px] left-1/4 transform -translate-x-1/2"
        />
           <img
          src={meditationIcon3}
          alt="med face"
          className="w-[100px] absolute top-[5px] left-[100px] transform -translate-x-1/2"
        />
      </div>

      <div className="absolute top-4 right-4 flex flex-col items-center z-10">
        <img
          src={edge}
          alt="x mark"
          className="w-10 cursor-pointer mb-3"
          onClick={handleNavigateToClearMind}
        />
        <h2 className="text-lg font-bold" style={{ fontSize: "35px", paddingTop: "15px" }}>
          التأمل
        </h2>
      </div>

      {/* النموذج والأزرار */}
      <div className="flex flex-col justify-center h-[70vh] mt-32" >
      <div style={{ marginBottom: "5rem" }}>
  <div className="flex items-center gap-4 border-b pb-2 mb-8 w-fit mx-auto">
    <input
      type="date"
      className="p-2 border rounded text-center mb-16  w-52"
      value={date}
      onChange={(e) => setDate(e.target.value)}
    />
    <label className="font-medium text-[30px]  mb-16 ">التاريخ </label>
  </div>

  <div className="flex items-center gap-4  pb-2 w-fit mx-auto">
    <input
      type="time"
      className="p-2 border rounded text-center mt-8 w-52"
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
    />
    <label className="font-medium text-[30px] mt-8">المدة </label>
  </div>
</div>






        {/* الأزرار في الأسفل */}
        <div className="flex flex-col items-center space-y-4 pb-6">
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 bg-[#75D6C6] hover:bg-[#5bc4b2] transition px-4 py-2 rounded w-[100px]  font-semibold"
         style={{ fontSize: "25px" , marginBottom: "2rem"}}
        >
            حفظ
          </button>

          <button
            onClick={() => navigate('/Home/clear-mind/meditation2')}
            className="flex items-center justify-center gap-2 bg-[#75D6C6] hover:bg-[#5bc4b2] transition px-4 py-4 rounded   font-semibold"
            style={{ fontSize: "20px", width:"fit-content"}}
         >
            فيديوهات تساعدك تفهم التأمل
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mediation;
