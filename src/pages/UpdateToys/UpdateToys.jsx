import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const UpdateToys = () => {

    const toys = useLoaderData();
    const { _id, price, availableQuantity, description } = toys
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onUpdate = data => {
        console.log(data)
        fetch(`https://toy-marketplace-server-mu-ten.vercel.app/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay!'
                    }
                    );
                }

            })
    };

    return (
        <form className="flex flex-col my-10 mx-auto" onSubmit={handleSubmit(onUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="mx-auto">


                <div className="flex">

                    <input
                        className="text-input"
                        {...register("price")}
                        defaultValue={price}
                        placeholder="Price"

                    />


                    <input
                        className="text-input"
                        {...register("availableQuantity")}
                        defaultValue={availableQuantity}
                        placeholder="Available Quantity"

                    />


                    <input
                        className="text-input"
                        {...register("description")}
                        defaultValue={description}
                        placeholder="Description"
                    />
                </div>
            </div>
            <input value="Update Toy" type="submit" className="btn btn-accent w-50 mx-auto mt-4" />
        </form>
    );
};

export default UpdateToys;