import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user',{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Delete Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index}></UserRow>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;