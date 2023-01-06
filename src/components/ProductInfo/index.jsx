import './productInfo.css'
import Rating from "../Rating";
import Collapse from '../Collapse';

function ProductInfo (current) {
  const product = current.props

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
          <Rating rating={product.rating} />
        </div>

        <div className="productdropdown-container">
          <div className="productdropdown">
            <Collapse props={product.description} title={'Description'} />
          </div>
          <div className="productdropdown">
            <Collapse props={product.equipments} title={'Equipements'} />
          </div>
        </div>


      </div>
    )

}


export default ProductInfo