import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'; // أيقونة التشغيل
import edge2 from '../../assests/svgs/edge2.svg';

const breathingExercises = [
  {
    title: 'استمتع بالسكينة',
    duration: 'دقيقتين',
    color: 'bg-red-100',
    img: '/images/mind3.png',
  },
  {
    title: 'التنفس العميق',
    duration: 'دقيقتين',
    color: 'bg-green-100',
    img: '/images/mind1.png',
  },
  {
    title: 'تحرر من القلق',
    duration: 'دقيقتين',
    color: 'bg-blue-100',
    img: '/images/mind2.png',
  }
];

const BreathingPage = () => {
  const navigate = useNavigate();

  const handleNavigateToClearMind = () => {
    navigate('/Home/clear-mind');
    
  };

  return (
    <div className="bg-white min-h-screen px-4 pt-6 pb-10 text-right font-cairo">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pt-3">
        <img
          src={edge2}
          alt="x mark"
          className="w-12 h-12 cursor-pointer" 
          onClick={handleNavigateToClearMind}
        />
        <h2 className="text-lg font-bold text-right mt-2" style={{ fontSize: "35px" }}>
          التنفس
        </h2>
      </div>

      {/* Exercises List */}
      <div className="space-y-4">
        {breathingExercises.map((exercise, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow ${exercise.color}`}
          >
            {/* Text */}
            <div className="text-right flex-1">
              <h2 className="text-2xl font-bold mb-1">{exercise.title}</h2>
              <p className="text-sm text-gray-600">⏱ {exercise.duration}</p>
            </div>

            {/* Image & Button */}
            <div className="flex-shrink-0 ml-4 text-center">
              <img
                src={exercise.img}
                alt={exercise.title}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                className="mt-2 flex items-center justify-center gap-2 text-white px-4 py-2 rounded-full font-semibold text-base shadow"
                style={{
                  backgroundColor: "#75D6C6",
                  width: "110px",
                }}
              >
                <FontAwesomeIcon icon={faPlayCircle} className="text-white text-lg" />
                ابدأ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreathingPage;
