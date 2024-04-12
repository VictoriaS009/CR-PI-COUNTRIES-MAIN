import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
//?----------------------------------------- components

import LandingPage from "./components/LandingPage/LandingPage"; 
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import ActivityCreator from "./components/activityCreator/ActivityCreator";
//?----------------------------------------- style
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/countries" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<ActivityCreator/>} />
      </Routes>
    </div>
  );
}

export default App;