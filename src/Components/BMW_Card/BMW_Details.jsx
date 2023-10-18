import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BMW_Details = () => {
    const Cars = useLoaderData();
    const { id } = useParams();


    const selectedCard = Cars?.find(card => card._id === id);
    console.log(selectedCard)
    return (
        <div>
            <div className="max-w-md grid grid-cols-1  md:grid-cols-4 md:max-w-7xl gap-5 mx-auto">
                <div className="col-span-3  border">
                    <img className="rounded-lg w-full h-[80vh]" src={selectedCard.photo} alt={selectedCard.name} />
                </div>
                <div className="col-span-1 w-full bg-slate-100 p-5 border mx-auto shadow-lg rounded-lg">
                    <h1 className="text-center text-red-600 text-3xl font-bold">{selectedCard.name}</h1> <hr className="my-3" />
                    <p className="text-justify text-[#463d3d] my-3">{selectedCard.details}</p> <hr className="my-3" />
                    <p className="text-xl text-[#463d3d] font-semibold">Price: {selectedCard.price} $</p> <hr className="my-3" />
                    <div className="text-center">
                        <Rating className='text-3xl  text-amber-500'
                            initialRating={selectedCard.rating}
                            emptySymbol={<AiOutlineStar></AiOutlineStar>}
                            fullSymbol={<AiFillStar></AiFillStar>}
                            placeholderSymbol={<AiOutlineStar></AiOutlineStar>}
                        />
                    </div>
                    <div className="flex justify-evenly">
                        <button className="btn btn-outline btn-sm">Add to cart</button>
                        <button className="btn btn-outline btn-sm">Delete</button>
                    </div>
                    <div className="text-center my-2">
                        <Link to={"/bmw_cars"} className="btn w-[85%] btn-outline btn-sm">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMW_Details;