import { useParams } from 'react-router-dom'
import ProductInfo from '../../components/ProductInfo'
import Page404 from '../../components/ErrorPageNotFound'
import data from '../../data.json'
import SlideShow from '../../components/SlideShow'

const Product = () => {

  const id = useParams('/products=')
  const listProducts = Object.values(data)
  const product = listProducts.find((product) => product.id === id.Id);

  if (product) {
    return (
      <div>
        <SlideShow props={product.pictures}/>
        <ProductInfo props={product}/>
      </div>

    )
  } else {
    return <Page404 />
  }
}


export default Product
