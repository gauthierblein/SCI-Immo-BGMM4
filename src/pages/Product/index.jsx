import { useParams } from 'react-router-dom'
import Header from "../../components/Header"
import ProductInfo from '../../components/ProductInfo'
import Error404 from '../../pages/Error404'
import data from '../../data.json'
import SlideShow from '../../components/SlideShow'
import Footer from "../../components/Footer"

function Product () {
  const id = useParams('/products=')
  const listProducts = Object.values(data)
  const product = listProducts.find((product) => product.id === id.Id);

  if (product) {
    return (
      <div>
        <Header/>
        <SlideShow props={product.pictures}/>
        <ProductInfo props={product}/>
        <Footer/>
      </div>

    )
  } else {
    return <Error404/>
  }
}


export default Product
