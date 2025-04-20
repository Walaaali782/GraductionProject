import CloudShape from "../../components/CloudShape";

import { useNavigate } from "react-router-dom";
  

const Register  = () => {
  const navigate = useNavigate();
    return (
        <div >
                 <CloudShape/>
                 <div className="text-center" style={{display:"flex",alignItems:"none" , justifyContent:"center", marginBottom:"50px"}}>
        <div className="relative bg-white ">
          <h2 className="text-center text-lg " style={{marginTop:"-80px",fontSize:"3rem",marginBottom:"4rem"}}>انشاء حساب</h2>
          <form className=" flex-col gap-3 text-right"style={{display:"flex",alignItems:"none",width:"265px" }} >
            <div>
              <label className="block text-lg font-medium pb-4">الاسم</label>
              <input type="text"dir="rtl" placeholder="ادخل الاسم" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4">كلمة المرور</label>
              <input type="password" dir="rtl" placeholder="ادخل كلمة السر" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4">البريد الالكتروني</label>
              <input type="email" dir="rtl" placeholder="ادخل البريد" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4">تاريخ الميلاد</label>
              <input type="date" dir="rtl" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4 ">الدولة</label>
              <input type="text" dir="rtl" placeholder="ادخل اسم دولتك" className="w-full px-3 py-2 bbbb rounded-md mb-10" />
            </div>
            <button className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6"}} onClick={() => navigate(`/Login`)}>استمر</button>
          </form>
        </div>
      </div>
     
        </div>
      );
    }
    
    export default Register;
    