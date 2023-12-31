import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../../hooks/useTitle";

const Registration = () => {

    const { createUser, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    useTitle('Registration')

    const handleRegistration = event => {
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password) 
        .then(result =>{
            const user = result.user;
            console.log(user);
            updateProfile(auth.currentUser,{
                displayName: name, photoURL: photo
            })
            .then(() =>{
                
            })
            .catch(error =>{
                console.log(error);
            })
            setError('')
            form.reset();
            setSuccess('Successfully Registered')
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-1">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">Registration</h2>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block text-gray-700">Photo URL:</label>
                            <input
                                type="text"
                                name="photo"
                                id="photoUrl"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your photo URL"
                            />
                        </div>
                        <input
                            type="submit"
                            value='Register'
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        />
                        
                        <label>
                            <span className="text-red-600">{error}</span>
                            <span className="text-green-600">{success}</span>
                        </label>

                        <p className="mt-4">Already Have An Account? Please Login

                            <Link className="underline" to='/login'> Here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;