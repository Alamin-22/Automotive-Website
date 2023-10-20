import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
const MyCart_Card = ({ Cart, Carts, setCarts }) => {
    const { _id, photo, name, price, brand, rating } = Cart;



    const handle_CartDelete = _id => {
        // console.log(_id)
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

                fetch(`http://localhost:5000/added_cart/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remainingCart = Carts.filter(cart => cart._id !== _id);
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
        <div>
            <div className="card lg:card-side bg-stone-200 text-gray-700 shadow-xl">
                <figure><img className="w-[350px] h-[200px]" src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Company: <span className="text-lg font-medium text-red-400">{brand}</span></p>
                    <p>Price: <span className="text-lg font-semibold ">{price} $</span></p>
                    <div className="">
                        <Rating className='  text-amber-500'
                            initialRating={rating}
                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                            fullSymbol={<AiFillStar></AiFillStar>}
                            placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                        />
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handle_CartDelete(_id)} className="btn btn-outline btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
MyCart_Card.propTypes = {
    Cart: PropTypes.object,
    setCarts: PropTypes.func,
    Carts: PropTypes.array,
};

export default MyCart_Card;








