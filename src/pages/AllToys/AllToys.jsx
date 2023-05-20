import { useEffect, useState } from "react";
import Toy from "../Toy/Toy";

const AllToys = () => {


    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState(''); 
    console.log(searchText);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setToys(result);
            })
    }, [])

    const handleSearch = () =>{
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
        .then(res => res.json())
      .then((data) => {
        setToys(data);
      });
  };
        return (
            <div>
                <form className="text-center my-10 ">
                    <input onChange={(e) =>setSearchText(e.target.value)} className="border border-warning p-4 rounded-s-xl"
                        type="text"
                        placeholder="Search..."
                    />
                    <button onClick={handleSearch} className="rounded-e-xl bg-warning p-4" type="submit">Search</button>
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