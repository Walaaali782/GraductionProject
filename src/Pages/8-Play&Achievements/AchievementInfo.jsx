import CloudShape from '../../components/CloudShape'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import edge from "../..//assests/svgs/edge.svg"; 
import logo from "../..//assests/svgs/logo Play and ach.svg"

const statement = [
  {id:1 ,text:'قل “مرحبا” لشخص غريب '},
  {id:2 ,text:'قل “مرحبا” لشخص غريب '},
  {id:3 ,text:'تحدث الي زميل في الدراسة او العمل لاتعرفه'},
]

function AchievementInfo() {
  const location = useLocation();
  const data = location.state
  const navigate = useNavigate();

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
                                src={`/images/${data.img}`}
                                alt=""
                                className="rounded-md w-10 h-object-cover"
                            />
                        </div>

                        <div
                            className="text-sm font-medium text-center mt-3"
                            style={{ marginBottom: "2rem", fontSize: "25px" }}
                        >
                            {data.title}
                        </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" style={{marginBottom:'200px'}} dir='rtl'>
              {
                statement.map((state)=>(
                  <div key={state.id} className='rounded-lg p-4 flex flex-col items-center justify-between text-center' style={{border:'1px solid black'}}>
                    <div className="mb-3" style={{fontSize:'25px'}}>
                      {state.text}
                    </div>

                    <button className='bg-[#75D6C6] rounded-lg py-1 p-4' 
                    onClick={() => navigate(`/Home/Play&Achievements/AchievementInfo/Complete`,{ 
                      state: { ...data, statement: state}},
                    )}

                    style={{fontSize:'20px'}}
                    >قبول</button>
                  </div>
                ))
              }
            </div>
    </div>
  )
}

export default AchievementInfo
