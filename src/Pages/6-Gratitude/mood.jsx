import { useNavigate } from 'react-router-dom';
import CloudShape from "../../components/CloudShape";
import mood from "../../assests/svgs/mood.svg";
import edge from '../../assests/svgs/edge2.svg';

const MoodPage = () => {
  const navigate = useNavigate();

  const goToGratefullMood = () => {
    navigate('/Home/grateful-mood');
  };

  const moods = [
    { label: "كويس", emoji: "🙂" },
    { label: "مبسوط", emoji: "😄" },
    { label: "متضايق", emoji: "😞" },
    { label: "عادي", emoji: "😐" },
    { label: "كئيب", emoji: "😔" },
    { label: "وحش جدًا", emoji: "😭" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-auto min-h-[90vh] relative overflow-hidden text-right">
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
          alt="السهم"
          className="w-10 cursor-pointer mb-3"
          onClick={goToGratefullMood}
        />
        <h2 className="text-lg font-bold"  style={{fontSize:"35px",paddingTop:"15px",marginBottom:"5rem"}}>الحالة المزاجية</h2>
      </div>

      <div className=" space-y-8 text-center" style={{marginTop:"12rem"}}>
        <p className="text-gray-800 font-medium" style={{fontSize:"25px"}}>إي أخبار مزاجك؟</p>

        <div className="grid grid-cols-2 gap-10 text-center">
          {moods.map((mood, index) => (
            <button
              key={index}
              className="bg-[#75D6C6] text-white py-2 px-4 rounded-full flex justify-between items-center gap-2" style={{fontSize:"25px"}}
            >
              <span>{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>

        <button className="bg-[#75D6C6] text-white py-2 rounded-full w-[200px] mx-auto font-bold" style={{fontSize:"25px" ,marginTop:"4rem"}}>
          حفظ
        </button>
      </div>
    </div>
  );
};

export default MoodPage;
