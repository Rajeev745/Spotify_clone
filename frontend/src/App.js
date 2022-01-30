import "./App.css";
import Content from "./WorkingFolder/Components/Content";
import Header from "./WorkingFolder/Components/Header";
import LeftBar from "./WorkingFolder/Components/LeftBar";
import RightBar from "./WorkingFolder/Components/RightBar";
import SigninComp from "./WorkingFolder/Components/SigninComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./WorkingFolder/Components/Signin";
import SignUp from "./WorkingFolder/Components/SignUp"

function App() {
  return (
    <div className="App">
      <LeftBar />
      <Header />

      <div className="separator">
        <Content />
      </div>
      <RightBar />
      <div className="background"></div>
      <Router>
        <Routes>
          <Route path="/signincomp"  element={<SigninComp />}/>
          <Route path="/signin"  element={<Signin />}/>
          <Route path="/signup"  element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
