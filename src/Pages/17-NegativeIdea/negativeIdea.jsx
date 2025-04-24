import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloudShape from "../../components/CloudShape";
import img from '../../assests/svgs/idea.png';

const NegativeIdea = () => {
  const navigate = useNavigate();
  const [thought, setThought] = useState("");

  const handleIdeaPageHome = () => {
    navigate('/Home');
  };

  const handleAction = (actionType) => {
    console.log("نوع الإجراء:", actionType);
    console.log("الفكرة المدخلة:", thought);

    // هنا تقدرِ تبعتي الفكرة لسيرفر ML أو تحلليها حسب الزر
    // مثلا:
    // if (actionType === 'تحليل الفكر') { ... }

    alert(`تم تنفيذ: ${actionType} على الفكرة:\n"${thought}"`);
  };

  return (
    <div className="bg-white rounded-lg w-full mx-auto text-center relative">
      <CloudShape />

      {/* زر X للرجوع */}
      <div className="absolute z-10" style={{ color: "#FFFFFF", marginTop: "-120px", marginLeft: "40px" }}>
        <div style={{ fontSize: "30px" }} className="w-6 cursor-pointer" onClick={handleIdeaPageHome}>X</div>
      </div>

      <h2 className="text-center text-lg" style={{
        marginTop: "-80px",
        marginRight:"30px",
        fontSize: "2rem",
        marginBottom: "6rem",
        textAlign: "right",
        color: "#0A584F"
      }}>
        التعامل مع الأفكار السلبية
      </h2>

      {/* صورة */}
      <div className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={img}
          alt="idea"
          style={{ maxWidth: "300px", borderRadius: "20px" }}
        />
      </div>

      {/* Textarea */}
      <div style={{
        padding: "20px",
        width: "20rem",
        height: "190px",
        margin: "50px auto",
        borderTop: "3px solid #eee",
        borderLeft: "3px solid #eee",
        borderRight: "3px solid #eee",
        borderBottom: "3px solid rgb(118, 204, 190)",
        borderRadius: "10px"
      }}>
        <textarea dir='ltr'
          placeholder="اكتب أفكارك هنا..."
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          style={{
            width: "100%",
            height: "100%",
            resize: "none",
            border: "none",
            outline: "none",
            padding: "10px",
            fontSize: "16px",
            textAlign: "right"
          }}
        />
      </div>

      {/* الأزرار */}
      {["تحليل الفكر", "الفكر الإيجابي", "التأمل الموجه والخيارات", "تمارين التنفس"].map((label) => (
        <button
          key={label}
          onClick={() => handleAction(label)}
          style={{
            width: "20rem",
            fontSize: "20px",
            margin: "20px auto",
            color: "#FFFFFF",
            backgroundColor: "#75D6C6",
            padding: "10px"
          }}
          className="bg-white text-gray-800 py-3 px-2 rounded-lg font-semibold flex flex-col items-center justify-center shadow-[0_2px_4px_rgba(0,0,0,0.1),_0_6px_10px_rgba(0,0,0,0.15)]"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default NegativeIdea;
