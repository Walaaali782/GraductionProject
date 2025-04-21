import CloudShape from "../../components/CloudShape";

import selflove from "../../assests/svgs/selflove.svg"; 
import xmark from "../../assests/svgs/xmark.svg"; 
import { useNavigate } from "react-router-dom";
const SelfloveArtics = () => {
  
  const navigate = useNavigate();


  const tabs = [
    { name: "التحفيز", route: "/Home/SelfloveIncentivize" },
    { name: "المقالات", route: "/Home/SelfloveArticles" },
    { name: "البودكاست", route: "/Home/SelflovePotcasts" },
  ];

  const selfs = [
    { label: "كونك صادق مع نفسك هو أول خطوة للحب الحقيقي"},
    { label:"لا تنتظر من الآخرين ما تستطيع أن تمنحه لنفسك."},
    { label: "عندما تعرف قيمتك، لا أحد يستطيع أن يقلل منها." },
    { label: "أنت تستحق أن تحب نفسك كما أنت."},
    
  ];

  return (
    <div>

<div  style={{display:"flex",justifyContent:"space-between"}}> 
    
      <div>
      <CloudShape />
      <img src={selflove} alt="self love" 
      style={{
        position: "relative",
    bottom: "9.5rem",
    width: "110px"}}      />  
    </div>


<div>
<img src={xmark} alt="xmark"    style={{cursor: "pointer",    position: "relative", left:"70%", paddingTop: "30px",
      marginBottom: "1rem",}} 
      onClick={() => navigate(`/Home`) }
      
      /> 
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"40px" }}> حب النفس</h2>
 </div>

 </div>



 <div className="bg-white min-h-screen px-4 sm:px-8 md:px-16 py-6 mx-auto">
  {/* Tabs Section */}
  <div className="w-full overflow-x-auto">
    <div className="flex justify-between gap-4 text-[22px] sm:text-[24px] md:text-[28px] font-bold border-b-2 border-gray-200 pb-4 mb-16 min-w-[400px]">
      {tabs.map((tab, index) => {
        const isActive = window.location.pathname === tab.route;
        return (
          <button
            key={index}
            onClick={() => navigate(tab.route)}
            className={`relative pb-2 whitespace-nowrap transition hover:text-teal-500 ${
              isActive ? "text-teal-500" : ""
            }`}
          >
            {tab.name}
            {isActive && (
              <span
                className="absolute left-1/2 -translate-x-1/2 h-1 bg-teal-500 rounded-full bottom-[-15px] w-[90%]"
                style={{ transition: "all 0.3s ease-in-out" }}
              ></span>
            )}
          </button>
        );
      })}
    </div>
  </div>

  {/* Grid of Buttons */}
  <div className="mt-20 space-y-8 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 px-4 sm:px-12">
      {selfs.map((self, index) => (
        <button
          key={index}
          className="py-6 px-6 sm:px-10 rounded-2xl flex justify-center items-center text-[25px] sm:text-[24px] text-[#0A584F] bg-gray-100"
        >
          <p>{self.label}</p>
        </button>
      ))}
    </div>
  </div>
</div>





</div>

   
  );
};

export default SelfloveArtics;

