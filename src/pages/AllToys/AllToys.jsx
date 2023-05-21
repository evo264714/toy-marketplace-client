import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {


    const [toys, setToys] = useState([]);
    const [searchTxt, setSearchTxt] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    useTitle('All Toys')

    useEffect(() => {
        fetch(`https://toy-marketplace-server-mu-ten.vercel.app/allToys?toyName=${searchTxt}`)
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
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(handleSearch)}>
                    <input
                        className="text-input"
                        {...register("searchStr")}
                        placeholder="Search"
                        onSubmit={handleSearch}

                    />
                    <input value="Search" type="submit" className="btn btn-accent w-40 h-16 mx-auto mt-4" />

                </form>
            </div>

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