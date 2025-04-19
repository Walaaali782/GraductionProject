import CloudShape from "../../components/CloudShape";

import newgoal from "../../assests/svgs/newgoal.svg"; 
import edge from "../../assests/svgs/edge.svg"; 
import { useNavigate } from "react-router-dom";


const DeterminCopmlete = () => {

    
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
<img src={edge} alt="xmark"    style={{cursor: "pointer",    position: "relative", left:" 72%", paddingTop: "30px",
      marginBottom: "1rem",width:" 45px"}}    onClick={() => navigate(`/Home/NewGoal`) }/> 
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }}>تحديد الهدف</h2>
 </div>

 </div>


 <div style={{display:"flex",justifyContent:"center",textAlign:"center" }}>
  <p
    style={{
      height: "60%",
      width: "50%",
      padding: "1rem",
      borderRadius: "10px",
     backgroundColor:"#F8F8F8",
      marginTop: "1rem",
      marginBottom: "10rem",
      fontSize:"25px"
    }}
  > هذاكر 3 محاضرات انهارده</p>

</div>

<div
  className="flex items-center justify-center "
  style={{paddingBottom:"8rem" }} // لو حابة تضيفي خلفية
>
  <form
    className="flex flex-col gap-3 text-right items-center"
    style={{ fontSize: "25px", width: "60%", textAlign: "center" }}
  >
    <button
      className="text-black text-center font-semibold py-2 rounded-md mt-4"
      style={{ backgroundColor: "rgb(248, 248, 248)",fontWeight:"300",padding:"5px 70px" }}
      onClick={() => navigate(`/Home/NewGoal/CopmpleteGoal`) }
    >
       !اكتمال 
    </button>
    <button
      className="text-black text-center font-semibold py-2 rounded-md mt-4"
      style={{ backgroundColor: "rgb(248, 248, 248)",fontWeight:"300",padding:"5px 45px"}}
    >
     !عدم اكتمال
    </button>
    <button
      className="text-black text-center font-semibold py-2 rounded-md mt-4"
      style={{ backgroundColor: "#75D6C6" ,fontWeight:"300",padding:"5px 45px" }}
      onClick={() => navigate(`/Home/NewGoal/AllGoal`) }
    >
    كل أهدافك
    </button>
  </form>
</div>



</div>

   
  );
};

export default DeterminCopmlete;

