import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../Login/Config';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Button from 'react-bootstrap/Button';


const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <Button variant="danger"
                className='signout-btn'
                onClick={handleLogout}>
                Logout</Button>

        </div>
    )
}

export default Logout;