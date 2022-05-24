import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Tools from './Pages/Tools/Tools';
import ToolsDetails from './Pages/Tools/ToolsDetails';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path='/tools/:toolsId' element={<ToolsDetails></ToolsDetails>}></Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
