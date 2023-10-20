import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BMW_Details = () => {
    const Cars = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();



    const selectedCard = Cars?.find(card => card._id === id);
    // console.log(selectedCard)

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/car/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                            navigate("/")
                        }

                    })


            }
        })

    }


    const Handle_Add_Cart = (selectedCard) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Add to Cart!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/added_cart`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(selectedCard)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire(
                                'Great!',
                                'Your Car has been Added In Cart.',
                                'success'
                            );
                        }
                    });
            }
        });
    };



    return (
        <div>
            <div className="max-w-md grid grid-cols-1  md:grid-cols-4 md:max-w-7xl gap-5 mx-auto">
                <div className="col-span-3  ">
                    <img className="rounded-lg w-full h-[80vh]" src={selectedCard.photo} alt={selectedCard.name} />
                </div>
                <div className="col-span-1 w-full bg-slate-100 p-5  mx-auto shadow-lg rounded-lg">
                    <h1 className="text-center text-red-600 text-3xl font-bold">{selectedCard.name}</h1> <hr className="my-3" />
                    <p className="text-justify text-[#463d3d] my-3">{selectedCard.details}</p> <hr className="my-3" />
                    <p className="text-xl text-[#463d3d] font-semibold">Price: {selectedCard.price} $</p> <hr className="my-3" />
                    <p className="text-xl text-[#463d3d] font-semibold">Available: {selectedCard.quantity} </p> <hr className="my-3" />
                    <div className="text-center">
                        <Rating className='text-3xl  text-amber-500'
                            initialRating={selectedCard.rating}
                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                            fullSymbol={<AiFillStar></AiFillStar>}
                            placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                        />
                    </div>
                    <div className="flex justify-evenly">
                        <button onClick={() => Handle_Add_Cart(selectedCard)} className="btn btn-outline btn-sm">Add to cart</button>
                        <button onClick={() => handleDelete(selectedCard._id)} className="btn btn-outline btn-sm">Delete</button>
                    </div>
                    {/* <div className="text-center my-2">
                        <Link to={"/"} className="btn w-[85%] btn-outline btn-sm">Back</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BMW_Details;