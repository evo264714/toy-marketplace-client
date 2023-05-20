import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-100"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>

    
};

export default PrivateRoute;