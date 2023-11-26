import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Login/Config';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css'
import Button from '@mui/material/Button';


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then((userLogin) => {
                const user = userLogin.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div>
            <div class="login-box">
                <h1>Login</h1>
                <form>
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            required
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button 
                        variant="contained" 
                        size="small"
                        style={{marginTop:15}}
                        onClick={onLogin}>
                        Login
                        </Button>
                    </div>
                    <p className="para-2">
                    No account yet? {' '}
                    <NavLink to="/signup">
                        Sign up
                    </NavLink>
                </p>
                   </form>
               </div>
        </div>
    )
}

export default Login;



