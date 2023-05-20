// import { Link, useLocation, useNavigate } from "react-router-dom";
import loginIMG from '../../../assets/login.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const {signIn, googleProvider, auth} = useContext(AuthContext);
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            // navigate(from, {replace: true})
        })
        .catch(error => setError(error.message))
    }
    const handleGoogleSignIn = () =>{
        setError('');
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            
            const user = result.user;
            console.log(user);
            setError('');

        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-1">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your password"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Login"
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
                        />
                        <button onClick={handleGoogleSignIn} className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login With Google</button>
                        <span className='text-red-600'>{error}</span>
                            
                        
                        <p className="mt-4">New to Play Land? Sign Up <Link 
                        
                        to='/registration'
                        className="underline "
                        
                        >Here</Link></p>
                    </form>
                </div>
            </div>
            <div className="flex-1 ml-8">
                <div className="flex flex-col items-center space-y-4 h-full text-black text-center">
                    <h1 className="text-4xl font-bold">Welcome Back!</h1>
                    <br />
                    <p className="text-lg">Please log in to continue.</p>
                    <img className="h-96 w-96" src={loginIMG} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LogIn;