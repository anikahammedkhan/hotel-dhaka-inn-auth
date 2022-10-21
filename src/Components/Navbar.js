import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Hotel Dhaka Inn</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/packages'>Packages</Link></li>
                    <li><Link to='/bookings'>Your Bookings</Link></li>
                    {
                        user?.email ? <li><button onClick={handleSignOut}>Logout</button></li> : <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;