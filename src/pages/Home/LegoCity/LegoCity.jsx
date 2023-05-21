import ToyCard from "../../ToyCard/ToyCard";


const LegoCity = ({toys}) => {
    // console.log(toys);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                toys.map(toy => <ToyCard toy={toy} key={toy._id}></ToyCard>)
            }
        </div>
    );
};

export default LegoCity;