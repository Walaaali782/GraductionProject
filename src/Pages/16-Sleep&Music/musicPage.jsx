import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronFirst, Repeat, ChevronLast, CirclePlay } from 'lucide-react';
import { useState } from 'react';

const MusicPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sliderValue, setSliderValue] = useState(50);

  const { name, image } = location.state || { name: "", image: "" };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handlemusic = () => {
    navigate('/Home/improveSleep/music');
  };

  return (
    <div className="bg-white rounded-lg p-6 w-full mx-auto text-center relative"
      style={{ paddingBottom: '200px', background: "linear-gradient(to bottom,rgb(79, 138, 130),rgb(24, 90, 82),rgb(14, 73, 66))" }}>
      
      <div className="absolute z-10">
        <div style={{ fontSize: "30px", color: "#FFFFFF" }} className="w-6 cursor-pointer" onClick={handlemusic}>←</div>
      </div>

      <h2 style={{ fontSize: "35px", textAlign: "center", color: "#FFFFFF", marginBottom: '50px' }}> الموسيقي </h2>

      <div className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
        <img src={image} alt={name} style={{ width: "300px", height:'250px', borderRadius: "20px" }} />
      </div>

      <p style={{ fontSize: "17px", margin: "30px 0 10px 0", color: "#FFFFFF" }}>{name}</p>

      <form style={{ width: "150px", margin: "auto" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="custom-slider"
          style={{ width: "150px", height: "20px" }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#FFFFFF" }}>
          <p>1:05</p>
          <p>3:20</p>
        </div>
      </form>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "20px" }}>
        <ChevronFirst className="h-8 w-8" style={{ marginLeft: "10px", color: "#FFFFFF" }} />
        <CirclePlay className="h-8 w-8" style={{ marginLeft: "5px", color: "#FFFFFF" }} />
        <ChevronLast className="h-8 w-8" style={{ marginLeft: "5px", color: "#FFFFFF" }} />
        <Repeat className="h-4 w-4" style={{ marginLeft: "5px", color: "rgb(34, 119, 109)" }} />
      </div>
    </div>
  );
};

export default MusicPage;
