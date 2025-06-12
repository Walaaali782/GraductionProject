import { useNavigate } from 'react-router-dom';
import { Star, Clock, Moon } from 'lucide-react';

const sleepStories = [
    {
      id: 1,
      title: "قصة قبل النوم",
      image: "/images/sleep1.png",
      stories: [
        "في ليلةٍ هادئة، قرر سامي أن يطير إلى القمر بمظلته السحريةتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتتت",
        "ىىىىىىىىىىىىىىىىىىىىىىىوعندما وصل، وجد مخلوقات صغيرة ترحب به وتقدم له الشوكولاتة الفضائية!"
      ]
    },
    {
      id: 2,
      title: "نصايح لتحسين النوم",
      image: "/public/images/sleep2.png",
      stories: [
        "في قلب الغابة، نام الأرنب على ورقة شجرة عملاقة...",
        "وكانت الطيور تغني له حتى نام في سلام."
      ]
    },
    {
      id: 3,
      title: "التوازن",
      image: "/images/sleep3.png",
      stories: [
        "النجوم اجتمعت لتحكي لحسام حكايات من الماضي...",
        "كل نجمة كانت تلمع وتحكي قصة مختلفة!"
      ]
    },
    {
      id: 4,
      title: "الاسترخاء",
      image: "/images/sleep4.png",
      stories: [
        "النجوم اجتمعت لتحكي لحسام حكايات من الماضي...",
        "كل نجمة كانت تلمع وتحكي قصة مختلفة!"
      ]
    }
  ];
const Sleep = () => {
  const navigate = useNavigate();

  const handleStoryClick = (story) => {
    navigate('/Home/improveSleep/sleep/sleepPage', {
      state: { story }
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full mx-auto text-center relative" 
         style={{background: "linear-gradient(to bottom,rgb(141, 172, 168),rgb(32, 138, 125),rgb(14, 73, 66))"}}>

      <div className="absolute z-10" style={{ color: "#FFFFFF" }}>
        <div style={{ fontSize: "30px" }} className="w-6 cursor-pointer" onClick={() => navigate('/Home/improveSleep')}>X</div>
      </div>

      <h2 className="text-lg font-bold text-right mt-2" style={{ fontSize: "35px", color: "#FFFFFF" }}>قصص النوم</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "100px 0"
        }}
      >
        <div
          style={{
            color: "#0A584F",
            fontSize: "15px",
            width: "500px",
            letterSpacing: "1px"
          }}
          dir="rtl"
        >
          <p
            style={{
              border: "2px solid #eee",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            النوم بوقت كافٍ يحسن المزاج
          </p>
          <p
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            نم مبكرًا لتحصل على يوم نشيط.
          </p>
          <p
            style={{
              border: "1px solid #eee",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              padding: "10px"
            }}
          >
            الاسترخاء يساعد على نوم عميق
          </p>
        </div>

        <div>
          <Star
            className="h-10 w-10 text-[#065B51]"
            style={{
              marginBottom: "20px",
              marginLeft: "10px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              padding: "10px"
            }}
          />
          <Clock className="h-8 w-8" color="#FFFFFF" style={{ marginBottom: "20", marginLeft: "10px" }} />
          <Moon className="h-8 w-8" color="#FFFFFF" style={{ marginLeft: "10px" }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {sleepStories.map(story => (
          <button key={story.id}
            className="text-white py-3 px-2 rounded-lg font-semibold flex flex-col items-center justify-center shadow-md transition duration-300 hover:scale-105"
            onClick={() => handleStoryClick(story)}
          >
            <img src={story.image} alt={story.title} 
                 className="w-[150px] h-[120px] rounded-xl p-2" />
            {story.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sleep;
