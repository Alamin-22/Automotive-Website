import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ Anews }) => {
    console.log(Anews)
    const { id, date, title, imageSrc, description } = Anews;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={imageSrc} alt="Shoes" className='h-[244px]' /></figure>
                <div className="card-body">
                    <p>{date}</p>
                    <h2 className="card-title">{title}</h2>
                    <p>{description.slice(0, 60)}... Click Details for full news</p>
                    <div className="card-actions justify-end">
                        <Link to={`/news/${id}`} className='btn btn-outline btn-sm'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    Anews: PropTypes.object.isRequired,
};

export default NewsCard;




