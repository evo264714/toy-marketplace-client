import { Link, useRouteError } from "react-router-dom";
import './NotFoundPage.css'
import img from '../../assets/notfound.jpg'

const NotFoundPage = () => {
    const {error} = useRouteError();
    return (
        <div className="error-container">
            <div className="error-container-1">
                <img className="error-img" src={img} alt="" />
                <p className="error-para">{error?.message}</p>
                <Link className="error-homepage" to='/'>Go back to homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;