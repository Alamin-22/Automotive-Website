import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const Selected_Car = useLoaderData();
    const { _id, name, brand, type, price, rating, photo, quantity, details } = Selected_Car;
    const navigate = useNavigate();
  


    const Update_Product = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const UpdateCar = { name, quantity, brand, type, price, rating, details, photo };
        // console.log(UpdateCar);

        // send data to the server
        fetch(`http://localhost:5000/car/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UpdateCar)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire('Updated!!', 'Car Update successfully', 'success')
                    navigate("/")
                }
            })

    }
    return (
        <div>
            <form onSubmit={Update_Product} >
                <div className=" p-3 md:p-10 lg:p-24 ">
                    <h1 className="text-3xl text-center font-bold">Update Product</h1>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Car Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form brand row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" defaultValue={brand} className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" defaultValue={type} className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" defaultValue={price} className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" defaultValue={rating} className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form price and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <textarea className="textarea textarea-bordered w-full h-64" defaultValue={details} name="details" required placeholder="Write The product details here........"></textarea>
                        </label>
                    </div>
                    <input type="submit" value="Add Card" className="btn btn-block my-3 btn-outline" />

                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;