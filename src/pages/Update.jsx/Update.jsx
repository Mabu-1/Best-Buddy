import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { useRef } from "react";

const Update = () => {
    const prouctUpdate = useLoaderData();
    const { _id, name, image, brand, description, price, rating, type } = prouctUpdate;

    const formRef = useRef(null); // Create a ref for the form element

    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;
        const myData = {
            image: form.image.value,
            name: form.name.value,
            brand: form.brand.value,
            type: form.type.value,
            price: form.price.value,
            description: form.description.value,
            rating: form.rating.value
        };

        // Send data to the server
        fetch(`https://best-buddy-server.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    // Reset the form
                    formRef.current.reset();
                }
            });
    };

    return (
        <div className="flex justify-center mb-5">
            <div className="lg:w-[800px] md:w-[600px] sm:w-[300px]">
                <h1 className="text-center text-7xl mb-4">Update Product</h1>
                <form ref={formRef} onSubmit={handleUpdate} action="">
                    <input type="text" name="image" id="" defaultValue={image} placeholder="Product Image" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="name" id="" defaultValue={name} placeholder="Product Name" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="brand" id="" defaultValue={brand} placeholder="Brand Name" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="type" id="" defaultValue={type} placeholder="Product Type" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="price" id="" defaultValue={price} placeholder="Price" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="description" defaultValue={description} placeholder="Description" id="" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="rating" placeholder="Rating 1 to 5" defaultValue={rating} id="" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <div className="flex justify-center">
                        <button className="bg-[#af9795] p-3 rounded-xl" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
