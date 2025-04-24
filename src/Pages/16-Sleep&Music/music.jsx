import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react'; // أيقونة التشغيل

const mockMusicList = [
  {
    name: "محبوب",
    image: "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg"
  },
  {
    name: "بتلات بيضاء",
    image: "https://images.unsplash.com/photo-1603026198288-6a94fa57e2af"
  },
  {
    name: "الخيال الصوتي",
    image: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg"
  },
  {
    name: "الزهور البرية",
    image: "https://images.pexels.com/photos/1151418/pexels-photo-1151418.jpeg"
  },
  {
    name: "الحبيب",
    image: "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg"
  },
  {
    name: "سطح القاعات",
    image: "https://images.pexels.com/photos/2781593/pexels-photo-2781593.jpeg"
  }
];

const Music = () => {
  const navigate = useNavigate();

  const handlemusicHome = () => {
    navigate('/Home/improveSleep');
  };

  const handleMusicPage = (music) => {
    navigate('/Home/improveSleep/music/musicPage', { state: music });
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full mx-auto text-center relative"
      style={{ background: "linear-gradient(to bottom,rgb(79, 138, 130),rgb(24, 90, 82),rgb(14, 73, 66))" }}>
      
      <div className="absolute z-10">
        <div style={{ fontSize: "30px", color: "#FFFFFF" }} className="w-6 cursor-pointer" onClick={handlemusicHome}>X</div>
      </div>

      <h2 style={{ fontSize: "35px", textAlign: "center", color: "#FFFFFF" }}> الموسيقي </h2>
      <p style={{ fontSize: "19px", margin: "30px 0", fontWeight: "400px", color: "#FFFFFF" }} dir="rtl">
        هنا تقدر تلاقي موسيقي هادية تساعدك على الاسترخاء والنوم.
      </p>

      <div style={{ margin: "50px 20px", color: "#FFFFFF" }} dir="rtl">
        {mockMusicList.map((music, index) => (
          <button
            key={index}
            onClick={() => handleMusicPage(music)}
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              gap: '20px',
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('.play-icon');
              if (icon) icon.style.display = 'block';
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('.play-icon');
              if (icon) icon.style.display = 'none';
            }}
          >
            <div style={{ position: "relative", width: "150px", height: "150px" }}>
              <img
                src={music.image}
                alt="img"
                style={{ width: "100%", height: "100%", borderRadius: "20px", padding: "5px", objectFit: "cover" }}
              />
              <div
                className="play-icon fade-in"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                  padding: "10px",
                  display: "none",
                  transition: "0.3s",
                  zIndex: 2
                }}
              >
                <Play color="#fff" size={30} />
              </div>
            </div>
            <p style={{ fontSize: "20px", marginLeft: "10px", color: "white" }}>{music.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Music;
