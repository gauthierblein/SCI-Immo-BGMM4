import { useParams } from 'react-router-dom'

function Products() {
  const {id} = useParams('/produit=')
  
  return (
    <div>
      <h1>Nos produits</h1>
      <h2>Produit {id}</h2>
    </div>
  )
}

export default Products
