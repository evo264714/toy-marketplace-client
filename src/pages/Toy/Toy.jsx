import { useContext } from "react";
import { AuthContext } from './../../providers/AuthProvider';

const Toy = ({ toy }) => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <progress className="progress progress-success w-56" value="0" max="100"></progress>
      }
    
    const { sellerName, toyName, subcategoryName, price, availableQuantity, pictureURL } = toy || {};
    return (
        <div className="overflow-x-auto w-10/12 mx-auto">
            
            <table className="table table-compact w-full">
                <thead>
                    <tr  className="grid grid-cols-7">
                        <th className="flex items-center justify-center">Toy Picture</th>
                        <th className="flex items-center justify-center">Seller Name</th>
                        <th className="flex items-center justify-center">Toy Name</th>
                        <th className="flex items-center justify-center">Sub Category</th>
                        <th className="flex items-center justify-center">Price</th>
                        <th className="flex items-center justify-center">Available Quantity</th>
                        <th className="flex items-center justify-center">Others</th>
                        

                    </tr>
                </thead>
                <tbody>
                    <tr className="grid grid-cols-7">
                        <td className="h-32 w-24 flex justify-center items-center"><img src={pictureURL} alt="" /></td>
                        <td className="flex items-center text-xl font-semibold text-orange-500">{sellerName}</td>
                        <td className="flex items-center justify-center text-orange-500 font-semibold">{toyName}</td>
                        <td className="flex items-center justify-center text-orange-500 font-semibold">{subcategoryName}</td>
                        <td className="flex items-center justify-center text-orange-500 font-semibold">{price}</td>
                        <td className="flex items-center justify-center text-orange-500 font-semibold">{availableQuantity}</td>
                        <td className="flex items-center justify-center text-orange-500 font-semibold"><button className="btn btn-outline btn-accent">View Details</button></td>
                    </tr>


                </tbody>

            </table>
        </div>
    );
};

export default Toy;