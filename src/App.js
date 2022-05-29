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
import Users from './Pages/Dashboard/Users';
import MyProfile from './Pages/Dashboard/MyProfile';
import Blog from './Pages/Blogs/Blog';
import ShowProfile from './Pages/Home/ShowProfile';
import ShowAllProfile from './Pages/Dashboard/ShowAllProfile';
import AddTools from './Pages/Dashboard/AddTools';
import ManageTools from './Pages/Tools/ManageTools';
import CreatePortfolio from './Pages/Dashboard/CreatePortfolio';
import Portfolio from './Pages/Dashboard/Portfolio';
import Payment from './Pages/Dashboard/Payment';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import CarBenifits from './Pages/Home/CarBenifits';


function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/showProfile" element={<ShowProfile></ShowProfile>} />
        <Route path="/showPortfolio" element={<Portfolio></Portfolio>} />
        <Route path="/carBenifits" element={<CarBenifits></CarBenifits>} />
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
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='myProfile' element={<ShowProfile></ShowProfile>}></Route>
          <Route path='createProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='showAllProfile' element={<ShowAllProfile></ShowAllProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='addTools' element={<AddTools></AddTools>}></Route>
          <Route path='createPortfolio' element={<CreatePortfolio></CreatePortfolio>}></Route>
          <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='manageTools' element={<ManageTools></ManageTools>}></Route>
          <Route path='manageAllOrder' element={<ManageAllOrder></ManageAllOrder>}></Route>
        </Route>

        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
