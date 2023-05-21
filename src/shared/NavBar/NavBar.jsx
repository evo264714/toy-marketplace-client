import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import userPNG from "../../assets/user.png"

const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>console.log(error))
    }
    return (
        <div className="bg-gradient-to-r from-black to-blue-900 w-10/12 mx-auto">
            <div className="navbar flex justify-between">
                <div className="">
                    <img className="h-20 ml-3" src={logo} alt="" />
                    <h2 className="text-3xl font-bold text-warning ml-3 logo-text">Play Land</h2>
                </div>
                <div className="">
                    <Link to='/' className="btn btn-outline btn-warning text-xl font-semibold mr-1">Home</Link>
                    <Link to='/allToys' className="btn btn-outline btn-warning text-xl font-semibold mr-1">All Toys</Link>
                    {user && <Link to='/myToys' className="btn btn-outline btn-warning text-xl font-semibold mr-1">My Toys</Link>}
                    {user && <Link to='/addToy' className="btn btn-outline btn-warning text-xl font-semibold mr-1">Add A Toy</Link>}
                    <Link to='/blogs' className="btn btn-outline btn-warning text-xl font-semibold mr-2">Blogs</Link>
                </div>
                <div className=''>
                {user && <img className='w-10 rounded-full mr-2' title={user?.displayName} src={user?.photoURL} />}

                {user ?

                    <button onClick={handleLogOut} className="btn btn-outline btn-warning text-xl font-semibold ">
                        LogOut
                    </button> :
                    <Link to='/login'>
                        <button className="btn btn-outline btn-warning text-xl font-semibold">Login</button>
                    </Link>
                }

            </div>
            </div>
        </div>
    );
};

export default NavBar;