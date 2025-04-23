import React, { useRef, useState, useEffect } from "react";
import { Home, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState({
    name: "ليديا هاني",
    email: "rita@gmail.com",
    birthDate: "18/8/2002",
    country: "مصر",
    backgroundImg: null,
    profileImg: null,
  });

  useEffect(() => {
    const savedBackground = localStorage.getItem("backgroundImg");
    const savedProfile = localStorage.getItem("profileImg");

    setProfileData((prev) => ({
      ...prev,
      backgroundImg: savedBackground || null,
      profileImg: savedProfile ||  null,
    }));
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const backgroundInputRef = useRef(null);
  const profileInputRef = useRef(null);
  const location = useLocation();

  const handleBackgroundClick = () => backgroundInputRef.current.click();
  const handleProfileClick = () => profileInputRef.current.click();


  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem(type, base64String);
        setProfileData((prev) => ({
          ...prev,
          [type]: base64String,
        }));
      };
  
      reader.readAsDataURL(file); // <-- ده اللي بيحوله لBase64
    }
  };

  const toggleMode = () => setDarkMode(!darkMode);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`flex justify-center items-center transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
      dir="rtl" 
    >
      <div
        className={`w-full shadow-lg overflow-hidden relative ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >

        {/* background */}
      <div
        className="h-24 w-full relative cursor-pointer"
        onClick={handleBackgroundClick}
        style={{
          backgroundColor: !profileData.backgroundImg ? "#464D4C" : "transparent", height:"250px"
        }}
      >
        {profileData.backgroundImg ? (
          <img
            src={profileData.backgroundImg}
            alt="background"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full" />
        )}
        <input
          type="file"
          accept="image/*"
          ref={backgroundInputRef}
          className="hidden"
          onChange={(e) => handleImageChange(e, "backgroundImg")}
        />
      </div>

{/* profile image */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" style={{top:'25%'}}
        onClick={handleProfileClick}
      >
        {profileData.profileImg ? (
          <img
            src={profileData.profileImg}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full border-4 border-white"
            style={{ backgroundColor: "#065B51" }}
          />
        )}
        <input
          type="file"
          accept="image/*"
          ref={profileInputRef}
          className="hidden"
          onChange={(e) => handleImageChange(e, "profileImg")}
        />
      </div>
         
         {/* بيانات المستخدم */}
        <div className="mt-16 text-center px-4">
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          
          <div className="mt-6 text-sm leading-7 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">البريد الالكتروني</span>
              <span>{profileData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">تاريخ الميلاد</span>
              <span>{profileData.birthDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">الدولة</span>
              <span>{profileData.country}</span>
            </div>
          </div>

          {/* تغيير المود  */}
          <div className="flex justify-between items-center mt-6 px-4 py-2 border-t border-gray-300" style={{paddingBottom:'300px'}}>
            <span className="text-sm flex items-center gap-2">🌙 تغيير المود</span>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={toggleMode}
                checked={darkMode}
              />
              <div className="w-11 h-6 bg-black rounded-full peer peer-checked:bg-gray-200 transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 container z-50" style={{ border: "none" }}>
          <div
            className="relative flex justify-around items-center bg-[#53b4a4] h-16 rounded-t-xl"
            style={{ fontSize: "85px" }}
          >
            {/* Home Icon in Circle - CENTERED */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Link
                to="/Home"
                className={`rounded-full transition-all duration-200 ${
                  isActive("/Home") ? "bg-white" : "bg-transparent "
                }`}
              >
                <Home
                  className={`h-10 w-10 ${
                    isActive("/Home")
                      ? "text-[#53b4a4]"
                      : "text-white relative top-[35px]"
                  }`}
                />
              </Link>
            </div>

            {/* User Icon */}
            <Link
              to="/Home/ProfileCard"
              className={`rounded-full p-3 transition-all duration-200 ${
                isActive("/Home/ProfileCard") ? "bg-white" : "bg-transparent"
              }`}
            >
              <User
                className={`h-10 w-10 ${
                  isActive("/Home/ProfileCard") ? "text-[#53b4a4]" : "text-white"
                }`}
              />
            </Link>

            {/* Spacer */}
            <div className="w-12" />

{/* Timeline/Menu Icon */}
            <Link
              to="/timeline"
              className={`rounded-full p-3 transition-all duration-200 ${
                isActive("/timeline") ? "bg-white" : "bg-transparent"
              }`}
            >
              <Menu
                className={`h-9 w-9 ${
                  isActive("/timeline") ? "text-[#53b4a4]" : "text-white"
                }`}
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ProfileCard;

// Nada Badawy, [4/23/2025 12:04 AM]
// <Route path="/Home/ProfileCard" element={<ProfileCard/>}/>

// Nada Badawy, [4/23/2025 12:05 AM]
// import ProfileCard from "./Pages/ProfileCard/ProfileCard";