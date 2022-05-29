import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import imageIcon from '../../icons/myProfileIcon.png'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/')
  };

  const menuItems = < >
    <li className='font-medium'><Link to='home'>Home</Link></li>
    <li className='font-medium'><Link to='tools'>Tools</Link></li>
    <li className='font-medium'><Link to='blog'>Blog</Link></li>
    <li className='font-medium'><Link to='about'>About</Link></li>

    {
      user && <>
        {/* <li className='font-medium'><Link to='showProfile'>My Profile</Link></li>
        <li className='font-medium'><Link to='showPortfolio'>My Portfolio</Link></li> */}
        <li className='font-medium'><Link to='/dashboard'>Dashboard</Link></li> </>
    }

    {user ? <div className='lg:flex'>


      <div class="dropdown pl-1 justify-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            {user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={imageIcon} alt='' />}
          </div>
        </label>
        <ul tabindex="0" class="flex justify-start mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

          <li className='mt-3 pl-2 text-emerald-700  text-xl'>{user.displayName}</li>
          <li className='mt-3 pl-2'>{user.email}</li>

          <div class="divider"></div>

          <li><a className='justify-between'><Link to='showProfile'>Your Porfile </Link></a></li>
          <li><a><Link to='showPortfolio'>Your Portfolio</Link></a></li>

          <li onClick={logout}><a>Sign Out</a></li>
        </ul>
      </div>

      {/* <li className="btn btn-ghost pt-4 sm:justify-start" onClick={logout}>Sign Out</li> */}

    </div>

      : <Link className='mt-3' to='login'><span className='font-medium hover:bg-cyan-500 hover:p-2 hover:rounded'>Login</span></Link>}

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl italic font-bold">Go <span className='text-orange-700'>Car</span>  Mechanic</a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

    </div>
  );
};

export default Navbar;