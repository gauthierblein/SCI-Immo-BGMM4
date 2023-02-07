import './productInfo.css'
import Collapse from '../Collapse';

function ProductInfo (current) {
  console.log(current)
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