import { useNavigate } from 'react-router-dom';
import EXimg from '../../assests/svgs/ex.svg';
import CloudShape from "../../components/CloudShape";
import xmark from '../../assests/svgs/xmark.svg';
import img from '/images/exercise.png';

const EX2 = () => {
  const navigate = useNavigate();

  const handleChooseExersise = () => {
    navigate('/Home/exercise');
  };

  const handleNavigateToHome = () => {
    navigate('/Home');
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full min-h-screen relative overflow-hidden text-right font-cairo">
      
      {/* السحابة والأيقونة */}
      <div className="absolute top-0 left-0 w-[10px] h-[10px] z-10">
        <CloudShape />
        <img
          src={EXimg}
          alt="med face"
          className="w-[150px] absolute top-[5px] left-1/2 transform -translate-x-1/2"
        />
      </div>

      {/* زر الإغلاق والعنوان */}
      <div className="absolute top-4 right-4 flex flex-col items-center z-10">
        <img
          src={xmark}
          alt="x mark"
          className="w-8 cursor-pointer mb-3"
          onClick={handleNavigateToHome}
        />
        <h2 className="text-lg font-bold text-center" style={{ fontSize: "35px", paddingTop: "15px" }}>
          التمارين الرياضية 
        </h2>
      </div>

      {/* محتوى مركزي */}
      <div className="flex flex-col items-center justify-center  mt-24">
        <img
          src={img}
          alt="exercise"
          style={{
            width: "500px",
            borderRadius: "106px",
            marginBottom:"10px"
          }}
        />
        <p className="text-2xl text-center">سجل تمرينك واضبط الوقت المناسب</p>
        </div>

        <div className='text-center m-10' >
        <button
          onClick={handleChooseExersise}
          className="bg-[#75D6C6] hover:bg-[#5bc4b2] transition px-4 py-2 rounded w-[100px] text-center font-semibold m-5"
        >
          ابدأ
        </button>
      </div>
    </div>
  );
};

export default EX2;
