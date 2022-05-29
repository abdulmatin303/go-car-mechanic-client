import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    // console.log("ami ki admin: ", admin);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                {/* <h2 className='m-4 text-2xl font-bold text-center text-purple-700'>Create Your Profile</h2> */}
                <Outlet></Outlet>



            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <div>
                            <h2 className='m-4 text-2xl font-bold text-purple-700'>Dashboard</h2>

                            <li><Link to='/dashboard/createProfile'>Create Profile</Link></li>
                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                            <li><Link to='/dashboard/createPortfolio'>Create Portfolio</Link></li>
                            <li><Link to='/dashboard/portfolio'>My Portfolio</Link></li>
                            <li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/myreview'>Add Review</Link></li>
                        </div>
                    }

                    { admin &&
                        <div>
                            <li><Link to='/dashboard/createProfile'>Create Profile</Link></li>
                            <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                            <li><Link to='/dashboard/showAllProfile'>Show All Profile</Link></li>
                            <li><Link to='/dashboard/addTools'>Add A Tools</Link></li>
                            <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li>
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/manageAllOrder'>Manage All Order</Link></li>
                        </div>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;