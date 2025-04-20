import CloudShape from "../../components/CloudShape";
import {Link} from 'react-router-dom';
const Login  = () => {
    return (
        <div >
            <CloudShape/>
            <div className="text-center" style={{display:"flex",alignItems:"none" , justifyContent:"center", marginBottom:"80px"}}>
        <div className="relative bg-white ">
          <h2 className="text-center text-lg " style={{marginTop:"-80px",fontSize:"3rem",marginBottom:"6rem"}}>تسجيل الدخول</h2>
          <form className=" flex-col gap-3 text-right"style={{display:"flex",alignItems:"none",width:"300px" }} >
            <div style={{marginBottom:"2rem"}}>
              <label className="block ext-lg font-medium pb-4" style={{fontSize:"22px"}}>البريد الالكتروني</label>
              <input type="email" dir="rtl" placeholder="ادخل البريد" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div>
              <label className="block ext-lg font-medium pb-4" style={{fontSize:"22px"}}>كلمة المرور</label>
              <input type="password" dir="rtl" placeholder="ادخل كلمة السر" className="w-full px-3 py-2 bbbb rounded-md" />
            </div>
            <div className="text-left mb-3" style={{marginBottom:"8rem"}} >
                <Link to="/forgetpassword" className="text-decoration-none">هل نسيت كلمة المرور؟</Link>
            </div>
            <Link to="/Home" className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6" }}>تسجيل دخول</Link>
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