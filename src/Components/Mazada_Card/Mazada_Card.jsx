import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from 'prop-types';
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Mazada_Card = ({ Single_mazada }) => {
    // console.log(Single_mazada)
    const { _id, name, brand, type, price, rating, photo, quantity } = Single_mazada;
    return (
        <div>
            <div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className='relative'>
                            <img src={photo} alt={name} className='w-full h-[240px]' />
                            <div className=" absolute top-0 right-0 badge badge-neutral text-xl">{price} $</div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title ">
                                {name}
                            </h2>
                            <div className='flex text-xl font-medium'>
                                <p className='mr-6'>Brand: {brand}</p>
                                <p className='ml-6'>Type: {type}</p>
                            </div>
                            <p className="text-xl text-[#463d3d] font-semibold">Available: {quantity} </p>
                            {/* rating */}
                            <div>
                                <Rating className='text-2xl text-amber-500'
                                    initialRating={rating}
                                    emptySymbol={<AiOutlineStar></AiOutlineStar>}
                                    fullSymbol={<AiFillStar></AiFillStar>}
                                    placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                                />
                            </div>
                            <div className="card-actions justify-evenly">
                                <Link className="btn btn-xs btn-outline">Update</Link>
                                <Link to={`/details/${_id}`} className="btn btn-xs btn-outline">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Mazada_Card.propTypes = {
    Single_mazada: PropTypes.object.isRequired,
};
export default Mazada_Card;