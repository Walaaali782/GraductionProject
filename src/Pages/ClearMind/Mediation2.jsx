import { useNavigate } from 'react-router-dom';
import edge from '../../assests/svgs/edge2.svg';

const Mediation2 = () => {
  const navigate = useNavigate();

  const handleNavigatemediation = () => {
    navigate('/Home/clear-mind/meditation');
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full mx-auto text-center relative">
      <div className="absolute z-10">
        <img
          src={edge}
          alt="x mark"
          className="w-6 cursor-pointer"
          onClick={handleNavigatemediation}
        />
      </div>

      <h2 className="text-lg font-bold text-right mt-2" style={{ fontSize: '40px' }}>
        التأمل
      </h2>

      {/* حقل البحث مع أيقونة Font Awesome */}
      <div className="flex items-center justify-center mt-6 max-w-md mx-auto border border-gray-300 rounded-full px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="ابحث عن فيديوهاتك"
          className="flex-1 outline-none text-right px-2 bg-transparent"
        />
        <i className="fas fa-search text-gray-500"></i>
      </div>
    </div>
  );
};

export default Mediation2;
