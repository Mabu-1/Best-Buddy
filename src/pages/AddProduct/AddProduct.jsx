import axios from "axios";
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleData = async (e) => {
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

        try {
            const res = await axios.post("http://localhost:5000/products", myData);
            if (res.data.acknowledged) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset(); // Reset the form to clear the input fields
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center mb-5">
            <div className="lg:w-[800px] md:w-[600px] sm:w-[300px]">
                <h1 className="text-center text-7xl mb-4">Add Product</h1>
                <form onSubmit={handleData} action="">
                    <input type="text" name="image" id="" placeholder="Product Image" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="name" id="" placeholder="Product Name" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="brand" id="" placeholder="Brand Name" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="type" id="" placeholder="Product Type" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="price" id="" placeholder="Price" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="description" placeholder="Description" id="" className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <input type="text" name="rating" placeholder="Rating 1 to 5"  id=""  className="w-full border-3 bg-[#edd4d2] p-[7px] rounded-xl mb-4" />
                    <br />
                    <div className="flex justify-center">
                        <button className="bg-[#af9795] p-3 rounded-xl" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
