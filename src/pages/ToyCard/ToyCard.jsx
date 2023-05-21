import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {

    const { _id, toyName, pictureURL, price, rating } = toy;

    const navigate = useNavigate()

    const handleViewDetails = (id) => {
        Swal.fire({
            title: "Forbidden!!!",
            text: "You Have To Login First",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete!",
          }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/toyDetails/${_id}`)
            }
          });

    }
    
    // 


    



    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-black shadow-xl my-10">
                <figure><img className="h-60 w-full rounded-xl" src={pictureURL} alt="Unavailable URL" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-cyan-300">{toyName}</h2>
                    <p className="text-warning font-semibold text-xl">Price: ${price}</p>
                    <p className="text-red-300 font-semibold text-xl mb-4">Rating: {rating}</p>

                    <div className="card-actions flex justify-center">
                        <button onClick={() => handleViewDetails(_id)} className="btn btn-accent ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;