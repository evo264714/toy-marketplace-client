
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {
    const toys = useLoaderData();
    useTitle('Toy Details')
    const { toyName, pictureURL, price, sellerName, rating, subcategoryName, sellerEmail, description, availableQuantity } = toys || {}

    return (
        <div className="bg-gradient-to-r from-blue-900 to-black text-warning shadow-lg rounded-lg w-10/12 mx-auto my-14">
            <div className="flex">
                <div className="w-1/2 h-full">
                    <img src={pictureURL} alt="Toy" className=" h-80 w-80 mx-auto mt-2 rounded-xl"/>
                </div>
                <div className="p-6 w-1/2 text-center">
                    <h2 className="text-2xl font-bold mb-4">{toyName}</h2>
                    <p className="text-warning font-bold">Seller Name: <span className="text-gray-400">{sellerName}</span></p>
                    <p className="text-warning font-bold">Category: <span className="text-gray-400">{subcategoryName}</span></p>
                    <p className="text-warning font-bold">Seller Email: <span className="text-gray-400">{sellerEmail}</span></p>
                    <p className="text-warning font-bold">Price: $<span className="text-gray-400">{price}</span></p>
                    <p className="text-warning font-bold">Rating: <span className="text-gray-400">{rating}</span></p>
                    <p className="text-warning font-bold">Available Quantity: <span className="text-gray-400">{availableQuantity}</span></p>
                    <p className="text-warning font-bold">Description: <span className="text-gray-400">{description}</span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;