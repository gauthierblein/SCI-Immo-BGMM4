import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Header from "../../components/Header"
import Loader from "../../components/Loader/loader"
import Error404 from '../Error404'
import './product.css'

import Footer from "../../components/Footer"

function Product () {
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 1000);
    }, []);

  const params = useParams()
  const id = params.Id
  const [product, setProduct] = useState('');

  const PF = "http://localhost:4000/uploads/";

  useEffect(() => {
      
      axios.get(`http://localhost:4000/products/${id}`)
      .then((response) => {setProduct(response.data); });
  }, []);
  
  console.log(product)

  if (loading)  return (<Loader />);

  if (!product) return (<Error404 />)

  else 
  return (
    <>
      <Header />
      <div className='product-container'>
        <div className='product-infos'>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <h3>{product.location}</h3>
          <h3>{product.description}</h3>
        </div>

        <div className='product-img'>
          <img src={PF + product.cover} className="product-pic" alt='' />
          <div className="thumb__overlay"></div>
        </div>

      </div>
      <Footer />
    </>
  )
  


}

export default Product
