import CloudShape from "../../../components/CloudShape";
import {Link} from 'react-router-dom';
const Login  = () => {
    return (
        <div >
            <CloudShape/>
            <div className="text-center" style={{display:"flex",alignItems:"none" , justifyContent:"center", marginBottom:"50px"}}>
        <div className="relative bg-white ">
          <h2 className="text-center text-lg " style={{marginTop:"-80px",fontSize:"3rem",marginBottom:"4rem"}}>تسجيل الدخول</h2>
          <form className=" flex-col gap-3 text-right"style={{display:"flex",alignItems:"none",width:"265px" }} >
            <div>
              <label className="block ext-lg font-medium pb-4">البريد الالكتروني</label>
              <input type="email" dir="rtl" placeholder="ادخل البريد" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4">كلمة المرور</label>
              <input type="password" dir="rtl" placeholder="ادخل كلمة السر" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div className="text-left mb-3">
                <Link to="/sendcode" className="text-decoration-none">هل نسيت كلمة المرور؟</Link>
            </div>
            <Link to="/goals" className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6"}}>تسجيل دخول</Link>
            <div className="mb-3 text-center">
            ليس لديك حساب ؟ 
                <Link to="/register"style={{textDecoration: "underline",fontWeight: "bold" }}>قم بالتسجيل</Link>
            </div>
          </form>
        </div>
      </div>
     
        </div>
      );
    }
    
    export default Login;