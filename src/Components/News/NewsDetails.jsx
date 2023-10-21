import { Link, useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
    const News = useLoaderData();
    const { id } = useParams();
    const idInt = parseFloat(id);


    const selectedCard = News?.find(card => card.id === idInt);

    return (
        <div>

            <div className="card w-[70%] mx-auto card-compact bg-stone-200 text-gray-700 shadow-xl">
                <figure><img src={selectedCard.imageSrc} alt="Shoes" className='h-[60vh] w-full' /></figure>
                <div className="card-body">
                    <p>{selectedCard.date}</p>
                    <h2 className="card-title">{selectedCard.title}</h2>
                    <p>{selectedCard.description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/`} className='btn btn-outline btn-sm'>Back Home</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;