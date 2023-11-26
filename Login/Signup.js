
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Login/Config';
import '../App.css'
import Button from '@mui/material/Button';


const Signup = () => {

    const navigate = useNavigate();

    const [useremail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    const Signupdata = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, useremail, password,confirmpassword)
            .then((UserSign) => {
                const user = UserSign.user;
                console.log(user)
                navigate("/login")

            }).catch((err) => {
                console.log(err);
            });


    }

    return (
      <div>
         <div class="signup-box">
           <h1>Sign Up</h1>
            <form>
                <div>
                    <input
                        type='text'
                        label="Create Email"
                        placeholder='Email'
                        value={useremail}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        label="Create Password"
                        placeholder='Password'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        label="Create Password"
                        placeholder='Password'
                        value={confirmpassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
             <Button 
                variant="contained" 
                size="small"
                style={{marginTop:15}}
                onClick={Signupdata}>
                Sign up
                </Button>
               
            </form>
            <div>
                <p className='"para-2"'>Already you have account?{''}
                    <NavLink to='/login'>
                         Sign in
                    </NavLink>
                </p>
            </div>
        </div>
        </div>
    )
}



export default Signup;

