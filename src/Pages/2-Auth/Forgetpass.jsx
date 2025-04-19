import CloudShape from "../../components/CloudShape";

import { useNavigate } from "react-router-dom";


const Forgetpass  = () => {
  const navigate = useNavigate();

    return (
        <div >
                 <CloudShape/>
                 <div className="text-center" style={{display:"flex",alignItems:"none" , justifyContent:"center", marginBottom:"50px"}}>
        <div className="relative bg-white ">
          <h2 className="text-center text-lg " style={{fontSize:"3rem",marginBottom:"6rem"}}> نسيت كلمة المرور</h2>
          <form className=" flex-col gap-3 text-right"style={{display:"flex",alignItems:"none" }} >
         
            <div >
              <label className="block ext-lg font-medium pb-4" style={{fontSize:"26px", color:"#0A584F"}}>البريد الالكتروني</label>
              <input type="email" dir="rtl" placeholder=" ادخل البريد الالكتروني"  className="w-full px-3 py-2 bbbb rounded-md" />
            </div>

            <div style={{marginBottom:"8rem"}}>
<p style={{fontSize:"14px", color:"#0A584F"}}>أدخل عنوان بريدك الإلكتروني المسجل، وسنرسل لك الكودلإعادة تعيين كلمة المرور. </p>
                </div>
           
            <button className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6"}} onClick={() => navigate(`/sendcode`)}  >ارسل الكود</button>
          </form>
        </div>
      </div>
     
        </div>
      );
    }
    
    export default Forgetpass;