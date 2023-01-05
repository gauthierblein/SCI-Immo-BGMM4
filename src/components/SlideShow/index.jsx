import { useParams } from 'react-router-dom'
import data from '../../data.json'
import './slideShow.css'
import chevron from '../../assets/img/Chevron.png'


function SlideShow() {
    const id = useParams('/products=')
    const listProducts = Object.values(data)
    const product = listProducts.find((product) => product.id === id.Id);
    const productPictures = (product.pictures)
    console.log(productPictures)

    if (productPictures.length === 1) {
    return (
        <div className='slideShow__container'>
            <img className='slider__img'src={product.pictures[0]} alt="imageSlider"/>

        </div>
    )} else {
    return (
        
            <div className='slideShow__container'>
                <img className='slider__img'src={product.pictures[0]} alt="imageSlider"/>
                <div className='chevronContainer'>
                    <img
                src={chevron}
                
                className="chevronPrev"
                alt="chevron-previous"
                    />
                    <img
                src={chevron}
                
                className="chevronNext"
                alt="chevron-previous"
                    />
                </div>
            </div>
               
        )
    }
}

export default SlideShow