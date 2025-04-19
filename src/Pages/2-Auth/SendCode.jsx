import React from 'react'
import CloudShape from '../../components/CloudShape';
import {Link} from 'react-router-dom';

function SendCode() {
  return (
    <div>
      <CloudShape/>
      <div className="text-center" style={{display:"flex",alignItems:"none" , justifyContent:"center", marginBottom:"50px"}}>
      <div className="relative bg-white">
        <h2 className="text-center text-lg " style={{marginTop:"-80px",fontSize:"3rem",marginBottom:"4rem"}}>ادخل الكود المرسل</h2>

        <h3 style={{fontSize:"2rem",marginBottom:"4rem", color:'#0A584F'}}>الكود</h3>
        <div style={{ display: "flex ",alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "3rem" }}>
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "60px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "60px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "60px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <input
    type="text"
    maxLength="1"
    style={{
      width: "60px",
      height: "60px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "2px solid #ccc",
      borderRadius: "8px",
      outline: "none",
    }}
  />
</div>
<Link to="/login" className=" text-black text-center font-semibold py-2 rounded-md mt-4 w-100" style={{backgroundColor:"#75D6C6",display: "flex ",alignItems: "center", justifyContent: "center"}}>تحقق</Link>
      </div>
      </div>
    </div>
  )
}

export default SendCode