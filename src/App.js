import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Tools from './Pages/Tools/Tools';
import ToolsDetails from './Pages/Tools/ToolsDetails';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';
import Contact from './Pages/Home/Contact';


function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />

        <Route path='/tools/:toolsId' element={
          <RequireAuth>
            <ToolsDetails></ToolsDetails>
          </RequireAuth>
        }></Route>


        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
        </Route>

        <Route path="about" element={<About />} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
