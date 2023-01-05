import { Link } from 'react-router-dom'
import data from '../../data.json'
import './card.css'

function Card() {
    return (
        <div className='gallery'>
            {data.map((loc, index) => (  
                <Link className="thumb__link" to={`/products/${loc.id}`} key={(loc.id)}>
                        <img className='thumb__img'src={loc.cover} alt={loc.title}/>
                        <h2 className='thumb__title'>{loc.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Card