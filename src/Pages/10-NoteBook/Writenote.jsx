import CloudShape from "../../components/CloudShape";

import note from "../../assests/svgs/note.svg"; 
import xmark from "../../assests/svgs/xmark.svg"; 
import { useNavigate } from "react-router-dom";
const Writenote = () => {
  
  const navigate = useNavigate();
  return (
    <div>

<div  style={{display:"flex",justifyContent:"space-between"}}> 
    
      <div>
      <CloudShape />
      <img src={note} alt="note" 
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
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }}> الملاحظات الشخصية </h2>
 </div>

 </div>


 <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
   marginBottom:"10rem",
    textAlign: "center",
  }}
>
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <input
      type="text"
      dir="rtl"
      placeholder="ادخل ملاحظة ....."
      style={{
        height: "200px",
        width: "60%",
        padding: "0.75rem",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginTop: "1rem",
        marginBottom: "5rem",
        boxShadow: "rgb(59 241 246 / 22%) -6px 7px 12px -5px",
        outline: "none",
      }}
    />
  </div>

  <button
    className="text-black text-center font-semibold py-2 rounded-md mt-4"
    style={{
      backgroundColor: "#75D6C6",
      padding: "10px 50px",
      marginBottom: "2rem",
      fontSize: "25px",
      width: "fit-content",
    }}
  >
    حفظ
  </button>

  <button
    className="text-black text-center font-semibold py-2 rounded-md mt-4"
    style={{
      backgroundColor: "#75D6C6",
      padding: "10px 50px",
      fontSize: "25px",
      width: "fit-content",
    }}
    onClick={() => navigate(`/Home/writenote/allnote`)}
  >
    عرض كل الملاحظات
  </button>
</div>







</div>

   
  );
};

export default Writenote;

