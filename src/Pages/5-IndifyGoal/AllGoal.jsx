



// import CloudShape from "../../components/CloudShape";

// import newgoal from "../../assests/svgs/newgoal.svg"; 
// import edge from "../../assests/svgs/edge.svg"; 
// import { useNavigate } from "react-router-dom";


    
//   const navigate = useNavigate();
  
// const goals = [
//   { text: "هذاكر 3 محاضرات النهارده", done: true },
//   { text: "أنا مخلص 3 تاسكات", done: false },
//   { text: "هحصل ع شهادة معينة", done: true },
//   { text: "أنا هخلص حفظ سورة النساء", done: true },
// ];

// export default function AllGoal() {
//   return (

    
//     <div>

// <div  style={{display:"flex",justifyContent:"space-between"}}> 
    
//       <div>
//       <CloudShape />
//       <img src={newgoal} alt="New goal" 
//       style={{
//         position: "relative",
//     bottom: "10rem",
//     width: "110px"}}      />  
//     </div>


// <div>
// <img src={edge} alt="xmark"    style={{cursor: "pointer",    position: "relative", left:" 72%", paddingTop: "30px",
//       marginBottom: "1rem",width:" 45px"}}    onClick={() => navigate(`/Home/NewGoal`) }/> 
// <h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }}>عرض كل الأهداف</h2>
//  </div>

//  </div>


//     <div className="flex justify-center items-center min-h-screen bg-black">
//       <div className="bg-white w-[300px] p-4 rounded-md shadow-md border-2 border-blue-500">
//         <div className="flex justify-between items-center mb-4">
        
//         <div className="flex flex-col gap-3">
//           {goals.map((goal, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border-b pb-2"
//             >
//               <p className="text-right">{goal.text}</p>
//               {goal.done ? (
//                 <FaCheckCircle className="text-green-500 text-xl" />
//               ) : (
//                 <FaTimesCircle className="text-red-500 text-xl" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import CloudShape from "../../components/CloudShape";

import newgoal from "../../assests/svgs/newgoal.svg"; 
import edge from "../../assests/svgs/edge.svg"; 
import { useNavigate } from "react-router-dom";


const AllGoal = () => {

    
  const navigate = useNavigate();
  
  const goals = [
  { text: "هذاكر 3 محاضرات النهارده", done: true },
  { text: "أنا مخلص 3 تاسكات", done: false },
  { text: "هحصل ع شهادة معينة", done: true },
  { text: "أنا هخلص حفظ سورة النساء", done: true },
];
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
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }
   } >  عرض كل الأهداف</h2>
 </div>

 </div>


 <div className="flex justify-center items-center mb-4">
  <div className="flex flex-col gap-9 w-full px-8">
    {goals.map((goal, index) => (
      <div
        key={index}
        className="flex justify-between items-center border-b pb-2"
        style={{ direction: "rtl" }}
      >
        <div  className="flex flex-row-reverse justify-start items-center gap-3 w-full" style={{justifyContent:"center"}}>
          <p style={{ fontSize: "27px", textAlign: "right", margin: 0,paddingBottom:"15px" }}>
            {goal.text}
          </p>
          {goal.done ? (
            
            <div> <i className="fa-solid fa-check" style={{fontSize: "45px",  backgroundColor: "#75D6C6", color: "white",  padding: "10px",
                borderRadius:" 50%"
            }}
            ></i>
            </div>

          ) : (
            <div> <i className="fa-solid fa-xmark" style={{fontSize: "45px",  backgroundColor: "red", color: "white",  padding: "10px",
                borderRadius:" 50%"
            }}
            ></i>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

</div>


   
  );
};

export default AllGoal;

