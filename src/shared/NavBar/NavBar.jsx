import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import userPNG from "../../assets/user.png"

const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-10/12 mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <img className="h-20 ml-3" src={logo} alt="" />
                    <h2 className="text-3xl font-bold text-black ml-3 logo-text">Play Land</h2>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-outline btn-warning text-xl font-semibold mr-2">Home</Link>
                    <Link to='/allToys' className="btn btn-outline btn-warning text-xl font-semibold mr-2">All Toys</Link>
                    <Link to='/myToys' className="btn btn-outline btn-warning text-xl font-semibold mr-2">My Toys</Link>
                    <Link to='/addToys' className="btn btn-outline btn-warning text-xl font-semibold mr-2">Add A Toy</Link>
                    <Link to='/blogs' className="btn btn-outline btn-warning text-xl font-semibold mr-2">Blogs</Link>
                </div>
                <div className="navbar-end">
                    <Link>
                        <img className='h-12 rounded-full mr-8' src={userPNG} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;