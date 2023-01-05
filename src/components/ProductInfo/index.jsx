import { useParams } from 'react-router-dom'
import './productInfo.css'

import data from '../../data.json'

function ProductInfo () {

  const id = useParams('/products=')
  const listProducts = Object.values(data)
  const product = listProducts.find((product) => product.id === id.Id);

    return (
      <div className='productInfo__container'>
        <div className='productInfo__header'>
            <h2 className='productInfo__title'>{product.title}</h2>
            <div className='productInfo__host'>
                <h3 className='productInfo__host-name'>{product.host.name}</h3>
                <img className='productInfo__host-img' src={product.host.picture} alt="{product.host.name}" />
            </div>
        </div>
        <h3 className='productInfo__location'>{product.location}</h3>
        <div className="product__tagsAndRatings">
            <ul className="product__tags">
            {product.tags.map((k, index) => (
                 <li className="product__tag" key={index}>
                    {k}
                </li>
            ))}
          </ul>
          <div className="product__rating">
            {product.rating}
          </div>
        </div>
        <div className="dropdown-parent">
            <p> Description : {product.description}  </p>
            <p> Equipements : {product.equipments}  </p>
      </div>
      </div>
    )

}


export default ProductInfo