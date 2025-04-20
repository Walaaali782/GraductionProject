
import Login from "./Pages/2-Auth/Login";
import Welcome from "./Pages/1-welcomepage/Welcome";
import Register from "./Pages/2-Auth/Register";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forgetpass from "./Pages/2-Auth/Forgetpass";
import SendCode from "./Pages/2-Auth/SendCode";
import AllPage from "./Pages/3-Home/Home";




import Newgoal from "./Pages/5-IndifyGoal/Newgoal";
import DeterminCopmlete from './Pages/5-IndifyGoal/DeterminCopmlete';
import Congrat from './Pages/5-IndifyGoal/Congrat';
import AllGoal from './Pages/5-IndifyGoal/AllGoal';


import Routine from "./Pages/4-Routine/routin";
import Routin2 from "./Pages/4-Routine/routin2";


import GratitudePage from "./Pages/6-Gratitude/GratitudePage";
import AllGrat from "./Pages/6-Gratitude/AllGrat";
import GratefullMood from "./Pages/6-Gratitude/GratefullMood";
import Mood from "./Pages/6-Gratitude/mood";



function App() {
  return (
    <div id="up" className="container">
      <Router>
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/forgetpassword" element={<Forgetpass />} /> 
          <Route path="/sendcode" element={<SendCode />} /> 



          <Route path="/Home" element={<AllPage />} /> 
          <Route path="/Home/NewGoal" element={<Newgoal />} /> 
          <Route path="/Home/NewGoal/DeterminCopmlete" element={<DeterminCopmlete />} /> 
          <Route path="/Home/NewGoal/CopmpleteGoal" element={<Congrat />} /> 
          <Route path="/Home/NewGoal/AllGoal" element={<AllGoal />} />  
         


        <Route path="/Home/routine" element={<Routine />} />
        <Route path="/Home/routine/routin2" element={<Routin2 />} />


        <Route path="/Home/grateful-mood" element={<GratefullMood />} />
        <Route path="/Home/grateful-mood/gratitude" element={<GratitudePage />} />
        <Route path="/Home/grateful-mood/mood" element={<Mood />} />
        <Route path="/Home/grateful-mood/gratitude/all-grat" element={<AllGrat />} />
          </Routes>
          </Router>
      
    </div>
  );
}

export default App;
