import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                
                <h2 className='m-5 text-3xl text-center font-bold text-purple-700'>Dashboard</h2>
                <Outlet></Outlet>

                

            </div>
            <div class="drawer-side mt-6">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    <li><Link to='/dashboard/createProfile'>Create Profile</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    <li><Link to='/dashboard/createPortfolio'>Create Portfolio</Link></li>
                    <li><Link to='/dashboard/portfolio'>My Portfolio</Link></li>




                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreview'>Add Review</Link></li>


                    
                    <li><Link to='/dashboard/addTools'>Add A Tools</Link></li>
                    <li><Link to='/dashboard/manageTools'>Manage Tools</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                    <li><Link to='/dashboard/showAllProfile'>Show All Profile</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;