import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const My_Cart = () => {
    const AddedCarts = useLoaderData();

    const [Carts, setCarts] = useState(AddedCarts);
    const handle_CartDelete = id => {
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

                fetch(`http://localhost:5000/added_cart/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingCart = Carts.filter(cart => cart._id !== id);
                            setCarts(remainingCart);
                            Swal.fire(
                                'Deleted!',
                                'Your Car has been deleted.',
                                'success'
                            )
                        }

                    })


            }
        })

    }

   


    return (
        <div className="max-w-7xl px-3  mx-auto my-10">
            <div className=" grid lg:grid-cols-2 gap-5">
                {
                    Carts.map((Cart, idx) =>
                        <div key={idx}>
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img className="w-[350px] h-[200px]" src={Cart.photo} alt="Album" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{Cart.name}</h2>
                                    <p>Company: <span className="text-lg font-medium text-red-400">{Cart.brand}</span></p>
                                    <p>Price: <span className="text-lg font-semibold ">{Cart.price} $</span></p>
                                    <div className="">
                                        <Rating className='  text-amber-500'
                                            initialRating={Cart.rating}
                                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                            fullSymbol={<AiFillStar></AiFillStar>}
                                            placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                                        />
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button onClick={() => handle_CartDelete(Cart._id)} className="btn btn-outline btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default My_Cart;