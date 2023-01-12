import './productInfo.css'
import Rating from "../Rating";
import Collapse from '../Collapse';

function ProductInfo (current) {
  const product = current.props

    return (
    <>
      <div className='productInfo__container'>
        <div className='container-left'>
          <h2 className='productInfo__title'>{product.title}</h2>
          <h3 className='productInfo__location'>{product.location}</h3>
          <ul className="product__tags">
            {product.tags.map((k, index) => (
                 <li className="product__tag" key={index}>
                    {k}
                </li>
            ))}
          </ul>
        </div>
        <div className='container-right'>
            <Rating rating={product.rating} />
            <div className='productInfo__host'>
              <h3 className='productInfo__host-name'>{product.host.name}</h3>
              <img className='productInfo__host-img' src={product.host.picture} alt="{product.host.name}" />
            </div>
        </div>
      </div>

      <div className="productdropdown-container">
        <div className="productdropdown">
          <Collapse props={product.description} title={'Description'} />
        </div>
        <div className="productdropdown">
          <Collapse props={product.equipments} title={'Equipements'} />
        </div>
      </div>
    </>
    )
}


export default ProductInfo