
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


import SelfloveIncentivize from "./Pages/7-SelfLove/SelfloveIncentivize";
import SelfloveArtics from "./Pages/7-SelfLove/SelfloveArtics";
import SelflovePodcast from "./Pages/7-SelfLove/SelflovePodcast";


import ClearMind from "./Pages/9-ClearMind/ClearMind";
import BreathingPage from "./Pages/9-ClearMind/BreathingPage";
import Mediation from "./Pages/9-ClearMind/mediation";
import Mediation2 from "./Pages/9-ClearMind/Mediation2";


import Writenote from "./Pages/10-NoteBook/writenote";
import Allnote from "./Pages/10-NoteBook/Allnote";

import PlayAndAch from "./Pages/8-Play&Achievements/PlayAndAch";
import AchievementInfo from "./Pages/8-Play&Achievements/AchievementInfo";
import Complete from "./Pages/8-Play&Achievements/Complete";
import Congrats from "./Pages/8-Play&Achievements/Congrats";
import ViewAchievements from "./Pages/8-Play&Achievements/ViewAchievements";

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


        <Route path="/Home/SelfloveIncentivize" element={<SelfloveIncentivize />} />
        <Route path="/Home/SelfloveArticles" element={<SelfloveArtics />} />
        <Route path="/Home/SelflovePotcasts" element={<SelflovePodcast />} />


  
          <Route path="/Home/clear-mind" element={<ClearMind />} />
          <Route path="/Home/clear-mind/breathing" element={<BreathingPage />} />
          <Route path="/Home/clear-mind/meditation" element={<Mediation />} />
          <Route path="/Home/clear-mind/meditation2" element={<Mediation2 />} />


          <Route path="/Home/writenote" element={<Writenote />} />
          <Route path="/Home/writenote/allnote" element={<Allnote />} />

        <Route path="/Home/Play&Achievements" element={<PlayAndAch />}/>
        <Route path="/Home/Play&Achievements/AchievementInfo" element={<AchievementInfo/>}/>
        <Route path="/Home/Play&Achievements/AchievementInfo/Complete" element={<Complete/>}/>
        <Route path="/Home/Play&Achievements/CompleteAchievement" element={<Congrats/>}/>
        <Route path="/Home/Play&Achievements/ViewAchievements" element={<ViewAchievements/>}/>

          </Routes>
          </Router>
      
    </div>
  );
}

export default App;

