import "./App.css";
import Content from "./WorkingFolder/Components/Content";
import Header from "./WorkingFolder/Components/Header";
import LeftBar from "./WorkingFolder/Components/LeftBar";
import RightBar from "./WorkingFolder/Components/RightBar";
import SigninComp from "./WorkingFolder/Components/SigninComp";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Signin from "./WorkingFolder/Components/Signin";
import SignUp from "./WorkingFolder/Components/SignUp";
import { useEffect } from "react";
import SingleSongPage from "./WorkingFolder/Components/SingleSongPage";
import LogOut from "./WorkingFolder/Components/LogOut";
// import AuthContext from "./WorkingFolder/Context/AuthContext";

function App() {
  return (
    // <AuthContext>

    <div className="App">
      <LeftBar />
      <Header />

      <div className="background"></div>
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signincomp" element={<SigninComp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/song" element={<SingleSongPage />} />
          <Route path="/logout" element={<LogOut/>}/>
          
        </Routes>
        <RightBar />
      </Router>
      
    </div>
    // </AuthContext>
  );
}

export default App;
