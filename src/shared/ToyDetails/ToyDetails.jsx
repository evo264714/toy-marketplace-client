
import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toys = useLoaderData();
    const { toyName, pictureURL, price, sellerName, rating, subcategoryName, sellerEmail, description, availableQuantity } = toys || {}

    return (
        <div className="bg-gradient-to-r from-blue-900 to-black text-warning shadow-lg rounded-lg w-10/12 mx-auto my-14">
            <div className="flex">
                <div className="w-1/2 h-full">
                    <img src={pictureURL} alt="Toy" className=" h-80 w-80 mx-auto mt-2 rounded-xl"/>
                </div>
                <div className="p-6 w-1/2 text-center">
                    <h2 className="text-2xl font-bold mb-4">{toyName}</h2>
                    <p className="text-gray-400">Seller Name: {sellerName}</p>
                    <p className="text-gray-400">Category: {subcategoryName}</p>
                    <p className="text-gray-400">Seller Email: {sellerEmail}</p>
                    <p className="text-gray-400">Price: ${price}</p>
                    <p className="text-gray-400">Rating: {rating}</p>
                    <p className="text-gray-400">Available Quantity: {availableQuantity}</p>
                    <p className="text-gray-400 ">Description: {description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;