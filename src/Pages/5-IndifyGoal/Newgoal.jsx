import CloudShape from "../../components/CloudShape";

import newgoal from "../../assests/svgs/newgoal.svg"; 
import xmark from "../../assests/svgs/xmark.svg"; 
import bell from "../../assests/svgs/bell.svg"; 
import { useNavigate } from "react-router-dom";
const Newgoal = () => {
  
  const navigate = useNavigate();
  return (
    <div>

<div  style={{display:"flex",justifyContent:"space-between"}}> 
    
      <div>
      <CloudShape />
      <img src={newgoal} alt="New goal" 
      style={{
        position: "relative",
    bottom: "10rem",
    width: "110px"}}      />  
    </div>


<div>
<img src={xmark} alt="xmark"    style={{cursor: "pointer",    position: "relative", left:" 80%", paddingTop: "30px",
      marginBottom: "1rem",}} 
      onClick={() => navigate(`/Home`) }
      
      /> 
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }}>تحديد الهدف</h2>
 </div>

 </div>


 <div style={{ textAlign: "center" }}>
  <input
    type="text"
    dir="rtl"
    placeholder="ادخل هدفك ....."
    style={{
      height: "200px",
      width: "60%",
      padding: "0.75rem",
      borderRadius: "10px",
      border: "1px solid #ccc",
      marginTop: "1rem",
      marginBottom: "5rem",
      boxShadow: "rgb(179 171 171) -6px 7px 12px -5px" ,
      outline:"none"
    }}
  />

  <div
        style={{
          marginTop: "1.5rem",
          textAlign: "right",
          marginRight: "35px"
        }}
      >
        <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          عايز تحقق الهدف ده امتى؟
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-end",
            marginBottom:"5rem"
          }}
        >
       
          <input
            type="date"
            style={{
              fontSize: "1rem",
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1px solid rgb(247 237 237)",
              direction: "rtl"
            }}
          />
             <label style={{ fontSize: "1.1rem" }}>: التاريخ</label>
        </div>
      </div>

      <button className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6",padding:"10px 50px",
         marginBottom:"6rem", fontSize:"25px"} }  onClick={() => navigate(`/Home/NewGoal/DeterminCopmlete`) }>حفظ   </button>

      <div style={{ display: "flex", justifyContent: "center" }}>
  <div
    style={{
      marginTop: "2rem",
      border: "2px solid #ccc",
      padding: "1rem",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
      width: "40%",
      fontSize: "0.85rem",
      marginBottom:"6rem"
    }}
  >
    <p style={{ marginRight:"15px",fontSize:"18px" }}>هفكرك بالموعد ف بداية اليوم ال انت حددته</p>
    
    <img src={bell} alt="bell" 
      style={{
        position: "relative",
    width: "45px"}}      />  
  </div>
</div>

</div>









</div>

   
  );
};

export default Newgoal;

