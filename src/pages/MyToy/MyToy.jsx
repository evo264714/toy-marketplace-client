import { Link } from "react-router-dom";

const MyToy = ({ myToy, handleDelete }) => {
    // console.log(myToy);

    const { _id, sellerName, toyName, subcategoryName, price, availableQuantity, pictureURL, description } = myToy;
    
    return (
        <table className="table table-compact w-full">
            <thead>
                <tr className="grid grid-cols-9">
                    <th className="flex items-center justify-center">Toy Picture</th>
                    <th className="flex items-center justify-center">Seller Name</th>
                    <th className="flex items-center justify-center">Toy Name</th>
                    <th className="flex items-center justify-center">Sub Category</th>
                    <th className="flex items-center justify-center">Price</th>
                    <th className="flex items-center justify-center">Available Quantity</th>
                    <th className="flex items-center justify-center">Description</th>
                    <th className="flex items-center justify-center">Actions</th>
                    <th className="flex items-center justify-center">Actions</th>


                </tr>
            </thead>
            <tbody>
                <tr className="grid grid-cols-9">
                    <td className="h-32 w-24 flex justify-center items-center"><img src={pictureURL} alt="" /></td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{sellerName}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{toyName}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{subcategoryName}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{price}</td>
                    <td className="flex items-center justify-center text-xl font-semibold text-orange-500">{availableQuantity}</td>
                    <td className="flex items-center justify-center text-xl font-semibold text-orange-500">{description}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold"><Link to={`/updateToys/${_id}`}><button className="btn btn-outline btn-accent">Update</button></Link></td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold"><button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button></td>
                </tr>


            </tbody>

        </table>
    );
};

export default MyToy;