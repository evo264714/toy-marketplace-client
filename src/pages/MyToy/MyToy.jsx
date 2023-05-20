
const MyToy = ({ myToy }) => {
    console.log(myToy);
    const { sellerName, toyName, subcategoryName, price, availableQuantity, pictureURL } = myToy;
    return (
        <table className="table table-compact w-full">
            <thead>
                <tr className="grid grid-cols-8">
                    <th className="flex items-center justify-center">Toy Picture</th>
                    <th className="flex items-center justify-center">Seller Name</th>
                    <th className="flex items-center justify-center">Toy Name</th>
                    <th className="flex items-center justify-center">Sub Category</th>
                    <th className="flex items-center justify-center">Price</th>
                    <th className="flex items-center justify-center">Available Quantity</th>
                    <th className="flex items-center justify-center">Actions</th>
                    <th className="flex items-center justify-center">Actions</th>


                </tr>
            </thead>
            <tbody>
                <tr className="grid grid-cols-8">
                    <td className="h-32 w-24 flex justify-center items-center"><img src={pictureURL} alt="" /></td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{sellerName }</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{toyName }</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{ subcategoryName}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold">{ price}</td>
                    <td className="flex items-center justify-center text-xl font-semibold text-orange-500">{ availableQuantity}</td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold"><button className="btn btn-outline btn-accent">Update</button></td>
                    <td className="flex items-center justify-center text-orange-500 font-semibold"><button className="btn btn-outline btn-error">Delete</button></td>
                </tr>


            </tbody>

        </table>
    );
};

export default MyToy;