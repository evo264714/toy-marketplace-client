import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToy from "../MyToy/MyToy";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [sortValue, setSortValue] = useState(1)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSelectChange = (event) => {
        const SortData = event.target.value;
        setSortValue(SortData);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}?sort=${sortValue}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user, sortValue])
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then(result => { // Use the result from Swal.fire()
            if (result.isConfirmed) { // Check if the user confirmed
                fetch(`https://toy-marketplace-server-mu-ten.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                    });
            }
        });
    };

    return (
        <>
            <div>
                <h2>Sort by</h2>
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <select onChange={(e) => onSelectChange(e)} className="text-input" name="sortData">
                    <option value="1">High to low</option>
                    <option value="-1">Low to high</option>
                </select>
                {/* </form> */}
            </div>
            <div>
                {
                    myToys.map(myToy => <MyToy myToy={myToy} key={myToy._id} handleDelete={handleDelete} ></MyToy>)
                }
            </div>
        </>
    );
};

export default MyToys;