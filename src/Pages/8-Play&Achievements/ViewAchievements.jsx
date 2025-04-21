
import CloudShape from '../../components/CloudShape'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import edge from "../..//assests/svgs/edge.svg"; 
import logo from "../..//assests/svgs/logo Play and ach.svg"
function ViewAchievements() {
      const location = useLocation();
      const data = location.state
      const navigate = useNavigate();

      const fullFormatted = new Date(data.selectedAt).toLocaleDateString('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ position: "relative" }}>
                    <CloudShape />
                    <img
                        src={logo}
                        alt="New goal"
                        style={{
                            position: "absolute",
                            top: "1rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "110px",
                        }}
                    />
                </div>
                <div>
                    <img
                        src={edge}
                        alt="edge"
                        style={{
                            cursor: "pointer",
                            position: "relative",
                            left: "80%",
                            paddingTop: "30px",
                            marginBottom: "1rem",
                        }}
                        onClick={() => navigate(`/Home/Play&Achievements/`)}
                    />
                    <h2 style={{ fontSize: "2.6rem", marginBottom: "4rem", paddingRight: "30px" }} dir="rtl">
                        تحديات اللعب والانجازات
                    </h2>
                </div>
            </div>
            <h1 style={{fontSize:"40px", color:"#C62828", marginRight:'30px', marginBottom:'30px'}} dir="rtl">انتصاراتي</h1>
            <div  dir='rtl' style={{ display: "flex", justifyContent:'space-between',}}>
            <div dir='rtl' className="no-underline"
                        style={{
                            display: "flex",
                            gap:'10px',
                            alignItems:'center',
                            marginRight:'20px',
                            marginBottom:'30px'
                        }}
                    >
                        <div
                            className="bg-secondary w-20 h-20 rounded-full" 
                            style={{
                              background: "#56D6C1",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                          }}
                        >
                            <img
                                src={`/public/images/${data.img}`}
                                alt=""
                                className="rounded-md w-10 h-object-cover"
                            />
                        </div>

                        <div>
                            <h1
                            className="text-sm font-medium"
                            style={{fontSize: "25px" }}
                            >{data.title}
                            </h1>
                            <p style={{marginTop:'10px',marginRight:'10px', fontSize:'18px'}}>{data.statement.text}
                            <i className="fa-solid fa-check" style={{fontSize: "25px", color: "green"}}
                            ></i>
                            </p>
                        </div>
            </div>

            <p style={{color:'#6E6A6A', marginLeft:'30px',fontSize:'18px'}}>{fullFormatted}</p>
            </div>
            
    </div>
  )
}

export default ViewAchievements
