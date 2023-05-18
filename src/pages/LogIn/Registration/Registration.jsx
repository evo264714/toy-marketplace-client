import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex-1">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-semibold mb-4">Registration</h2>
                    <form>
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
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Register
                        </button>
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