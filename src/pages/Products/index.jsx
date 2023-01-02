import { useParams } from 'react-router-dom'

function Products() {
  const {productNumber} = useParams()
  
  return (
    <div>
      <h1>Nos produits</h1>
      <h2>Produit {productNumber}</h2>
    </div>
  )
}

export default Products
