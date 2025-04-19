import { useNavigate } from 'react-router-dom';
import mood1 from '../../assests/svgs/grattiude.svg';
import mood2 from '../../assests/svgs/grattiude2.svg';
import xmark from '../../assests/svgs/xmark.svg';
import img from "../../assests/svgs/gratefulmood.jpg";

const GratefulMood = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateGratitude = () => {
    navigate('/gratitude');
  };

  const handleNavigateMood = () => {
    navigate('/mood');
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full max-w-sm mx-auto text-center relative">
      <div className="absolute top-4 left-4 z-10">
        <img
          src={xmark}
          alt="x mark"
          className="w-6 cursor-pointer"
          onClick={handleNavigateHome}
        />
      </div>

      <h2 className="text-lg font-bold text-right mt-2">مزاج ممتن</h2>

      <div className="mt-4">
        <img
          src={img}
          alt="mirror reflection"
          style={{
            width: "400px",
            borderRadius: "106px",
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        <button
          className="bg-white text-gray-800 py-3 px-2 rounded-lg font-semibold flex flex-col items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),_0_6px_10px_rgba(0,0,0,0.15)]"
          onClick={handleNavigateMood}
        >
          حالتك المزاجية
          <img src={mood2} alt="mood 2" className="w-12 mt-2" />
        </button>

        <button
          className="bg-white text-gray-800 py-3 px-2 rounded-lg font-semibold flex flex-col items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),_0_6px_10px_rgba(0,0,0,0.15)]"
          onClick={handleNavigateGratitude}
        >
          الامتنان
          <img src={mood1} alt="mood 1" className="w-12 mt-2" />
        </button>
      </div>
    </div>
  );
};

export default GratefulMood;
