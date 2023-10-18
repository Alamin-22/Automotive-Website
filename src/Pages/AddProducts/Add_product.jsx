import Swal from "sweetalert2";

const Add_product = () => {

    const add_Product = e => {
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
        const NewCar = { name, quantity, brand, type, price, rating, details, photo };
        // console.log(NewCar);

        // send data to the server
        fetch('http://localhost:5000/car', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(NewCar)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire( 'Great!!',  'Car Added successfully','success' )
                }
            })
    }
    return (
        <div>
            <form onSubmit={add_Product} >
                <div className="bg-[#F4F3F0] p-24">
                    <h1 className="text-3xl text-center font-bold">Add Product</h1>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Car Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Car Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
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
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" required/>
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
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form price and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Card" className="btn btn-block bg-[#D2B48C] hover:bg-[#D2B48C]" />

                </div>
            </form>
        </div>
    );
};

export default Add_product;


