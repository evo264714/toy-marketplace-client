import { useForm } from "react-hook-form";
import './AddAToy.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    useTitle('Add A Toy')
    const onSubmit = data => {
        console.log(data)
        fetch('https://toy-marketplace-server-mu-ten.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if (result.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay!'
                })
            }
        })
    };
    return (
        <form className="flex flex-col my-10 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="mx-auto">
                <div className="flex">
                    <input
                        className="text-input"
                        {...register("pictureURL")}
                        placeholder="Picture URL of the toy"

                    />
                    <input
                        className="text-input"
                        {...register("toyName")}
                        placeholder="Name of the toy"

                    />
                    <input
                        className="text-input"
                        {...register("sellerName")}
                        placeholder="Name of the Seller"

                    />
                </div>

                <div className="flex">
                    <input
                        className="text-input"
                        value={user?.email}
                        {...register("sellerEmail")}
                        type="email"
                    />


                    <select className="text-input" {...register("subcategoryName")}>
                        <option value="Lego City">Lego City</option>
                        <option value="Lego Architecture">Lego Architecture</option>
                        <option value="Lego Cars">Lego Cars</option>
                    </select>
                    <input
                        className="text-input"
                        {...register("price")}
                        placeholder="Set a price"

                    />
                </div>
                <div className="flex">
                    <input
                        className="text-input"
                        {...register("rating")}
                        placeholder="Rate your toy"

                    />
                    <input
                        className="text-input"
                        {...register("availableQuantity")}
                        placeholder="Available Quantity"

                    />


                    <input
                        className="text-input"
                        {...register("description")}
                        placeholder="Description"
                    />
                </div>
            </div>
            <input value="Add Toy" type="submit" className="btn btn-accent w-50 mx-auto mt-4" />
        </form>
    );
};

export default AddAToy;