//import Register from "./Pages/2-Auth/register";
import Welcome from "./Pages/1-welcomepage/Welcome";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Router } from './../node_modules/@remix-run/router/dist/router.d';
import Register from "./Pages/1-welcomepage/2-Auth/Register";
import Login from "./Pages/1-welcomepage/2-Auth/Login";
import SendCode from "./Pages/1-welcomepage/2-Auth/SendCode";
import GoalsPage from "./Pages/GoalsPage";



function App() {

  return (
    <div id="up" className="container">
    
    <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/sendcode" element={<SendCode/>}/>
                    <Route path="/goals" element={<GoalsPage/>}/>
                </Routes>
    </BrowserRouter>
     

</div>
  );
}

export default App;
