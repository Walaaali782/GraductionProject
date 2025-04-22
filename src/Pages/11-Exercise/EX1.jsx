// AddMeditation.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EX from '../../assests/svgs/ex.svg'; // أيقونة التأمل
import CloudShape from "../../components/CloudShape";
import edge from '../../assests/svgs/edge2.svg';

const EX1 = () => {
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [favoriteSport, setFavoriteSport] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("تم الحفظ:", { date, duration, favoriteSport });
    navigate('/meditation-list');
  };

  const handleNavigateToEX1 = () => {
    navigate('/Home/exercise2');
  };

  const sports = [
    "كرة القدم ⚽",
    "كرة السلة 🏀",
    "كرة الطائرة 🏐",
    "تنس الطاولة 🏓",
    "الجري 🏃",
    "ركوب الدراجة 🚴",
    "السباحة 🏊",
    "الملاكمة 🥊",
    "التزلج على الجليد ⛸️",
    "الرقص 💃🕺",
    "الجمباز 🤸",
    "كرة اليد 🤾",
    "الجولف ⛳",
    "التنس 🎾",
    "رفع الأثقال 🏋️",
    "الفروسية 🏇",
    "تسلق الجبال 🧗",
    "التايكوندو 🥋",
    "اليوغا 🧘",
    "التجديف 🚣"
  ];

  return (
    <div className="bg-white rounded-lg p-6 w-full min-h-[90vh] relative overflow-hidden text-right font-cairo">
      
      <div className="absolute top-0 left-0 w-[120px] h-[120px] z-10">
        <CloudShape />
        <img
          src={EX}
          alt="med face"
          className="w-[150px] absolute top-[5px] left-1/2 transform -translate-x-1/2"
        />
      </div>

      {/* عنوان وأيقونة الإغلاق */}
      <div className="absolute top-4 right-4 flex flex-col items-center z-10">
        <img
          src={edge}
          alt="x mark"
          className="w-10 cursor-pointer mb-3 text-xl font-bold"
          onClick={handleNavigateToEX1}
        />
        <h2 className="text-lg font-bold" style={{ fontSize: "35px", paddingTop: "15px" }}>
اختار  الرياضة         </h2>
      </div>

      <div className="flex flex-col mt-32 space-y-6">

        <div>
          <label className="block mb-2 font-medium">اختر رياضتك المفضلة</label>
          <select
            className="w-full p-2 border rounded text-right"
            value={favoriteSport}
            onChange={(e) => setFavoriteSport(e.target.value)}
          >
            <option value="">-- اختر رياضة --</option>
            {sports.map((sport, index) => (
              <option key={index} value={sport}>
                {sport}
              </option>
            ))}
          </select>

          {favoriteSport && (
            <p className="mt-2 text-green-600 font-medium">
              رياضتك المفضلة هي: {favoriteSport}
            </p>
          )}
        </div>

        {/* الحقول الأخرى: التاريخ والمدة */}
        <div>
          <label className="block mb-2 font-medium">التاريخ</label>
          <input
            type="date"
            className="w-full p-2 border rounded mb-4 text-right"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block mb-2 font-medium">المدة</label>
          <input
            type="time"
            className="w-full p-2 border rounded mb-4 text-right"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* الأزرار */}
        <div className="flex flex-col items-center space-y-4 pb-6">
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 bg-[#75D6C6] hover:bg-[#5bc4b2] transition px-4 py-2 rounded w-[100px] text-md font-semibold"
          >
            حفظ
          </button>

        
        </div>
      </div>
    </div>
  );
};

export default EX1;
