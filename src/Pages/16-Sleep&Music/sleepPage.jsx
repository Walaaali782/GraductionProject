import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const SleepPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const story = state?.story;

  const [selectedParagraph, setSelectedParagraph] = useState(null);

  if (!story) {
    return <div className="text-white p-4">لا توجد قصة مختارة.</div>;
  }

  return (
    <div className="relative bg-white rounded-lg p-6 w-full mx-auto text-center"
         style={{ background: "linear-gradient(to bottom, rgb(141, 172, 168), rgb(32, 138, 125), rgb(14, 73, 66))" }}>

      {/* زر الرجوع */}
      <div className="absolute z-10">
        <div style={{ fontSize: "30px", color: "#FFFFFF" }} className="w-6 cursor-pointer"
             onClick={() => navigate('/Home/improveSleep/sleep/')}>X</div>
      </div>

      <h2 style={{ fontSize: "35px", textAlign: "right", color: "#FFFFFF" }}>{story.title}</h2>

      <img src={story.image} alt={story.title} className="w-[300px] h-[200px] mx-auto rounded-xl mt-4" />

      <div className="mt-6 space-y-4 px-4 text-white text-right" style={{ fontSize: "18px" }}>
        {story.stories.map((paragraph, index) => (
          <p key={index}
             className="bg-white text-[#0A584F] p-4 rounded-xl cursor-pointer"
             dir="rtl"
             onClick={() => setSelectedParagraph(paragraph)}>
            {paragraph.slice(0, 40)}... <span className="underline">اقرأ المزيد</span>
          </p>
        ))}
      </div>

      {/* نافذة القصة الكاملة */}
      {selectedParagraph && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-[#0A584F] p-6 rounded-2xl w-[90%] max-w-2xl relative shadow-xl"
               style={{
                 animation: "fadeIn 0.3s ease-in-out",
                 maxHeight: '80vh',
                 overflowY: 'auto'
               }} dir="rtl">
            <button
              className="absolute top-3 left-3 text-red-600 text-xl font-bold"
              onClick={() => setSelectedParagraph(null)}
            >
              X
            </button>
            <p className="text-lg whitespace-pre-line">{selectedParagraph}</p>
          </div>
        </div>
      )}

      {/* تأثير انيميشن */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SleepPage;
