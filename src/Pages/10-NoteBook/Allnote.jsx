import CloudShape from "../../components/CloudShape";

import note from "../../assests/svgs/note.svg"; 
import edge from "../../assests/svgs/edge.svg"; 
import { useNavigate } from "react-router-dom";
const Allnote = () => {
    const notes = [
        { content: "ملحوظة عن نفسك" },
        { content: "ملحوظة ثانية" },
        { content: "ملحوظة عن نفسك" },
        { content: "ملحوظة ثانية" },
        { content: "ملحوظة عن نفسك" },
        { content: "ملحوظة ثانية" },
        { content: "ملحوظة عن نفسك" },
        { content: "ملحوظة ثانية" },
        // ...
      ];
  
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
<img src={edge} alt="edge"    style={{cursor: "pointer",    position: "relative", left:" 80%", paddingTop: "30px",
      marginBottom: "1rem",}} 
      onClick={() => navigate(`/Home/writenote`) }
      
      /> 
<h2 style={{fontSize:"2.6rem",marginBottom:"6rem",paddingRight:"35px" }}> كل الملاحظات</h2>
 </div>

 </div>


 <div
  style={{
    minHeight: "100vh",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  {notes.length === 0 ? (
    <p style={{ fontSize: "24px", color: "#888", marginTop: "100px" }}>
      لا يوجد ملاحظات مضافة
    </p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {notes.map((note, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "10px",
            backgroundColor: "#FCFCFC",
            border: "1px solid #D6D1D1",
            padding: "2rem 1rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "250px",
            position: "relative",
            marginBottom:"1.5rem"
          }}
        >
          <p style={{ fontWeight: "bold", flex: 1 }}>{note.content}</p>

          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgb(255 255 255)",
              border: "1px solid #D6D1D1",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              position:"relative",
              bottom:"-30%"
            }}
          >
            <button
              onClick={() => handleDelete(index)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <i
                className="fa-solid fa-trash"
                style={{ color: "red", fontSize: "25px" }}
              ></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>




</div>

   
  );
  function handleDelete(index) {
    console.log("Delete note at index:", index);
  }
};

export default Allnote;

