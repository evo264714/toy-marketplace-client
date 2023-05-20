
const ToyCard = ({ toy }) => {
    console.log(toy);
    const { toyName, pictureURL, price, rating } = toy;
    return (
        <div className="flex justify-center">
            <div className="card w-96 bg-black shadow-xl my-10">
                <figure><img className="h-60 w-full rounded-xl" src={pictureURL} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-cyan-300">{toyName}</h2>
                    <p className="text-warning font-semibold text-xl">Price: ${price}</p>
                    <p className="text-red-300 font-semibold text-xl">Rating: {rating}</p>
                    
                    <div className="card-actions flex justify-center">
                        <button className="btn btn-accent ">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;