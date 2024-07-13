import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import CoursePrograms from "./components/CoursePrograms";
import {Route, Routes} from "react-router";

function App() {
  return (
    <div className="App">
        <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courseprogram" element={<CoursePrograms/>}/>
        </Routes>
        {/*<button className={"btn btn-danger"}>*/}
        {/*    Submit*/}
        {/*</button>*/}
    </div>
  );
}

export default App;
