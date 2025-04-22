
import xmark from "../../assests/svgs/xmark.svg"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { from: "bot", text: "أهلاً وسهلاً! ❤️ إزاي أقدر أساعدك؟" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // أضف رسالة المستخدم
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // رد تلقائي من البوت (ممكن تطوريه لاحقاً)
    const botReply = { from: "bot", text: "تمام، أنا هنا علشان أساعدك!" };
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput("");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <img
            src={xmark}
            alt="xmark"
            style={{
              cursor: "pointer",
              position: "relative",
              left: "80%",
              paddingTop: "30px",
              marginBottom: "1rem",
            }}
            onClick={() => navigate(`/Home`)}
          />
        </div>
        <h2 style={{ fontSize: "2.6rem", paddingTop: "20px", paddingRight: "25px" }}>
          الدردشة
        </h2>
      </div>


      <div style={{ 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  height: "90vh" // أو أي ارتفاع مناسب,
}}>
  <div className="chat" style={{ padding: "20px", width: "90%"}}>
    <div
      style={{
        overflowY: "auto",
        borderRadius: "10px",
        padding: "10px",
    
      
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            textAlign: msg.from === "user" ? "right" : "left",
            margin: "10px 0",
            fontSize:"20px"
          }}
        >
          <span
            style={{
              backgroundColor: msg.from === "user" ? "#dcf8c6" : "#eee",
              padding: "10px 15px",
              borderRadius: "20px",
              display: "inline-block",
              maxWidth: "70%",
            }}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="اكتب رسالتك هنا..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ 
          flex: 1, 
          padding: "10px", 
          borderRadius: "10px", 
          border: "1px solid #ccc", 
          direction: "rtl", 
          fontSize: "23px", 
          outline: "none" 
        }}
      />
      <button 
        onClick={handleSend} 
        style={{ 
          padding: "25px", 
          borderRadius: "50%", 
          backgroundColor: "rgb(0 0 0)", 
          color: "white", 
          border: "none" 
        }}
      >
        <i className="fa-solid fa-paper-plane" style={{ fontSize: "25px" }}></i>
      </button>
    </div>
  </div>
</div>



    </div>
  );
};


export default Chat;

