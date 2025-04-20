
import {Link} from 'react-router-dom';
const Welcome  = () => {

    return (
      <div >

       <div className="text-center" style={{display:"flex" , justifyContent:"center", marginBottom:"50px"}}>
       
      <div className="relative ">

<div>
  <img src="../public/images/logo.png" className=" mb-2 " alt="" width="300" height="300" style={{paddingLeft:"10px"}} ></img>
  <img src="../public/images/name.png" className=" mb-8" alt="" width="350" height="350" ></img>
</div>


        <form className=" flex-col gap-3 text-right"style={{display:"flex", fontSize:"20px" }} >
          <Link to="/register" className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6"}}>انشاء حساب </Link>
          <Link to="/login" className=" text-black text-center font-semibold py-2 rounded-md mt-4" style={{backgroundColor:"#75D6C6"}}>لديك حساب بالفعل </Link>
        </form>
      </div>
    </div>
      </div>
    );
  }
  
  export default Welcome;
  