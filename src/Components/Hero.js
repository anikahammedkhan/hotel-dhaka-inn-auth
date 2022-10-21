import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';

const Hero = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content py-24">
                <div className="max-w-md">
                    {
                        user?.email ? <h3 className="mb-5 text-5xl font-bold">Hello {user.displayName} <br />Welcome To <br /> Hotel Dhaka Inn</h3> : <h1 className="mb-5 text-5xl font-bold">Welcome To <br /> Hotel Dhaka Inn</h1>
                    }
                    <p className="mb-5">The Best Hotel in town. <br />
                        Come, stay and enjoy your day. </p>
                    <button className="btn btn-primary rounded-lg hover:btn-info"><Link to="/packages">Packages</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;