import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { useForm } from "react-hook-form";

const AllToys = () => {


    const [toys, setToys] = useState([]);
    const [searchTxt, setSearchTxt] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/allToys?toyName=${searchTxt}`)
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })
    }, [searchTxt])

    const handleSearch = (data) => {
        const searchStr = data.searchStr
        setSearchTxt(searchStr);
    };

    
    return (
        <div>
            <form onSubmit={handleSubmit(handleSearch)}>
                <input
                    className="text-input"
                    {...register("searchStr")}
                    placeholder="Search"
                    onSubmit={handleSearch}

                />
                 <input value="Add Toy" type="submit" className="btn btn-accent w-50 mx-auto mt-4" />
       
            </form>

            {

                toys.map(toy => <Toy
                    key={toy._id}
                    toy={toy}
                >

                </Toy>)
            }

        </div>
    );
};

export default AllToys;