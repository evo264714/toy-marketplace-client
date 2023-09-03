import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import './NavBar.css';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    useEffect(() => {
        const navbarToggle = document.getElementById('navbar-toggle');
        const navbarCollapse = document.getElementById('navbar-collapse');

        navbarToggle.addEventListener('click', () => {
            navbarCollapse.classList.toggle('hidden');
        });
    }, []);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="bg-gradient-to-r from-black to-blue-900 w-full mx-auto">
            <div className="navbar flex justify-between flex-wrap">
                <div className="flex items-center">
                    <img className="h-20 ml-3" src={logo} alt="" />
                    <h2 className="text-3xl font-bold text-warning ml-3 logo-text">Play Land</h2>
                </div>
                <div className="flex items-center">
                    <button
                        id="navbar-toggle"
                        className="navbar-toggler btn btn-outline btn-warning text-xl font-semibold mr-2 md:hidden"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div id="navbar-collapse" className="hidden md:flex flex-grow">
                        <div className="flex items-center">
                            <Link to="/" className="btn btn-outline btn-warning text-xl font-semibold mr-1">Home</Link>
                            <Link to="/allToys" className="btn btn-outline btn-warning text-xl font-semibold mr-1">All Toys</Link>
                            {user && <Link to="/myToys" className="btn btn-outline btn-warning text-xl font-semibold mr-1">My Toys</Link>}
                            {user && <Link to="/addToy" className="btn btn-outline btn-warning text-xl font-semibold mr-1">Add A Toy</Link>}
                            <Link to="/blogs" className="btn btn-outline btn-warning text-xl font-semibold mr-2">Blogs</Link>
                        </div>
                        <div className="flex items-center">
                           
                            {user ? (
                                <button
                                    onClick={handleLogOut}
                                    className="btn btn-outline btn-warning text-xl font-semibold mr-1"
                                >
                                    Log Out
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button className="btn btn-outline btn-warning text-xl font-semibold">Login</button>
                                </Link>
                            )}
                             {user && (
                                <img className="w-10 rounded-full mr-2" title={user?.displayName} src={user?.photoURL} alt="" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;